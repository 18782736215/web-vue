/**
 * 项目基础配置、请求配置
 * 根据项目情况 看是否使用
 */
export const BASE_URL = process.env.NODE_ENV == 'production' ? document.location.origin : ''
export const systemConfig = {
  BASIC: 'Basic dnVlMnBybzp2dWUycHJvX3NlY3JldA==', // TODO 这里请求登录时需要修改
  CLIENT_ID: 'WEB_VUE2_PC', // 请求中台获取权限菜单标志

  // 配置手机端登录时是否跳转手机端
  PUBLIC_PATH_PC: '/bdsoms-web/', // pc端代理
  PUBLIC_PATH_MO: '/bdsoms-web-mobile/', // 手机端代理

  IS_MOBILE_LOGIN: true, // true 代表在手机上打开，会跳转手机端页面

  /* --- 请求相关配置 ---- begin*/
  BASE_URL: BASE_URL, // 项目 origin 地址配置
  REQUEST_TIME: 10000, // 请求超时断开
  WITH_CREDENTIALS: true, // 跨域请求是否提供凭据信息(cookie、HTTP认证及客户端SSL证明等)
  SHOW_LOADING: true, // 请求 loading

  IS_AUTH: true, // 是否携带权限验证 如果有登录相关，默认为true
  REQUEST_CACHE: false, // 请求是否开启缓存--当前还未使用
  HEADERS: { // 追加其他头
    'Content-Type': 'application/json;charset=UTF-8'
  },
  RES_ALL: false, // 是否返回处理后的data 默认false代表处理后的，true代表所有

  // 权限认证相关
  TOKEN_NAME: 'Authorization', // TokenName
  TOKEN_PREFIX: '', // Token 前缀，注意最后有个空格，如不需要需设置空字符串 //Bearer
  TOKEN_ACCESS: 'token', // 跳转时传参，与后端传参一致
  TOKEN_REFRESH: 'refresh_token' // 刷新token
  /* --- 请求相关配置 ---- end*/
}
export default Object.freeze({ ...systemConfig })
