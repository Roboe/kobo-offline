#! /usr/bin/env node

import * as fs from 'node:fs'
import * as fsp from 'node:fs/promises'
import * as path from 'node:path'
import { Readable } from 'node:stream'
import * as streamp from 'node:stream/promises'

const DICTIONARIES_DATA_PATH = path.resolve('./data/kobo/dictionaries.json')
const CACHE_BASE_PATH = path.resolve('./.cache')

const readDictionariesFile = async (path) => {
  const file = await fsp.readFile(path, { encoding: 'utf-8' })

  return JSON.parse(file)
}

const writeDictionaryToDisk = (readableStream, writePath) => {
  fs.mkdirSync(path.dirname(writePath), { recursive: true })

  const readable = Readable.fromWeb(readableStream)
  const writeStream = fs.createWriteStream(writePath)

  readable.pipe(writeStream)
  return streamp.finished(readable)
}

const downloadDictionary = async (downloadUrl, directory) => {
  const response = await fetch(downloadUrl)
  if (!response.ok) throw new Error(response.statusText)

  const fileName = response.url.split('/').at(-1)
  const downloadPath = path.join(directory, fileName)
  await writeDictionaryToDisk(response.body, downloadPath)

  return downloadPath
}

// Main
// NOTE This downloads sequentially and does not retry on failures, 🤷
const dictionaries = await readDictionariesFile(DICTIONARIES_DATA_PATH)
for (const dictionary of dictionaries) {
  for (const downloadEntry of Object.entries(dictionary.downloads)) {
    const [version, url] = downloadEntry
    const directory = path.join(CACHE_BASE_PATH, `/dict-${version}`)

    await downloadDictionary(url, directory)
      .then((filePath) => {
        console.log('Written file:', filePath)
      })
      .catch((error) => {
        console.error('Download failed:', error)
        console.log(
          'You migth try manually with:\n  ',
          `wget -P ${directory} ${url}`
        )
      })
  }
}
