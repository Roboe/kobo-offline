import { useRouter } from 'next/router'

const useTranslations = (messages) => {
  const { locale, locales, defaultLocale } = useRouter()

  return messages[locale] ?? messages[defaultLocale]
}

export default useTranslations
