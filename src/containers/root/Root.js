import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import getRoutes from 'routes'
import { Router } from 'react-router'

function Root({ store, history }) {
  const routes = getRoutes(store)

  return (
    <Provider store={store}>
      <Router history={history} routes={routes} />
    </Provider>
  )
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

export default Root
