<template>
  <div class="flex_column">
    <zl-header>
      <h3 class="section_title">dhtmlxGant 甘特图</h3>
    </zl-header>
    <zl-section class="flex_column flex_1_auto">
      <dhtmlx-gant :api="api" :params="params" :gantt-config="config" />
    </zl-section>
    <zl-section> 参考链接: <a href="https://docs.dhtmlx.com/gantt/api__refs__gantt_props.html" target="_blank">DHX Documentation</a> 参考链接: <a href="https://blog.csdn.net/qq_36330228/article/details/123808980" target="_blank">快速上手</a> </zl-section>
  </div>
</template>

<script>
import dhtmlxGant from '@/components/zl-dhtmlx-gantt/dhtmlx-gantt'
import { reqGantt } from '@/components/zl-dhtmlx-gantt/api'
import { config } from '@/components/zl-dhtmlx-gantt/config.js'

export default {
  components: {
    dhtmlxGant
  },
  data() {
    return {
      config: config,
      api: reqGantt,
      params: {
        current: 1,
        size: 20
      },
      edit: false
    }
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
.flex_column {
  height: 100vh;
  overflow: hidden;
}
</style>
