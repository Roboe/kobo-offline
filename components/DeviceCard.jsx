import PropTypes from 'prop-types'

import DEFAULT_AFFILIATE from '../lib/kobo/affiliates.js'

const DeviceCard = ({ device, updates }) => {
  const { model, hardware } = device

  const modelWithoutVendor = model.replace('Kobo', '').trim()
  const { downloadUrl, releaseNotesUrl } = updates[DEFAULT_AFFILIATE]
  return (
    <li className="column is-half">
      <article className="card">
        <header className="card-header is-shadowless">
          <div className="card-header-title">
            <span className="title is-5">{modelWithoutVendor}</span>
          </div>
          <div className="card-header-icon">
            <span className="tag is-primary is-light">{hardware}</span>
          </div>
        </header>
        <div className="card-footer">
          {releaseNotesUrl && (
            <a className="card-footer-item" href={releaseNotesUrl}>
              Release notes
            </a>
          )}
          {downloadUrl && (
            <a className="card-footer-item is-primary" href={downloadUrl}>
              Download
            </a>
          )}
        </div>
      </article>
    </li>
  )
}
DeviceCard.propTypes = {
  device: PropTypes.shape({
    id: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    hardware: PropTypes.string.isRequired,
  }).isRequired,
  updates: PropTypes.shape({
    [DEFAULT_AFFILIATE]: PropTypes.shape({
      downloadUrl: PropTypes.string.isRequired,
      releaseNotesUrl: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}

export default DeviceCard
