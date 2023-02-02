// import { reqSelectDicByCode, reqSelectDicByCodeTypes } from '@/api/modules/data-dictionary'

import BASE_CONFIG from '@/config/index.js'
/**
 * 所有的方法以"_"下划线开头
 */
export const Base64 = {
  encode: function(v) {
    return window.btoa(window.encodeURIComponent(v))
  },
  decode: function(v) {
    return window.decodeURIComponent(window.atob(v))
  }
}
/* 编码解码字符串  begin*/
/**
 * 编码
 * @param {Object | String} Obj
 * @returns {String}
 * 示例
 * let str = 'asdddasd'
 * let encodeStr = this.$u.tool._encodeString(str)
 */
export const _encodeString = function(Obj) {
  if (Obj) {
    if (Obj === '0') {
      return Obj
    }

    let enObj = JSON.stringify(Obj)
    return Base64.encode(enObj)
  } else {
    return Obj
  }
}
/**
 * 解码
 * @param {String} Obj
 * @returns {Object | String}
 * 示例
 * let str = 'asdddasd'
 * let encodeStr = this.$u.tool._encodeString(str)
 * let decodeStr = this.$u.tool._decodeString(encodeStr)
 */
export const _decodeString = function(Obj) {
  if (Obj) {
    if (Obj === '0') {
      return Obj
    }

    Obj = Base64.decode(Obj)
    try {
      let deObj = JSON.parse(Obj)
      return deObj
    } catch (e) {
      return Obj
    }
  } else {
    return Obj
  }
}
/* 编码解码字符串  end*/

/**
 * 判断对象里是否有空
 * @param {Object} obj
 * @returns {Boolean} true false
 * 示例
 * let obj = {a:'1',b:'2',c:'3',d:''}
 * let isEmpty = this.$u.tool._itemEmpty(obj)
 * isEmpty == true 对象里面有空值
 * isEmpty == false 对象里面没有空值
 */
export const _itemEmpty = function(obj) {
  let flag
  flag = Object.values(obj).some(v => _empty(v))
  return flag
}

/**
 * 判断是否为空
 * @param {any} obj
 * @returns {Boolean} true false
 * let str = '123'
 * let isEmpty = this.$u.tool._empty(str)
 * isEmpty == true 传入的值为空
 * isEmpty == false 传入的值不为空
 */
export const _empty = function(obj) {
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
        flag = true
      }
    } else if (typeof obj == 'boolean') {
      flag = obj
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
  }
  return flag
}

/* 缓存方法  begin*/
/**
 * localStorage缓存
 * @param {String} key 缓存名称
 * @param {Object | String | Array}value 缓存值
 * let str = '1232'
 * let localData = this.$u.tool._setLocalItem('localData',str)
 */
export const _setLocalItem = function(key, value) {
  try {
    if (key === '' || key === undefined) {
      return
    }
    if (key) {
      if (value == 0) {
        value = JSON.stringify(value)
        localStorage.setItem(BASE_CONFIG.ENCRYPTION ? Base64.encode(key) : key, value)
        return
      }
      if (value === null || value === undefined || value === '') {
        return ''
      }
      // 编码
      let enObj = JSON.stringify(value)
      if (BASE_CONFIG.ENCRYPTION) {
        localStorage.setItem(Base64.encode(key), Base64.encode(enObj))
      } else {
        localStorage.setItem(key, enObj)
      }
    }
  } catch (err) {
    console.error(err)
  }
}

/**
 * localStorage获取缓存
 * @param {String} key 缓存名称
 * let str = '1232'
 * let localData = this.$u.tool._setLocalItem('localData',str)
 * let getLocalData = this.$u.tool._getLocalItem('localData')
 */
export const _getLocalItem = function(key) {
  try {
    if (key === null || key === '' || key === undefined) {
      return ''
    }
    if (key) {
      let value = localStorage.getItem(BASE_CONFIG.ENCRYPTION ? Base64.encode(key) : key)
      if (value === null || value === undefined || value === '') {
        return ''
      } else {
        value = BASE_CONFIG.ENCRYPTION ? Base64.decode(value) : value
        return JSON.parse(value)
      }
    }
  } catch (err) {
    console.error(err)
  }
}

/**
 * sessionStorage 缓存
 * @param {String} key 缓存名称
 * @param {Object | String | Array}value 缓存值
 *  let str = '1232'
 * let sessionData = this.$u.tool._setSessionItem(str)
 */
