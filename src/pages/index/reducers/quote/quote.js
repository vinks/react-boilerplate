import { createReducer } from 'redux-act'

import {
  fetchQuoteRequest,
  fetchQuoteSuccess,
  fetchQuoteFailure
} from 'pages/index/actions/quote/quote'

const DEFAULT_STATE = {
  isFetching: false,
  error: false,
  lastUpdated: 0,
  value: ''
}

const quoteReducer = createReducer({
  [fetchQuoteRequest]: state => ({
    ...state,
    isFetching: true,
    error: false
  }),

  [fetchQuoteSuccess]: (state, payload) => ({
    ...state,
    isFetching: false,
    value: payload
  }),

  [fetchQuoteFailure]: (state, payload) => ({
    ...state,
    isFetching: false,
    error: payload
  })
}, DEFAULT_STATE)

export default quoteReducer
