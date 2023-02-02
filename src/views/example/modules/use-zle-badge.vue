<template>
  <div>
    <zl-header> Badge 标记 </zl-header>
    <zl-section header="小红点  is-dot">
      <zle-badge is-dot class="item">数据查询</zle-badge>
      <zle-badge is-dot class="item">
        <zle-button class="share-button" icon="el-icon-share" type="primary" />
      </zle-badge>
    </zl-section>
    <zl-section header="自定义内容 value=xxx">
      <zle-badge value="new" class="item">
        <zle-button size="small">评论</zle-button>
      </zle-badge>
      <zle-badge value="hot" class="item">
        <zle-button size="small">回复</zle-button>
      </zle-badge>
    </zl-section>
    <zl-section header="基础用法">
      <zle-badge :value="12" class="item">
        <zle-button size="small">评论</zle-button>
      </zle-badge>
      <zle-badge :value="3" class="item">
        <zle-button size="small">回复</zle-button>
      </zle-badge>
      <zle-badge :value="1" class="item" type="primary">
        <zle-button size="small">评论</zle-button>
      </zle-badge>
      <zle-badge :value="2" class="item" type="warning">
        <zle-button size="small">回复</zle-button>
      </zle-badge>
      <zle-dropdown trigger="click">
        <span class="el-dropdown-link">
          点我查看<i class="el-icon-caret-bottom el-icon--right" />
        </span>
        <template #dropdown>
          <zle-dropdown-menu>
            <zle-dropdown-item class="clearfix">
              评论
              <zle-badge class="mark" :value="12" />
            </zle-dropdown-item>
            <zle-dropdown-item class="clearfix">
              回复
              <zle-badge class="mark" :value="3" />
            </zle-dropdown-item>
          </zle-dropdown-menu>
        </template>
      </zle-dropdown>
    </zl-section></div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          label: '评论'
        },
        {
          label: '回复'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
::v-deep .el-badge + .el-badge {
  margin-left: 30px;
}
.el-dropdown-link {
  margin-left: 30px;
}
</style>
