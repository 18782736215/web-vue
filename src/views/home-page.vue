<template>
  <!-- 首页 -->
  <div id="home" class="flex_column">
    <BaseHeader>首页</BaseHeader>
    <example-com />
  </div>
</template>

<script>
import exampleCom from '@/views/example'
export default {
  components: {
    exampleCom
  }
}
</script>

<style lang="scss" scoped></style>
