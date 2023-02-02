<template>
  <div>
    <zl-header>Collapse 折叠面板</zl-header>
    <zl-section header="基础用法">
      <div>可同时展开多个面板，面板之间不影响</div>
      <zle-collapse>
        <zle-collapse-item title="基础信息1" name="1"> <div>定位心海的锚</div> </zle-collapse-item>
        <zle-collapse-item title="基础信息2" name="2"> <div>让时间停顿的像慢动作</div> </zle-collapse-item>
        <zle-collapse-item title="基础信息3" name="3"> <div>你说命运很坏吧</div> </zle-collapse-item>
        <zle-collapse-item title="基础信息4" name="4"> <div>幸好有我</div> </zle-collapse-item>
      </zle-collapse>
    </zl-section>
    <zl-section header="手风琴效果">
      <div>每次只能展开一个面板</div>
      <zle-collapse accordion>
        <zle-collapse-item title="手风琴1" name="1"> <div>如果没有以后</div> </zle-collapse-item>
        <zle-collapse-item title="手风琴2" name="2"> <div>如果平行时空</div> </zle-collapse-item>
        <zle-collapse-item title="手风琴3" name="3"> <div>那些我</div> </zle-collapse-item>
        <zle-collapse-item title="手风琴4" name="4"> <div>不同人生的我</div> </zle-collapse-item>
      </zle-collapse>
    </zl-section>
    <zl-section header="自定义面板标题">
      <div>每次只能展开一个面板</div>
      <zle-collapse accordion>
        <zle-collapse-item name="1">
          <template slot="title"> 自定义标题1<i class="header-icon el-icon-info" /> </template>
          <div>会以什么方式 哭过</div>
        </zle-collapse-item>
        <zle-collapse-item title="自定义标题2" name="2"> <div>交换余生是我</div> </zle-collapse-item>
        <zle-collapse-item title="自定义标题3" name="3"> <div>非我</div> </zle-collapse-item>
        <zle-collapse-item title="自定义标题4" name="4"> <div>苦与乐</div> </zle-collapse-item>
      </zle-collapse>
      <zle-alert title="除了可以通过 title 属性以外，还可以通过具名 slot 来实现自定义面板的标题内容，以实现增加图标等效果。" />
    </zl-section>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.description {
  padding: 10px 0;
}
.title {
  width: 90%;
  display: flex;
  justify-content: space-between;
}
</style>
