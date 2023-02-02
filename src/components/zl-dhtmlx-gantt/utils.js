// 时间轴格式化模版
export const yearScaleTemplate = function(date) {
  return date.getFullYear()
}
export const monthScaleTemplate = function(date) {
  let month = date.getMonth() + ''
  switch (month) {
    case '0':
      month = '一月'
      break
    case '1':
      month = '二月'
      break
    case '2':
      month = '三月'
      break
    case '3':
      month = '四月'
      break
    case '4':
      month = '五月'
      break
    case '5':
      month = '六月'
      break
    case '6':
      month = '七月'
      break
    case '7':
      month = '八月'
      break
    case '8':
      month = '九月'
      break
    case '9':
      month = '十月'
      break
    case '10':
      month = '十一月'
      break
    case '11':
      month = '十二月'
      break
  }
  return month
}

// 时间轴样式
export const yearScaleCss = function() {
  return 'yearScaleStyle'
}
export const monthScaleCss = function() {
  return 'monthScaleStyle'
}
