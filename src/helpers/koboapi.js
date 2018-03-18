import AFFILIATES from '../constants/affiliates.js'
import corsFetch from './crossorigin.js'

export const checkUpdateEndpoint = (deviceId, affiliate, currentFwVersion = '0.0', serialNumber = 'N') =>
  `https://api.kobobooks.com/1.0/UpgradeCheck/Device/${deviceId}/${affiliate}/${currentFwVersion}/${serialNumber}`

export function queryUpdates(deviceId, affiliate) {
  return corsFetch(checkUpdateEndpoint(deviceId, affiliate))
    .then((response) => response.json())
}

export function queryUpdatesForAllAffiliates(deviceId) {
  return AFFILIATES
    .map((affiliate) => ({
      affiliate,
      promise: queryUpdates(deviceId),
    }))
}
