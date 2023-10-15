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
  const dictionaryLabel = preventBreakingAtHyphens(
    labelDictionary()(dictionary)
  )
  return (
    <tr>
      <th className="is-vcentered">{dictionaryLabel}</th>
      <td className="is-vcentered">
        <span className="tags has-addons">
          <span className="tag is-primary has-text-white">
            {dictionary.sourceLanguageCode}
          </span>
          {dictionary.targetLanguageCode ? (
            <span className="tag is-dark">{dictionary.targetLanguageCode}</span>
          ) : null}
        </span>
      </td>
      <td className="is-vcentered has-text-right">
        <a
          href={selectDictionaryDownloadUrl(dictionary)}
          className="button is-primary is-outlined"
        >
          Download
        </a>
      </td>
    </tr>
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
