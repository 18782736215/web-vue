<template>
  <div>
    <zl-header>
      <h3 class="section_title">Popconfirm 气泡确认框</h3>
    </zl-header>
    <zl-section header="基础气泡确认框">
      <!-- title 是弹窗的标题 -->
      <zle-popconfirm class="mr_10">
        <zle-button>点击打开</zle-button>
      </zle-popconfirm>
      <zle-popconfirm disabled class="mr_10">
        <zle-button disabled type="primary">禁用</zle-button>
      </zle-popconfirm>
    </zl-section>
    <zl-section header="带图标">
      <zle-popconfirm class="mr_10" title="确认取消吗" icon="el-icon-warning-outline">
        <zle-button>点击打开</zle-button>
      </zle-popconfirm>
      <zle-popconfirm class="mr_10" title="确认取消吗" icon="el-icon-info">
        <zle-button>点击打开</zle-button>
      </zle-popconfirm>
      <zle-popconfirm class="mr_10" title="确认取消吗" icon="el-icon-question">
        <zle-button>点击打开</zle-button>
      </zle-popconfirm>
      <zle-alert title="使用icon来增加图标" type="info" />
    </zl-section>
    <zl-section header="自定义">
      <zle-popconfirm :title="'hhh'" :confirm-button-type="'primary'" :confirm-button-text="'点点我吧'">
        <zle-button>点我</zle-button>
      </zle-popconfirm>
      <br>
      <zle-popconfirm :title="'hhh'" :cancel-button-type="'danger'" :icon-color="'green'" :confirm-button-type="'primary'" :confirm-button-text="'确定哦'">
        <zle-button>点我</zle-button>
      </zle-popconfirm>
    </zl-section>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  beforeDestroy() { },
  methods: {
    confirm() {
      console.log('confirm')
    },
    cancel() {
      console.log('cancel')
    }
  }
}
</script>

<style lang="scss" scoped>
.description {
  padding: 10px 0;
}
.mr_10 {
  margin-right: 10px;
}
</style>
