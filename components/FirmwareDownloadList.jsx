import DEVICES from '../lib/kobo/devices.json'

import DeviceCard from './DeviceCard.jsx'

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