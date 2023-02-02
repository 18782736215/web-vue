import { Message } from 'element-ui'

/** --------当前项目--------**/
/**
 * 判断当前数组/字符串里是否存在指定值(只能判断简单类型的值)
 * @param { Array/String }
 * @param { String }
 * @returns boolean
 * 页面里使用
 * let str = 'test'
 * let targetArr = ['name']
 * this.$u.validate.vTargetHasValue(str,'e') // 返回 true
 * this.$u.validate.vTargetHasValue(targetArr,'name') // 返回 true
 */
export function vTargetHasValue(target, value) {
  return target && target.indexOf(value) > -1
}

/**
 * 判断字符串长度是否在某个范围之内
 * @param {String} str
 * @param {Array} range
 * @returns boolean
 * let l1 = '222'
 * let arr = [2, 8]
 * let l2 = 222
 * console.log(this.$u.validate.vCheckRangeLength(l1, arr)) // true
 * console.log(this.$u.validate.vCheckRangeLength(l2, arr)) // false
 */
export function vCheckRangeLength(str, range) {
  if (typeof str == 'string' && Array.isArray(range) && range.length == 2) {
    return str.length >= parseInt(range[0]) && str.length <= parseInt(range[1])
  } else {
    console.error('请检查传入参数是否符合要求')
    return false
  }
}

/** --------通用--------**/
/**
 * 判断简单对象里是否有值为0，null，undefined，''
 * @param {Object}
 * @returns boolean
 *
 * let target1 = {
 *    name: '',
 *    age: '20'
 * }
 * let target2 = {
 *    name: null,
 *    age: '20'
 * }
 * this.$u.validate.vTargetEmpty(target1) // name为空所以返回true
 * this.$u.validate.vTargetEmpty(target2) // name为null所以返回true
 */
export function vTargetEmpty(target) {
  let flag
  flag = Object.values(target).some(v => [0, null, undefined, ''].includes(v))
  return flag
}

/**
 * 格式化数字，保留两位小数
 * @param { Number/String } v
 * @returns Number
 * this.$u.validate.vFormPrice(10.0) // 10.00
 * this.$u.validate.vFormPrice('2') // 2.00
 */
export function vFormPrice(v) {
  if (v === undefined || v === null) return 0.0
  if (typeof v === 'number') {
    v = parseFloat(v)
    return v <= 0 ? 0.0 : v.toFixed(2)
  } else if (typeof v === 'string') {
    v = v.replace(/[^\d.]/g, '')
    v = parseFloat(v)
    return isNaN(v) ? 0.0 : v <= 0 ? 0.0 : v.toFixed(2)
  } else {
    return 0.0
  }
}

/**
 * 限制当前的价格,大小限制7位数，最多2位小数，最大值限制9999999
 * @param { Number/String} v
 * @returns Number
 * this.$u.validate.vPriceLimit(100000000000000) // 9999999
 * this.$u.validate.vPriceLimit(-1000) //0
 */
export function vPriceLimit(v) {
  if (v === undefined || v === null) return 0.0
  if (typeof v === 'number') {
    v = parseFloat(v)
    return v <= 0 ? 0 : v < 9999999 ? v.toFixed(2) : 9999999
  } else if (typeof v === 'string') {
    v = v.replace(/[^\d.]/g, '')
    v = parseFloat(v)
    return isNaN(v) ? 0 : v <= 0 ? 0 : v < 9999999 ? v.toFixed(2) : 9999999
  } else {
    return 0.0
  }
}

/**
 * 返回大于等于0，且最大值限制为9999999的整数
 * @param { Number/String} v
 * @returns Number
 * this.$u.validate.vNumberLimit(100000000000000) // 9999999
 * this.$u.validate.vNumberLimit(-1000) //0
 */
export function vNumberLimit(v) {
  if (v === undefined || v === null) return 0
  if (typeof v === 'number') {
    v = parseInt(v)
    return v <= 0 ? 0 : v < 9999999 ? v : 9999999
  } else if (typeof v === 'string') {
    v = v.replace(/[^\d]/g, '')
    v = parseInt(v)
    return isNaN(v) ? 0 : v <= 0 ? 0 : v < 9999999 ? v : 9999999
  } else {
    return 0
  }
}

/**
 * 校验比率 max:true代表可以为100%
 * @param {Number/String} v
 * @param {Number/String} max
 * @returns
 */
export function vFormRadio(v, max = false) {
  if (v === undefined || v === null) return 0.0
  if (typeof v === 'number') {
    v = parseFloat(v)
    return v <= 0 ? 0 : v < 100 ? v.toFixed(2) : 99.99
  } else if (typeof v === 'string') {
    v = v.replace(/[^\d.]/g, '')
    v = parseFloat(v)
    if (isNaN(v) || v <= 0) {
      return 0
    } else if (v < 100) {
      return v.toFixed(2)
    } else {
      if (!max) {
        Message({
          type: 'warning',
          message: '比率不能超过100%'
        })
        return 0
      } else {
        return 100
      }
    }
  } else {
    return 0.0
  }
}

