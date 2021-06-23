import DICTIONARIES from '../lib/kobo/dictionaries.js'

import DictionaryCard from './DictionaryCard.jsx'

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