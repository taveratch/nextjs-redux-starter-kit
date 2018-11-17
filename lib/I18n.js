import IntlMessageFormat from 'intl-messageformat'
import _ from 'lodash'
import localization from 'lib/locale'

const supportedLocales = ['en', 'th']

const mapping = (json, locale) => {
  return _.mapValues(json, (x) => x[locale] || "")
}

class I18n {

  constructor(ctx) {
    this.init(ctx)
  }

  init(ctx) {
    this.locale = localization.get(ctx)
    if (supportedLocales.indexOf(this.locale) < 0) this.locale = 'en'
    this.message = {}
    
    const localizationData = {
      ...require('lang/common').default,
    }

    supportedLocales.forEach(locale => {
      this.message[this.locale] = mapping(localizationData, this.locale)
    })
  }

  t(key, opt = {}) {
    const m = _.get(this.message, [this.locale, key])
    if (!m) throw new Error(`${key} was not found for internationalization`)
    const msg = new IntlMessageFormat(_.get(this.message, [this.locale, key]), this.locale)
    return msg.format(opt)
  }

  getLocale() {
    return this.locale
  }

  withContext(ctx) {
    this.init(ctx)
  }
}

const i18n = new I18n()

export default i18n