<template>
  <div>
    <zl-header> Result 结果 </zl-header>
    <zl-section header="基础用法">
      <div class="section_title">Slots icon 自定义图标 title subTitle 自定义二级标题</div>
      <zle-row>
        <zle-col :sm="12" :lg="6">
          <zle-result icon="success" title="成功提示" sub-title="请根据提示进行操作">
            <template slot="extra">
              <zle-button type="primary" size="medium">返回</zle-button>
            </template>
          </zle-result>
        </zle-col>
        <zle-col :sm="12" :lg="6">
          <div class="section_title flex_center">slot="title" 自定义标题</div>
          <zle-result icon="warning" sub-title="请根据提示进行操作">
            <template slot="title">
              <zle-button type="primary" size="medium">警告提示</zle-button>
            </template>
          </zle-result>
        </zle-col>
        <zle-col :sm="12" :lg="6">
          <div class="section_title flex_center">slot="extra" 自定义底部额外区域</div>
          <zle-result icon="error" title="错误提示" sub-title="请根据提示进行操作">
            <template slot="extra">
              <zle-button type="primary" size="medium">返回</zle-button>
            </template>
          </zle-result>
        </zle-col>
        <zle-col :sm="12" :lg="6">
          <div class="section_title flex_center">slot="icon" 自定义图标</div>
          <zle-result title="信息提示" sub-title="请根据提示进行操作">
            <template slot="icon">
              <zle-image src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" />
            </template>
          </zle-result>
        </zle-col>
      </zle-row>
    </zl-section>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  created() {},
  methods: {}
}
</script>

<style scoped lang="scss">
</style>
