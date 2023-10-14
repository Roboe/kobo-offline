import PropTypes from 'prop-types'

import { composeDictionaryId } from '../lib/kobo/dictionaries.js'

import DictionaryCard from './DictionaryCard.jsx'

const DictionaryDownloadList = ({ dictionaries }) => (
  <div className="downloads-list dictionary-list">
    {dictionaries.map((dictionary) => {
      const dictionaryKey = `dictionary-card-${composeDictionaryId(dictionary)}`
      return <DictionaryCard key={dictionaryKey} dictionary={dictionary} />
    })}
  </div>
)

DictionaryDownloadList.propTypes = {
  dictionaries: PropTypes.arrayOf(DictionaryCard.propTypes.dictionary)
    .isRequired,
}

export default DictionaryDownloadList
