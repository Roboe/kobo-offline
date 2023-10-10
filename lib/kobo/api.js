// HACK Native node.js Fetch API implementation differs greatly in headers and makes these requests fail
import fetch from 'node-fetch'
import { AFFILIATES } from './affiliates.js'

export const getCheckUpdateUrl = (
  deviceId,
  affiliate,
  currentFwVersion = '0.0',
  serialNumber = 'N'
) =>
  `https://api.kobobooks.com/1.0/UpgradeCheck/Device/${deviceId}/${affiliate}/${currentFwVersion}/${serialNumber}`

export function fetchLatestUpdate(deviceId, affiliate) {
  return fetch(getCheckUpdateUrl(deviceId, affiliate))
    .then((response) => response.json())
    .then((json) => {
      if ('Message' in json) {
        return {
          error: json.Message,
        }
      }

      return {
        data: json.Data,
        type: json.UpgradeType,
        downloadUrl: json.UpgradeURL,
        releaseNotesUrl: json.ReleaseNoteURL,
      }
    })
}

export function fetchLatestUpdateForAllAffiliates(deviceId) {
  return AFFILIATES.map((affiliate) => ({
    affiliate,
    promise: fetchLatestUpdate(deviceId),
  }))
}
