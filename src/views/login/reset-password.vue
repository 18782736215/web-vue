<template>
  <div class="flex_c_center">
    <div class="login">
      <div class="login-right">
        <div class="register-text">重置密码</div>
        <div class="login-form">
          <zle-form :model="form">
            <zle-form-item>
              <zle-input v-model="form.account" class="login-input" placeholder="手机号/邮箱" />
            </zle-form-item>
            <zle-form-item>
              <zle-input v-model="form.code" class="login-input" placeholder="验证码">
                <template slot="append">
                  <div class="cursor" @click="onClick">{{ buttonText }}</div>
                </template>
              </zle-input>
            </zle-form-item>
            <zle-form-item>
              <zle-input v-model="form.password" class="login-input" type="password" show-password placeholder="设置密码 6-16位数字或符号" />
            </zle-form-item>
          </zle-form>
          <zle-checkbox v-model="accepted" class="accept-agreement">我已阅读并同意 <span class="agreement">《XXXX服务协议》《隐私政策》</span></zle-checkbox>
          <zle-button class="login-button" type="primary">重置</zle-button>
        </div>
        <div class="register">
          我有账号？
          <zle-button type="text" class="register-button" @click="goLogin">立即登录</zle-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        account: '',
        password: '',
        code: ''
      },
      accepted: false,
      buttonText: '获取验证码',
      countDown: 0
    }
  },

  methods: {
    changTab(val) {
      this.activeP = val
    },
    goLogin() {
      this.$router.push({
        path: '/passwordLogin'
      })
    },
    onClick() {
      if (this.buttonText == '获取验证码') {
        this.buttonText = '60s后重新获取'
        this.countDown = 60
        this.startCountDown()
      }
    },
    startCountDown() {
      const interval = setInterval(() => {
        this.countDown--
        this.buttonText = `${this.countDown}s后重新获取`
        if (this.countDown === 0) {
          clearInterval(interval)
          this.buttonText = '获取验证码'
        }
      }, 1000)
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
    .login-right {
      width: 100%;
      height: 100%;
      .register-text {
        margin: 63px auto 37px auto;
        font-size: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .login-form {
        width: 360px;
        margin: 0 auto 24px auto;
        .login-input {
          ::v-deep .el-input__inner {
            border-color: #63aae3;
          }
          ::v-deep .el-input-group__append,
          .el-input-group__prepend {
            background-color: #add6f8;
            color: #2b66c8;
            border-color: #63aae3;
          }
        }
        .accept-agreement {
          font-size: 12px;
          color: #888;
          margin-bottom: 34px;
          .agreement {
            color: #3676e1;
          }
        }
        .login-button {
          width: 360px;
          height: 56px;
          background-color: #3676e1;
          border-color: #3676e1;
        }
      }
      .register {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 13px;
        .register-button {
          color: #3676e1;
        }
      }
    }
  }
}
</style>
