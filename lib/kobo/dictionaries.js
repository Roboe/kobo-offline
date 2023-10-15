export const DICTIONARY_TYPE_LEXICON = 'definition'
export const DICTIONARY_TYPE_TRANSLATION = 'translation'

// NOTE Language codes and names according to ISO 639-1
const LANGUAGE_LABELS_BY_LANGUAGE = {
  en: {
    ca: 'Catalan',
    en: 'English',
    de: 'German',
    es: 'Spanish',
    fr: 'French',
    ja: 'Japanese',
    it: 'Italian',
    nl: 'Dutch',
    pt: 'Portuguese',
    sv: 'Swedish',
    tr: 'Turkish',
    'zh-CN': 'Chinese',
    'zh-TW': 'Taiwanese',
  },
  es: {
    ca: 'catalán',
    en: 'inglés',
    de: 'alemán',
    es: 'español',
    fr: 'francés',
    it: 'italiano',
    ja: 'japonés',
    nl: 'holandés',
    pt: 'portugués',
    sv: 'sueco',
    tr: 'turco',
    'zh-CN': 'chino',
    'zh-TW': 'taiwanés',
  },
}

export const labelDictionary =
  (language = 'en') =>
  (dictionary) => {
    const { sourceLanguageCode, targetLanguageCode = null } = dictionary
    const languageLabels = LANGUAGE_LABELS_BY_LANGUAGE[language]

    const originLabel = languageLabels[sourceLanguageCode]
    const targetLabel = targetLanguageCode
      ? languageLabels[targetLanguageCode]
      : undefined

    return targetLabel ? [originLabel, targetLabel].join('-') : originLabel
  }

export const composeDictionaryId = (dictionary) =>
  dictionary.type === DICTIONARY_TYPE_TRANSLATION
    ? [dictionary.sourceLanguageCode, dictionary.targetLanguageCode].join('-')
    : dictionary.sourceLanguageCode
