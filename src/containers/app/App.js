import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Link } from 'react-router'
import { LionessProvider, T } from 'lioness'

// Styles
import styles from 'containers/app/App.css'

// Locales
import ru from '../../../locales/ru.po'
const messages = { ru }

const DEFAULT_TITLE = 'React Boilerplate'

function App({ children }) {
  return (
    <LionessProvider messages={messages} locale="ru">
      <div className={styles.root}>
        <Helmet
          titleTemplate={`%s | ${DEFAULT_TITLE}`}
          defaultTitle={DEFAULT_TITLE}
        />

        <h1 className={styles.h1}>
          <T
            message="Dear {{ name }}, there is one potato left"
            messagePlural="Dear {{ name }}, there are {{ count }} potatoes left"
            count={1}
            name={'User'}
          />
        </h1>

        <div className={styles.link}>
          <T
            message="By more potatoes {{ link:here }}!"
            link={<a href="http://potatoes.com/buy" />}
          />
        </div>

        <div className={styles.logo}>
          <Link to="/" title="Home" className={styles.logoContent}>
            { 'React Boilerplate' }
          </Link>
        </div>
        { children }
      </div>
    </LionessProvider>
  )
}

App.propTypes = {
  children: PropTypes.node
}

export default App
