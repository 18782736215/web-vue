<template>
  <div class="app">
    <div class="section">
      <h3 class="section_title">Layout 布局</h3>
    </div>
    <div class="section">
      <h3 class="description">栅栏布局</h3>
      <zle-row class="zle-row">
        <zle-col :size="24" :label="'一栏布局'" :label-width="120" />
      </zle-row>
      <zle-row class="zle-row">
        <zle-col :size="12" :label="'两栏布局'" />
        <zle-col :size="12" />
      </zle-row>
      <zle-row class="zle-row">
        <zle-col :size="8" :label="'三栏布局'" />
        <zle-col :size="8" />
        <zle-col :size="8" />
      </zle-row>
      <zle-row class="zle-row">
        <zle-col :size="6" :label="'四栏布局'" />
        <zle-col :size="6" />
        <zle-col :size="6" />
        <zle-col :size="6" />
      </zle-row>
      <zle-row class="zle-row">
        <zle-col :size="4" :label="'自定义布局'" />
        <zle-col :size="8" />
        <zle-col :size="9" />
        <zle-col :size="3" />
      </zle-row>
      <zle-alert title="通过定义zle-col的size来确定宽度" />
    </div>
    <div class="section">
      <zle-row class="zle-row">
        <zle-col :size="4" :label="'分栏间间隔'" />
        <zle-col :size="6" :offset="2" />
        <zle-col :size="4" :offset="5" />
        <zle-col :size="3" />
      </zle-row>
      <zle-alert title="通过定义zle-col的offset来确定左侧间隔位移" width="800" />
    </div>
    <div class="section">
      <zle-row class="zle-row">
        <zle-col :size="[24, 12, 12, 8, 6]" :label="'响应式布局'" />
        <zle-col :size="[24, 12, 12, 8, 6]" />
        <zle-col :size="[24, 12, 12, 8, 6]" />
        <zle-col :size="[24, 12, 12, 8, 6]" />
      </zle-row>
      <zle-alert title="通过定义zle-col的size，此时size是一个数组，来定义不同屏幕下的占用份数" />
    </div>
    <div class="section">
      <zle-row class="zle-row">
        <zle-col :size="[24]" :label="'labelWidth是120px，当label长度过长，需要配置labelWidth显示'" label-width="120" />
        <zle-col :size="[24]" :label="'labelWidth宽度是500px，当label长度过长，需要配置labelWidth显示'" label-width="500" />
      </zle-row>
      <zle-alert title="自定义label宽度" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      label: 'zle-rol',
      value: '哈哈哈'
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.description {
  padding: 10px 0;
}
.zle-row {
  margin: 5px;
  padding: 5px;
  border-radius: 5px;
  .el-col:nth-child(2n) {
    background-color: #d3dce6;
    border-radius: 5px;
  }
  .el-col:nth-child(2n + 1) {
    background-color: #e5e9f2;
    border-radius: 5px;
  }
}
</style>
