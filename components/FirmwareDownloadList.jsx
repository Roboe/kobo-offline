import PropTypes from 'prop-types'

import DEVICES from '../lib/kobo/devices.js'

import DeviceCard from './DeviceCard.jsx'

const FirmwareDownloadList = ({ updatesByDeviceId }) => {
  return (
    <ul className="downloads-list device-list">
      {DEVICES.map((device) => (
        <DeviceCard
          key={device.id}
          device={device}
          updates={updatesByDeviceId[device.id]}
        />
      ))}
    </ul>
  )
}
FirmwareDownloadList.propTypes = {
  updatesByDeviceId: PropTypes.objectOf(DeviceCard.propTypes.updates),
}

export default FirmwareDownloadList
