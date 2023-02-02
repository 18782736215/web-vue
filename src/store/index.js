import Vue from 'vue'
import Vuex from 'vuex'
import SecureLS from 'secure-ls'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

// 数据加密
const ls = new SecureLS({
  encodingType: 'aes', // 加密类型
  isCompression: false,
  encryptionSecret: 'encryption' // PBKDF2值
})
//  Vuex 持久化 // 使用sessionStorage存储，退出需要清空sessionStorage
const vuexLocal = new VuexPersistence({
  key: 'ZLSKWEB',
  storage:
    process.env.NODE_ENV === 'production'
      ? {
        getItem: key => ls.get(key),
        setItem: (key, value) => ls.set(key, value),
        removeItem: key => ls.remove(key)
      }
      : window.sessionStorage
})
const modulesFiles = require.context('./modules', true, /\.js$/)

const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})
// console.log(modules)
export default new Vuex.Store({
  modules,
  plugins: [vuexLocal.plugin] // 使用 vuex-persist 持久化存储vuex中的数据
})
