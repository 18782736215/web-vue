import Vue from 'vue'
import VueRouter from 'vue-router'
const modulesFiles = require.context('./modules', true, /\.js$/)
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const value = modulesFiles(modulePath)
  modules = modules.concat(value.default)
  return modules
}, [])

// pc端
const routers = modules
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const router = new VueRouter({
  routes: routers
})

export default router
