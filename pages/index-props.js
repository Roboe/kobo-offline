import DEFAULT_AFFILIATE from '../lib/kobo/affiliates.js'
import { fetchLatestUpdate } from '../lib/kobo/api.js'

const processHomeProps = async (devices, dictionaries) => {
  const allDevicesUpdatePromises = devices.map((device) =>
    fetchLatestUpdate(device.id, DEFAULT_AFFILIATE).then((latestUpdate) => [
      device.id,
      { [DEFAULT_AFFILIATE]: latestUpdate },
    ])
  )

  return {
    dictionaries: dictionaries,
    devices: devices,
    updatesByDeviceId: Object.fromEntries(
      await Promise.all(allDevicesUpdatePromises)
    ),
    lastCheckedUTCDate: new Date().toUTCString(),
  }
}

export default processHomeProps
