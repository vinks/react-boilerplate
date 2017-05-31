import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'
import { routerActions } from 'react-router-redux'
import { UserAuthWrapper } from 'redux-auth-wrapper'

import App from 'containers/app/App'
import NotFound from 'pages/notfound/NotFound'

// Pages
import IndexLoadable from 'pages/index/IndexLoadable'

const userIsAuthenticated = UserAuthWrapper({ // eslint-disable-line
  authSelector: state => state.user,
  redirectAction: routerActions.replace,
  wrapperDisplayName: 'UserIsAuthenticated'
})

const Baz = () => (
  <h1>Baz</h1>
)

const Login = () => (
  <h1>Login</h1>
)

const getRoutes = store => {
  const connect = fn => (nextState, replaceState) => fn(store, nextState, replaceState)

  return (
    <Route path="/" component={App}>
      <IndexRoute component={IndexLoadable} />
      <Route path="login" component={Login} />

      // User private routes
      <Route
        path="baz"
        component={userIsAuthenticated(Baz)}
        onEnter={connect(userIsAuthenticated.onEnter)}
      />

      // Misc routes
      <Redirect from="foo" to="/" />
      <Route path="*" component={NotFound} />
    </Route>
  )
}

export default getRoutes

export { NotFound as NotFoundComponent }
