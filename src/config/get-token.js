/**
 * 获取token
 */
import SYS_CONFIG from '@/config/system-config'
import store from '@/store'
import { _getSessionItem, _getQueryString, _setSessionItem } from '@/utils/modules/tool'
function getTokenM() {
  let myToken = ''
  switch (process.env.NODE_ENV) {
    case 'development':
      // 开发环境配置
      myToken = _getSessionItem(SYS_CONFIG.TOKEN_ACCESS)
      break
    case 'production':
      // 生产环境配置
      break
  }

  // 获取token 优先获取路径传参上的
  if (_getQueryString(SYS_CONFIG.TOKEN_ACCESS)) {
    // 获取地址栏token
    myToken = decodeURIComponent(_getQueryString(SYS_CONFIG.TOKEN_ACCESS))
  } else {
    // 获取存储token
    myToken = _getSessionItem(SYS_CONFIG.TOKEN_ACCESS) || ''
  }
  store.commit('SET_TOKEN', myToken)
  return myToken
}
export default getTokenM
