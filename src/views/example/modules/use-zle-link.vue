<template>
  <div class="link">
    <zl-header title="Link 文字链接" />
    <zl-section header="不同类型type的链接">
      <zle-link href="https://www.baidu.com">百度[不传type，默认]</zle-link>
      <zle-link href="https://www.baidu.com" type="primary">百度[type="primary"]</zle-link>
      <zle-link href="https://www.baidu.com" type="warning">百度[type="warning"]</zle-link>
      <zle-link href="https://www.baidu.com" type="success">百度[type="success"]</zle-link>
      <zle-link href="https://www.baidu.com" type="danger">百度[type="danger"]</zle-link>
      <zle-link href="https://www.baidu.com" type="info">百度[type="info"]</zle-link>
    </zl-section>
    <zl-section header="自定义链接颜色 color">
      <div class="content">
        <zle-link href="https://www.baidu.com" color="#00FF00">百度</zle-link>
      </div>
    </zl-section>
    <zl-section header="鼠标移入有下划线的链接">
      <div class="content">
        <zle-link href="https://www.baidu.com" type="primary" target="_blank" underline>百度</zle-link>
        <p>underline默认有 其他可选值： false</p>
      </div>
    </zl-section>
    <zl-section header="链接打开方式target">
      <div class="content">
        <zle-link href="https://www.baidu.com" target="_self" type="danger">百度</zle-link>
        <p>默认：_blank 其他可选值：_parent、_self、_top</p>
      </div>
    </zl-section>
    <zl-section header="不可用链接">
      <div class="content">
        <zle-link href="https://www.baidu.com" disabled type="primary">百度 </zle-link>
        <p>disabled 默认：false 其他可选值：true</p>
      </div>
    </zl-section>
    <zl-section header="带图标的链接">
      <zle-link href="https://www.baidu.com" type="primary"><i class="el-icon-paperclip" /> 百度 </zle-link>
    </zl-section>
    <zl-section header="下划线">
      <zle-link href="https://www.baidu.com" type="primary" :underline="false"> 无下划线 </zle-link>
      <zle-link href="https://www.baidu.com" type="primary"> 有下划线 </zle-link>
    </zl-section>
    <zl-section header="待解决的问题">
      <zle-alert>
        1. 当前的自定义颜色的color，在悬浮时使用，修改颜色未生效
      </zle-alert>
    </zl-section>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.content {
  margin-bottom: 10px;
  p {
    margin-top: 5px;
  }
}
</style>
