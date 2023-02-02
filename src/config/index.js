const DEFAULT_CONFIG = {

  // 版本号
  APP_VER: '1.0.0',

  // 内核版本号
  CORE_VER: '1.0.0',

  // 布局 默认：default | 通栏：header | 经典：menu | 功能坞：dock
  // dock将关闭标签和面包屑栏
  LAYOUT: 'default',

  // 是否开启多标签
  LAYOUT_TAGS: true,

  // 前端数据是否使用加密 //TODO 配置线上和本地区别开
  ENCRYPTION: process.env.NODE_ENV == 'production',

  // 主题色
  PRIMARY_COLOR: '#0052d9'
}

module.exports = DEFAULT_CONFIG
