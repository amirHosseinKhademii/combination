interface IUseService {
  service: Function
  onSuccess?: Function
}

interface IUseServiceState {
  data: any
  cache: any
  error: any
  loading: boolean
  fetching: boolean
}

interface IUseServieOutput {
  data: any
  error: any
  loading: boolean
  fetching: boolean
  cache: any
  refetch?: Function
}
