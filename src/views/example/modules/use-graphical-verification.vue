<template>
  <!-- 登录-图形验证 -->
  <div>
    <zl-header>
      <h2 class="section_title">登录图形验证</h2>
    </zl-header>
    <zl-section header="滑块验证">
      <div class="section_box">
        <zl-slider-validate :reset-validate="resetValidate" @getValidateM="getValidateM" />
        <zle-button class="my_btn" :disabled="!resetValidate" type="warning" size="mini">登录</zle-button>
      </div>
    </zl-section>
    <zl-section header="图形验证">
      <div class="section_box">
        <div class="code-item">
          <zl-graphical-validate v-model="identifyCode" :identify-codes="identifyCodes" :content-width="300" :content-height="132" />
          <div class="text_item">点击图形刷新</div>
        </div>
      </div>
    </zl-section>
  </div>
</template>
<script>
import ZlGraphicalValidate from '@/components/zl-graphic-validate/graphical-validate.vue' // 图形验证
import ZlSliderValidate from '@/components/zl-graphic-validate/slider-validate.vue' // 图形验证
export default {
  components: {
    ZlGraphicalValidate,
    ZlSliderValidate
  },
  data() {
    return {
      resetValidate: false,
      identifyCode: '', // 当前生成的验证码
      identifyCodes: '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ' // 随机生成由四位字母组成的验证码 可自定义
    }
  },
  methods: {
    getValidateM(obj) {
      if (obj.doLogin) {
        this.resetValidate = obj.doLogin
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.section_box{
  width: 400px;
  margin: 0 auto;
}
.my_btn{
  margin-top: 30px;
  width: 100%;
}
.code-item{
  position: relative;
}
.text_item{
  position: absolute;
  top: 0;
  left: 2;
}
</style>
