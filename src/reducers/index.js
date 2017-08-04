import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import locale from 'reducers/locale'
import quote from 'pages/index/reducers/quote/quote'

const rootReducer = combineReducers({
  quote,
  locale,
  routing: routerReducer
})

export default rootReducer
