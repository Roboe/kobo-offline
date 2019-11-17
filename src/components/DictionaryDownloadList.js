import React from 'react'
import DictionaryCard from './DictionaryCard.js'

import DICTIONARIES from '../constants/dictionaries.js'

export default () => (
  <div className="downloads-list dictionary-list">
    {
      DICTIONARIES
        .map(({language, langCodeOrCodePair}) => (
          <DictionaryCard
            key={ `dictionary-card-${ langCodeOrCodePair }` }
            languageCode={ language }
            dictionaryLangCodeOrCodePair={ langCodeOrCodePair }
          />
        ))
    }
  </div>
)
