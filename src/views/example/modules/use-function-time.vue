<template>
  <!-- src\utils\modules\time.js -->
  <zl-section header="时间" type="overspread">
    <iframe :src="ywWord" width="100%" height="100%" frameborder="0" />
  </zl-section>
</template>

<script>
export default {
  data() {
    return {
      ywWord: 'https://www.yuque.com/optre/hw30oa/xpocgb/edit'
    }
  }
}
</script>
