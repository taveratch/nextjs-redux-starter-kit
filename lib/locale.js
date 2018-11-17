import session from 'lib/auth/session'
const KEY = 'locale'
const DEFAULT_LOCALE = 'th'
const SUPPORTED_LOCALES = ['en', 'th']

class Locale {
  get(ctx) {
    const locale = session.getCookie(KEY, ctx)
    if (locale) return locale
    return DEFAULT_LOCALE
  }

  set(locale) {
    if (SUPPORTED_LOCALES.indexOf(locale) >= 0)
      session.setCookie(KEY, locale)
    else
      console.error(locale + ' locale is not supported')
  }
}

const locale = new Locale()

export default locale