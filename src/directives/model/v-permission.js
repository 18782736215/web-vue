/*
  权限校验
*/
import store from '@/store'
const vPermission = {
  inserted(el, bindling) {
    // bindling.value为指令的绑定值
    let perVal = bindling.value
    if (bindling.value) {
      let pers = store.state.user.permission
      // hasPer为true为有权限
      // hasPer为false为无权限
      let hasPer = pers.some(item => {
        return item == perVal
      })
      // 没有权限隐藏此元素
      if (!hasPer) {
        el.style.display = 'none'
      }
    }
  }
}
export default vPermission
