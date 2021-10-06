interface IUseService {
  service: Function
  onSuccess?: Function
}

interface IUseServiceState {
  data: any
  loading: boolean
  error: any
}

interface IUseServieOutput {
  data: any
  error: any
  loading: boolean
  fetching?: boolean
  cache?: any
  refetch?: Function
}
