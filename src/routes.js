import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'

import App from 'containers/app/App'
import NotFound from 'components/notfound/NotFound'

// Pages
import IndexLoadable from 'components/index/IndexLoadable'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={IndexLoadable} />

    // Misc routes
    <Redirect from="foo" to="/" />
    <Route path="*" component={NotFound} />
  </Route>
)

export { NotFound as NotFoundComponent }
