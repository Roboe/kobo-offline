import {
  getLangName,
  getDictionaryDownloadUrl,
} from '../lib/kobo/dictionaries.js'

const isSingleCodeLang = (langCodeOrCodePair) => langCodeOrCodePair.length === 2

function langCodeOrCodePairToLabel(langCodeOrCodePair, language = 'en') {
  const NON_BREAKABLE_HYPHEN = '\u2011'

  if (isSingleCodeLang(langCodeOrCodePair)) {
    return getLangName(language)(langCodeOrCodePair)
  } else {
    return langCodeOrCodePair
      .split('-')
      .map(getLangName(language))
      .join(NON_BREAKABLE_HYPHEN)
  }
}

const DictionaryCard = ({ languageCode, dictionaryLangCodeOrCodePair }) => (
  <article
    className={`card downloads-list--item ${
      isSingleCodeLang(dictionaryLangCodeOrCodePair)
        ? 'downloads-list--item_break'
        : ''
    }`}
  >
    <a href={getDictionaryDownloadUrl(dictionaryLangCodeOrCodePair)}>
      {langCodeOrCodePairToLabel(dictionaryLangCodeOrCodePair)}
    </a>
  </article>
)

export default DictionaryCard
