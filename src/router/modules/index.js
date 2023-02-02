// 系统路由
const routes = [
  {
    name: 'layout',
    path: '/',
    component: () => import('@/layout')
  },
  {
    name: 'login',
    path: '/login',
    meta: {
      title: '登录'
    },
    component: () => import('@/views/login/password-login.vue')
  },

  {
    name: 'permission',
    path: '/permission',
    meta: {
      title: '无权限'
    },
    component: () => import('@/layout/other/permission.vue')
  },
  {
    name: 'testPrint',
    path: '/testPrint',
    meta: {
      title: '无权限'
    },
    component: () => import('@/components/zl-print/test-print.vue')
  },
  {
    name: 'previewPrint',
    path: '/previewPrint',
    meta: {
      title: '打印'
    },
    component: () => import('@/components/zl-print/preview-print.vue')
  }
]

export default routes