export const _setSessionItem = function(key, value) {
  try {
    if (key === '' || key === undefined) {
      return
    }
    if (key) {
      if (value == 0) {
        value = JSON.stringify(value)
        sessionStorage.setItem(BASE_CONFIG.ENCRYPTION ? Base64.encode(key) : key, value)
      }
      if (value === null || value === undefined || value === '') {
        return ''
      }
      // 编码
      let enObj = JSON.stringify(value)
      if (BASE_CONFIG.ENCRYPTION) {
        sessionStorage.setItem(Base64.encode(key), Base64.encode(enObj))
      } else {
        sessionStorage.setItem(key, enObj)
      }
    }
  } catch (e) {
    console.log(e)
    return sessionStorage.setItem(BASE_CONFIG.ENCRYPTION ? Base64.encode(key) : key, value)
  }
}

/**
 * 获取 sessionStorage
 * @param {String} key 缓存名称
 * let str = '1232'
 * let sessionData = this.$u.tool._setSessionItem('sessionData',str)
 * let getsessionData = this.$u.tool._getSessionItem('sessionData')
 */
export const _getSessionItem = function(key) {
  if (key === null || key === '' || key === undefined) {
    return null
  }
  try {
    if (key) {
      let value = sessionStorage.getItem(BASE_CONFIG.ENCRYPTION ? Base64.encode(key) : key)
      if (value === null || value === undefined || value === '') {
        return value
      } else {
        value = BASE_CONFIG.ENCRYPTION ? Base64.decode(value) : value
        return JSON.parse(value)
      }
    } else {
      return key
    }
  } catch (e) {
    console.log(e)
    return sessionStorage.getItem(BASE_CONFIG.ENCRYPTION ? Base64.encode(key) : key)
  }
}
/* 缓存方法  end*/

/* 清除缓存的方法  begin*/

/**
 * 清空localStorage数据
 * @param {String} key  缓存名称
 * this.$u.tool._removeLocalItem('localData')
 */
export const _removeLocalItem = function(key) {
  if (key === null || key === '' || key === undefined) {
    return
  }
  if (key) {
    let enObj = BASE_CONFIG.ENCRYPTION ? Base64.encode(key) : key
    localStorage.removeItem(enObj)
  }
}

/**
 * 清空session数据
 * @param {*} key 缓存名称
 * this.$u.tool._removeSessionItem('sessionData')
 */
export const _removeSessionItem = function(key) {
  if (key === null || key === '' || key === undefined) {
    return
  }
  if (key) {
    let enObj = BASE_CONFIG.ENCRYPTION ? Base64.encode(key) : key
    sessionStorage.removeItem(enObj)
  }
}
/* 清除缓存的方法  end*/

/**
 * 返回特定key的编码对象
 * @param {Object | String | Array} Obj
 * @returns {Object} 特定key的编码对象
 * let obj = {a:1,b:2}
 * let encode = this.$u.tool._encode(obj)
 */
export const _encode = function(Obj) {
  try {
    // 编码
    let enObj = JSON.stringify(Obj)
    // 定义zzyxt为数据key，结合解码自定义修改此key
    return { zzyxt: BASE_CONFIG.ENCRYPTION ? Base64.encode(enObj) : enObj }
  } catch (error) {
    console.error(error)
    return Obj
  }
}

/**
 * 解码特定key的对象
 * @param {Object} Obj
 * @returns {Object} 解码特定key的对象
 * let obj = {a:1,b:2}
 * let encode = this.$u.tool._encode(obj)
 * let decode = this.$u.tool._decode(encode)
 */
export const _decode = function(Obj) {
  try {
    // 解码
    // 判断自定义的key是否存在
    if ('zzyxt' in Obj) {
      // 使用定义zzyxt的key，获取数据可结合编码修改此key
      Obj = BASE_CONFIG.ENCRYPTION ? Base64.decode(Obj.zzyxt) : Obj.zzyxt
      let deObj = JSON.parse(Obj)
      return deObj
    } else {
      return Obj
    }
  } catch (error) {
    console.error(error)
    return Obj
  }
}

/**
 * 获取文件名称
 * @param {*} data 文件路径
 * @returns
 */
export const _getFileName = function(data) {
  if (data) {
    let arr = data.split('/')
    let str = arr[arr.length - 1]
    return str
  } else {
    return data
  }
}

/**
 * 格式化日期去掉T
 * @param {Date} date
 * @returns {Date}
 * let date = '2021-01-02T10:20:35'
 * let formDate = this.$u.tool._formDate(date)
 */
export const _formDate = function(date) {
  if (date) {
    let arr = date.split('T')
    return arr && arr.length > 0 ? arr.join(' ') : ''
  } else {
    return date
  }
}

