/**
    图片上传接口
 */

import $http from '@/config/request.js'
import zleMessage from '@/config/zle-message' // 引入消息提示
// 图片上传
export const reqUploadFile = ({ file, showMessage = true }) => {
  if (!Array.isArray(file) && !file) {
    throw new Error('上传图片参数不为空')
  }
  let fileList = Array.isArray(file) ? file : [file]
  let fileFormData = new FormData()
  fileList.forEach(v => {
    fileFormData.append('file', v.raw)
  })
  return new Promise(resolve => {
    $http({
      method: 'POST',
      url: `/talent-service/upload`,
      data: fileFormData,
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(res => {
      if (showMessage) {
        if (res.code == 0) {
          zleMessage.success('图片上传成功')
        } else {
          zleMessage.error(res.message || '请求失败')
        }
      }
      res.responseBody = Array.isArray(res.responseBody) ? res.responseBody : []
      resolve(res)
    })
  })
}
