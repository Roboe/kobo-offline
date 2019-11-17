import React from 'react'
import DictionaryCard from './DictionaryCard.js'

import DICTIONARIES from '../constants/dictionaries.js'

export default () => (
  <div className="downloads-list dictionary-list">
    {
      Object.entries(DICTIONARIES)
        .flatMap(([language, dictionaries]) => {
          return dictionaries.map((dictionary) => [language, dictionary])
        })
        .map(([language, dictionaryLangCodeOrCodePair]) => (
          <DictionaryCard
            key={ `dictionary-card-${ dictionaryLangCodeOrCodePair }` }
            languageCode={ language }
            dictionaryLangCodeOrCodePair={ dictionaryLangCodeOrCodePair }
          />
        ))
    }
  </div>
)
