import PropTypes from 'prop-types'

import DEFAULT_AFFILIATE from '../lib/kobo/affiliates.js'

const DeviceCard = ({ device, updates }) => {
  const { model, hardware } = device

  const modelWithoutVendor = model.replace('Kobo', '').trim()
  const { downloadUrl, releaseNotesUrl } = updates[DEFAULT_AFFILIATE]
  return (
    <li className="downloads-list--item">
      <article className="card">
        <header>
          <span className="card--title">{modelWithoutVendor}</span>
          <span>{hardware}</span>
        </header>
        <div className="card--action-list">
          {downloadUrl && <a href={downloadUrl}>Download</a>}
          {releaseNotesUrl && <a href={releaseNotesUrl}>Release notes</a>}
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
