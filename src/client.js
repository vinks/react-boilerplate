import 'css-reset'
import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { AppContainer } from 'react-hot-loader'
import Root from 'containers/root/Root'
import configureStore from 'store/configureStore'

const initialState = window.__INITIAL_STATE__ || {}
const store = configureStore(initialState)
const history = syncHistoryWithStore(browserHistory, store)

const MOUNT_NODE = document.getElementById('root')

render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  MOUNT_NODE
)

if (module.hot) {
  module.hot.accept('containers/root/Root', () => {
    const NextRoot = require('containers/root/Root').default

    render(
      <AppContainer>
        <NextRoot store={store} history={history} />
      </AppContainer>,
      MOUNT_NODE
    )
  })
}
