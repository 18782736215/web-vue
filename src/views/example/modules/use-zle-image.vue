<template>
  <div>
    <zl-header>
      <h3 class="section_title">Image 图片</h3>
    </zl-header>
    <zl-section>
      <h3 class="description">基础图片</h3>
      <div class="flex-around main-box1">
        <div v-for="fit in fits" :key="fit" class="flex_column flex_center">
          <span class="demonstration">{{ fit }}</span>
          <zle-image class="my_img" :src="list[0]" :fit="fit" />
        </div>
      </div>
    </zl-section>
    <zl-section header="插槽">
      <div class="main-box2">
        <zle-image :src="loadImg" class="my_img" />
        <zle-image src="//" class="my_img" />
      </div>
      <zle-alert title="配置error插槽">
        图片加载失败，自定义加载失败图标
      </zle-alert>
    </zl-section>
    <zl-section>
      <h3 class="description">
        图片懒加载
      </h3>
      <div class="img-box main-box1">
        <div v-for="item in list" :key="item">
          <zle-image :src="item" lazy class="img-lazy" :z-index="999">
            <template #error>加载失败</template>
          </zle-image>
        </div>
      </div>
      <zle-alert title="配置lazy属性即可" />
    </zl-section>
    <zl-section>
      <div style="width:260px">
        <h3 class="description">使用图片预览功能</h3>
        <div class="my_img">
          <zle-image :src="list[0]" :preview-src-list="list" />
        </div>
        <zle-alert title="preview-src-list" />
      </div>
    </zl-section>
    <zl-section>
      <div style="width:260px">
        <h3 class="description">自定义占位符</h3>
        <div class="my_img">
          <zle-image src="https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg">
            <template #placeholder>加载中</template>
          </zle-image>
        </div>
        <zle-alert title="配置placeholder占位插槽" />
      </div>
    </zl-section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      time: '',
      fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
      list: ['https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg', 'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg', 'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg', 'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg', 'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg', 'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg', 'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg'],
      loadImg: ''
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.description {
  padding: 10px 0;
}
.main-box1 {
  width: 80%;
}
.main-box2 {
  width: 40%;
}
.img-box {
  width: 230px;
  height: 120px;
  overflow-y: auto;
  overflow-x: hidden;
}
.my_img {
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
  & + & {
    margin-left: 10px;
  }
}
.img-lazy {
  width: 220px;
  height: 100px;
}
.flex-around {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>
