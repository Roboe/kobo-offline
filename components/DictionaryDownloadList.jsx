import DICTIONARIES, { composeDictionaryId } from '../lib/kobo/dictionaries.js'

import DictionaryCard from './DictionaryCard.jsx'

const DictionaryDownloadList = () => (
  <div className="downloads-list dictionary-list">
    {DICTIONARIES.map((dictionary) => {
      const dictionaryKey = `dictionary-card-${composeDictionaryId(dictionary)}`
      return <DictionaryCard key={dictionaryKey} dictionary={dictionary} />
    })}
  </div>
)
DictionaryDownloadList.propTypes = {}

export default DictionaryDownloadList
