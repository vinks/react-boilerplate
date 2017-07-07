/* eslint-env jest */

import reducer from './quote'
import {
  fetchQuoteRequest,
  fetchQuoteSuccess,
  fetchQuoteFailure
} from 'pages/index/actions/quote/quote'

describe('pages/index/reducers/quote/quote', () => {
  it('returns the initial state', () => {
    expect(reducer(void 0, {})).toEqual({
      isFetching: false,
      error: false,
      lastUpdated: 0,
      value: ''
    })
  })

  it('handles FETCH_QUOTE_REQUEST', () => {
    const action = {
      type: fetchQuoteRequest.getType()
    }
    const state = {
      isFetching: false,
      error: false,
      lastUpdated: 0,
      value: ''
    }

    expect(reducer(state, action)).toEqual({
      isFetching: true,
      error: false,
      lastUpdated: 0,
      value: ''
    })
  })

  it('handles FETCH_QUOTE_SUCCESS', () => {
    const action = {
      type: fetchQuoteSuccess.getType(),
      payload: 'A quote'
    }
    const state = {
      isFetching: true,
      error: false,
      lastUpdated: 0,
      value: ''
    }

    expect(reducer(state, action)).toEqual({
      isFetching: false,
      error: false,
      lastUpdated: 0,
      value: 'A quote'
    })
  })

  it('handles FETCH_QUOTE_FAILURE', () => {
    const action = {
      type: fetchQuoteFailure.getType(),
      payload: 'Error'
    }
    const state = {
      isFetching: true,
      error: false,
      lastUpdated: 0,
      value: ''
    }

    expect(reducer(state, action)).toEqual({
      isFetching: false,
      error: 'Error',
      lastUpdated: 0,
      value: ''
    })
  })
})
