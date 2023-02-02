<template>
  <div>
    <zl-header> Switch 开关 </zl-header>
    <zl-section header="基础用法">
      <zle-switch v-model="value" active-color="#13ce66" inactive-color="#eee" />
      <hr>
      <div>
        {{ value }}
      </div>
    </zl-section>
    <zl-section header="文字描述">
      <div>
        <zle-switch v-model="value1" active-text="按月付费" inactive-text="按年付费" />
      </div>
      <div style="margin-top: 10px">
        <zle-switch v-model="value2" active-color="#13ce66" inactive-color="#eee" active-text="按月付费" inactive-text="按年付费" />
      </div>
      <hr>
      <div>
        {{ value1 }}
      </div>
      <div>
        {{ value2 }}
      </div>
    </zl-section>
    <zl-section header="扩展的 value 类型">
      <zle-tooltip :content="'Switch value: ' + value3" placement="top">
        <zle-switch v-model="value3" active-color="#13ce66" inactive-color="#eee" active-value="100" inactive-value="0" />
      </zle-tooltip>
    </zl-section>
    <zl-section header="禁用状态">
      <zle-switch v-model="value1" disabled style="margin-right: 10px" />
      <zle-switch v-model="value2" disabled />
      <hr>
      <div>{{ value1 }} {{ value2 }}</div>
    </zl-section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: true,
      value1: true,
      value2: true,
      value3: '100'
    }
  },
  created() {},
  methods: {}
}
</script>

<style scoped lang="scss">
// .box {
//   display: flex;
//   ::v-deep .el-switch + .el-switch {
//     margin-left: 20px;
//   }
// }
</style>
