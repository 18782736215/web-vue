<template>
  <vue-draggable-resizable
    :parent="true"
    :grid="[1, 1]"
    :x="dragItem.x"
    :y="dragItem.fatherName && !showEdit && itemIndex != 0 ? dragItem.y + (Number(dragItem.lineHeight.slice(0,2))*itemIndex) : dragItem.y"
    :draggable="showEdit"
    :left="20"
    :disable-user-select="false"
    w="auto"
    h="auto"
    :max-width="dragItem.maxWidth"
    :max-height="dragItem.maxHeight"
    @activated="clickItem(dragItem, itemIndex)"
    @dragstop="onDrag"
    @resizing="onResize"
  >
    <!-- 字段 -->
    <p v-if="dragItem.type == 'String'" :class="dragItem.isHide?'overFlowHidden':''" :style="{ fontSize: dragItem.fontSize, color: dragItem.color, lineHeight: dragItem.lineHeight, maxWidth: dragItem.maxWidth + 'px' }">{{ showEdit ? dragItem.name : fatherItem[dragItem.value] }}</p>
    <!-- 二维码 -->
    <zl-qr v-if="dragItem.type == 'QrCode'" :text="showEdit ? dragItem.name : fatherItem[dragItem.value]" :size="dragItem.size" :show-text="dragItem.showText" />
    <!-- 条形码 -->
    <zl-bar-code v-if="dragItem.type == 'BarCode'" :value="showEdit ? dragItem.value : fatherItem[dragItem.value]" :width="dragItem.barWidth" :height="dragItem.barHeight" :display-value="dragItem.showText" />
  </vue-draggable-resizable>
</template>

<script>
import ZlQr from '@/components/zl-qr/qr'
import ZlBarCode from '@/components/zl-barcode/barcode.vue'
export default {
  name: 'ZlDragItem',
  components: {
    ZlQr,
    ZlBarCode
  },
  props: {
    dragItem: {
      // 拖动项
      type: Object,
      default: () => {
        return {}
      },
      required: true
    },
    itemIndex: {
      // 下标
      type: Number,
      default: 0
    },
    showEdit: {
      //  是否编辑
      type: Boolean,
      default: true
    },
    fatherItem: {
      //  父级item
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data() {
    return {
    }
  },

  mounted() {
  },
  methods: {
    clickItem(item, index) {
      this.$emit('clickItem', item, index)
    },
    onDrag(x, y) {
      this.$emit('onDrag', x, y)
    },
    onResize(x, y, width, height) {
      this.$emit('onResize', x, y, width, height)
    }
  }
}
</script>

<style scoped lang="scss">
 .overFlowHidden {
    overflow: hidden; //超出的文本隐藏
    text-overflow: ellipsis; //溢出用省略号显示
    white-space: nowrap; //溢出不换行
  }
</style>
