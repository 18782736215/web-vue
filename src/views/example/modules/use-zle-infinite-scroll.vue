<template>
  <div>
    <zl-header>InfiniteScroll 无限滚动</zl-header>
    <zl-section class="first-scroll" header="基础用法">
      <zle-infinite-scroll class="infinite-scroll" :back-top="true" :back-top-height="100" :search-param="param" :load-api="loadApi1" :bottom="100" :right="30">
        <template slot-scope="{ content }">
          <div>{{ content.name }}</div>
        </template>
      </zle-infinite-scroll>
      <zle-alert title="无限滚动主要使用在存在列表的组件上 比如ul li" />
      <zle-alert title="增加返回顶部操作，需要在滚动区域的dom元素设置relative定位，不然会定位到window" />
    </zl-section>
    <zl-section header="默认空数据展示">
      <zle-infinite-scroll class="infinite-scroll" :search-param="param" :load-api="loadApi2">
        <template slot-scope="{ content }">
          <div>{{ content.name }}</div>
        </template>
      </zle-infinite-scroll>
    </zl-section>
    <zl-section header="自定义空数据插槽展示">
      <zle-infinite-scroll class="infinite-scroll" :search-param="param" :load-api="loadApi2">
        <template slot-scope="{ content }">
          <div>{{ content.name }}</div>
        </template>
        <template #empty>
          <zle-empty />
        </template>
      </zle-infinite-scroll>
    </zl-section>
  </div>
</template>

<script>
import { infiniteMethod1, infiniteMethod2 } from '../data/infinite-scroll.js'
export default {
  data() {
    return {
      param: {
        current: 1,
        size: 50
      },
      loadApi1: infiniteMethod1,
      loadApi2: infiniteMethod2
    }
  },
  created() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.description {
  padding: 10px 0;
}
.infinite-scroll {
  height: 300px;
  margin-bottom: 20px;
}
.first-scroll {
  position: relative;
}
</style>
