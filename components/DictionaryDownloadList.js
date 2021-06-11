import DICTIONARIES from '../constants/dictionaries.js'

import DictionaryCard from './DictionaryCard.js'

export default () => (
  <div className="downloads-list dictionary-list">
    {DICTIONARIES.map(({ language, langCodeOrCodePair }) => (
      <DictionaryCard
        key={`dictionary-card-${langCodeOrCodePair}`}
        languageCode={language}
        dictionaryLangCodeOrCodePair={langCodeOrCodePair}
      />
    ))}
  </div>
)
