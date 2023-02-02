<template>
  <!-- 钉钉登录 -->
  <div class="qr_code">
    <div id="login_container" />
  </div>
</template>

<script>
// 全局注册 window.DDLogin方法
!(function(window, document) {
  function d(a) {
    var e
    var c = document.createElement('iframe')
    var d = 'https://login.dingtalk.com/login/qrcode.htm?goto=' + a.goto
    d += a.style ? '&style=' + encodeURIComponent(a.style) : ''
    d += a.href ? '&href=' + a.href : ''
    c.src = d
    c.frameBorder = '0'
    c.allowTransparency = 'true'
    c.scrolling = 'no'
    c.width = a.width ? a.width + 'px' : '365px'
    c.height = a.height ? a.height + 'px' : '400px'
    e = document.getElementById(a.id)
    e.innerHTML = ''
    e.appendChild(c)
  }
  window.DDLogin = d
})(window, document)

import { _toParams } from '@/utils/modules/tool.js'
export default {
  name: 'DdLogin',
  props: {
    ddInfo: {
      type: Object,
      default: () => {},
      required: true
    }
  },
  data() {
    return {
      qrLoginForm: {
        code: ''
      }
    }
  },
  mounted() {
    // 当钉钉扫码以后会自动跳转到新的页面，会将code放在跳转的url上
    this.qrLoginForm.code = this.$route.query.code
    // 若此页面初始化时有code就判断登录，反之说明时第一次打开此页面，需要初始化二维码
    if (this.qrLoginForm.code) {
      // 登录
      let param = {
        code: this.qrLoginForm.code
      }
      this.$emit('DDLogin', param)
    } else {
      // 初始化二维码
      this.myQrLogin()
    }
  },
  methods: {
    // 生成二维码 并且绑定登录事件
    myQrLogin() {
      let self = this
      let loginParam = this.ddInfo
      var gotoUrl = encodeURIComponent(`https://oapi.dingtalk.com/connect/qrconnect${_toParams(loginParam)}`)
      // 初始化二维码
      window.DDLogin({
        id: 'login_container', // 二维码在页面上挂载的元素id，需要在dom渲染完成后再调用，不然拿不到元素
        goto: gotoUrl,
        style: 'border:none;background-color:#FFFFFF;',
        width: '300',
        height: '300'
      })
      // width和height不代表二维码的大小，二维码大小是固定的210px210px。
      var handleMessage = function(event) {
        let { origin } = event
        // 判断是否来自ddLogin扫码事件。
        if (origin == 'https://login.dingtalk.com') {
          let { data: loginTmpCode } = event // 拿到loginTmpCode后就可以在这里构造跳转链接进行跳转了
          // 通过JS获取到loginTmpCode后，需要由你构造并跳转到如下链接：
          // `https://oapi.dingtalk.com/connect/oauth2/sns_authorize?appid=APPID&response_type=code&scope=snsapi_login&state=STATE&redirect_uri=REDIRECT_URI&loginTmpCode=loginTmpCode`
          // 此链接处理成功后，会302跳转到你goto参数指定的redirect_uri，并向url参数中追加临时授权码code及state两个参数。
          let tempUrl = `https://oapi.dingtalk.com/connect/oauth2/sns_authorize?appid=${self.ddInfo.appId}&response_type=code&scope=snsapi_login&state=STATE&redirect_uri=${encodeURIComponent(self.ddInfo.redirectUri)}&loginTmpCode=${loginTmpCode}`
          //
          window.location.href = tempUrl
        }
      }
      // 全局组加message、onmessage监听事件，当钉钉返回信息时，就会调用handleMessage方法跳转
      if (typeof window.addEventListener != 'undefined') {
        window.addEventListener('message', handleMessage, false)
      } else if (typeof window.attachEvent != 'undefined') {
        window.attachEvent('onmessage', handleMessage)
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
