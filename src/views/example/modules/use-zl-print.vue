<template>
  <div class="">
    <zl-header title="自定义打印示例" />
    <zl-section header="打印">
      <zle-button @click="print">
        打印
      </zle-button>
    </zl-section>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    print() {
      this.$router.push('/testPrint')
    }
  }
}
</script>

<style lang="scss" scoped></style>
