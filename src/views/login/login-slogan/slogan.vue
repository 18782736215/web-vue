<template>
  <div class="login-left">
    <div class="login-title">{{ title }}</div>
    <div class="login-slogan">{{ slogan }}</div>
    <zle-image class="login-img" :src="img">
      <div slot="error" class="error-slot">
        <i class="el-icon-picture-outline" />
      </div>
    </zle-image>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    title: {
      // 登录页标题
      type: String,
      default: ''
    },
    slogan: {
      // 登录页副标题
      type: String,
      default: ''
    },
    img: {
      // 登录页图片
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="scss">
.login-left {
  width: 48%;
  background-color: #6c74f7;
  height: 100%;
  color: #f5f5f5;
  .login-img {
    width: 360px;
    height: 360px;
    margin-left: 64px;
    .error-slot {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 100%;
      opacity: 0.25;
      // color: #000;
      font-size: 50px;
      background-color: #6c74f7;
    }
  }
  .login-title {
    font-size: 32px;
    margin: 48px auto 9px 64px;
  }
  .login-slogan {
    font-size: 16px;
    margin: 0px auto 27px 64px;
  }
}
</style>
