import { useCallback, useEffect, useState } from 'react'

export const useFetch = ({ service }: IUseService): IUseServieOutput => {
  const [state, setState] = useState({
    data: undefined,
    cache: undefined,
    error: undefined,
    loading: false,
    fetching: false,
  })

  const fetcher = useCallback(async (cached?: boolean) => {
    if (cached)
      setState((prev) => ({
        ...prev,
        fetching: true,
      }))
    else
      setState((prev) => ({
        ...prev,
        loading: true,
      }))
    try {
      const data = await service()
      setState((prev) => ({
        ...prev,
        data,
        cache: prev.data,
        loading: false,
        fetching: false,
        error: undefined,
      }))
    } catch (error) {
      setState((prev) => ({
        ...prev,
        error,
        loading: false,
        fetching: false,
      }))
    }
  }, [])

  useEffect(() => {
    fetcher()
  }, [])

  return {
    ...state,
    refetch: () => fetcher(true),
  }
}
