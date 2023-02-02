<!-- 条形码 -->
<template>
  <div>
    <zl-header>条形码</zl-header>
    <zl-section>
      <zle-row>
        <zle-col :size="6">
          <div class="section_box">
            <h2 class="section_title">底部文字展示</h2>
            <h2 class="section_title">displayValue = true</h2>
            <ZlBarCode :value="value" :width="width" :height="height" :display-value="displayValue" :text-margin="textMargin" :font-size="fontSize" :background="background" :line-color="lineColor" :margin="margin">{{ failureValue }}</ZlBarCode>
          </div>
        </zle-col>
        <zle-col :size="6">
          <div class="section_box">
            <h2 class="section_title">条码颜色</h2>
            <h2 class="section_title">lineColor = #DC143C</h2>
            <ZlBarCode :value="value" :width="width" :height="height" :display-value="displayValue" :text-margin="textMargin" :font-size="fontSize" :background="background" line-color="#DC143C" :margin="margin">{{ failureValue }}</ZlBarCode>
          </div>
        </zle-col>
        <zle-col :size="6">
          <div class="section_box">
            <h2 class="section_title">底部字体大小</h2>
            <h2 class="section_title">fontSize = 20</h2>
            <ZlBarCode :value="value" :width="width" :height="height" :display-value="displayValue" :text-margin="textMargin" :font-size="20" :background="background" :line-color="lineColor" :margin="margin">{{ failureValue }}</ZlBarCode>
          </div>
        </zle-col>
        <zle-col :size="24">
          <div class="section_box">
            <h2 class="section_title">设置条之间的宽度</h2>
            <h2 class="section_title">width = 5</h2>
            <ZlBarCode :value="value" :width="5" :height="height" :display-value="displayValue" :text-margin="textMargin" :font-size="fontSize" :background="background" :line-color="lineColor" :margin="margin">{{ failureValue }}</ZlBarCode>
          </div>
        </zle-col>
        <zle-col :size="6">
          <div class="section_box">
            <h2 class="section_title">条形码高度</h2>
            <h2 class="section_title">height = 150</h2>
            <ZlBarCode :value="value" :width="width" :height="150" :display-value="displayValue" :text-margin="textMargin" :font-size="fontSize" :background="background" :line-color="lineColor" :margin="margin">{{ failureValue }}</ZlBarCode>
          </div>
        </zle-col>
        <zle-col :size="6">
          <div class="section_box">
            <h2 class="section_title">条形码外边距</h2>
            <h2 class="section_title">margin = 30</h2>
            <ZlBarCode :value="value" :width="width" :height="height" :display-value="displayValue" :text-margin="textMargin" :font-size="fontSize" :background="background" :line-color="lineColor" :margin="30">{{ failureValue }}</ZlBarCode>
          </div>
        </zle-col>
      </zle-row>
    </zl-section>
    <zl-section>参考文档：<a href="https://github.com/lindell/vue-barcode#readme" target="_blank">https://github.com/lindell/vue-barcode#readme</a></zl-section>
  </div>
</template>

<script>
import ZlBarCode from '@/components/zl-barcode/barcode.vue'
export default {
  components: {
    ZlBarCode
  },
  data() {
    return {
      value: 'sdasd', // 展示条形码的值
      width: 2, // 设置条之间的宽度
      height: 100, // 高度
      displayValue: true, // 是否在条形码下方显示文字
      textMargin: 5, // 设置条形码和文本之间的间距
      fontSize: 15, // 设置文本的大小
      background: '#ffffff', // 设置条形码的背景
      lineColor: '#000000', // 设置条和文本的颜色。
      margin: 10, // 设置条形码周围的空白边距
      failureValue: '加载失败' // 加载失败的值
    }
  },
  created() {
  },
  methods: {}
}
</script>

<style scoped lang="scss">
.section_box {
  margin-right: 5px;
}
</style>
