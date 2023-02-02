// TODO 测试使用
import templatePage from '@/layout/other/template-page'
// 系统路由
const routes = [
  {
    name: 'example',
    path: '/example',
    meta: {
      title: '组件示例',
      icon: '',
      affix: true
    },
    component: () => import('@/views/example')
  },
  {
    name: 'exampleTable',
    path: '/exampleTable',
    meta: {
      title: '示例页面',
      icon: '',
      affix: true
    },
    component: () => import('@/views/example/table.vue')
  },
  {
    name: 'exampleTable1',
    path: '/exampleTable1',
    meta: {
      title: '示例页面1'
    },
    component: templatePage,
    children: [
      {
        name: 'exampleTable2',
        path: '/exampleTable2',
        meta: {
          title: '示例页面2',
          icon: ''
        },
        component: () => import('@/views/example/table.vue')
      },
      {
        name: 'exampleTable3',
        path: '/exampleTable3',
        meta: {
          title: '示例页面3',
          icon: ''
        },
        component: () => import('@/views/example/table.vue')
      },
      {
        name: 'passwordLogin',
        path: '/passwordLogin',
        meta: {
          title: '密码及微信登录',
          icon: ''
        },
        component: () => import('@/views/login/password-login.vue')
      },
      {
        name: 'register',
        path: '/register',
        meta: {
          title: '注册',
          icon: ''
        },
        component: () => import('@/views/login/register.vue')
      },
      {
        name: 'resetPassword',
        path: '/resetPassword',
        meta: {
          title: '重置密码',
          icon: ''
        },
        component: () => import('@/views/login/reset-password.vue')
      }
    ]
  }
]

export default routes
