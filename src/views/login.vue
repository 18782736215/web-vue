<template>
  <div class="login-container">
    <div class="login-box">
      <div id="login_home">
        <div class="login_form_box">
          <div class="login_form">
            <div class="lmf_right">
              <div class="mr_head">
                <img class="my_img" src="@/assets/img/logo.png">
              </div>
              <!-- 在钉钉内部环境点击工作台可以实现钉钉内部免登  -->
              <template v-if="version">
                <ddInnerLogin :dd-info="ddInfo" :user-info="userInfo" />
              </template>
              <template v-else>
                <div class="main_box">
                  <div class="head_tab">
                    <div v-for="(item, index) in activeList" :key="index" :class="{ tab_item: true, active: activeP == index }" @click="changTab(index)">
                      <p class="item_tip">{{ item }}</p>
                      <div class="line_box">
                        <span v-if="activeP == index" class="line" />
                      </div>
                    </div>
                  </div>
                  <div class="main_contain">
                    <template v-if="activeP == '0'">
                      <!-- 账号密码登录 -->
                      <form-login @loginChange="formLoginChange" />
                    </template>
                    <template v-else-if="activeP == '1'">
                      <!-- 钉钉扫码 -->
                      <ddLogin :dd-info="ddInfo" @DDLogin="ddLogin" />
                    </template>
                    <template v-else>
                      <!-- 微信登录 -->
                      <wxLogin :wx-info="wxInfo" />
                    </template>
                  </div>
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ddLogin from '@/components/zl-login/dd-login.vue'
import wxLogin from '@/components/zl-login/wx-login.vue'
import ddInnerLogin from '@/components/zl-login/dd-inner-login.vue'
import formLogin from '@/components/zl-login/form-login.vue'

import { version } from 'dingtalk-jsapi'
import { mapState } from 'vuex'

import { reqLoginByPassword } from '@/api/login'
export default {
  name: 'Login',
  components: {
    ddLogin,
    ddInnerLogin,
    formLogin,
    wxLogin
  },
  props: {},
  data() {
    return {
      activeP: 0,
      activeList: ['账号登录', '钉钉扫码', '微信登录'],
      version: version // 是否在钉钉工作台打开项目
    }
  },
  computed: {
    ...mapState({
      ddInfo: state => state.user.ddInfo || {}, // 钉钉信息
      wxInfo: state => state.user.wxInfo || {}, // 微信信息
      userInfo: state => state.user.userInfo || {}, // 用户信息
      homePath: state => state.user.homePath // 登录进入页面
    })
  },
  created() {
    // 钉钉扫码登录跳转回来后需要将tab指向钉钉扫码
    if (this.$route.query.code) {
      this.activeP = '1'
    }
  },
  methods: {
    changTab(val) {
      this.activeP = val
    },
    formLoginChange(val) {
      if (val) {
        // 调用表单登录接口
        this.doLogin()
      }
    },
    ddLogin(val) {
      if (val) {
        // 调用钉钉的登录接口
        // this.doLogin()
      }
    },
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
        this.$router.push(this.homePath)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.login-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  .login-box {
		max-width: 90%;
    width: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
#login_home {
  position: relative;
  width: 100%;
  border-top: 1px solid #fff;
  .login_form_box {
    height: 100%;
    background-color: #fff;
  }
  .login_form {
    width: 100%;
    height: 100%;
    box-sizing: border-box;

    .lmf_right {
      height: 100%;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      .mr_head {
        display: flex;
        justify-content: center;
        height: 93px;
      }
      .l_title {
        font-size: 40px;
        color: #333;
      }
      .l_title_tip {
        font-size: 20px;
        font-weight: 700;
        color: #999999;
      }
    }
    .main_box {
      width: 100%;
      flex: 1;
      padding-top: 32px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      .head_tab {
        display: flex;
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
              border-radius: 5px;
              width: 25px;
              background-color: #ce2e3c;
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
      .main_contain {
        flex: 1;
        min-height: 340px;
        padding-top: 20px;
      }
    }
  }
  .qr_code {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
}

.my_img {
  height: 100%;
  width: auto;
  &_w {
    width: 100%;
    height: auto;
  }
}

@media screen and (min-width: 1920px) {
  #login_home {
    .login_form {
      padding: 20px 60px;
    }
  }
}

@media screen and (max-width: 1920px) {
  #login_home {
    .login_form {
      padding: 20px 40px;
    }
  }
}

@media screen and (max-width: 1025px) {
  #login_home {
    .login_form {
      padding: 20px 30px;
    }
  }
}
@media screen and (max-width: 768px) {
  #login_home {
    .login_form {
      padding: 20px 20px;
    }
  }
}
</style>
