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

export default DeviceCard
