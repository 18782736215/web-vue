<template>
  <!-- 项目配置说明 -->
  <zl-section header="项目配置" type="overspread">
    <iframe :src="ywWord" width="100%" height="100%" frameborder="0" />
  </zl-section>
</template>

<script>
export default {
  data() {
    return {
      ywWord: 'https://www.yuque.com/optre/hw30oa/zgo0fw/edit'
    }
  }
}
</script>
