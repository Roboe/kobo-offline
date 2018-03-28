export default {
  'en': [ 'en' ],
  'de': [ 'de', 'de-en', 'en-de' ],
  'es': [ 'es', 'es-en', 'en-es' ],
  'fr': [ 'fr', 'fr-en', 'en-fr' ],
  'it': [ 'it', 'it-en', 'en-it' ],
  'nl': [ 'nl' ],
  'jp': [ 'jp', 'en-jp' ],
  'pt': [ 'pt', 'pt-en', 'en-pt' ],
}

const LANGUAGE_NAMES = {
  'en': {
    'en': 'English',
    'de': 'German',
    'es': 'Spanish',
    'fr': 'French',
    'it': 'Italian',
    'nl': 'Dutch',
    'jp': 'Japanese',
    'pt': 'Portuguese',
  },
  'es': {
    'en': 'inglés',
    'de': 'alemán',
    'es': 'español',
    'fr': 'francés',
    'it': 'italiano',
    'nl': 'holandés',
    'jp': 'japonés',
    'pt': 'portugués',
  },
}

export const getLangName = (language = 'en') => (langCode) => LANGUAGE_NAMES[language][langCode]
