interface IUseCache {
  invalidate: (key: string) => void
  getCache: (key: string) => any
}
