<template>
  <div>
    <zl-header>
      <h3 class="section_title">v-permission 权限</h3>
    </zl-header>
    <zl-section>
      <div class="section">
        <div v-permission="per">如果没有权限我就隐藏</div>
      </div>
      <div class="section">
        <div v-permission="''">如果没有权限我就隐藏</div>
      </div>
      <zle-alert title="通过判断是否有权限来展示dom元素v-permission" />
    </zl-section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      per: 'admin'
    }
  },
  methods: {}
}
</script>
<style lang="scss" scoped></style>
