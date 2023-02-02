<template>
  <!-- 特别说明 -->
  <zl-section header="特别说明">
    <span class="msg_tip">当前组件示例为业务组件，根据不同的项目需单独调整</span>
    <zle-alert title="组件使用示例--上线删除" type="warning" />
    <zle-alert type="error">
      <template slot="title">
        <a :href="rules" target="_blank" rel="noopener noreferrer">前端开发规范</a>
      </template>
    </zle-alert>
    <hr>
    <div class="msg_box">
      <div v-for="(item, index) in tipOption" :key="index" :class="`msg_tip ${item.class || 'black'}`">{{ index + 1 }}. {{ item.tip }}</div>
    </div>
  </zl-section>

</template>

<script>
import tip from '@/views/example/data/tip'
export default {
  data() {
    return {
      tipOption: tip,
      rules: 'https://alidocs.dingtalk.com/i/team/R2PmK7gEyP4gwmvp/docs/R2PmK1MeW69pVzvp# 「基础--前端开发规范」'
    }
  }
}
</script>

<style lang="scss" scoped>
.msg_box {
  padding: 10px 0;
  font-weight: 700;
  .msg_tip {
    padding: 5px 0;
  }
}
</style>
