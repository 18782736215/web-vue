/* eslint-disable require-atomic-updates */
import { MessageBox } from 'element-ui'
import router from './index.js'
import TEMPLATECOM from '@/layout/other/template-page'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import SYS_CONFIG from '@/config/system-config'
import { WHITE_LIST, RESET_LOGIN } from './config'
import { _getSessionItem } from '@/utils/modules/tool.js'
import { isMobile } from '@/utils/modules/validate.js'
import store from '../store'
import jump from '@/config/jump'
import { _deepClone } from '@/utils/modules/tool.js'
import leftNav from '@/router/left-nav'

// TODO  test 为 leftNav 值，true   测试后端返回菜单时是 false
const IS_TEST = true
const VUE_APP_TITLE = process.env.VUE_APP_TITLE

// NProgress Configuration
NProgress.configure({ showSpinner: false, minimum: 0.8 })

var isAddRoutes = false // check async routes add

jump.set() // set redirect parameters
router.beforeEach(async(to, from, next) => {
  NProgress.start()
  if (to.query.activeMenu) {
    to.meta.activeMenu = to.query.activeMenu
  }
  const token = store.state.user[SYS_CONFIG.TOKEN_ACCESS]
  const jumpParam = _deepClone(jump.param)
  document.title = to.meta.title ? `${to.meta.title}·${VUE_APP_TITLE}` : VUE_APP_TITLE
  try {
    // 设置默认路由拦截
    if (to.path == '/' && isAddRoutes) {
      if (store.state.user.homePath) {
        next(store.state.user.homePath)
      } else {
        doLoginOut()
      }
      NProgress.done()
      return false
    }
    // check jump
    if (jumpParam[SYS_CONFIG.TOKEN_ACCESS]) {
      jump.remove(SYS_CONFIG.TOKEN_ACCESS)
      // user info
      await store.dispatch('reqPermiss')
      if (jumpParam.redirectURL) {
        jump.remove('redirectURL')
        let redirectURL = decodeURIComponent(jumpParam.redirectURL)
        next(redirectURL)
      } else {
        next(store.state.user.homePath)
      }
    } else if (jumpParam.code) {
      jump.remove('code')
      // reqQrLogin
      await store.dispatch('reqQrLogin', { code: jumpParam.code, is_tmp: 1 })
      // user info
      await store.dispatch('reqPermiss')
      if (SYS_CONFIG.IS_MOBILE_LOGIN && isMobile()) {
        // jump mobile
        goMobile(token)
      } else {
        next(store.state.user.homePath)
      }
    }
    // white list
    if (RESET_LOGIN.includes(to.path)) {
      store.dispatch('DO_LOGIN_OUT')
      isAddRoutes = false
      next()
    } else if (WHITE_LIST.includes(to.path)) {
      // 白名单
      next()
    } else {
      // if (token && store.state.user.isLogin) {
      if (isAddRoutes) {
        next()
      } else {
        // add async routes
        let menuList = []
        if (IS_TEST) {
          // TEST leftNav
          menuList = leftNav
        } else {
          let permission = _getSessionItem('permissionTreeNodes') || []
          // 由于后端仅返回的是菜单排序信息，所有仅根据path做匹配，路由加载，还是由leftNav中的路由决定
          let flatRouteS = filterAsyncRouter(permission)
          if (menuList.length == 0) {
            store.dispatch('DO_LOGIN_OUT')
            next('/login') // redirect login
            MessageBox.confirm('当前用户暂无系统权限，请联系管理员', '提示', {
              confirmButtonText: '确定',
              showCancelButton: false
            })
              .then(() => {})
              .catch(() => {})
            return
          }
        }
        store.commit('SET_MENULIST', menuList)
        menuList.forEach(v => {
          router.addRoute('layout', v)
        })
        // 设置未加载路由跳转首页
        router.addRoute('', { path: '*', redirect: '/' })
        isAddRoutes = true
        // console.log('menuList', menuList)
        next({ ...to, replace: false })
      }
      // } else {
      //   doLoginOut()
      // }
    }
  } catch (error) {
    console.error('login', error)
    doLoginOut() // redirect login
  }
})

function doLoginOut() {
  store.dispatch('DO_LOGIN_OUT')
  NProgress.done()
  router.replace('/login') // redirect login
}
router.afterEach(() => {
  NProgress.done()
  // scroll top
  window.scrollTo(0, 0)
})
/*
// 获取路由
function getAsyncRouter(permission, total) {
  let arr = []
  total.forEach(v => {
    let index = permission.findIndex(vv => vv.path == v.path)
    if (index > -1) {
      v.id = permission[index].id
      v.children = Array.isArray(v.children) ? getAsyncRouter(permission, v.children) : []
      arr.push(v)
    }
  })
  return arr
}

// 路由扁平化
function flatRoute(route) {
  let arr = []
  route.forEach(item => {
    let obj = {}
    obj.id = item.id // 排序用
    obj.path = item.permissionUrl
    arr.push(obj)
    if (Array.isArray(item.children)) {
      arr = arr.concat(flatRoute(item.children))
    }
  })
  return arr
}*/
function filterAsyncRouter(routerMap) {
  const accessedRouters = []
  routerMap.forEach(item => {
    item.name = item.path
    // Handling external link special route
    if (item.component == '/joinUrl') {
      // deal Midrange configuration
      item.name = item.path
      item.component = TEMPLATECOM
      item.meta = {
        type: 'joinUrl',
        title: item.menuName,
        goUrl: item.perms // The jump path is here
      }
    }
    // Map route
    var route = {
      path: item.path,
      name: item.name,
      meta: item.meta,
      children: item.children ? filterAsyncRouter(item.children) : null,
      component: loadComponent(item.component)
    }
    accessedRouters.push(route)
  })
  return accessedRouters
}

function loadComponent(component) {
  let reg = /^@\/views[-/\w]+\.vue$/ // Regular check  starts  with @views, ends with .vue
  if (reg.test(component)) {
    let tmp = component.replace('@/views/', '')
    return () => import(`@/views/${tmp}`)
  } else {
    return () => import('@/layout/other/template-page.vue')
  }
}

function goMobile(token) {
  // to Mobile
  const origin = window.location.origin
  window.location.href = `${origin + SYS_CONFIG.PUBLIC_PATH_MO}#/?${SYS_CONFIG.TOKEN_ACCESS}=${token}`
}
