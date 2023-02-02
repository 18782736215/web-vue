<template>
  <div class="flex_c_center">
    <div class="login">
      <password-login v-if="isPasswordLogin" @loginChange="isPasswordLogin = false" @login="formLogin" />
      <wx-login v-else @loginChange="isPasswordLogin = true" />
    </div>
  </div>
</template>

<script>
import PasswordLogin from '@/views/login/password-login/password-login'
import WxLogin from '@/views/login/wx-login/wx-login'
import { mapState } from 'vuex'
import { reqLoginByPassword } from '@/api/login'
export default {
  components: { PasswordLogin, WxLogin },
  data() {
    return {
      isPasswordLogin: true
    }
  },
  computed: {
    ...mapState({
      homePath: state => state.user.homePath // 登录进入页面
    })
  },
  methods: {
    async doLogin() {
      let param = {
        name: 'admin',
        password: 'admin2099',
        loginType: 'MANAGE'
      }
      let res = await reqLoginByPassword(param)
      if (res.code == 0) {
        this.$store.commit('SET_LOGIN', true)
        this.$store.commit('SET_HOME_PATH', '/example')
        this.$store.dispatch('setUserInfo', res.responseBody)
        this.$store.commit('SET_HOME_PATH', '/example')
        console.log(this.homePath)
        this.$router.push(this.homePath)
      }
    },
    formLogin(val) {
      if (val) {
        // 调用表单登录接口
        this.doLogin()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.flex_c_center {
  background: url('../../assets/img/login/logo.png') 2% 3% no-repeat, url('../../assets/img/login/bg.png') 10% 50% no-repeat, linear-gradient(to bottom left, #fff, #0b58d8);
  background-size: auto, 50%, auto;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  .login {
    margin-left: 53%;
    display: flex;
    width: 550px;
    height: 580px;
    background-color: #dde8f6;
    border-radius: 20px;
  }
}
</style>
