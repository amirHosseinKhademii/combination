import { Card } from 'components/card'
import { CardBody } from 'components/card-body'
import { CardImage } from 'components/card-image'
import { Button } from 'components/button'
import { Input } from 'components/input'
import { useUser } from './use-user'

const View = (): JSX.Element => {
  const { data, loading, fetching, isNew, refetch } = useUser()

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
          isNew={isNew.country}
          value={data?.results[0].location.country}
          label="Country"
        />
        <Button onClick={() => refetch()} fetching={fetching}>
          New user
        </Button>
      </CardBody>
    </Card>
  )
}

export default View
