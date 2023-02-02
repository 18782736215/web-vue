/**
 * 登录相关接口
 */
import $http from '@/config/request.js'
import zleMessage from '@/config/zle-message' // 引入消息提示
// 用户名密码登录
export const reqLoginByPassword = (params = {}) => {
  return new Promise((resolve, reject) => {
    $http({
      method: 'get',
      url: '/talent-service/login/loginByPassword/1',
      params
    }).then(res => {
      if (res.code != 0) {
        zleMessage.error(res.message || '请求失败')
      }
      resolve(res)
    })
  })
}

export const reqGetHotJob = () => {
  return new Promise(resolve => {
    $http({
      method: 'get',
      url: '/talent-service/governmentCount/getHotJob',
      params: { jobType: 'ONE_MONTH' },
      showLoading: true
    })
      .then(res => {
        if (res.code != 0) {
          zleMessage.error(res.message || '请求失败')
        }
        resolve(res)
      })
      .catch(res => {
        console.error('test', res)
      })
  })
}

export const reqGetHotJob2 = () => {
  return $http({
    method: 'get',
    url: '/talent-service/governmentCount/list',
    showLoading: false
  })
}
// 用户名密码登录
export const reqLoginOut = (params = {}) => {
  return new Promise((resolve, reject) => {
    $http({
      method: 'post',
      url: '/talent-service//customerInfo/loginOut',
      params
    }).then(res => {
      if (res.code != 0) {
        zleMessage.error(res.message || '请求失败')
      }
      resolve(res)
    })
  })
}
export const reqDDInfo = () => {}
