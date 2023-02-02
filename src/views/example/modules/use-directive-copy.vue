<template>
  <div>
    <zl-header>
      <h3 class="section_title">v-copy 复制</h3>
    </zl-header>
    <zl-section>
      <h3 v-copy="title" class="description">{{ title }}</h3>
      <zle-alert title="复制v-copy绑定的值" />
    </zl-section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '点我复制'
    }
  }
}
</script>
