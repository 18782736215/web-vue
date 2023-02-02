import { default as $u } from '@/utils' // 引入utils中的所有方法并注册
import { downLoadFileConfirm, downLoadFile } from '@/api/modules/export-excel.js'
/* -----------注册全局组件----------- start*/
import ZlHeader from '@/components/zl-layout/header'
import ZlSection from '@/components/zl-layout/section'
import ZlCharts from '@/components/zl-charts'
import ZlTableSelect from '@/components/zl-table-select/table-select'
import ZlBacktop from '@/components/zl-backtop/backtop'
/* -----------注册全局组件----------- end*/
import http from '@/config/request.js'
import api from './api' // 自动导入所有的api
import zleMessage from '@/config/zle-message' // 引入消息提示,当前仅展示一个消息提示
import table from '@/config/table.js'
const components = [ZlTableSelect, ZlHeader, ZlSection, ZlCharts, ZlBacktop]
export default {
  install(Vue) {
    /* -----------注册全局组件----------- start*/
    // #region
    components.forEach(component => {
      Vue.component(component.name, component)
    })
    // #endregion
    /* -----------注册全局组件----------- end*/
    /* -----------自定义指令----------- start*/
    // #region
    // #endregion
    /* -----------自定义指令----------- end*/
    /* -----------基础配置注册----------- start*/
    // #region
    Vue.prototype.$http = http // 封装请求
    Vue.prototype.$API = api // 页面的请求接口注册
    Vue.prototype.$zleMessage = zleMessage
    // #endregion
    /* -----------基础配置注册----------- end*/
    /**
     * 跳转页面
     * @param {object} t 可以为字符（路径），可以为对象（{ path, query, meta }）
     * @param {object} type 跳转类型
     * { path, query } path:跳转的路径,query:传参  query.replace 为true时，跳转方式为replace
     *
     */
    Vue.prototype.$go = function(t) {
      try {
        const goList = ['go', 'push', 'replace', 'forward', 'back']
        let way = 'push'
        if (typeof t == 'string') {
          // 字符串 默认跳转 push
          this.$router[way](t)
        } else if (Object.prototype.toString.call(t) === '[object Object]') {
          // 对象 解析跳转
          let { type, path, query, meta } = t
          way = goList.includes(type) ? type : way
          if (query) {
            let obj = this.$u.tool._encode({ ...query })
            this.$router[way]({ path, query: obj, meta })
          } else {
            this.$router.push({ path, meta })
          }
        }
      } catch (error) {
        console.error(error)
      }
    }
    /* ----------- 注册utils中方法 ----------- start*/
    // #region
    Vue.prototype.$u = $u // 比较传入时间与当前时间大小
    // #endregion
    /* -----------注册utils中方法----------- end*/
    /* -----------文件下载----------- start*/
    // #region
    Vue.prototype.$downLoadFileConfirm = downLoadFileConfirm // 导出excel，增加了确认弹窗
    Vue.prototype.$downLoadFile = downLoadFile // 导出excel，没有确认弹窗
    // #endregion
    /* -----------文件下载----------- end*/
    Vue.prototype.$config = table
  }
}
