<template>
  <div class="login-right">
    <div class="password-box">
      <img class="cursor" style="height: 46px; width: 46px" src="../../../assets/img/login/mima.png" @click="goPassword">
      <div class="password-text">
        <div class="icon">
          <img src="../../../assets/img/login/pw.png">
        </div>
        <span>密码登录</span>
      </div>
    </div>
    <div class="qrcode-box">
      <div class="qrcode-title">微信登录</div>
      <svg t="1671779061483" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5893" width="200" height="200">
        <path d="M544 896l64 0 0 64-64 0 0-64Z" fill="#000000" p-id="5894" />
        <path d="M416 416 416 64 64 64l0 352 64 0 0 64 64 0 0-64L416 416zM128 352 128 128l224 0 0 224L128 352z" fill="#000000" p-id="5895" />
        <path d="M192 192l96 0 0 96-96 0 0-96Z" fill="#000000" p-id="5896" />
        <path d="M608 64l0 352 352 0L960 64 608 64zM896 352l-224 0L672 128l224 0L896 352z" fill="#000000" p-id="5897" />
        <path d="M736 192l96 0 0 96-96 0 0-96Z" fill="#000000" p-id="5898" />
        <path d="M192 736l96 0 0 96-96 0 0-96Z" fill="#000000" p-id="5899" />
        <path d="M64 480l64 0 0 64-64 0 0-64Z" fill="#000000" p-id="5900" />
        <path d="M192 480l64 0 0 64-64 0 0-64Z" fill="#000000" p-id="5901" />
        <path d="M256 608 64 608l0 352 352 0L416 608l-96 0 0-64L256 544 256 608zM352 672l0 224L128 896l0-224L352 672z" fill="#000000" p-id="5902" />
        <path d="M480 96l64 0 0 96-64 0 0-96Z" fill="#000000" p-id="5903" />
        <path d="M480 256l64 0 0 64-64 0 0-64Z" fill="#000000" p-id="5904" />
        <path d="M672 480 608 480 544 480 544 384 480 384 480 480 320 480 320 544 480 544 544 544 608 544 608 608 672 608 672 544Z" fill="#000000" p-id="5905" />
        <path d="M672 608l64 0 0 64-64 0 0-64Z" fill="#000000" p-id="5906" />
        <path d="M480 608l64 0 0 96-64 0 0-96Z" fill="#000000" p-id="5907" />
        <path d="M480 768l64 0 0 128-64 0 0-128Z" fill="#000000" p-id="5908" />
        <path d="M608 704l64 0 0 192-64 0 0-192Z" fill="#000000" p-id="5909" />
        <path d="M800 608l160 0 0 64-160 0 0-64Z" fill="#000000" p-id="5910" />
        <path d="M896 480l64 0 0 64-64 0 0-64Z" fill="#000000" p-id="5911" />
        <path d="M736 480l128 0 0 64-128 0 0-64Z" fill="#000000" p-id="5912" />
        <path d="M736 704l64 0 0 64-64 0 0-64Z" fill="#000000" p-id="5913" />
        <path d="M896 768 864 768 864 832 928 832 928 768 960 768 960 704 896 704Z" fill="#000000" p-id="5914" />
        <path d="M736 832l64 0 0 64-64 0 0-64Z" fill="#000000" p-id="5915" />
        <path d="M800 896l160 0 0 64-160 0 0-64Z" fill="#000000" p-id="5916" />
      </svg>
      <div>使用微信扫描二维码登录系统</div>
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
    return {}
  },
  methods: {
    goPassword() {
      this.$emit('loginChange')
    },
    goRegister() {
      this.$router.push({
        path: '/register'
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.login-right {
  width: 100%;
  height: 100%;
  .password-box {
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    margin: 43px 38px 39px auto;
    .password-text {
      border-radius: 5px;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      width: 97px;
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
    .password-icon {
      width: 48px;
      height: 48px;
      clip-path: polygon(0 0, 100% 0%, 100% 100%); //绘制路径
    }
  }
  .qrcode-box {
    margin-bottom: 53px;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .qrcode-title {
      color: #101010;
      font-size: 20px;
      margin-bottom: 23px;
    }
    .icon {
      border: 1px solid #ddd;
      margin-bottom: 19px;
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
