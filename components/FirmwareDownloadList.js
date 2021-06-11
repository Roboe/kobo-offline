import DEVICES from '../constants/devices.js'

import DeviceCard from './DeviceCard.js'

export default ({ updatesByDeviceId }) => {
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
