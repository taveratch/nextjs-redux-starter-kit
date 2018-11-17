import locale from 'lib/locale'
import moment from 'moment'

class Datetime {

  static datetime = null

  constructor(ctx) {
    moment.locale(locale.get(ctx))
    this.readableFormat = 'D MMM YYYY'
  }

  static getInstance(ctx) {
    if (ctx) {
      Datetime.datetime = new Datetime(ctx)
    }
    if (Datetime.datetime) return Datetime.datetime
    Datetime.datetime = new Datetime(ctx)
    return Datetime.datetime
  }

  formatToAppString(isoString, withTime = false) {
    let format = this.readableFormat
    if (withTime) format += " H:mm"
    return moment(isoString).format(format)
  }

  getDaysFromNow(lastDateISOString) {
    return moment(lastDateISOString).diff(moment(), 'days')
  }

  getDaysUntilNow(isoString) {
    return moment().diff(moment(isoString), 'days')
  }

  now() {
    return moment()
  }

  formatToYYYYMMDDString(datetime) {
    return datetime.format("YYYY-MM-DD")
  }

  convertFromYYYYDDMMToDate(string) {
    return moment(string, "YYYY-MM-DD")
  }

  formatToDDMMMYYYYString(datetime) {
    return datetime.format('DD MMM YYYY')
  }

  diff(aISOString, bISOString) {
    return moment(aISOString).diff(moment(bISOString), 'days')
  }

  clone(datetime) {
    return datetime.clone()
  }

  createDatetime(isoString) {
    return moment(isoString)
  }
}

export default Datetime