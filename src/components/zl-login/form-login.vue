<template>
  <!-- 账号密码登录 -->
  <zle-form ref="loginForm" key="loginForm" :model="loginForm" :rules="loginFormRules">
    <zle-form-item prop="username">
      <div class="form_item">
        <!-- 加onkeydown后面的是为了阻止回车事件，触发到获取验证码事件 -->
        <zle-input v-model.trim="loginForm.username" placeholder="请输入用户名" onkeydown="if(event.keyCode==13){event.keyCode=0;return false;}" :maxlength="11" @keyup.enter.native="doLoginM">
          <i slot="prefix" class="el-icon-user form_icon" />
        </zle-input>
      </div>
    </zle-form-item>
    <zle-form-item prop="password">
      <div class="form_item">
        <!-- 加onkeydown后面的是为了阻止回车事件，触发到获取验证码事件 -->
        <zle-input v-model.trim="loginForm.password" :type="isShowPsw ? 'text' : 'password'" placeholder="请输入密码" onkeydown="if(event.keyCode==13){event.keyCode=0;return false;}" @keyup.enter.native="doLoginM">
          <i slot="prefix" class="el-icon-unlock form_icon" />
        </zle-input>
        <button class="eys_icon" type="button" @mouseenter="isShowPsw = true" @mouseleave="isShowPsw = false">
          <i class="el-icon-view" />
        </button>
      </div>
    </zle-form-item>
    <zle-form-item>
      <button class="m_login_btn" type="button" @click="doLoginM">登 录</button>
      <div class="account_style">注册账号</div>
    </zle-form-item>
  </zle-form>
</template>

<script>
export default {
  name: 'FormLogin',
  data() {
    let codeV = (rule, value, cb) => {
      if (!value) {
        return cb(new Error('密码不能为空'))
      } else {
        cb()
      }
    }
    return {
      loginForm: {
        username: '张三',
        password: '123'
      },
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
      isShowPsw: false // 是否展示明文密码
    }
  },
  methods: {
    doLoginM() {
      this.$emit('loginChange', this.loginForm)
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.$emit('loginChange', this.loginForm)
        } else {
          this.$zlMessage({
            type: 'warning',
            message: '请填写用户名和密码'
          })
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.form_item {
  display: flex;
  align-items: center;
  // border-bottom: 1px solid $--color-primary;
  .form_icon {
    margin: 15px 0 0 5px;
    color: #989898;
    font-size: 18px;
    position: relative;
  }
  .eys_icon {
    position: absolute;
    color: #989898;
    font-size: 18px;
    right: 5px;
  }
  ::v-deep .el-input--small .el-input__inner {
    height: 46px;
    line-height: 46px;
  }
  ::v-deep .el-input--prefix .el-input__inner {
    padding-left: 35px;
    padding-right: 35px;
    font-size: 14px;
  }
}
.login_input {
  ::v-deep .el-input__inner {
    background-color: transparent;
    border: none;
    color: #000;
    /* 设置input框的样式 begin */
    &::-webkit-input-placeholder {
      /* WebKit browsers */
      color: #e4e4e4;
      font-size: 14px;
    }

    &:-moz-placeholder {
      /* WebKit browsers */
      color: #e4e4e4;
      font-size: 14px;
    }

    &::-moz-placeholder {
      /* WebKit browsers */
      color: #e4e4e4;
      font-size: 14px;
    }

    &:-ms-input-placeholder {
      /* WebKit browsers */
      color: #e4e4e4;
      font-size: 14px;
    }

    /* 设置input框的样式 end */
  }
}
.el-form-item {
  margin-bottom: 40px;
}
.m_login_btn {
  border: none;
  width: 100%;
  font-weight: 700;
  height: 46px;
  line-height: 35px;
  background-color: $--color-primary;
  font-size: 16px;
  color: #fff;
  border-radius: 4px;
  transition: 0.3s;
  &:hover {
    box-shadow: 0px 6px 12px 1px $--color-primary;
  }
}
.account_style {
  text-align: right;
  font-size: 14px;
  font-weight: 400;
  color: #999999;
  cursor: pointer;
}
@media screen and (max-width: 750px) {
  .m_login_btn {
    width: 100%;
    height: 50px;
  }
}
</style>
