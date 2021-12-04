import PropTypes from 'prop-types'
import {
  DICTIONARY_TYPE_LEXICON,
  DICTIONARY_TYPE_TRANSLATION,
  labelDictionary,
} from '../lib/kobo/dictionaries.js'

function preventBreakingAtHyphens(label) {
  const nonBreakableHyphen = '\u2011'
  return label.replace('-', nonBreakableHyphen)
}

function selectDictionaryDownloadUrl(dictionary) {
  return dictionary.downloads.v3 ?? dictionary.downloads.v1 ?? null
}

const DictionaryCard = ({ dictionary }) => {
  const shouldBreakANewRow = dictionary.type === DICTIONARY_TYPE_LEXICON
  const dictionaryLabel = preventBreakingAtHyphens(
    labelDictionary()(dictionary)
  )
  return (
    <article
      className={`card downloads-list--item ${
        shouldBreakANewRow ? 'downloads-list--item_break' : ''
      }`}
    >
      <a href={selectDictionaryDownloadUrl(dictionary)}>{dictionaryLabel}</a>
    </article>
  )
}
DictionaryCard.propTypes = {
  dictionary: PropTypes.shape({
    type: PropTypes.oneOf([
      DICTIONARY_TYPE_LEXICON,
      DICTIONARY_TYPE_TRANSLATION,
    ]).isRequired,
    sourceLanguageCode: PropTypes.string.isRequired,
    targetLanguageCode: PropTypes.string,
    downloads: PropTypes.shape({
      v1: PropTypes.string,
      v3: PropTypes.string,
    }).isRequired,
  }),
}

export default DictionaryCard
