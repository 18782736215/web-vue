<template>
  <div class="">
    <zl-header>PageHeader 页头</zl-header>
    <zl-section header="默认示例">
      <zle-pageHeader />
    </zl-section>
    <zl-section header="设置title和content">
      <zle-pageHeader title="这是title" content="content内容" @back="back" />
    </zl-section>
    <zl-section header="取消箭头">
      <zle-pageHeader title="标题" content="content内容" :show-arrow="false" @back="back" />
    </zl-section>
  </div>
</template>

<script>
export default {
  methods: {
    back() {
      console.log(11)
    }
  }
}
</script>

<style lang="scss" scoped>
.section-title {
  margin: 10px 0;
}
</style>
