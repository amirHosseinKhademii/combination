import { lazy, memo, Suspense } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Skeleton } from 'components/skeleton'
import { Layout } from 'layouts'

export const Router = memo((): JSX.Element => {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<Skeleton />}>
          <Switch>
            <Route
              exact
              path="/"
              component={lazy(() => import('pages/user'))}
            />
          </Switch>
        </Suspense>
      </Layout>
    </BrowserRouter>
  )
})
