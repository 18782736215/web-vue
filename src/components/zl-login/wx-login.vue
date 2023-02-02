<template>
  <!-- 微信登录 -->
  <div class="wx-login">
    <div id="wx_container" />
  </div>
</template>

<script>
export default {
  name: 'WxLogin',
  props: {
    wxInfo: {
      type: Object,
      default: () => {},
      required: true
    }
  },
  data() {
    return {}
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      const s = document.createElement('script')
      s.type = 'text/javascript'
      s.src = 'https://res.wx.qq.com/connect/zh_CN/htmledition/js/wxLogin.js'
      const wxElement = document.body.appendChild(s)
      let config = {
        id: 'wx_container', // 需要显示的容器id
        appid: '', // 公众号appid wx*******
        scope: 'snsapi_login', // 网页默认即可
        redirect_uri: encodeURIComponent(''), // 授权成功后回调的url
        state: Math.ceil(Math.random() * 1000), // 可设置为简单的随机数加session用来校验
        style: 'black', // 提供"black"、"white"可选。二维码的样式
        href: '' // 外部css文件url，需要https
      }
      Object.assign(config, this.wxInfo)
      wxElement.onload = function() {
        var obj = new window.WxLogin(config)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.wx-login {
  padding: 10px;
}
</style>
