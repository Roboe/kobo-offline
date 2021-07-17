import PropTypes from 'prop-types'
import useTranslations from '../lib/i18n/useTranslations.js'
import { getDictionaryDownloadUrl } from '../lib/kobo/dictionaries.js'

const i18nMessages = {
  en: {
    language: {
      en: 'English',
      de: 'German',
      es: 'Spanish',
      fr: 'French',
      it: 'Italian',
      nl: 'Dutch',
      jp: 'Japanese',
      pt: 'Portuguese',
    },
  },
  es: {
    language: {
      en: 'inglés',
      de: 'alemán',
      es: 'español',
      fr: 'francés',
      it: 'italiano',
      nl: 'holandés',
      jp: 'japonés',
      pt: 'portugués',
    },
  },
}

const isSingleCodeLang = (langCodeOrCodePair) => langCodeOrCodePair.length === 2

const NON_BREAKABLE_HYPHEN = '\u2011'

const DictionaryCard = ({ dictionaryLangCodeOrCodePair }) => {
  const t = useTranslations(i18nMessages)

  const label = isSingleCodeLang(dictionaryLangCodeOrCodePair)
    ? t.language[dictionaryLangCodeOrCodePair]
    : dictionaryLangCodeOrCodePair
        .split('-')
        .map((lang) => t.language[lang])
        .join(NON_BREAKABLE_HYPHEN)
  return (
    <article
      className={`card downloads-list--item ${
        isSingleCodeLang(dictionaryLangCodeOrCodePair)
          ? 'downloads-list--item_break'
          : ''
      }`}
    >
      <a href={getDictionaryDownloadUrl(dictionaryLangCodeOrCodePair)}>
        {label}
      </a>
    </article>
  )
}
DictionaryCard.propTypes = {
  languageCode: PropTypes.string,
  dictionaryLangCodeOrCodePair: PropTypes.string.isRequired,
}

export default DictionaryCard
