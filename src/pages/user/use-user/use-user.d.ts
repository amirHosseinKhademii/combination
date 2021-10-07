interface IUseUserOutput {
  data: any
  cache: any
  loading?: boolean
  fetching?: boolean
  refetch: Function
  isNew: {
    first: boolean
    last: boolean
    country: boolean
    img: boolean
  }
}
