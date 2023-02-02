import axios from 'axios'
import { Loading } from 'element-ui'
import router from '@/router/index.js'
import getTokenM from '@/config/get-token.js'
import { _uniqueId } from '@/utils/modules/tool'
import SYS_CONFIG from './system-config'
import store from '@/store'

const LOADING_INSTANCE = {} // 储存当前页面加载的 loading
window.AXIOS_CANCEL = [] // 全局定义一个存放取消请求的标识

let http = axios.create({
  baseURL: SYS_CONFIG.BASE_URL,
  timeout: SYS_CONFIG.REQUEST_TIME,
  // 跨域请求是否提供凭据信息(cookie、HTTP认证及客户端SSL证明等)
  // withCredentials属于XMLHttpRequest对象下的属性，可以对其进行查看或配置
  withCredentials: SYS_CONFIG.WITH_CREDENTIALS,
  headers: SYS_CONFIG.HEADERS, // 默认请求头
  transformRequest: [
    function(data) {
      var newData = null
      if (Object.prototype.toString.call(data) === '[object Array]') {
        newData = []
      } else if (Object.prototype.toString.call(data) === '[object Object]') {
        newData = {}
      }
      for (let k in data) {
        if (Object.prototype.hasOwnProperty.call(data, k) === true) {
          newData[encodeURIComponent(k)] = data[k]
        }
      }
      if (newData == undefined) {
        return data
      } else {
        return JSON.stringify(newData)
      }
    }
  ]
})
// 请求拦截器
http.interceptors.request.use(
  config => {
    /* ------- loading start ------ begin*/
    if (!Object.keys(config).includes('showLoading')) {
      config.showLoading = SYS_CONFIG.SHOW_LOADING
    }
    if (config.showLoading) {
      // 获取唯一 loadName
      config.loadName = _uniqueId()
      startLoading(config.loadName)
    }
    /* ------- loading start ------ end*/
    // TODO 目前还在开发，所以注释掉取消拦截，上线需要添加
    // 添加取消标记
    // config.cancelToken = new axios.CancelToken(cancel => {
    //   window.AXIOS_CANCEL.push({
    //     cancel,
    //   })
    // })
    return config
  },
  err => {
    endLoading()
    console.error(err)
    return Promise.reject(err)
  }
)

// 响应拦截器
http.interceptors.response.use(
  res => {
    /* ------- loading start ------ begin*/
    let { config } = res
    if (config.showLoading) {
      // 获取唯一 loadName
      endLoading(config.loadName)
    }
    /* ------- loading start ------ end*/
    let resAll = SYS_CONFIG.RES_ALL // 是否返回所有返回体
    if (Object.keys(config).includes('resAll')) {
      resAll = config.resAll
    }
    return resAll ? res : res.data || { code: 0, res: res.data }
  },
  error => {
    // 遇到报错，关闭所有
    endLoading('closeAllLoading')
    return interceptorsErr(error)
  }
)

/* 上传类型控制  begin*/
/**
 * @param {Object} requestParam 同axios请求参数
 * @returns {Object} Promise 类型
 */
async function apiAxios(requestParam) {
  if (Object.prototype.toString.call(requestParam) !== '[object Object]') {
    console.error('function apiAxios:request param must be an object')
    return false
  }
  let { method, data, params, headers } = requestParam
  method = (method || 'get').toUpperCase()
  requestParam.method = method
  requestParam.data = data
  requestParam.params = params
  let isAuth = SYS_CONFIG.IS_AUTH
  if (Object.keys(requestParam).includes('isAuth')) {
    isAuth = typeof requestParam.isAuth == 'boolean' ? requestParam.isAuth : SYS_CONFIG.IS_AUTH
  }
  if (isAuth) {
    requestParam.headers = Object.assign({ [SYS_CONFIG.TOKEN_NAME]: getTokenM() }, headers)
  }
  return http(requestParam)
}

/* 上传类型控制 end */
/* -----------------loading----------------- begin*/
function startLoading(loadName) {
  LOADING_INSTANCE[loadName] = Loading.service({
    target: '.el-main',
    text: '拼命加载中...',
    background: 'rgba(255, 255, 255, 0.3)'
  })
}
function endLoading(loadName) {
  if (loadName === 'closeAllLoading') {
    Object.keys(LOADING_INSTANCE).forEach(key => {
      endLoading(key)
    })
  } else if (LOADING_INSTANCE[loadName] != null) {
    LOADING_INSTANCE[loadName].close()
  }
}
/* -----------------loading----------------- end*/

// 退出登录
function doLoginOut() {
  setTimeout(() => {
    store.dispatch('DO_LOGIN_OUT')
    router.push('/login')
  }, 2000)
}

// 返回错误类型控制
function interceptorsErr(error) {
  // 如果遇到报错，取消后面的请求
  endLoading()
  let status = ''
  let message = ''
  if (error && error.response) {
    status = error.response.status || ''
    message = error.response.data.message || ''
  }
  if (status == 400) {
    message = '登录错误' + (message || '') + '，请重新登录'
    doLoginOut()
  } else if (status == 401) {
    message = (message || '登录验证失败') + '，请重新登录'
    doLoginOut()
  } else if (status == 403) {
    message = message || '权限验证失败'
    doLoginOut()
  } else if ([500, 502].includes(status)) {
    message = '网络错误，请稍后再试'
  } else if (status == 404) {
    message = '404没有找到对应接口'
  } else {
    message = message || status + '请求失败'
  }
  cancelResM()
  let resParam = { code: 11, message: message || '请求失败，请求已被拦截', responseBody: null }
  return resParam
}

// 如果遇到报错，取消后面的请求
function cancelResM() {
  // 获取缓存的 请求取消标识 数组，取消所有关联的请求
  let cancelArr = window.AXIOS_CANCEL || []
  cancelArr.forEach((ele, index) => {
    ele.cancel('取消请求') // 在失败函数中返回这里自定义的错误信息
    delete window.AXIOS_CANCEL[index]
  })
}
export default apiAxios
