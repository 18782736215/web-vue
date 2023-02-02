<template>
  <div>
    <zl-header>
      <h3 class="section_title">v-drag 拖拽</h3>
    </zl-header>
    <zl-section>
      <div class="parent">
        <div v-drag class="drag">
          点我拖拽
        </div>
        <div class="son" />
        <zle-alert title="使用此指令时，需要使用此指令的元素定位为绝对定位" />
      </div>
    </zl-section>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
.parent {
  height: 100px;
  .son {
    height: 25px;
  }
}
.drag {
  position: absolute;
  z-index: 999;
}
</style>
