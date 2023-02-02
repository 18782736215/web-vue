<template>
  <div>
    <zl-header>
      <h2 class="section_title">excel 导出</h2>
    </zl-header>
    <zl-section>
      <zle-button :type="'primary'" :size="'mini'" plain @click="exportFileConfirm">
        点我导出xlsx文件
      </zle-button>
    </zl-section>
    <zl-section>
      <zle-button :type="'primary'" :size="'mini'" plain @click="exportFile">
        点我无确认弹窗导出xlsx文件
      </zle-button>
    </zl-section>
    <zl-section>
      <zle-button :type="'primary'" :size="'mini'" plain @click="exportFileXls">
        点我导出xls文件
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
    exportFile() {
      let data = {
        method: 'GET',
        url: '/talent-service/talent/pool/outExcelTemplate',
        fileName: '无确认弹窗导出.xlsx'
      }
      this.$downLoadFile(data)
    },
    exportFileConfirm() {
      let data = {
        method: 'GET',
        url: '/talent-service/talent/pool/outExcelTemplate',
        fileName: '有确认弹窗导出.xlsx'
      }
      this.$downLoadFileConfirm(data)
    },
    exportFileXls() {
      let data = {
        method: 'GET',
        url: '/talent-service/talent/pool/outExcelTemplate',
        fileName: '导出xls文件.xls'
      }
      this.$downLoadFileConfirm(data)
    }
  }
}
</script>

<style lang="scss" scoped>
.my-input {
  width: 220px;
}
</style>
