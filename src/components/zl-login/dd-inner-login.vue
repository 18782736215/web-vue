<template>
  <!--   钉钉内部免登-->
  <div class="dd_inner_box">
    <div id="lottie_box" />
    <div>
      <div class="center_block" :style="{ color: defaultMsg.indexOf(msg) > -1 ? '#000' : '#FF0000' }">{{ msg }}&nbsp;&nbsp;<zle-button type="text" icon="el-icon-refresh-right" @click="doLogin" /></div>
    </div>
  </div>
</template>

<script>
import lottie from 'lottie-web'
import * as dd from 'dingtalk-jsapi'
import SYS_CONFIG from '@/config/system-config.js'
import { isMobile } from '@/utils/modules/validate.js'
import { _toParams } from '@/utils/modules/tool.js'
export default {
  name: 'DdInnerLogin',
  props: {
    ddInfo: {
      // 钉钉配置
      type: Object,
      default: () => {},
      required: true
    },
    userInfo: {
      // 存在store里的用户信息，跳转到外部浏览器需要使用
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      msg: '登陆中......',
      defaultMsg: ['登陆中......', '登陆成功,已跳转'],
      isIn: false,
      lottie: {}
    }
  },
  mounted() {
    // 钉钉登录成功前的动画
    this.lottie = lottie.loadAnimation({
      container: document.getElementById('lottie_box'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('./anime/lf20_bpqri9y8.json')
    })
    // 登录
    this.doLogin()
  },
  methods: {
    doLogin() {
      let _this = this
      dd.ready(function() {
        _this.msg = '登陆中......'
        _this.isIn = true
        dd.runtime.permission.requestAuthCode({
          corpId: _this.ddInfo.corpId, // 企业id
          onSuccess: function(info) {
            _this.$store
              .dispatch('reqQrLogin', { code: info.code }) // 钉钉登录接口需要拿到code去获取用户权限、用户信息
              .then(value => {
                // 跳转到其他的浏览器中，需要通过url携带的token验证登录
                let param = {
                  [SYS_CONFIG.TOKEN_ACCESS]: _this.userInfo[SYS_CONFIG.TOKEN_ACCESS],
                  [SYS_CONFIG.TOKEN_REFRESH]: _this.userInfo[SYS_CONFIG.TOKEN_REFRESH]
                }
                let basePath = SYS_CONFIG.IS_MOBILE_LOGIN && isMobile() ? SYS_CONFIG.PUBLIC_PATH_PC : SYS_CONFIG.PUBLIC_PATH_MO
                let url = window.location.origin + `${basePath}#/` + _toParams(param)
                // 调用此方法会跳出钉钉应用在其他浏览器打开，也可以使用项目内部自己的路由跳转，就会在钉钉内置浏览器里展示
                dd.biz.util.openLink({
                  url: url,
                  onSuccess: function(result) {
                    // 关闭加载动画
                    // 输出信息
                    _this.msg = _this.defaultMsg[1]
                    // 清除信息,不然下次会在钉钉工作台中登陆.
                  },
                  onFail: function(err) {
                    // 反馈跳转失败信息
                    _this.msg = JSON.stringify(err)
                  }
                })
              })
              .catch(err => {
                _this.msg = err.data ? (err.data.message ? err.data.message : err.status + ':' + err.data) : err.status ? err.status : '' + '服务调用失败'
                _this.$router.push({ path: '/login' })
              })
              .catch(e => {})
          },
          onFail: e => {
            _this.msg = e ? e.errorMessage : '钉钉工作台请求错误'
          }
        })
      })
      if (!_this.isIn) {
        _this.msg = '请在钉钉工作台中打开'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.dd_inner_box,
#lottie_box {
  width: 100%;
  height: 100%;
}
.center_block {
  text-align: center;
  margin: -10% auto 0;
  color: #000;
}
</style>