/**
 * 数组去重
 * @param {Array} arr  去重的数组
 * @param {String} name 需要去重的值的名称
 * @returns {Array}
 * let arr = [{a:1,b:2,c:3},{a:2,b:2,c:3},{a:2,b:2}]
 * let arr2 = [1,2,3,4,1,6,5]
 * let redArr = this.$u.tool._removeDuplicate(arr,'a')
 * let redArr = this.$u.tool._removeDuplicate(arr2)
 */
export const _removeDuplicate = function(arr, name) {
  let len = arr.length
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      let val1 = name ? arr[i][name] : arr[i]
      let val2 = name ? arr[j][name] : arr[j]
      if (val1 === val2) {
        arr.splice(j, 1)
        len-- // 减少循环次数提高性能
        j-- // 保证j的值自加后不变
      }
    }
  }
  return arr
}

/** 数组根据数组对象中的某个属性值进行排序的方法
 * 使用例子：newArray.sort(sortBy('number',false)) //表示根据number属性降序排列;若第二个参数不传递，默认表示升序排序
 * @param attr 排序的属性 如number属性
 * @param rev true表示升序排列，false降序排序
 * */
export const _sortBy = function(attr, rev) {
  // 第二个参数没有传递 默认升序排列
  if (rev == undefined) {
    rev = 1
  } else {
    rev = rev ? 1 : -1
  }

  return function(a, b) {
    a = a[attr]
    b = b[attr]
    if (a < b) {
      return rev * -1
    }
    if (a > b) {
      return rev * 1
    }
    return 0
  }
}

/**
 *  JSON.stringify转换
 * @param {*} v
 * @returns
 */
export const _mStringify = function(v) {
  try {
    return JSON.stringify(v)
  } catch (e) {
    return v
  }
}

/**
 *
 * @param {*} v JSON.parse转换
 * @returns
 */
export const _mParse = function(v) {
  try {
    return JSON.parse(v)
  } catch (e) {
    return v
  }
}

/**
 *  把对象变成以逗号隔开的字符串
 * @param {Object} v
 * @returns
 */
export const _getParseV = function(v) {
  try {
    v = _mParse(v)
    if (Object.prototype.toString.call(v) === '[object Object]') {
      let str = []
      for (let key in v) {
        str.push(`${key}:${v[key]}`)
      }
      return str.join(',')
    } else {
      return v
    }
  } catch (e) {
    return v
  }
}

/**
 * 阿拉伯数字转中文数字
 * @param {*} num  数字
 * @returns 返回中文数字
 */
export function _noToChinese(num) {
  if (num === '' || num === null || isNaN(num)) {
    return ''
  }
  var AA = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九']
  var BB = ['', '十', '百', '千', '万', '亿', '点', '']
  var a = ('' + num).replace(/(^0*)/g, '').split('.')
  var k = 0
  var re = ''
  for (var i = a[0].length - 1; i >= 0; i--) {
    switch (k) {
      case 0:
        re = BB[7] + re
        break
      case 4:
        if (!new RegExp('0{4}\\d{' + (a[0].length - i - 1) + '}$').test(a[0])) re = BB[4] + re
        break
      case 8:
        re = BB[5] + re
        BB[7] = BB[5]
        k = 0
        break
    }
    if (k % 4 == 2 && a[0].charAt(i + 2) != 0 && a[0].charAt(i + 1) == 0) re = AA[0] + re
    if (a[0].charAt(i) != 0) re = AA[a[0].charAt(i)] + BB[k % 4] + re
    k++
  }
  if (a.length > 1) {
    // 加上小数部分(如果有小数部分)
    re += BB[6]
    for (let i = 0; i < a[1].length; i++) re += AA[a[1].charAt(i)]
  }
  return re
}

/**
 * 把对象变成字符串以？kye=value&kye=value的形式
 * @param {Object} obj 需要转换的对象
 * @returns String
 */
export function _toParams(obj) {
  let arr = []
  for (let key in obj) {
    arr.push(`${key}=${obj[key]}`)
  }
  return '?' + arr.join('&')
}

/**
 *  金额大写
 * @param {*} money 数字金额
 * @returns
 */
