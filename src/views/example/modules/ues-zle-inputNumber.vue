<template>
  <div>
    <zl-header>InputNumber 计数器</zl-header>
    <zl-section header="基础用法">
      <zle-input-number v-model="num" :min="1" :max="10" label="描述文字" @change="handleChange" />
      <hr>
      <div>{{ '当前值：' + num }}</div>
    </zl-section>
    <zl-section header="步数">
      <zle-input-number v-model="num0" :step="2" :min="1" :max="10" label="描述文字" />
      <hr>
      <div>{{ '当前值：' + num0 }}</div>
      <hr>
      <zle-alert class="section_title">设置step属性可以控制步长，接受一个Number。</zle-alert>
    </zl-section>
    <zl-section header="严格步数">
      <zle-input-number v-model="num1" :step="2" step-strictly label="描述文字" />
      <hr>
      <div>{{ '当前值：' + num1 }}</div>
      <hr>
      <zle-alert class="section_title">step-strictly属性接受一个Boolean。如果这个属性被设置为true，则只能输入步数的倍数。</zle-alert>
    </zl-section>
    <zl-section header="精度">
      <zle-input-number v-model="num2" :precision="2" :step="0.1" :max="10" />
      <hr>
      <div>{{ '当前值：' + num2 }}</div>
      <hr>
      <zle-alert class="section_title">设置 precision 属性可以控制数值精度，接收一个 Number。</zle-alert>
    </zl-section>
    <zl-section header="按钮位置">
      <zle-input-number v-model="num3" controls-position="right" :min="1" :max="10" />
      <hr>
      <div>{{ '当前值：' + num3 }}</div>
      <hr>
      <zle-alert class="section_title">设置 controls-position 属性可以控制按钮位置。</zle-alert>
    </zl-section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 1,
      num0: 1,
      num1: 2,
      num2: 2,
      num3: 2
    }
  },
  created() {},
  methods: {
    handleChange(value) {
      console.log(value)
    }
  }
}
</script>

<style scoped lang="scss">
::v-deep .el-input-number__decrease {
  height: calc(100% - 2px);
  display: flex;
  justify-content: center;
  align-items: center;
}
::v-deep .el-input-number__increase {
  height: calc(100% - 2px);
  display: flex;
  justify-content: center;
  align-items: center;
}
::v-deep .el-input-number.is-controls-right .el-input-number__increase {
  height: calc(50% - 1px);
}
::v-deep .el-input-number.is-controls-right .el-input-number__decrease {
  height: calc(50% - 1px);
}
</style>
