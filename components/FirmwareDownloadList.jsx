import PropTypes from 'prop-types'

import DeviceCard from './DeviceCard.jsx'

const FirmwareDownloadList = ({ devices, updatesByDeviceId }) => {
  return (
    <ul className="downloads-list device-list">
      {devices.map((device) => (
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
  devices: PropTypes.arrayOf(DeviceCard.propTypes.device).isRequired,
  updatesByDeviceId: PropTypes.objectOf(DeviceCard.propTypes.updates),
}

export default FirmwareDownloadList