export function _convertCurrency(money) {
  // 汉字的数字
  let cnNums = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖']
  // 基本单位
  let cnIntRadice = ['', '拾', '佰', '仟']
  // 对应整数部分扩展单位
  let cnIntUnits = ['', '万', '亿', '兆']
  // 对应小数部分单位
  let cnDecUnits = ['角', '分', '毫', '厘']
  // 整数金额时后面跟的字符
  let cnInteger = '整'
  // 整型完以后的单位
  let cnIntLast = '元'
  // 最大处理的数字
  let maxNum = 999999999999999.9999
  // 金额整数部分
  let integerNum
  // 金额小数部分
  let decimalNum
  // 输出的中文金额字符串
  let chineseStr = ''
  // 分离金额后用的数组，预定义
  let parts
  if (money == '') {
    return ''
  }
  money = parseFloat(money)
  if (money >= maxNum) {
    // 超出最大处理数字
    return ''
  }
  if (money == 0) {
    chineseStr = cnNums[0] + cnIntLast + cnInteger
    return chineseStr
  }
  // 转换为字符串
  money = money.toString()
  if (money.indexOf('.') == -1) {
    integerNum = money
    decimalNum = ''
  } else {
    parts = money.split('.')
    integerNum = parts[0]
    decimalNum = parts[1].substr(0, 4)
  }
  // 获取整型部分转换
  if (parseInt(integerNum, 10) > 0) {
    let zeroCount = 0
    let IntLen = integerNum.length
    for (let i = 0; i < IntLen; i++) {
      let n = integerNum.substr(i, 1)
      let p = IntLen - i - 1
      let q = p / 4
      let m = p % 4
      if (n == '0') {
        zeroCount++
      } else {
        if (zeroCount > 0) {
          chineseStr += cnNums[0]
        }
        // 归零
        zeroCount = 0
        chineseStr += cnNums[parseInt(n)] + cnIntRadice[m]
      }
      if (m == 0 && zeroCount < 4) {
        chineseStr += cnIntUnits[q]
      }
    }
    chineseStr += cnIntLast
  }
  // 小数部分
  if (decimalNum != '') {
    let decLen = decimalNum.length
    for (let i = 0; i < decLen; i++) {
      let n = decimalNum.substr(i, 1)
      if (n != '0') {
        chineseStr += cnNums[Number(n)] + cnDecUnits[i]
      }
    }
  }
  if (chineseStr == '') {
    chineseStr += cnNums[0] + cnIntLast + cnInteger
  } else if (decimalNum == '') {
    chineseStr += cnInteger
  }
  return chineseStr
}

/**
 * 锚点跳转
 * @param {String} selector 元素名称 id class
 */
export function _goAnchor(selector) {
  var anchor = this.$el.querySelector(selector) // 获取元素
  if (anchor) {
    // setTimeout(() => {//页面没有渲染完成时是无法滚动的，因此设置延迟
    anchor.scrollIntoView() // js的内置方法，可滚动视图位置至元素位置
    // }, 500);
  }
}

/**
 * 获取路由上拼接的参数
 * @param {String} name 获取值的名称
 * @returns
 */
export function _getQueryString(name) {
  var reg = new RegExp('(^|&|#)' + name + '=([^&]*)(&|$)', 'i')
  var r = window.location.href.replace(/(.*)(\?)(.*)/, '$3').match(reg)
  return r ? r[2] : ''
}

/**
 * 递归深拷贝
 * @param {*} source
 * @returns
 */
export function _deepClone(source) {
  if (!source && typeof source !== 'object') {
    throw new Error('error arguments', '_deepClone')
  }
  const targetObj = source.constructor === Array ? [] : {}
  Object.keys(source).forEach(keys => {
    if (source[keys] && typeof source[keys] === 'object') {
      targetObj[keys] = _deepClone(source[keys])
    } else {
      targetObj[keys] = source[keys]
    }
  })
  return targetObj
}
/**
 * 节流函数, 用于将多次执行变为每隔一段时间执行
 * @param fn 事件触发的操作
 * @param delay 间隔多少毫秒需要触发一次事件
 */
export function _throttle(fn, delay) {
  let timer = null
  return function() {
    let context = this
    let args = arguments
    if (!timer) {
      timer = setTimeout(function() {
        fn.apply(context, args)
        clearTimeout(timer)
      }, delay)
    }
  }
}
/**
 * 数组对象排序
 * @param {*} propertyName  待排序的对象属性
 * @param {*} flag 升序（asc）降序（desc） 默认降序
 * @returns
 */
export function _createCompare(propertyName, flag) {
  return function(obj1, obj2) {
    var value1 = obj1[propertyName]
    var value2 = obj2[propertyName]
    if (flag === 'asc') {
      return value1 - value2
    } else {
      return value2 - value1
    }
  }
}
/**
 * 根据值获取label
 * @param {*} arr 需要查询的数组
 * @param {*} val 需要查询的值
 * @param {*} label 显示的值，默认'label'
 * @param {*} value 选中的值，默认'value'
 * @returns
 */
