<template>
  <div class="app">
    <zl-header>Backtop 回到顶部</zl-header>
    <zl-section header="下滑触发回到顶部">
      <zle-alert title="需要配置target:触发滚动的对象，visibility-height	滚动高度达到此参数值才出现" />
      <zle-alert title="right	控制其显示位置, 距离页面右边距 bottom	控制其显示位置, 距离页面底部距离 " />
      <div class="black-box">
        <zle-backtop target=".app" :bottom="150" :right="100" @click="clickMe" />
      </div>
      <div class="black-box">
        <zle-backtop target=".app" :visibility-height="50" :bottom="150" :right="300" @click="clickMe">
          <div class="my-back-top">
            <zle-image src="https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg" class="img" />
          </div>
        </zle-backtop>
      </div>
    </zl-section>
  </div>
</template>

<script>
export default {
  methods: {
    clickMe() {
      this.$zleMessage.success('我回到顶部了')
    }
  }
}
</script>

<style lang="scss" scoped>
.description {
  padding: 10px 0;
}
.app {
  height: 900px;
  overflow: auto;
}
.black-box {
  height: 4000px;
}
.my-back-top {
  animation: rotateImg 3.5s infinite linear;
  text-align: center;
  &:hover {
    animation-play-state: paused;
  }
  .img {
    width: 80%;
    height: 60%;
  }
}
@keyframes rotateImg {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
</style>
