import { lazy, memo, Suspense } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Skeleton } from 'components/skeleton'

export const Router = memo((): JSX.Element => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Skeleton />}>
        <Switch>
          <Route exact path="/" component={lazy(() => import('pages'))} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  )
})
