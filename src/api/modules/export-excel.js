/**
 * 公共方法
 * 导出excel文件接口
 */
import $http from '@/config/request.js'
import { MessageBox } from 'element-ui' // 引入消息提示
/**
 * @param {*} method  GET、POST...
 * @param {*} url  请求接口地址
 * @param {*} params  请求参数
 * @param {*} fileName  文件名，需要文件后缀
 * @param {*} message  成功消息提示
 * @returns 返回传参与后端相同
 */
// 下载请求方法
export const downLoadFile = param => {
  if (!checkType(param)) return false
  return new Promise(resolve => {
    let { method, url, params, data, fileName, message, contentType } = param
    contentType = contentType || 'application/json;charset=UTF-8'
    // 'Content-Type': 'application/vnd.ms-excel;charset=UTF-8',
    $http({
      method: method,
      url: url,
      responseType: 'blob',
      headers: {
        'Content-Type': contentType
      },
      data: data || null,
      params: params || null,
      resAll: true
    })
      .then(function(res) {
        if (res.type === 'application/json') {
          // 下载失败
          const fileReader = new FileReader()
          fileReader.onloadend = () => {
            let r = JSON.parse(fileReader.result)
            message = r.message || message + '操作失败'
          }
          fileReader.readAsText(res)
          resolve({ code: 1, message: message })
        } else {
          // 下载文件
          var blob = new Blob([res.data])
          if ('download' in document.createElement('a')) {
            const link = document.createElement('a')
            link.download = fileName
            link.style.display = 'none'
            link.href = URL.createObjectURL(blob)
            document.body.appendChild(link)
            link.click()
            URL.revokeObjectURL(link.href)
            document.body.removeChild(link)
          } else {
            // 其他浏览器
            navigator.msSaveBlob(blob, fileName)
          }
          message = (message || '操作') + '成功'
          resolve({ code: 0, message: message })
        }
      })
      .catch(function(error) {
        console.error('导出失败', error)
      })
  })
}
// 导出添加确认操作
export const downLoadFileConfirm = param => {
  if (!checkType(param)) return false
  let { message = '' } = param
  MessageBox.confirm(`确认导出${message}？`, '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    customClass: 'my_confirm'
  })
    .then(() => {
      downLoadFile(param)
    })
    .catch(() => {})
}

// 检查传入参数类型 需为对象格式
function checkType(param) {
  if (Object.prototype.toString.call(param) !== '[object Object]') {
    throw new Error('param is required Object')
  } else if (!param.url) {
    throw new Error('url is required')
  }
  return true
}
