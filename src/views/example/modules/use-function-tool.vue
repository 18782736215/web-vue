<template>
  <!-- src\utils\modules\tool.js -->
  <zl-section header="公共方法" type="overspread">
    <iframe :src="ywWord" width="100%" height="100%" frameborder="0" />
  </zl-section>
</template>

<script>
export default {
  data() {
    return {
      ywWord: 'https://www.yuque.com/optre/hw30oa/gqwca4/edit'
    }
  }
}
</script>
