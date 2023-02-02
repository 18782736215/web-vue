<template>
  <div>
    <zl-header>Map 地图</zl-header>
    <zl-section header="选择地址">
      <span>请选择地址：</span>
      <zle-input v-model="address" class="my-input" />
      <zl-icon-map v-model="mapValue" title="地图组件使用示例" @change="baseDialogChange" />
    </zl-section>
    <zl-section>参考文档：<a href="https://elemefe.github.io/vue-amap/#/zh-cn/introduction/install" target="_blank">https://elemefe.github.io/vue-amap/#/zh-cn/introduction/install</a></zl-section>
    <zl-section>参考教程：<a href="https://blog.csdn.net/weixin_42711805/article/details/124946200" target="_blank">https://blog.csdn.net/weixin_42711805/article/details/124946200</a></zl-section>
  </div>
</template>

<script>
import ZlIconMap from '@/components/zl-map/icon-map'
export default {
  components: {
    ZlIconMap
  },
  data() {
    return {
      mapValue: null,
      address: ''
    }
  },
  methods: {
    baseDialogChange(val) {
      this.address = val.detailAddress
    }
  }
}
</script>

<style lang="scss" scoped>
.my-input {
  width: 220px;
}
</style>
