import { Button } from 'components/button'
import { Card } from 'components/card'
import { useMemo } from 'react'
import { useFetch } from 'hooks/use-fetch'
import { CardBody } from 'components/card-body'
import { CardImage } from 'components/card-image'
import { Input } from 'components/input'

import { getUser as service } from 'services/placeholder'

const View = () => {
  const { data, loading, fetching, cache, refetch } = useFetch({
    service,
  })

  const isNew = useMemo(
    () => ({
      first:
        data &&
        cache &&
        data.results[0].name.first !== cache.results[0].name.first,
      last:
        data &&
        cache &&
        data.results[0].name.last !== cache.results[0].name.last,
      email: data && cache && data.results[0].email !== cache.results[0].email,
      img:
        data &&
        cache &&
        data.results[0].picture.large !== cache.results[0].picture.large,
    }),
    [data, cache]
  )

  return (
    <Card>
      <CardImage
        loading={loading}
        fetching={fetching}
        isNew={isNew.img}
        src={data?.results[0].picture.large}
      />
      <CardBody>
        <Input
          loading={loading}
          fetching={fetching}
          isNew={isNew.first}
          value={data?.results[0].name.first}
          label="First name"
        />
        <Input
          loading={loading}
          fetching={fetching}
          isNew={isNew.last}
          value={data?.results[0].name.last}
          label="Last name"
        />
        <Input
          loading={loading}
          fetching={fetching}
          isNew={isNew.email}
          value={data?.results[0].email}
          label="Email"
        />
        <Button onClick={() => refetch()} fetching={fetching}>
          New user
        </Button>
      </CardBody>
    </Card>
  )
}

export default View
