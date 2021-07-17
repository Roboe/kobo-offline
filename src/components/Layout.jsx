import PropTypes from 'prop-types'

import Heading from './Heading.jsx'

const Layout = ({ children }) => {
  return (
    <div className="kobo-app">
      <header className="app-header">
        <div className="app-header--content">
          <Heading level={1} className="app-header--title">
            Kobo Offline
          </Heading>
        </div>
      </header>
      <main className="app-main">{children}</main>
      <footer className="app-footer">
        <span className="app-footer--credits">
          Made by{' '}
          <a
            href="http://virgulilla.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            @RoboePi
          </a>{' '}
          <span className="emoji" role="img" aria-label="Owl">
            🦉
          </span>
        </span>
        <span className="app-footer--license">
          <a
            href="https://gitlab.com/Roboe/kobo-offline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source
          </a>{' '}
          (GPLv3)
        </span>
      </footer>
    </div>
  )
}
Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout
