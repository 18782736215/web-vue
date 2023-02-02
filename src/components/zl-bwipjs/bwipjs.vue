<template>
  <img :ref="bid" :alt="text">
</template>

<script>
import bwipjs from 'bwip-js'
export default {
  name: '',
  props: {
    type: {
      type: String,
      default: 'code128', // 二维码
      required: true
    },
    bid: {
      type: String,
      default: '', // 组件id
      required: true
    },
    text: {
      type: String,
      default: '', // 转换为二维码的内容
      required: true
    },
    scale: {
      type: Number,
      default: 1 // 伸缩比例
    },
    height: {
      type: Number,
      default: 20 // 高
    },
    width: {
      type: Number,
      default: 20 // 宽
    },
    includeText: {
      type: Boolean,
      default: true // 是否显示文本
    },
    // 文字展示位置
    textXAlign: {
      type: String,
      default: 'center',
      validator: function(value) {
        return ['left', 'center', 'right'].includes(value)
      }
    }
  },
  computed: {
    options() {
      return {
        bcid: this.type, // Barcode type
        text: this.text, // Text to encode
        scale: this.scale, // 3x scaling factor
        height: this.height, // Bar height, in millimeters
        width: this.width, // Bar width, in millimeters
        includetext: this.includeText, // Show human-readable text
        textxalign: this.textXAlign
      }
    }
  },
  watch: {
    options: {
      handler() {
        this.$nextTick(() => {
          this.renderMDCode()
        })
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    renderMDCode() {
      try {
        let canvas = document.createElement('canvas')
        try {
          bwipjs.toCanvas(canvas, this.options)
          this.$refs[this.bid].src = canvas.toDataURL('image/png')
        } catch (e) {
          console.error(e)
          // `e` may be a string or Error object
        }
      } catch (e) {
        console.error(e)
        // `e` may be a string or Error object
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
