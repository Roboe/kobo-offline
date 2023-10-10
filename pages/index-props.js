import DEVICES from '../lib/kobo/devices.js'
import DEFAULT_AFFILIATE from '../lib/kobo/affiliates.js'
import { fetchLatestUpdate } from '../lib/kobo/api.js'

const processHomeProps = async () => {
  const allDevicesUpdatePromises = DEVICES.map((device) =>
    fetchLatestUpdate(device.id, DEFAULT_AFFILIATE).then((latestUpdate) => [
      device.id,
      { [DEFAULT_AFFILIATE]: latestUpdate },
    ])
  )

  return {
    updatesByDeviceId: Object.fromEntries(
      await Promise.all(allDevicesUpdatePromises)
    ),
    lastCheckedUTCDate: new Date().toUTCString(),
  }
}

export default processHomeProps
