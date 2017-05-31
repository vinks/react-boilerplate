import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchQuoteIfNeeded } from 'pages/index/actions/quote/quote'

import Loader from 'components/lib/loader/Loader'
import Error from 'components/lib/error/Error'

// Styles
import styles from 'pages/index/Index.css'

export class Index extends Component {

  componentDidMount() {
    const { dispatch } = this.props

    Index.fetchData({ dispatch })
  }

  render() {
    const { isFetching, error, value } = this.props

    return (
      <div className={styles.root}>
        {isFetching && <Loader />}
        {error && <Error>{error}</Error>}
        {value && <p>{value}</p>}
      </div>
    )
  }
}

Index.fetchData = function({ dispatch }) {
  return dispatch(fetchQuoteIfNeeded())
}

Index.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,
  value: PropTypes.string
}

function mapStateToProps(state) {
  return { ...state.quote }
}

export default connect(mapStateToProps)(Index)