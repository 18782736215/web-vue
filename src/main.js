import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'nprogress/nprogress.css' // nprogress的样式
import '@/style/base.scss' // 引入全局样式
import Base from './Base.js'
import '@/plugins/element' // 按需引入 element
import 'animate.css'
import '@/config/rem.js'
import Directives from './directives'
import VueAMap from 'vue-amap' // 基于 Vue 2.x 与高德的地图组件
import '@/router/permission'
import SlideVerify from 'vue-monoplasty-slide-verify' // 图形验证码
import VueDraggableResizable from 'vue-draggable-resizable'
import 'vue-draggable-resizable/dist/VueDraggableResizable.css'

import PrintNb from 'vue-print-nb'
Vue.use(PrintNb)

// 聊天组件
import LemonImui from './plugins/lemon-imui'
Vue.use(LemonImui)

// 打印
import Print from './plugins/print'
Vue.use(Print)
// TODO 测试时使用，上线删除
// if (process.env.NODE_ENV === 'production') {
//   const { mockXHR } = require('./mock')
//   mockXHR()
// }

Vue.use(Base, App)
Vue.use(Directives)
Vue.use(SlideVerify)
Vue.component('vue-draggable-resizable', VueDraggableResizable)
// 地图引入
window._AMapSecurityConfig = {
  securityJsCode: '5ae70e4f7c9f6b66df80ebaf29742a9b' // xtl
}
Vue.use(VueAMap)
VueAMap.initAMapApiLoader({
  key: '0908f837dfc0d184471db69d0789f705', // xtl
  plugin: ['AMap.PlaceSearch', 'AMap.TruckDriving', 'AMap.Driving', 'AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor', 'AMap.Geocoder', 'AMap.Geolocation', 'AMap.MarkerClusterer'],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4',
  uiVersion: '1.0' // 版本号
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
