const baseSize = 32
function setRem() {
  if (document.documentElement.clientWidth <= 750) {
    const scale = document.documentElement.clientWidth / 750
    document.documentElement.style.fontSize = baseSize * Math.min(scale, 2) + 'px'
  } else {
    const scale = 750 / 750
    document.documentElement.style.fontSize = baseSize * Math.min(scale, 2) + 'px'
  }
}
setRem()
window.onresize = function() {
  setRem()
}
