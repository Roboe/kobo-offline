const DICTIONARIES_BY_LANGUAGE = {
  en: ['en'],
  de: ['de', 'de-en', 'en-de'],
  es: ['es', 'es-en', 'en-es'],
  fr: ['fr', 'fr-en', 'en-fr'],
  it: ['it', 'it-en', 'en-it'],
  nl: ['nl'],
  jp: ['jp', 'en-jp'],
  pt: ['pt', 'pt-en', 'en-pt'],
}

export default Object.entries(DICTIONARIES_BY_LANGUAGE).flatMap(
  ([language, dictionaries]) => {
    return dictionaries.map((langCodeOrCodePair) => ({
      language,
      langCodeOrCodePair,
    }))
  }
)

export const getDictionaryDownloadUrl = (langCodeOrCodePair) =>
  langCodeOrCodePair !== 'en'
    ? `http://download.kobobooks.com/ereader/dictionaries/dicthtml-${langCodeOrCodePair}.zip`
    : 'http://download.kobobooks.com/ereader/dictionaries/dicthtml.zip'
