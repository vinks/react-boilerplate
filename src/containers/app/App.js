import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Link } from 'react-router'

// Styles
import styles from 'containers/app/App.css'

const DEFAULT_TITLE = 'React Boilerplate'

function App({ children }) {
  return (
    <div className={styles.root}>
      <Helmet
        titleTemplate={`%s | ${DEFAULT_TITLE}`}
        defaultTitle={DEFAULT_TITLE}
      />
      <div className={styles.logo}>
        <Link to="/" title="Home" className={styles.logoContent}>
          { 'React Boilerplate' }
        </Link>
      </div>
      { children }
    </div>
  )
}

App.propTypes = {
  children: PropTypes.node
}

export default App
