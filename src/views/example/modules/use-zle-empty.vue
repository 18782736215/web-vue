<!-- Empty 空状态 -->
<template>
  <div>
    <zl-header> Empty 空状态 </zl-header>
    <zl-section header="基础用法">
      <div class="section_title">description="描述文字"</div>
      <zle-empty description="描述文字" />
    </zl-section>
    <zl-section header="自定义">
      <div class="section_title">image 自定义图片</div>
      <zle-empty image="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" />
      <div class="section_title">image-size 自定义图片大小</div>
      <zle-empty :image-size="300" />
      <div class="section_title">底部内容</div>
      <zle-empty>
        <zle-button type="primary">按钮</zle-button>
      </zle-empty>
    </zl-section>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  created() { },
  methods: {}
}
</script>

<style scoped lang="scss">
</style>
