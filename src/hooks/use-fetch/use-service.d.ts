interface IUseService {
  service: Function
}

interface IUseServiceState<T> {
  data: T
  cache: T
  error: any
  loading: boolean
  fetching: boolean
}

interface IUseServieOutput<T> {
  data: T
  cache: T
  error: any
  loading: boolean
  fetching: boolean
  refetch?: () => void
}
