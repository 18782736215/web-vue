<template>
  <div>
    <zl-header> Slider 滑块 </zl-header>
    <zl-section header="基础用法">
      <div class="block">
        <span class="demonstration">默认</span>
        <zle-slider v-model="value1" />
      </div>
      <div class="block">
        <span class="demonstration">自定义初始值</span>
        <zle-slider v-model="value2" />
      </div>
      <div class="block">
        <span class="demonstration">隐藏 Tooltip</span>
        <zle-slider v-model="value3" :show-tooltip="false" />
      </div>
      <div class="block">
        <span class="demonstration">格式化 Tooltip</span>
        <zle-slider v-model="value4" :format-tooltip="formatTooltip" />
      </div>
      <div class="block">
        <span class="demonstration">禁用</span>
        <zle-slider v-model="value5" disabled />
      </div>
      <hr>
      <div>{{ value1 }}</div>
      <div>{{ value2 }}</div>
      <div>{{ value3 }}</div>
      <div>{{ value4 }}</div>
      <div>{{ value5 }}</div>
    </zl-section>
    <zl-section header="离散值">
      <div class="block">
        <span class="demonstration">不显示间断点</span>
        <zle-slider v-model="value1" :step="10" />
      </div>
      <div class="block">
        <span class="demonstration">显示间断点</span>
        <zle-slider v-model="value2" :step="10" show-stops />
      </div>
      <hr>
      <div>{{ value1 }}</div>
      <div>{{ value2 }}</div>
    </zl-section>
    <zl-section header="带有输入框 show-input">
      <div class="block">
        <zle-slider v-model="value" show-input />
      </div>
      <hr>
      <div>{{ value }}</div>
    </zl-section>
    <zl-section header="展示标记 marks">
      <div class="block" style="margin-bottom:30px">
        <zle-slider v-model="value7" range :marks="marks" />
      </div>
      <hr>
      <div>{{ value7 }}</div>
    </zl-section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: 0,
      value2: 50,
      value3: 36,
      value4: 48,
      value5: 42,
      value: 0,
      value6: [4, 8],
      value7: [30, 60],
      marks: {
        0: '0°C',
        8: '8°C',
        37: '37°C',
        50: {
          style: {
            color: '#1989FA'
          },
          label: this.$createElement('strong', '50%')
        }
      }
    }
  },
  created() {},
  methods: {
    formatTooltip(val) {
      return val / 100
    }
  }
}
</script>

<style scoped lang="scss">
::v-deep .el-input-number__decrease {
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
::v-deep .el-input-number__increase {
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
