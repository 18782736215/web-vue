<!-- 条形码组件 -->
<template>
  <barcode :value="value" :width="width" :height="height" :display-value="displayValue" :text-margin="textMargin" :font-size="fontSize" :background="background" :line-color="lineColor" :margin="margin">
    <!-- 失败时展示的值 -->
    <slot />
  </barcode>
</template>

<script>
import barcode from 'vue-barcode'
export default {
  name: 'ZlBarcode',
  components: {
    barcode
  },
  props: {
    // 展示条形码的值
    value: {
      type: String,
      required: true,
      default: ''
    },
    // 设置条之间的宽度
    width: {
      type: Number,
      default: 2
    },
    // 高度
    height: {
      type: Number,
      default: 100
    },
    // 是否在条形码下方显示文字
    displayValue: {
      type: Boolean,
      default: true
    },
    // 设置条形码和文本之间的间距
    textMargin: {
      type: Number,
      default: 5
    },
    // 设置文本的大小
    fontSize: {
      type: Number,
      default: 15
    },
    // 设置条形码的背景
    background: {
      type: String,
      default: '#ffffff'
    },
    // 设置条和文本的颜色。
    lineColor: {
      type: String,
      default: '#000000'
    },
    // 设置条形码周围的空白边距
    margin: {
      type: Number,
      default: 10
    }
  }
}
</script>

<style scoped lang="scss">
</style>
