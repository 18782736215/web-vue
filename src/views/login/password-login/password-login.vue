<template>
  <div class="login-right">
    <div class="qrcode-box">
      <img class="cursor" style="height: 46px; width: 46px" src="../../../assets/img/login/weixin.png" @click="goQrcode">
      <div class="qrcode-text">
        <div class="icon">
          <img src="../../../assets/img/login/auth.png">
        </div>
        <span>微信扫码登录</span>
      </div>
    </div>
    <div class="head_tab">
      <div v-for="(item, index) in activeList" :key="index" :class="{ tab_item: true, active: activeP == index }" @click="changTab(index)">
        <p class="item_tip">{{ item }}</p>
        <div class="line_box">
          <span v-if="activeP == index" class="line" />
        </div>
      </div>
    </div>
    <div v-if="activeP == 0" class="login-form">
      <zle-form ref="loginForm" key="loginForm" :model="loginForm" :rules="loginFormRules">
        <zle-form-item prop="username">
          <zle-input v-model.trim="loginForm.username" class="login-input" placeholder="请输入用户名" onkeydown="if(event.keyCode==13){event.keyCode=0;return false;}" :maxlength="11" @keyup.enter.native="doLoginM" />
        </zle-form-item>
        <zle-form-item prop="password">
          <zle-input v-model.trim="loginForm.password" class="login-input" show-password type="password" placeholder="请输入密码" onkeydown="if(event.keyCode==13){event.keyCode=0;return false;}" @keyup.enter.native="doLoginM" />
        </zle-form-item>
      </zle-form>
      <span class="cursor forget-password" @click="goReset">忘记密码</span>
      <zle-button class="login-button" type="primary" @click="doLoginM">登录</zle-button>
    </div>
    <div v-if="activeP == 1" class="login-form">
      <zle-form :model="codeForm">
        <zle-form-item>
          <zle-input v-model="codeForm.phone" class="login-input" maxlength="11" placeholder="手机号" />
        </zle-form-item>
        <zle-form-item>
          <zle-input v-model="codeForm.code" class="login-input" placeholder="验证码">
            <template slot="append">
              <div class="cursor" @click="onClick">{{ buttonText }}</div>
            </template>
          </zle-input>
        </zle-form-item>
      </zle-form>
      <span class="cursor forget-password" @click="goReset">忘记密码</span>
      <zle-button class="login-button" type="primary">登录</zle-button>
    </div>
    <div class="register">
      没有账号？
      <zle-button type="text" class="register-button" @click="goRegister">立即注册</zle-button>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    let codeV = (rule, value, cb) => {
      if (!value) {
        return cb(new Error('密码不能为空'))
      } else {
        cb()
      }
    }
    return {
      activeP: 0,
      activeList: ['密码登录', '验证码登录'],
      loginFormRules: {
        username: [{ required: true, message: '请输入用户名', trigger: ['blur', 'change'] }],
        password: [
          {
            required: true,
            message: '请输入密码',
            validator: codeV,
            trigger: ['blur', 'change']
          }
        ]
      },
      loginForm: {
        username: '张三',
        password: '123'
      },
      codeForm: {
        phone: '',
        code: ''
      },
      buttonText: '获取验证码',
      countDown: 0
    }
  },
  methods: {
    changTab(val) {
      this.activeP = val
    },
    goQrcode() {
      this.$emit('loginChange')
    },
    doLoginM() {
      this.$emit('login', this.loginForm)
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.$emit('login', this.loginForm)
        } else {
          this.$zlMessage({
            type: 'warning',
            message: '请填写用户名和密码'
          })
          return false
        }
      })
    },
    goRegister() {
      this.$router.push({
        path: '/register'
      })
    },
    goReset() {
      this.$router.push({
        path: '/resetPassword'
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
.login-right {
  width: 100%;
  height: 100%;
  .qrcode-box {
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    margin: 42px 37px auto auto;
    .qrcode-text {
      border-radius: 5px;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      width: 115px;
      height: 30px;
      font-size: 12px;
      color: #417ed6;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #add6f8;
      .icon {
        margin-right: 5px;
        height: 100%;
        width: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
  .head_tab {
    display: flex;
    width: 300px;
    margin: 41px auto 46px auto;
    .tab_item {
      flex: 1;
      display: flex;
      flex-direction: column;
      cursor: pointer;
      .item_tip {
        display: flex;
        justify-content: center;
        padding-bottom: 5px;
        font-weight: 500;
        color: #666666;
        font-size: 16px;
      }
      .line_box {
        display: flex;
        justify-content: center;
        height: 5px;
        .line {
          border-radius: 6px;
          width: 30px;
          height: 3px;
          background-color: #2b66c8;
        }
      }
      &.active {
        .item_tip {
          font-weight: 700;
          color: #333333;
        }
      }
    }
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
    .forget-password {
      float: right;
      font-size: 13px;
      color: #888;
      margin-bottom: 34px;
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
</style>
