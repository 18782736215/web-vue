import { _getSessionItem, _setSessionItem } from '@/utils/modules/tool'
import { reqLoginOut } from '@/api/login.js'
import SYS_CONFIG from '@/config/system-config.js'
import { reqDDInfo } from '@/api/login.js'
import { _decodeString } from '@/utils/modules/tool'
let parentUrl = document.location.origin + '' // eg: document.location.origin + '/...pc/homepage'

const user = {
  state: {
    isLogin: false, // 判断是否登录
    userInfo: {}, // 登录人当前信息
    permission: [], // 权限信息
    menuList: [], // 左侧菜单树渲染
    [SYS_CONFIG.TOKEN_ACCESS]: '', // token
    homePath: '', // 登录进入的第一页
    ddInfo: {
      corpId: '', // 钉钉里的企业id
      appid: '', // appid
      response_type: 'code',
      scope: 'snsapi_login',
      state: 'STATE',
      redirect_uri: encodeURIComponent(parentUrl) // 重定向地址
    }, // 存放钉钉相关的配置
    wxInfo: {
      appid: '', // 公众号appid wx*******
      scope: 'snsapi_login', // 网页默认即可
      redirect_uri: encodeURIComponent('/home'), // 授权成功后回调的url
      state: Math.ceil(Math.random() * 1000), // 可设置为简单的随机数加session用来校验
      style: 'black', // 提供"black"、"white"可选。二维码的样式
      href: '' // 外部css文件url，需要https
    } // 存放微信相关的配置
  },
  getters: {
    userInfo: state => state.userInfo,
    // 获取权限信息
    permission: function(state) {
      return type => {
        let arr = state.permission
        return _getSessionItem(arr, type)
      }
    }
  },
  mutations: {
    SET_LOGIN: (state, view) => {
      state.isLogin = view
    },
    SET_HOME_PATH: (state, view) => {
      state.homePath = view
    },
    SET_MENULIST: (state, view) => {
      state.menuList = view
      _setSessionItem('menuList', view)
    },
    // 存储token
    SET_TOKEN: (state, view) => {
      state[SYS_CONFIG.TOKEN_ACCESS] = view
      _setSessionItem(SYS_CONFIG.TOKEN_NAME, view ? SYS_CONFIG.TOKEN_PREFIX + view : '')
      _setSessionItem(SYS_CONFIG.TOKEN_ACCESS, view || '')
    },
    SET_USER_INFO: (state, view) => {
      let data = Object.assign({}, state.userInfo, view)
      state.userInfo = data
      _setSessionItem('userInfo', data)
      view.permissionTreeNodes = Array.isArray(view.permissionTreeNodes) ? view.permissionTreeNodes : []
      _setSessionItem('permissionTreeNodes', view.permissionTreeNodes)
      if (view.permissionTreeNodes[0]) {
        let item = view.permissionTreeNodes[0]
        state.homePath = (Array.isArray(item.children) && item.children.length > 0 ? item.children[0]['permissionUrl'] : '') || item.permissionUrl || ''
      } else {
        state.homePath = ''
      }
    },
    SET_DDINFO: (state, view) => {
      state.ddInfo = view
    }
  },
  actions: {
    // 存储用户信息
    setUserInfo({ commit }, { token, user }) {
      commit('SET_USER_INFO', user)
      commit('SET_TOKEN', token)
    },
    // 退出
    async reqLoginOut({ state, dispatch }) {
      let param = {
        name: state.userInfo.name,
        phone: state.userInfo.phone
      }
      await reqLoginOut(param)
      dispatch('DO_LOGIN_OUT')
      return Promise.resolve(true)
    },
    // 获取钉钉相关信息
    reqDDInfo({ commit }) {
      return new Promise((resolve, reject) => {
        reqDDInfo()
          .then(res => {
            if (res.code == 0) {
              commit('SET_DDINFO', _decodeString(res.data))
            }
            resolve()
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    // 退出 清空数据
    DO_LOGIN_OUT({ commit }) {
      commit('SET_USER_INFO', {})
      commit('SET_LOGIN', false)
      commit('SET_HOME_PATH', '')
      localStorage.removeItem('ZLSKWEB')
      sessionStorage.clear()
    }
  }
}
export default user
