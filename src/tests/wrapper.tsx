import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { CacheProvider } from 'providers/cache-provider'

export const history = createMemoryHistory()

export const wrapper = ({ children }) => (
  <CacheProvider>
    <Router history={history}>{children}</Router>
  </CacheProvider>
)
