<template>
  <div class="flex_column">
    <zl-header>Bom导入excel文件</zl-header>
    <zl-section type="overspread">
      <ZlExcel />
    </zl-section>
    <zl-section>
      参考文档： <a href="https://blog.csdn.net/qq_39157025/article/details/123848761" target="_blank" rel="noopener noreferrer">luckyexcel 使用方法</a>
      参考文档： <a href="https://mengshukeji.gitee.io/luckysheetdocs/zh/" target="_blank" rel="noopener noreferrer">luckyexcel文档</a>
    </zl-section>
  </div>
</template>

<script>
import ZlExcel from '@/components/zl-excel/zl-excel'
export default {
  components: {
    ZlExcel
  },
  data() {
    return {

    }
  },
  created() {

  },
  methods: {

  }
}
</script>

<style scoped lang="scss">

</style>
