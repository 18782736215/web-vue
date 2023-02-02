<template>
  <div>
    <zl-header>
      <h3 class="section_title">Tooltip 文字提示</h3>
    </zl-header>
    <zl-section>
      <h3 class="description">基础文字提示</h3>
      <zle-tooltip content="test-bottom" placement="bottom">
        <zle-button>test-bottom</zle-button>
      </zle-tooltip>
      <zle-tooltip content="test-top" placement="top">
        <zle-button>test-top</zle-button>
      </zle-tooltip>
      <zle-tooltip content="test-left" placement="left">
        <zle-button>test-left</zle-button>
      </zle-tooltip>
      <zle-tooltip content="test-right" placement="right">
        <zle-button>test-right</zle-button>
      </zle-tooltip>
      <zle-alert title="使用content来展示显示内容" type="info" />
      <zle-alert title="使用placement来决定显示位置" type="info" />
      <zle-alert title="出现位置 top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end" type="info" />
    </zl-section>
    <zl-section>
      <h3 class="description">文字提示主题</h3>
      <zle-tooltip content="test-bottom" effect="light">
        <zle-button>test-light</zle-button>
      </zle-tooltip>
      <zle-tooltip content="test-bottom" effect="dark">
        <zle-button>test-dark</zle-button>
      </zle-tooltip>
      <zle-alert title="使用effect来确定主题 light/dark" type="info" />
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
</style>
