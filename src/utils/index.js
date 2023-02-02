/**
 * 统一导出项目 utils 工具
 * 获取 utils 下方法规则为
 * 使用方法一：
 *  vue下 this.$u.文件名.*.方法名
 * 使用方法二
 * import { _decode } from '@/utils/modules/tool'
 */
const modulesFiles = require.context('./modules', true, /\.js$/)

// you do not need `import app from './modules/app'`
// it will auto require all vuex module from modules file
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  // set './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value
  return modules
}, {})
export default modules
