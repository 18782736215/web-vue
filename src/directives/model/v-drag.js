/*
 拖拽节点
*/
const vDrag = {
  // 指令的定义
  bind: function(el) {
    let oDiv = el // 获取当前元素
    oDiv.onmousedown = e => {
      // 算出鼠标相对元素的位置
      let disX = e.clientX - oDiv.offsetLeft
      let disY = e.clientY - oDiv.offsetTop
      document.onmousemove = e => {
        // 用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
        let left = e.clientX - disX
        let top = e.clientY - disY
        // 绑定元素位置到positionX和positionY上面
        oDiv.positionX = top
        oDiv.positionY = left
        // 移动当前元素
        oDiv.style.left = left + 'px'
        oDiv.style.top = top + 'px'
      }
      document.onmouseup = e => {
        document.onmousemove = null
        document.onmouseup = null
      }
    }
  }
}
export default vDrag