/**
 * 判断当前用户设备是否是移动端
 * @returns boolean
 *
 * this.$u.validate.isMobile() // pc情况下会返回false mobile 情况下返回true
 */
export function isMobile() {
  let reg = /(phone|pad|iPhone|iPod|ios|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
  return reg.test(navigator.userAgent)
}

/**
 * 判断是否是图片文件
 * @param { String } type
 * @returns boolean
 * this.$u.validate.vCheckIsImg(imgName) // 通过传入图片的名称判断是否是图片类型
 */
export function vCheckIsImg(type) {
  let flag = false
  let reg = /(\.jpg|\.png|\.tif|\.gif|\.jpeg)/i
  if (type && type.match(reg)) {
    flag = true
  }
  return flag
}

/**
 * 判断是否是.mp4文件
 * @param { String } type
 * @returns boolean
 * this.$u.validate.vCheckIsMp4(videoName) // 通过传入视频的名称判断是否是mp4文件
 */
export function vCheckIsMp4(type) {
  let flag = false
  let reg = /(\.mp4)/i
  if (type && type.match(reg)) {
    flag = true
  }
  return flag
}

/**
 * 判断是否是excel文件
 * @param { String } type
 * @returns boolean
 * this.$u.validate.vCheckIsExcel(excelName) // 根据文件名称判断是否是excel文件
 */
export function vCheckIsExcel(type) {
  let flag = false
  let reg = /(\.xls|\.xlsx)/i
  if (type && type.match(reg)) {
    flag = true
  }
  return flag
}

/**
 * 校验是否是zip文件
 * @param { String } type
 * @returns boolean
 * this.$u.validate.vCheckZip(zipFileName) // 根据文件名称判断是否是zip文件
 */
export function vCheckZip(type) {
  let flag = false
  let reg = /(\.zip)/i
  if (type && type.match(reg)) {
    flag = true
  }
  return flag
}

/**
 * 校验名称是否含有特殊字符
 * @param { String } val
 * @returns boolean
 * this.$u.validate.vCheckName('+') // 返回 false，因为'+'属于除字母和汉字以外的特殊字符
 * this.$u.validate.vCheckName('hhh哈啊哈哈哈') // 返回 true
 */
export function vCheckName(val) {
  let reg = /^[\u4e00-\u9fa5a-z]+$/gi
  return reg.test(val)
}

/**
 * 校验电话号码 最长11位、且第一位只能是1、第二位不能是2，其他位都是数字
 * @param { String } phone
 * @returns boolean
 * this.$u.validate.vCheckPhone('12012457845') // 返回 false 因为第二位只能是比2大的数字
 * this.$u.validate.vCheckPhone('1331245784') // 返回 false 因为电话号码是11位
 * this.$u.validate.vCheckPhone('13012457845') // 返回 true
 */
export function vCheckPhone(phone) {
  return /^1(3|4|5|6|7|8|9)\d{9}$/.test(phone)
}

/**
 * 校验邮箱格式是否正确
 *
 * @param {String} email
 * @returns boolean
 * let str = '12345@qq.com'
 * let str1 = '@qq.com'
 * console.log(this.$u.validate.vCheckEmail(str)) // true
 * console.log(this.$u.validate.vCheckEmail(str1)) // false
 */
export function vCheckEmail(email) {
  let reg = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/
  return reg.test(email)
}

/**
 * 格式化电话号码
 * @param { String } val
 * @returns String
 * this.$u.validate.vValidatePhone('135467854785') // 135-4678-5478
 */
export function vValidatePhone(val) {
  val = val.replace(/[^\d]/g, '').substring(0, 11)
  if (val.length <= 3) {
    return val
  } else if (val.length <= 7) {
    val = val.replace(/(\d{3})(\d{0,4})/, '$1-$2')
  } else {
    val = val.replace(/(\d{3})(\d{0,4})(\d{0,4})/, '$1-$2-$3')
  }
  return val
}

/**
 * 用空字符替换输入的除数字和字母以外的字符
 * @param { String } val
 * @returns String
 * this.$u.validate.vCheckRule('13012哈哈哈457845+-哈哈哈') // 返回 13012457845
 */
export function vCheckRule(val) {
  val = val.replace(/[^A-Za-z0-9]/g, '')
  return val
}

/**
 * 校验上传图片文件名称不能为空且不能包含特殊字符
 * @param { String } name
 * @returns boolean
 * this.$u.validate.vCheckFileType('hhhHHH我ss11') // true
 * this.$u.validate.vCheckFileType('+！') // false
 */
export function vCheckFileType(name) {
  let reg = /^[\u4e00-\u9fa5a-z1-9]*$/gi
  if (name && !reg.test(name)) {
    console.warn('上传文件名不能包含特殊字符')
    return false
  }
  return true
}

/**
 * 判断boolean、string、number、object、undefined、null是否为空
 * @param { any } obj
 * this.$u.validate.vIsEmpty({}) // true
 */
export function vIsEmpty(obj) {
  var flag = false
  if (typeof obj != 'boolean') {
    if (typeof obj == 'string') {
      if (obj == '') {
        flag = true
      } else if (obj == 'null') {
        flag = true
      }
    } else if (typeof obj == 'number') {
      if (obj == 0) {
        flag = false
      }
    } else if (typeof obj == 'undefined') {
      flag = true
    } else if (typeof obj == 'object') {
      if (obj instanceof Array) {
        if (obj.length == 0) {
          flag = true
        }
      } else if (obj instanceof Object) {
        if (Object.keys(obj).length == 0) {
          flag = true
        }
      } else if (obj == null) {
        flag = true
      }
    }
  } else {
    flag = obj
  }
  return flag
}

/**
 * 校验是否是正整数
 * @param { String } val
 * @returns boolean
 * this.$u.validate.vCheckPositiveInteger(1) // true
 * this.$u.validate.vCheckPositiveInteger(1.1) // false
 * this.$u.validate.vCheckPositiveInteger(-1) // false
 */
export function vCheckPositiveInteger(val) {
  let reg = /^[1-9]\d*$/
  return reg.test(val)
}

/**
 * 校验是否是负整数
 * @param { String } val
 * @returns boolean
 * this.$u.validate.vCheckNegativeInteger(1) // false
 * this.$u.validate.vCheckNegativeInteger(-1.1) // false
 * this.$u.validate.vCheckNegativeInteger(-1) // true
 */
export function vCheckNegativeInteger(val) {
  let reg = /^-[1-9]\d*$/
  return reg.test(val)
}

/**
 * 校验是否是整数
 * @param { String } val
 * @returns boolean
 * this.$u.validate.vCheckIsInteger(1) // true
 * this.$u.validate.vCheckIsInteger(1.1) // false
 * this.$u.validate.vCheckIsInteger(-1) // true
 */
export function vCheckIsInteger(val) {
  let reg = /^-?[1-9]\d*$/
  return reg.test(val)
}

/**
 * 校验是否是正浮点数
 * @param { String } val
 * @returns boolean
 * this.$u.validate.vCheckFloatNumber(1.1) // true
 * this.$u.validate.vCheckFloatNumber(-1.1) // false
 */
export function vCheckFloatNumber(val) {
  let reg = /^[1-9]\d*\.\d*|0\.\d*[1-9]\d*$/
  return reg.test(val)
}

/**
 * 校验是否是负浮点数
 * @param { String } val
 * @returns boolean
 * this.$u.validate.vCheckNegativeFloatNumber(1.1) // false
 * this.$u.validate.vCheckNegativeFloatNumber(-1.1) // true
 */
export function vCheckNegativeFloatNumber(val) {
  let reg = /^-([1-9]\d*\.\d*|0\.\d*[1-9]\d*)$/
  return reg.test(val)
}

/**
 * 校验是否是非负整数（正整数 + 0）
 * @param { String } val
 * @returns boolean
 * this.$u.validate.vCheckNonnegativeInteger(1) // true
 * this.$u.validate.vCheckNonnegativeInteger(0) // true
 * this.$u.validate.vCheckNonnegativeInteger(-1) // false
 */
export function vCheckNonnegativeInteger(val) {
  let reg = /^[1-9]\d*|0$/
  return reg.test(val)
}

/**
 * 校验是否是非正整数（负整数 + 0）
 * @param { String } val
 * @returns boolean
 * this.$u.validate.vCheckNonPositiveInteger(1) // false
 * this.$u.validate.vCheckNonPositiveInteger(0) // true
 * this.$u.validate.vCheckNonPositiveInteger(-1) // true
 */
export function vCheckNonPositiveInteger(val) {
  let reg = /^-[1-9]\d*|0$/
  return reg.test(val)
}

/**
 * 判断是否是十进制的数字
 * @param {Number} number
 * @returns boolean
 * let a = 123
 * let b = '123'
 * this.$u.validate.vCheckDecimalNumber(a) // true
 * this.$u.validate.vCheckDecimalNumber(b) // false
 */
export function vCheckDecimalNumber(number) {
  let reg = /^[1-9][0-9]+$/
  return typeof number == 'number' && reg.test(number)
}

/**
 * 判断数值是否在某一区间内
 * @param {Number} number
 * @param {Array} range
 * @returns boolean
 * let l = 1
 *  let arr = [2, 8]
 * console.log(this.$u.validate.vCheckRange(l, arr)) // false
 */
export function vCheckRange(number, range) {
  return parseInt(number) >= parseInt(range[0]) && parseInt(number) <= parseInt(range[1])
}

/**
 * 校验是否是汉字
 * @param { String } val
 * @returns boolean
 * this.$u.validate.vCheckChinese('dds') // false
 * this.$u.validate.vCheckChinese('你好') // true
 * this.$u.validate.vCheckChinese('') // false
 */
export function vCheckChinese(val) {
  let reg = /^[\u4e00-\u9fa5]+$/
  return reg.test(val)
}

/**
 * 校验是否是18位身份证号
 * @param { String } val
 * @returns boolean
 * this.$u.validate.vCheckId('41112619891001503X') // true
 * this.$u.validate.vCheckId('41112619891001503') // false
 */
export function vCheckId(val) {
  let reg = /^(\d{17})([\d|x|X]{1})$/
  return reg.test(val)
}

/**
 * 校验是否是数字、26个英文字母或者下划线组成的字符串
 * @param { String } val
 * @returns boolean
 * this.$u.validate.vCheckString('塔er123+1') // false
 * this.$u.validate.vCheckString('qw123_SH') // true
 */
export function vCheckString(val) {
  let reg = /^\w+$/
  return reg.test(val)
}

/**
 * 校验是否是Url网址
 * @param { String } val
 * @returns boolean
 * this.$u.validate.vCheckUrl('https://www.baidu.com'),  // true
 */
export function vCheckUrl(val) {
  let reg = /^(http|https):\/\/([\w.]+\/?)\S*/
  return reg.test(val)
}

/**
 * 校验数据类型
 * @param { any } val
 * @returns 数据类型
 *  this.$u.validate.vCheckDataType(num),  // 'Number'
 *  this.$u.validate.vCheckDataType(str),  // 'String'
 *  this.$u.validate.vCheckDataType(bool), // 'Boolean'
 *  this.$u.validate.vCheckDataType(arr),  // 'Array'
 *  this.$u.validate.vCheckDataType(obj),  // 'Object'
 *  this.$u.validate.vCheckDataType(func), // 'Function'
 *  this.$u.validate.vCheckDataType(und),  // 'Undefined'
 *  this.$u.validate.vCheckDataType(nul),  // 'Null'
 *  this.$u.validate.vCheckDataType(date), // 'Date'
 *  this.$u.validate.vCheckDataType(reg),  // 'RegExp'
 *  this.$u.validate.vCheckDataType(error) // 'Error'
 */
export function vCheckDataType(val) {
  return Object.prototype.toString.call(val).match(/\[object (.*)\]/)[1]
}

/**
 * 校验是否验证码（要求验证码是数字时）
 * @param {String} value  验证码
 * @param {Number} len 验证码长度
 * @returns boolean
 * this.$u.validate.vCheckCode('123489', 6) // true
 * this.$u.validate.vCheckCode('12348r', 6) // false
 * this.$u.validate.vCheckCode('12348', 6) // false
 */
export function vCheckCode(value, len) {
  let reg = new RegExp(`^\\d{${len}}$`)
  return reg.test(value)
}

/**
 * 判断是否是json对象
 * @param {String} value
 * @returns boolean
 * let obj = `{
 *     "name": "20"
 * }`
 * this.$u.validate.vCheckJsonString(obj) // true
 */
export function vCheckJsonString(value) {
  if (typeof value == 'string') {
    try {
      var obj = JSON.parse(value)
      if (typeof obj == 'object' && obj) {
        return true
      } else {
        return false
      }
    } catch (e) {
      console.error(e)
      return false
    }
  }
  console.error('It is not a string!')
  return false
}

/**
 * 判断是否是对象
 * @param {Object} obj
 * @returns boolean
 * let obj = {
 *   name: '20'
 * }
 * this.$u.validate.vCheckObject(obj) // true
 */
export function vCheckObject(obj) {
  return Object.prototype.toString.call(obj) == '[object Object]'
}

/**
 * 判断车牌号
 * @param {*} license
 * @returns boolean
 * let l1 = '川A1234'
 * let l2 = '川A12345挂'
 * console.log(this.$u.validate.vCheckLicense(l1)) // false
 * console.log(this.$u.validate.vCheckLicense(l2)) // true
 */
export function vCheckLicense(license) {
  let reg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4,5}[A-Z0-9挂学警港澳]{1}/
  return reg.test(license)
}
