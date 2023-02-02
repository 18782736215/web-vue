<template>
  <span>
    <span @click.stop="show = true">
      <slot>
        <i class="el-icon-location my-location-icon cursor" />
      </slot>
    </span>
    <!-- 弹框组件 -->
    <zle-dialog :title="title" :visible="show" class="my_map_dialog" fullscreen :close-on-click-modal="false" :close-on-press-escape="false" :modal="false" :before-close="closeDialog">
      <!-- 使用地图组件 -->
      <zl-map v-model="mapValue" v-bind="$attrs" @change="mapChange" />
    </zle-dialog>
  </span>
</template>

<script>
import zlMap from './map'
export default {
  name: 'ZlIconMap',
  components: {
    zlMap
  },
  model: {
    prop: 'value', // v-model绑定的value
    event: 'change' // 使用change事件触发
  },
  props: {
    title: {
      // 弹框title
      type: String,
      default: '选择地址'
    },
    value: {
      type: Object,
      default: () => {
        return {
          searchAddress: '' // 搜索地址
        }
      }
    }
  },
  data() {
    return {
      show: false,
      mapValue: {}
    }
  },
  watch: {
    'value.searchAddress': {
      handler() {
        this.mapValue.searchAddress = this.value ? this.value.searchAddress : null
      },
      immediate: true
    }
  },
  methods: {
    // 关闭弹窗
    closeDialog() {
      this.$emit('change')
      this.show = false
    },
    // 确认 返回选择的地址对象
    confirm() {
      this.$emit('change', this.mapValue)
      this.show = false
    },
    // 鼠标点击地图切换地址触发事件
    mapChange(val) {
      this.$emit('change', val)
      this.show = false
    }
  }
}
</script>

<style lang="scss" scoped>
.my-location-icon {
  font-size: 25px;
  vertical-align: -0.15em;
  color: $--color-primary;
}
.my_map_dialog {
  ::v-deep .el-dialog__body {
    padding: 0;
  }
  ::v-deep .el-dialog__header {
    background:  $--white;
  }
  ::v-deep .el-dialog__headerbtn .el-dialog__close {
    color: $--color-primary;
  }
}
</style>
