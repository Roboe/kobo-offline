import PropTypes from 'prop-types'

const Layout = ({ children }) => {
  return (
    <div className="container">
      <header className="navbar is-dark">
        <div className="navbar-brand">
          <h1 className="navbar-item title has-text-right">
            Kobo&nbsp;<span className="has-text-primary">Offline</span>
          </h1>
        </div>
      </header>
      <main className="box has-background-light">{children}</main>
      <footer className="footer has-text-centered">
        <div className="level">
          <div className="level-item">
            <p>
              Made by{' '}
              <a
                href="http://virgulilla.com"
                target="_blank"
                rel="noopener noreferrer"
                className="has-text-primary"
              >
                @RoboePi
              </a>{' '}
              🦉
            </p>
          </div>
          <div className="level-item">
            <p>
              ⌨️{' '}
              <a
                href="https://gitlab.com/Roboe/kobo-offline"
                target="_blank"
                rel="noopener noreferrer"
                className="has-text-primary"
              >
                Source code
              </a>{' '}
              (GPLv3)
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout
