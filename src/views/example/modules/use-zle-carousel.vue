<template>
  <div>
    <zl-section header="Carousel 走马灯">
      <zle-alert type="error">
        由于组件内层封装添加 name 校验， 使用此组件时 el-carousel-item 名称不变
      </zle-alert>
    </zl-section>
    <zl-section header="基础用法">
      <div class="basic-box">
        <div class="basic-box-item">
          <span>默认 Hover 指示器触发</span>
          <zle-carousel class="basic-box-item" height="200px">
            <el-carousel-item v-for="item in 4" :key="item">
              {{ item }}
            </el-carousel-item>
          </zle-carousel>
        </div>
        <div class="basic-box-item">
          <span>Click 指示器触发</span>
          <zle-carousel trigger="click" class="basic-box-item" height="200px">
            <el-carousel-item v-for="item in 4" :key="item">
              {{ item }}
            </el-carousel-item>
          </zle-carousel>
        </div>
      </div>
      <zle-alert title="默认情况下，在鼠标 hover 底部的指示器时就会触发切换。通过设置trigger属性为click，可以达到点击触发的效果。" />
      <zle-alert title="使用 height控制走马灯高度" type="info" />
    </zl-section>
    <zl-section header="指示器">
      <div>可以将指示器的显示位置设置在容器外部</div>
      <zle-carousel indicator-position="outside">
        <el-carousel-item v-for="item in 4" :key="item">
          {{ item }}
        </el-carousel-item>
      </zle-carousel>
      <zle-alert title="默认情况下，它会显示在走马灯内部，设置为outside则会显示在外部；设置为none则不会显示指示器。" type="info" />
    </zl-section>
    <zl-section header="切换箭头">
      <div>可以设置切换箭头的显示时机</div>
      <zle-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="item in 4" :key="item">
          {{ item }}
        </el-carousel-item>
      </zle-carousel>
      <zle-alert title="默认情况下，切换箭头只有在鼠标 hover 到走马灯上时才会显示；若将arrow设置为always，则会一直显示；设置为never，则会一直隐藏。" type="info" />
    </zl-section>
    <zl-section header="卡片化">
      <div>当页面宽度方向空间空余，但高度方向空间匮乏时，可使用卡片风格</div>
      <zle-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="item in 4" :key="item">
          {{ item }}
        </el-carousel-item>
      </zle-carousel>
    </zl-section>
    <zl-section header="方向">
      <div>默认情况下，direction 为 horizontal。通过设置 direction 为 vertical 来让走马灯在垂直方向上显示。</div>
      <zle-carousel height="200px" direction="vertical" :autoplay="false">
        <el-carousel-item v-for="item in 4" :key="item">
          {{ item }}
        </el-carousel-item>
      </zle-carousel>
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
.header {
  font-size: 20px;
  font-weight: bold;
}
.my-section {
  display: flex;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.basic-box {
  display: flex;
  justify-content: space-around;
  .basic-box-item {
    text-align: center;
    padding: 10px;
    color: #8492a6;
    box-sizing: border-box;
    width: 100%;
  }
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
