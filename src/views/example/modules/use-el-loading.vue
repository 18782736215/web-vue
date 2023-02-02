<template>
  <div class="">
    <zl-header title="Loading 加载" />
    <zl-section header="区域加载">
      <zle-button type="primary" @click="getLoad">加载</zle-button>
      <div class="content">
        <p v-loading="loading">这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容
          这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容</p>
      </div>
    </zl-section>
    <zl-section header="自定义加载文案、图标、背景色">
      <zle-button type="primary" @click="getLoad">加载</zle-button>
      <p v-loading="loading" element-loading-text="拼命加载中" element-loading-spinner="el-icon-loading" element-loading-background="rgba(0, 0, 0, 0.8)">
        这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容
        这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容
      </p>
    </zl-section>
    <zl-section header="全屏加载">
      <zle-button v-loading.fullscreen.lock="loadingFull" type="primary" @click="fullLoad">加载</zle-button>
    </zl-section>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      tableData: [
        { date: '2016-05-03', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
        { date: '2016-05-03', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
        { date: '2016-05-03', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' }
      ],
      loading: false,
      loadingFull: false
    }
  },
  methods: {
    getLoad() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 2000)
    },
    fullLoad() {
      this.loadingFull = true
      setTimeout(() => {
        this.loadingFull = false
      }, 2000)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
