<template>
  <div class="anchor">
    <!-- 锚点示例 -->
    <zl-anchor container-offset-top="20" container="#scrollView" bg-color="#fcfcfc" line-less right="30px" top="100px">
      <zl-anchor-item href="#basic" title="基础1" />
      <zl-anchor-item href="#line" title="基础2" />
      <zl-anchor-item href="#affix" title="基础3" />
      <zl-anchor-item href="#boundary" title="基础4" />
    </zl-anchor>
    <zl-anchor container-offset-top="20" container="#scrollView" bg-color="#fcfcfc" :line-less="false" right="30px" top="300px">
      <zl-anchor-item href="#basic" title="基础1" />
      <zl-anchor-item href="#line" title="基础2" />
      <zl-anchor-item href="#affix" title="基础3" />
      <zl-anchor-item href="#boundary" title="基础4" />
    </zl-anchor>
    <!--  监听滚动的元素 -->
    <zl-header>Anchor 锚点</zl-header>
    <div id="scrollView" class="section scroll-view">
      <div id="basic" class="anchor-content">
        <h3>有无轴线：line-less true:有 false 没有</h3>
      </div>
      <div id="line" class="anchor-content">
        <h3>bgColor：背景色设置 默认: #FFFFFF</h3>
        <h3>width：导航菜单宽度 默认：180</h3>
        <h3>left：距离左侧偏移 默认：0</h3>
        <h3>top：距离顶部偏移 默认： 0</h3>
        <h3>value：当前选择的锚点</h3>
      </div>
      <div id="affix" class="anchor-content">
        <h3>href: 导航菜单节点 title: 导航菜单名称</h3>
        比如: href="basic" title="基础1"
        <p />
      </div>
      <div id="boundary" class="anchor-content">
        <h3>引用页面需要在style中添加position:relative</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  mounted() {},

  methods: {}
}
</script>

<style lang="scss" scoped>
.anchor-content {
  height: 500px;
  // background-color: #ddd;
}
.anchor {
  // padding-left: 200px;
  position: relative;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 80px);
  .scroll-view {
    flex: 1;
    overflow: auto;
  }
}
</style>
