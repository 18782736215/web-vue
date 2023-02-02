/**
 * @description 自动import导入所有 api 模块
 */
const files = require.context('./model', false, /\.js$/)
const modules = {}
files.keys().forEach(key => {
  modules[formName(key)] = files(key).default
})

// 格式化名字
function formName(name) {
  return name.replace('v-', '').replace(/(\.\/|\.js)/g, '')
}
export default {
  install(Vue) {
    Object.keys(modules).forEach(key => {
      Vue.directive(key, modules[key])
    })
  }
}
