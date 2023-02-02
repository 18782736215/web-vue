<template>
  <div>
    <zl-header>
      <h3 class="section_title">Popover 弹出框</h3>
    </zl-header>
    <zl-section>
      <h3 class="description">基础弹出框</h3>
      <zle-popover class="mr_10" content="hover" trigger="hover">
        <div>hahaha</div>
        <zle-button slot="reference">hover</zle-button>
      </zle-popover>
      <zle-popover class="mr_10" content="click" trigger="click">
        <zle-button slot="reference">click</zle-button>
      </zle-popover>
      <zle-popover content="focus" trigger="focus">
        <zle-button slot="reference">focus</zle-button>
      </zle-popover>
      <zle-alert title="使用content来展示显示内容" type="info" />
      <zle-alert title="使用trigger来控制触发方式" type="info" />
      <zle-alert title="click/focus/hover/manual" type="info" />
    </zl-section>
    <zl-section>
      <h3 class="description">展示位置不同德弹出框</h3>
      <zle-popover class="mr_10" content="top" placement="top" trigger="hover">
        <zle-button slot="reference">top</zle-button>
      </zle-popover>
      <zle-popover class="mr_10" content="bottom" placement="bottom" trigger="hover">
        <zle-button slot="reference">bottom</zle-button>
      </zle-popover>
      <zle-popover content="right" placement="right" trigger="hover">
        <zle-button slot="reference">right</zle-button>
      </zle-popover>
      <zle-alert title="使用placement来控制展示位置" type="info" />
      <zle-alert title="top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end" type="info" />
    </zl-section>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  beforeDestroy() {},
  methods: {}
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
