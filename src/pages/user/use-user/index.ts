import { useFetch } from 'hooks/use-fetch'
import { useMemo } from 'react'
import { getUser as service } from 'services/placeholder'

export const useUser = () => {
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

  return {
    data,
    cache,
    loading,
    fetching,
    refetch,
    isNew,
  }
}
