import { AFFILIATES } from './affiliates.js'

export const getDictionaryDownloadUrl = (langCodeOrCodePair) =>
  langCodeOrCodePair !== 'en'
    ? `http://download.kobobooks.com/ereader/dictionaries/dicthtml-${langCodeOrCodePair}.zip`
    : 'http://download.kobobooks.com/ereader/dictionaries/dicthtml.zip'

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
    .then((json) => ({
      data: json.Data,
      type: json.UpgradeType,
      downloadUrl: json.UpgradeURL,
      releaseNotesUrl: json.ReleaseNoteURL,
    }))
}

export function fetchLatestUpdateForAllAffiliates(deviceId) {
  return AFFILIATES.map((affiliate) => ({
    affiliate,
    promise: fetchLatestUpdate(deviceId),
  }))
}
