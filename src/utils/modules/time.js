/**
 * 获取时间方法
 * TODO 使用 day.js
 */
class BaseDate {
  constructor(v) {
    // 如果 new 的时候不传时间，则默认当前时间
    this.time = formDateInner(v)
  }
  // 设置时间
  setDate(v) {
    this.time = formDateInner(v)
  }
  // 获取时间 type的类型 YYYY-MM-DD HH:mm:ss
  getDate(type) {
    type = type || 'YYYY-MM-DD HH:mm:ss' // 设置获取日期默认格式
    let symbol = type.charAt(4) || ''
    let year = this.year()
    let month = this.month()
    let date = this.date()
    let h = this.hour()
    let m = this.minute()
    let s = this.seconds()
    // 获取格式化后的时间
    year = checkIn(year, 'Y', type)
    month = checkIn(month, 'M', type)
    date = checkIn(date, 'D', type)
    h = checkIn(h, 'H', type)
    m = checkIn(m, 'm', type)
    s = checkIn(s, 's', type)
    let prev = `${year}${symbol}${month}${symbol}${date}`
    let next = `${h}${h && m ? ':' : ''}${m}${m && s ? ':' : ''}${s}`
    return `${prev}${prev && next ? ' ' : ''}${next}`
  }
  // 年
  year() {
    return this.time.getFullYear()
  }
  // 月
  month() {
    let v = this.time.getMonth() + 1
    return formNum(v)
  }
  // 日
  date() {
    let v = this.time.getDate()
    return formNum(v)
  }
  // 小时
  hour() {
    let v = this.time.getHours()
    return formNum(v)
  }
  // 分
  minute() {
    let v = this.time.getMinutes()
    return formNum(v)
  }
  // 秒
  seconds() {
    let v = this.time.getSeconds()
    return formNum(v)
  }
}
/**
格式化日期 YYYY-MM-DD HH:mm:ss
console.log(formDate('', 'YYYY-MM-DD'))
console.log(formDate('', 'YYYY/MM/DD'))
console.log(formDate('', 'YYYY-MM-DD HH:mm:ss'))
console.log(formDate('2022-04-09', 'YYYY-MM-DD HH:mm:ss'))
console.log(formDate('2022-04-09', 'YYYY-MM-DD'))
console.log(formDate('2022-04-09', 'YYYY'))
console.log(formDate('2022-04-09', 'MM'))
console.log(formDate('2022-04-09', 'DD'))
console.log(formDate('', 'HH'))
console.log(formDate('', 'mm'))
console.log(formDate('', 'ss'))
 */
export const tFormDate = function(t, type = 'YYYY-MM-DD') {
  let myDate = new BaseDate(t)
  return myDate.getDate(type)
}

// 获取new Date() 事件
function formDateInner(t) {
  t = t ? t.split('-').join('/') : ''
  return t ? new Date(t) : new Date()
}
// 格式化小于10 的数据前加0
function formNum(v) {
  return v < 10 ? '0' + v : v
}
// 判断值是否存在
function checkIn(value, symbol, type) {
  return type.includes(symbol) ? value : ''
}

/**
 * 计算当前天数加指定天数
 * @param {Date} dateTemp 日期
 * @param {Number} days  要添加的天数
 * @param {String} split 传入的日期格式使用-分开还是/分开, 默认/
 * @returns 指定日期添加天数后的日期
 */
export const tAddDay = function(dateTemp, days, split = '/') {
  dateTemp = dateTemp.split(split)
  let nDate = new Date(dateTemp[1] + split + dateTemp[2] + split + dateTemp[0]) // 转换为MM-DD-YYYY格式
  let millSeconds = Math.abs(nDate) + days * 24 * 60 * 60 * 1000
  let rDate = new Date(millSeconds)
  let year = rDate.getFullYear()
  let month = rDate.getMonth() + 1
  let date = rDate.getDate()
  return year + split + formNum(month) + split + formNum(date)
}
/**
 * 获取当前日期
 * @param {String} type 日期格式 年月日 - /
 * @returns 当前日期
 */
export const tDate = function(type) {
  let date = new Date()
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()
  if (type == '年月日') {
    return year + ' 年 ' + formNum(month) + ' 月 ' + formNum(day) + ' 日 '
  } else if (type == '-') {
    return year + '-' + formNum(month) + '-' + formNum(day)
  } else {
    return year + '/' + formNum(month) + '/' + formNum(day)
  }
}
// 获取当前日期时间
export const tDateHms = function() {
  let date = new Date()
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()
  let h = date.getHours()
  let m = date.getMinutes()
  let s = date.getSeconds()
  return year + '/' + formNum(month) + '/' + formNum(day) + ' ' + formNum(h) + ':' + formNum(m) + ':' + formNum(s)
}
/**
 * 格式化时间
 * @param {Date} time 传入的时间
 * @param {String} type 格式化格式 - /
 * @returns
 */
export const tFormate = function(time, type) {
  // 时间格式化 默认：2020/08/25
  let year = time.getFullYear()
  let month = time.getMonth() + 1
  let day = time.getDate()
  if (type) {
    return year + type + formNum(month) + type + formNum(day)
  } else {
    return year + '/' + formNum(month) + '/' + formNum(day)
  }
}
/**
 * 计算两个时间相差天数
 * @param {Date} sDate1 日期1
 * @param {Date} sDate2 日期2
 * @returns 两个日期相差天数
 */
export const tDiffDate = function(sDate1, sDate2) {
  let startTime = sDate2 ? new Date(Date.parse(sDate2.replace(/-/g, '/'))).getTime() : new Date().getTime()
  let endTime = sDate1 ? new Date(Date.parse(sDate1.replace(/-/g, '/'))).getTime() : new Date().getTime()
  let dates = Math.abs(startTime - endTime) / (1000 * 60 * 60 * 24) + 1
  return dates
}
/**
 * 比较传入时间与当前时间大小,不传date2,默认当前时间
 * @param {Date} date1 时间1
 * @param {Date} date2 时间2
 * @returns false date1>=date2 true date1<date2
 */
export const tCompareDate = function(date1, date2) {
  let myDate = new BaseDate()
  date1 = myDate.getDate(date1)
  date2 = myDate.getDate(date2)
  if (date2.getTime() - date1.getTime() <= 0) {
    return false // date2 小于date1
  } else {
    return true // date2 大于date1
  }
}
