import PropTypes from 'prop-types'

import { composeDictionaryId } from '../lib/kobo/dictionaries.js'

import DictionaryCard from './DictionaryCard.jsx'

const DictionaryDownloadList = ({ dictionaries }) => (
  <table className="table is-fullwidth has-background-light">
    <thead>
      <th>Language</th>
      <th>Code</th>
      <th className="has-text-right">Links</th>
    </thead>
    <tbody>
      {dictionaries.map((dictionary) => {
        const dictionaryKey = `dictionary-card-${composeDictionaryId(
          dictionary
        )}`
        return <DictionaryCard key={dictionaryKey} dictionary={dictionary} />
      })}
    </tbody>
  </table>
)

DictionaryDownloadList.propTypes = {
  dictionaries: PropTypes.arrayOf(DictionaryCard.propTypes.dictionary)
    .isRequired,
}

export default DictionaryDownloadList
