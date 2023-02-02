<template>
  <!-- 登录组件展示 -->
  <div>
    <zl-header>
      <h2 class="section_title">登录方式</h2>
    </zl-header>
    <zl-section header="账号登录">
      <div class="login_box">
        <zl-formLogin />
      </div>
    </zl-section>
    <zl-section header="钉钉扫码">
      <div class="login_box">
        <zl-ddLogin :dd-info="ddInfo" />
      </div>
      <zl-section class="section">参考文档：<a href="https://open.dingtalk.com/document/orgapp-server/scan-qr-code-to-log-on-to-third-party-websites" target="blank">https://open.dingtalk.com/document/orgapp-server/scan-qr-code-to-log-on-to-third-party-websites</a></zl-section>
    </zl-section>

    <zl-section header="微信登陆">
      <div class="login_box">
        <zl-wxLogin :wx-info="wxInfo" />
      </div>
      <section class="section">参考文档：<a href="https://developers.weixin.qq.com/doc/oplatform/Website_App/WeChat_Login/Wechat_Login.html" target="blank">微信扫码登录</a></section>
    </zl-section>
    <zl-section header="钉钉内部免登">
      <div v-if="version" class="login_box">
        <zl-ddInnerLogin :dd-info="ddInfo" :user-info="userInfo" />
      </div>
      <div v-else class="login_box">
        <div class="login-text">请在钉钉环境内打开</div>
      </div>
      <zl-section class="section">参考文档：<a href="https://open.dingtalk.com/document/orgapp-client/logon-free-process" target="blank">钉钉内部免登</a></zl-section>
    </zl-section>
  </div>
</template>

<script>
import zlDdLogin from '@/components/zl-login/dd-login.vue'
import zlWxLogin from '@/components/zl-login/wx-login.vue'
import zlDdInnerLogin from '@/components/zl-login/dd-inner-login.vue'
import zlFormLogin from '@/components/zl-login/form-login.vue'
import { version } from 'dingtalk-jsapi'
import { mapState } from 'vuex'
export default {
  components: {
    zlDdLogin,
    zlWxLogin,
    zlDdInnerLogin,
    zlFormLogin
  },
  data() {
    return {
      version: version
    }
  },
  computed: {
    ...mapState({
      ddInfo: state => state.user.ddInfo || {}, // 钉钉信息
      wxInfo: state => state.user.wxInfo || {}, // 微信信息
      userInfo: state => state.user.userInfo || {} // 用户信息
    })
  }
}
</script>

<style lang="scss" scoped>
.login_box {
  width: 400px;
  height: 400px;
  margin: 0 auto;
  .login-text {
    font-size: 14px;
    line-height: 3;
  }
}
</style>
