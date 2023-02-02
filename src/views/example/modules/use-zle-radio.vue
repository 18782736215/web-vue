<template>
  <div>
    <zl-header> Radio 单选框 </zl-header>
    <zl-section header="基础用法">
      <zle-radio v-model="radio" :border="true" label="1">备选项</zle-radio>
      <zle-radio v-model="radio" label="2">备选项</zle-radio>
    </zl-section>
    <zl-section header="禁用状态 disabled">
      <zle-radio v-model="radio" disabled label="1">备选项</zle-radio>
      <zle-radio v-model="radio" disabled label="2">备选项</zle-radio>
    </zl-section>
    <zl-section header="单选框组">
      <zle-radio-group v-model="radio">
        <zle-radio label="1">备选项</zle-radio>
        <zle-radio label="2">备选项</zle-radio>
      </zle-radio-group>
    </zl-section>
    <zl-section header="按钮样式">
      <div>
        <zle-radio-group v-model="radio1">
          <zle-radio-button label="上海" />
          <zle-radio-button label="北京" />
          <zle-radio-button label="广州" />
          <zle-radio-button label="深圳" />
        </zle-radio-group>
      </div>
      <div style="margin-top: 20px">
        <zle-radio-group v-model="radio2" size="medium">
          <zle-radio-button label="上海" />
          <zle-radio-button label="北京" />
          <zle-radio-button label="广州" />
          <zle-radio-button label="深圳" />
        </zle-radio-group>
      </div>
      <div style="margin-top: 20px">
        <zle-radio-group v-model="radio3" size="small">
          <zle-radio :border="true" label="上海" />
          <zle-radio :border="true" label="北京" />
          <zle-radio :border="true" label="广州" />
          <zle-radio :border="true" label="深圳" />
        </zle-radio-group>
      </div>
      <div style="margin-top: 20px">
        <zle-radio-group v-model="radio4" disabled size="mini">
          <zle-radio-button label="上海" />
          <zle-radio-button label="北京" />
          <zle-radio-button label="广州" />
          <zle-radio-button label="深圳" />
        </zle-radio-group>
      </div>
    </zl-section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio: '1',
      radio1: '上海',
      radio2: '上海',
      radio3: '上海',
      radio4: '上海'
    }
  },
  created() {},
  methods: {}
}
</script>

<style scoped lang="scss">
</style>
