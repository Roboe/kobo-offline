import { i18n as i18nConfig } from '../../../static.config'

const useTranslations = (messages) => {
  const { locale, locales, defaultLocale } = i18nConfig

  return messages[locale] ?? messages[defaultLocale]
}

export default useTranslations
