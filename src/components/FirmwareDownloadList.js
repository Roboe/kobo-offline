import React from 'react'
import DeviceCard from './DeviceCard.js'

import { fetchLatestUpdate } from '../helpers/koboapi.js'
import DEVICES from '../constants/devices.js'

export default class FirmwareDownloadList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      updates: []
    }
  }

  fetchUpdatesFor = (deviceId) => (affiliate) => {
    fetchLatestUpdate(deviceId, affiliate)
      .then((latestUpdate) => {
        this.setState((prevState) => {
          const newUpdates = { ...prevState[deviceId] }

          newUpdates[affiliate] = latestUpdate

          return {
            updates: {
              ...prevState.updates,
              [deviceId]: newUpdates,
            }
          }
        })
      })
  }

  render() {
    const { updates } = this.state

    return (
      <ul className="firmware-download-list">
        { DEVICES.map((device, index) =>
          <DeviceCard
            key={ `device-card-${index}` }
            { ...device }
            updates={ updates[device.id] }
            fetchUpdateForAffiliate={ this.fetchUpdatesFor(device.id) }
          />) }
      </ul>
    )
  }
}
