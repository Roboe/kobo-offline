import React from 'react'
import DictionaryCard from './DictionaryCard.js'

import DICTIONARIES from '../constants/dictionaries.js'

export default () => (
  <div className="downloads-list dictionary-list">
    {
      Object.keys(DICTIONARIES).reduce(
        (componentsToRender, currentLang) => {
          DICTIONARIES[currentLang]
            .forEach((dictionaryLangCodeOrCodePair) => {
              componentsToRender.push(
                <DictionaryCard
                  key={ `dictionary-card-${ dictionaryLangCodeOrCodePair }` }
                  languageCode={ currentLang }
                  dictionaryLangCodeOrCodePair={ dictionaryLangCodeOrCodePair }
                />
              )
            })
          return componentsToRender
        },
        []
      )
    }
  </div>
)
