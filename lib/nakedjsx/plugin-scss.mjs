import * as sass from 'sass'

export default async function ({ logging, register }) {
  const { log, warn, err, fatal } = logging

  register({
    type: 'asset',

    async importAsset(context, asset) {
      const processedSass = sass.compile(asset.file)

      return `export default ${JSON.stringify(processedSass.css)}`
    },
  })
}
