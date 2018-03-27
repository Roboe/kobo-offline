import React from 'react'

import DEFAULT_AFFILIATE from '../constants/affiliates.js'

export default class DeviceCard extends React.Component {
  componentDidMount() {
    const { fetchUpdateForAffiliate } = this.props

    fetchUpdateForAffiliate(DEFAULT_AFFILIATE)
  }

  isLatestUpdateFetched() {
    const { updates } = this.props
    return !!updates && DEFAULT_AFFILIATE in updates
  }

  renderActions({ downloadUrl, releaseNotesUrl }) {
    return (
      <div className="kb-device-card--action-list">
        { downloadUrl && <a href={ downloadUrl }>Download</a> }
        { releaseNotesUrl && <a href={ releaseNotesUrl }>Release notes</a> }
      </div>
    )
  }

  render() {
    const { model, hardware, updates } = this.props
    const modelWithoutVendor = model.replace('Kobo', '').trim()

    return (
      <li class="kb-firmware-download-list--item">
        <article className="kb-device-card">
          <header>
            <span class="kb-device-card--title">{ modelWithoutVendor }</span>
            <span>{ hardware }</span>
          </header>

          { this.isLatestUpdateFetched(updates) && this.renderActions(updates[DEFAULT_AFFILIATE]) }
        </article>
      </li>
    );
  }
}
