const Mock = require('mockjs')
const MENU_LIST = require('../menu')
// 用户信息
const USER_INFO = {
  expires_in: 43198,
  scope: 'server',
  license: 'zyajac',
  factory: '',
  deptList: [{ deptId: 6332, deptName: '致链数字科技', deptType: 1, deptTag: '' }],
  clientId: 'oms',
  mainDeptName: '四川致链数字科技公司',
  nickName: '系统管理员',
  avatar: '',
  username: 'admin',
  mainRoleName: '管理员'
}

module.exports = [
  // mock post all TODO_List form server
  // 用户名密码登录
  {
    url: '/bds-code-auth-service/oauth/token',
    type: 'post',
    response: res => {
      let loginMsg = res.body || {}
      if (loginMsg.username == 'admin' && loginMsg.password == '1231') {
        return USER_INFO
      } else {
        return {
          code: 11,
          message: '用户名或密码不正确'
        }
      }
    }
  },
  // 获取钉钉登录信息
  {
    url: '/bds-code-admin-service/oauth-client-details/ddSimpleInfo',
    type: 'get',
    response: _ => {
      return {
        code: 0,
        message: '成功',
        responseBody: 'eyJyZWRpcmVjdFVyaSI6Imh0dHA6Ly9lcnAucGF0ZXJzb24uY29tLmNuOjMwMDAvYmRzb21zLXdlYi8jL2xvZ2luIiwiY29ycElkIjoiZGluZzgwM2M4ZTgxMTg2N2ZkNTgzNWMyZjQ2NTdlYjYzNzhmIiwiYXBwSWQiOiJkaW5nOHNwcGVncHBrdHZoYXQydCJ9'
      }
    }
  },
  // 钉钉扫码登录或者是判断是否是钉钉环境，页面自动登录
  {
    url: '/bds-code-auth-service/oauth/token',
    type: 'post',
    response: _ => {
      return {
        code: 0,
        message: '登录成功',
        responseBody: USER_INFO
      }
    }
  },
  // 退出登录
  {
    url: '/bds-code-auth-service/token/logout',
    type: 'post',
    response: _ => {
      return {
        code: 0,
        message: '退出登录成功',
        responseBody: null
      }
    }
  },
  // 获取权限信息
  {
    url: '/bds-code-auth-service/oauth/check_token',
    type: 'get',
    response: _ => {
      return {
        code: 0,
        message: '成功',
        responseBody: USER_INFO
      }
    }
  },
  // 获取用户权限树
  {
    url: '/bds-code-admin-service/menu/user',
    type: 'get',
    response: _ => {
      return {
        code: 0,
        message: '成功',
        responseBody: MENU_LIST
      }
    }
  }
]
