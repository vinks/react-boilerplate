import { createReducer } from 'redux-act'

import {
  changeLocale
} from 'actions/locale'

const DEFAULT_STATE = {
  locale: 'ru'
}

const localeReducer = createReducer({
  [changeLocale]: (state, payload) => ({
    locale: payload
  })
}, DEFAULT_STATE)

export default localeReducer
