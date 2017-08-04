import React from 'react'
import { connect } from 'react-redux'

import {
  changeLocale
} from 'actions/locale'

function Locale(props) {
  return (
    <div>
      <button onClick={() => props.dispatch(changeLocale('ru'))}>RU</button>
      <button onClick={() => props.dispatch(changeLocale('en'))}>EN</button>
    </div>
  )
}

export default connect()(Locale)
