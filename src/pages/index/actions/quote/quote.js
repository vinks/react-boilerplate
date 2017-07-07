import { createAction } from 'redux-act'
import fetch from 'utils/fetch/fetch'

export const fetchQuoteRequest = createAction(
  'fetch quote request'
)

export const fetchQuoteSuccess = createAction(
  'fetch quote success',
  data => data.quote,
  () => ({
    receivedAt: Date.now()
  })
)

export const fetchQuoteFailure = createAction(
  'fetch quote failure',
  error => error.message
)

export function fetchQuote() {
  return dispatch => {
    dispatch(fetchQuoteRequest())

    return fetch(`${process.env.API_ENDPOINT}/quote`).then(
      data => dispatch(fetchQuoteSuccess(data)),
      error => dispatch(fetchQuoteFailure(error))
    )
  }
}

function shouldFetchQuote(state) {
  const quote = state.quote

  return !(quote.value || quote.isFetching)
}

export function fetchQuoteIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchQuote(getState())) {
      return dispatch(fetchQuote())
    }
  }
}
