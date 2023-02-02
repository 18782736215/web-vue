/**
 * @description 自动import导入所有 api 模块
 * 如果是多次使用，写在 api/modules 下
 * 如果使用仅单个文件，写在月 api/index.js 同级
 */
const files = require.context('./modules', false, /\.js$/)
const modules = {}
files.keys().forEach(key => {
  modules[formName(key)] = files(key)
})

function formName(name) {
  name = name.replace(/(\.\/|\.js)/g, '')
  let str = name.split('-')
  str = str.map((v, i) => {
    return i == 0 ? v : v.substr(0, 1).toUpperCase() + v.substr(1)
  })
  return str.join('')
}
export default modules
