<template>
  <!-- 二维码组件 -->
  <div class="qr">
    <vue-qr v-show="text" :text="text" :size="size" :margin="margin" :color-dark="color" :logo-src="logo" :logo-scale="logoScale" />
    <p v-if="showText" class="flex_center">{{ text }}</p>
  </div>
</template>

<script>
import vueQr from 'vue-qr'
export default {
  components: {
    vueQr
  },
  props: {
    text: { // 二维码的值
      type: [String, Number],
      required: true,
      default: ''
    },
    size: { // 二维码所占大小
      type: Number,
      default: 80
    },
    margin: { // 二维码边框空隙
      type: Number,
      default: 0
    },
    showText: { // 是否展示二维码的值
      type: Boolean,
      default: false
    },
    color: { // 二维码颜色
      type: String,
      default: '#000000'
    },
    logo: { // 二维码嵌入logo地址
      type: String,
      default: ''
    },
    logoScale: { // 二维码嵌入logo地址的大小
      type: Number,
      default: 0.2
    }
  }
}
</script>
<style lang="scss" scoped>
.qr{
  display: inline-block
}
</style>
