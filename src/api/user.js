/**
 * 获取当前用户信息接口
 */
import request from '@/config/request.js'
import { _getSessionItem } from '@/utils/modules/tool'
import SYS_CONFIG from '@/config/system-config.js'
import zleMessage from '@/config/zle-message' // 引入消息提示

// 获取权限信息
export const reqLoginInfo = () => {
  return new Promise((resolve, reject) => {
    request.get('/bds-code-auth-service/oauth/check_token', { token: _getSessionItem(SYS_CONFIG.TOKEN_ACCESS) || '' }, res => {
      resolve({ code: 0, data: res })
    })
  })
}
// 获取用户权限树
export const reqMenu = onlyMenu => {
  // 1是代表只有菜单， 0是代表所有
  return new Promise((resolve, reject) => {
    request.get('/bds-code-admin-service/menu/user', { clientId: SYS_CONFIG.CLIENT_ID, onlyMenu: onlyMenu || 0 }, res => {
      if (res.code == 0 && Array.isArray(res.responseBody) && res.responseBody.length > 0) {
        resolve({ code: 0, data: res })
      } else {
        zleMessage.error('当前用户暂无权限')
      }
    })
  })
}
