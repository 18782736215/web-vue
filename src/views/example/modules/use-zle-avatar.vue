<template>
  <div>
    <zl-header> Avatar 头像 </zl-header>
    <zl-section header="基本用法">
      <zle-row class="demo-avatar demo-basic">
        <zle-col :span="12">
          <!-- <div class="sub-title"></div> -->
          <div class="demo-basic--circle">
            <div class="block"><zle-avatar :size="50" :src="circleUrl" /></div>
            <div v-for="size in sizeList" :key="size" class="block">
              <zle-avatar :size="size" :src="circleUrl" />
            </div>
          </div>
        </zle-col>
        <zle-col :span="12">
          <div class="demo-basic--circle" style="margin-bottom: 10px">
            <div class="block"><zle-avatar shape="square" :size="50" :src="squareUrl" /></div>
            <div v-for="size in sizeList" :key="size" class="block">
              <zle-avatar shape="square" :size="size" :src="squareUrl" />
            </div>
          </div>
        </zle-col>
      </zle-row>
      <zle-alert title="通过 shape 和 size 设置头像的形状和大小。" type="info" />
    </zl-section>
    <zl-section header="展示类型">
      <div>支持三种类型：图标、图片和字符</div>
      <div class="demo-type">
        <div class="block">
          <zle-avatar icon="el-icon-user-solid" />
        </div>
        <div class="block">
          <zle-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
        </div>
        <div class="block">
          <zle-avatar> user </zle-avatar>
        </div>
      </div>
    </zl-section>
    <zl-section header="图片加载失败的 fallback 行为">
      <div class="demo-type">
        <zle-avatar :size="60" src="https://empty" @error="errorHandler">
          <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png">
        </zle-avatar>
      </div>
    </zl-section>
    <zl-section header="图片如何适应容器框">
      <div class="demo-fit">
        <div v-for="fit in fits" :key="fit" class="block">
          <div class="title flex_center">{{ fit }}</div>
          <zle-avatar shape="square" :size="100" :fit="fit" :src="url" />
        </div>
      </div>
    </zl-section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
      squareUrl: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
      sizeList: ['large', 'medium', 'small'],
      fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
    }
  },
  created() {},
  methods: {
    errorHandler() {
      return true
    }
  }
}
</script>

<style scoped lang="scss">
.block {
  display: inline-block;
  margin-left: 30px;
}
.demo-type {
  display: flex;
}
::v-deep .el-avatar--icon {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