export function _getVByLabel(arr, val, label = 'label', value = 'value') {
  let tmp = arr.filter(v => v[value] == val)
  return tmp && tmp.length > 0 ? tmp[0][label] : ''
}

/**
 * 获取权限信息
 * @param {*} arr
 * @param {*} type
 * @returns
 */
export function _getVpermis(arr, type) {
  arr = arr.filter(v => v.indexOf(type) > -1)
  return arr.map(v => {
    return v ? v.replace(type, '') : ''
  })
}

/**
 * 格式化数字默认2位小数
 * @param {*} val
 * @returns
 */
export function _numFormat(val) {
  try {
    if (!val) {
      return val
    }
    let arr = parseFloat(val)
      .toFixed(2)
      .split('.')
    let num = parseInt(arr[0])
    let c = num.toString().indexOf('.') !== -1 ? num.toLocaleString() : num.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
    return c + '.' + arr[1]
  } catch (e) {
    console.log(e)
    return val
  }
}

/**
 * 把路径上的参数转换成对象
 * @param {string} url 需要转换的url
 * @returns {Object}
 */
export function _param2Obj(url) {
  const search = decodeURIComponent(url.split('?')[1]).replace(/\+/g, ' ')
  if (!search) {
    return {}
  }
  const obj = {}
  const searchArr = search.split('&')
  searchArr.forEach(v => {
    const index = v.indexOf('=')
    if (index !== -1) {
      const name = v.substring(0, index)
      const val = v.substring(index + 1, v.length)
      obj[name] = val
    }
  })
  return obj
}

/**
 *获取数据字典数据
 * @param {String | Array} code
 * @returns {Array|Object}
 * 示例一：
 * async 方法名(){
 * let option = await($u.tool._getDicOption('CLLB'))
 * //  option为数组
 * 同一个页面有多个数据字典数据采用下面这种调用 目前不支持使用
 * let option1 = await($u.tool._getDicOption(['CLLB','CGDD']))
 * // option1为{'CLLB':[],'CGDD':[]}
 * },
 */
export async function _getDicOption(code) {
  let cache = _getSessionItem('dictionary') || {}
  if (Array.isArray(code)) {
    // if (code.some(v => !Array.isArray(code[v]))) {
    // let res = await reqSelectDicByCodeTypes(code)
    for (let i in code) {
      let key = code[i]
      // cache[key] = Array.isArray(res[key]) ? res[key] : []
    }
    // }
    _setSessionItem('dictionary', cache)
    return cache
  } else if (typeof code == 'string') {
    // if (cache[code] == null) {
    // cache[code] = await reqSelectDicByCode(code)
    // }
    _setSessionItem('dictionary', cache)
    return cache[code]
  }
}

/**
 *  回显数据字典
 * @param {String} pCode 大分组
 * @param {String} code  对应详细数据
 * 注意： 使用下列回显方法时，需要保证 getDicOption已调用
 * 示例 _getNameByCode('CLLB','001') //基材
 */
export function _getNameByCode(pCode, code) {
  let cache = _getSessionItem('dictionary') || {}
  let option = Array.isArray(cache[pCode]) ? cache[pCode] : []
  return _getVByLabel(option, code, 'name', 'code')
}

/**
 *返显材料数据
 * @param {*} type baseList 基材 paperList 纸张 plateList 钢板
 * @param {*} code
 * @returns
 */
export function _getNameByNumber(type, code) {
  let cache = _getSessionItem('baseOption') || {}
  let option = Array.isArray(cache[type]) ? cache[type] : []
  return _getVByLabel(option, code, 'name', 'number')
}

/**
 * 唯一标识符
 * @returns {String}
 */
export function _uniqueId() {
  // 当前时间转成 36 进制字符串
  var time = Date.now().toString(36)
  // 当前随机数转成 36 进制字符串
  var random = Math.random().toString(36)
  // 去除随机数的 0. 字符串
  random = random.substring(2, random.length)
  // 返回唯一ID
  return random + time
}
/**
 * 当前节点全屏展示
 * @param {EL} element
 */
export function _screen(element) {
  var isFull = !!(document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement || document.fullscreenElement)
  if (isFull) {
    if (document.exitFullscreen) {
      document.exitFullscreen()
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen()
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen()
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen()
    }
  } else {
    if (element.requestFullscreen) {
      element.requestFullscreen()
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen()
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen()
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen()
    }
  }
}
