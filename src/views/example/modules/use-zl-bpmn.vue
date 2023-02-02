<template>
  <div class="flex_column">
    <zl-header>bpmn-js</zl-header>
    <zl-section type="overspread">
      <zl-bpmn />
    </zl-section>
    <zl-section>
      参考文档： <a href="https://github.com/LinDaiDai/bpmn-chinese-document/tree/master/LinDaiDai" target="_blank" rel="noopener noreferrer">bpmn 使用方法</a>
      参考文档： <a href="https://bpmn.io/" target="_blank" rel="noopener noreferrer">bpmn 文档</a>
    </zl-section>
  </div>
</template>

<script>
import ZlBpmn from '@/components/zl-bpmn/zl-bpmn'
export default {
  components: { ZlBpmn },
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
