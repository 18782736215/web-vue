<template>
  <div>
    <zl-header>
      <h2 class="section_title">Button 按钮</h2>
    </zl-header>
    <zl-section>
      <h3 class="section_title">根据type定义</h3>
      <zle-button>默认按钮</zle-button>
      <zle-button type="primary">主要按钮</zle-button>
      <zle-button type="success">成功按钮</zle-button>
      <zle-button type="info">信息按钮</zle-button>
      <zle-button type="warning">警告按钮</zle-button>
      <zle-button type="danger">危险按钮</zle-button>
      <zle-button type="dashed">虚框按钮</zle-button>
      <hr>
      <zle-alert title="使用type plain round circle size来定义button的样式" type="info" />
    </zl-section>
    <zl-section>
      <h3 class="section_title">根据type + size定义</h3>
      <zle-button class="margin-t-10" size="medium">默认按钮</zle-button>
      <zle-button type="primary" size="medium">主要按钮</zle-button>
      <zle-button type="success" size="small">成功按钮</zle-button>
      <zle-button type="info" size="small">信息按钮</zle-button>
      <zle-button type="warning" size="mini">警告按钮</zle-button>
      <zle-button type="danger" size="mini">危险按钮</zle-button>
      <zle-button type="dashed" size="mini">虚框按钮</zle-button>
      <hr>
      <zle-alert title="size只有medium、small、mini" type="info" />
    </zl-section>
    <zl-section>
      <h3 class="section_title">根据type + plain定义</h3>
      <zle-button plain>默认按钮</zle-button>
      <zle-button type="primary" plain>主要按钮</zle-button>
      <zle-button type="success" plain>成功按钮</zle-button>
      <zle-button type="info" plain>信息按钮</zle-button>
      <zle-button type="warning" plain>警告按钮</zle-button>
      <zle-button type="danger" plain>危险按钮</zle-button>
      <zle-button type="dashed" plain>虚框按钮</zle-button>
    </zl-section>
    <zl-section>
      <h3 class="section_title">根据type + plain + icon定义</h3>
      <zle-button type="primary" icon="el-icon-edit" plain>编辑</zle-button>
      <zle-button type="info" icon="el-icon-search" plain>搜索</zle-button>
      <zle-button type="danger" icon="el-icon-delete" plain>删除</zle-button>
      <zle-button icon="el-icon-edit" plain>编辑</zle-button>
      <zle-button icon="el-icon-search" plain>搜索</zle-button>
      <zle-button icon="el-icon-delete" plain>删除</zle-button>
    </zl-section>
    <zl-section>
      <h3 class="section_title">根据type + round定义</h3>
      <zle-button round>默认按钮</zle-button>
      <zle-button type="primary" round>主要按钮</zle-button>
      <zle-button type="success" round>成功按钮</zle-button>
      <zle-button type="info" round>信息按钮</zle-button>
      <zle-button type="warning" round>警告按钮</zle-button>
      <zle-button type="danger" round>危险按钮</zle-button>
      <zle-button type="dashed" round>虚框按钮</zle-button>
    </zl-section>
    <zl-section>
      <h3 class="section_title">根据type + circle + icon定义</h3>
      <zle-button icon="el-icon-search" circle />
      <zle-button type="primary" icon="el-icon-edit" circle />
      <zle-button type="success" icon="el-icon-check" circle />
      <zle-button type="info" icon="el-icon-message" circle />
      <zle-button type="warning" icon="el-icon-star-off" circle />
      <zle-button type="danger" icon="el-icon-delete" circle />
    </zl-section>
    <zl-section>
      <h3 class="section_title">以按钮组方式出现，常用于多项类似操作</h3>
      <zle-button-group>
        <zle-button type="primary" icon="el-icon-arrow-left">上一页</zle-button>
        <zle-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right" /></zle-button>
      </zle-button-group>
      <zle-button-group class="margin-l-10">
        <zle-button type="primary" icon="el-icon-edit" plain />
        <zle-button type="primary" icon="el-icon-share" plain />
        <zle-button type="primary" icon="el-icon-delete" plain />
      </zle-button-group>
    </zl-section>
    <zl-section>
      <h3 class="section_title">根据复合样式来定义</h3>
      <zle-button type="default" icon="el-icon-edit">default</zle-button>
      <zle-button type="primary_plain" disabled>primary_plain</zle-button>
      <zle-button type="primary" :loading="true" />
    </zl-section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mapValue: null
    }
  },
  methods: {
    zlDialogChange(val) {
      console.log(val)
    },
    submit(e) {
      console.log(e)
    }
  }
}
</script>

<style lang="scss" scoped>
.section_title {
  padding: 10px 0;
}
.margin-t-10 {
  margin-top: 10px;
}
.margin-l-10 {
  margin-left: 10px;
}
</style>
