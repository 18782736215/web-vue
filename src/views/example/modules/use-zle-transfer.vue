<template>
  <div class="">
    <zl-header title="Transfer 穿梭框" />
    <zl-section header="基础穿梭框">
      <zle-transfer v-model="value" :data="data" />
    </zl-section>
    <zl-section header="可搜索 filterable">
      <zle-transfer v-model="value" :data="data" filterable />
    </zl-section>
    <zl-section header="纵向按钮 btnVertical">
      <zle-transfer v-model="value" :data="data" btn-vertical />
    </zl-section>
    <zl-section header="自定义">
      <div class="item">
        <p>自定义标题（titles）和按钮（button-texts） </p>
        <zle-transfer v-model="value" :titles="['list','target']" :button-texts="['到左边', '到右边']" :data="data" btn-vertical filterable />
      </div>
      <div class="main">
        <div class="item">
          <p>自定义数据渲染和底部插槽:1、render-content</p>
          <zle-transfer v-model="value" :data="data" btn-vertical>
            <span slot-scope="{ option }">{{ option.key }} - {{ option.label }}</span>
            <zle-button slot="left-footer" class="transfer-footer" size="small">操作</zle-button>
            <zle-button slot="right-footer" class="transfer-footer" size="small">操作</zle-button>
          </zle-transfer>
        </div>
        <div class="item">
          <p>自定义数据渲染:render-content</p>
          <zle-transfer v-model="value" :data="data" btn-vertical :render-content="renderFunc" filterable />
        </div>
      </div>
      <p>渲染字段名不同可以用 :props="{key: 'value', label: 'desc',disabled:'disable'}"进行修改</p>
    </zl-section>
  </div>
</template>

<script>
export default {
  data() {
    const generateData = _ => {
      const data = []
      for (let i = 1; i <= 12; i++) {
        data.push({
          key: i,
          label: `备选项 ${ i }`,
          disabled: i % 4 === 0
        })
      }
      return data
    }
    return {
      data: generateData(),
      value: [1, 4],
      renderFunc(h, option) {
        return <span>{ option.key } - { option.label }</span>
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.section-title {
  margin-bottom: 10px;
}
.main {
  display: flex;
  justify-content: space-between;
}
.transfer-footer {
    margin-left: 20px;
    padding: 6px 5px;
  }
</style>
