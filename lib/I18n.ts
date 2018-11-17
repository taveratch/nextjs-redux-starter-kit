import IntlMessageFormat from 'intl-messageformat'
import _ from 'lodash'
import localization from 'lib/locale'

const supportedLocales = ['en', 'th']

const mapping = (json: any, locale: string) => {
  return _.mapValues(json, (x: any) => x[locale] || "")
}

class I18n {

  locale: string = ""
  message: any = {}

  constructor(ctx: any = {}) {
    this.init(ctx)
  }

  init(ctx: any) {
    this.locale = localization.get(ctx)
    if (supportedLocales.indexOf(this.locale) < 0) this.locale = 'en'
    this.message = {}

    const localizationData = {
      ...require('lang/common/index.ts').default,
    }

    supportedLocales.forEach(locale => {
      this.message[this.locale] = mapping(localizationData, this.locale)
    })
  }

  t(key: string, opt = {}) {
    const m = _.get(this.message, [this.locale, key])
    if (!m) throw new Error(`${key} was not found for internationalization`)
    const msg = new IntlMessageFormat(_.get(this.message, [this.locale, key]), this.locale)
    return msg.format(opt)
  }

  getLocale() {
    return this.locale
  }

  withContext(ctx: any) {
    this.init(ctx)
  }
}

const i18n = new I18n()

export default i18n