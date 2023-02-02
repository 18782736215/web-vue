<!-- Skeleton 骨架屏 -->
<template>
  <div>
    <zl-header> Skeleton 骨架屏 </zl-header>
    <zl-section header="基础用法">
      <zle-skeleton />
    </zl-section>
    <zl-section header="更多参数">
      <zle-skeleton :rows="6" />
    </zl-section>
    <zl-section header="动画效果">
      <zle-skeleton animated />
    </zl-section>
    <zl-section header="自定义样式">
      <zle-skeleton style="width: 240px">
        <template slot="template">
          <zle-skeleton-item variant="image" style="width: 240px; height: 240px" />
          <div style="padding: 14px 0">
            <zle-skeleton-item variant="p" style="width: 50%" />
            <div style="display: flex; align-items: center; justify-items: space-between; margin-top:14px;">
              <zle-skeleton-item variant="text" style="margin-right: 16px" />
              <zle-skeleton-item variant="text" style="width: 30%" />
            </div>
          </div>
        </template>
      </zle-skeleton>
      <zle-alert>
        variant 当前显示的占位元素的样式
        <br>
        p / h1 / h3 / text / caption / button / image / circle / rect
      </zle-alert>
    </zl-section>
    <zl-section header="Loading 状态">
      <div style="width: 240px">
        <p>
          <label style="margin-right: 16px;">切换 Loading</label>
          <zle-switch v-model="loading" />
        </p>
        <zle-skeleton style="width: 240px" :loading="loading" animated>
          <template slot="template">
            <zle-skeleton-item
              variant="image"
              style="width: 240px; height: 240px;"
            />
            <div style="padding: 14px;">
              <zle-skeleton-item variant="h3" style="width: 50%;" />
              <div
                style="display: flex; align-items: center; justify-items: space-between; margin-top: 16px; height: 16px;"
              >
                <zle-skeleton-item variant="text" style="margin-right: 16px;" />
                <zle-skeleton-item variant="text" style="width: 30%;" />
              </div>
            </div>
          </template>
          <template>
            <zle-card :body-style="{ padding: '0px', marginBottom: '1px' }">
              <img
                src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                class="image"
              >
              <div style="padding: 14px;">
                <span>好吃的汉堡</span>
                <div class="bottom card-header">
                  <span class="time">{{ currentDate }}</span>
                  <zle-button type="text" class="button">操作按钮</zle-button>
                </div>
              </div>
            </zle-card>
          </template>
        </zle-skeleton>
      </div>
    </zl-section>
    <zl-section header="渲染多条数据">
      <div style="width: 400px">
        <p>
          <zle-button @click="setLoading">点我重新加载</zle-button>
        </p>
        <zle-skeleton style="width:400px" :loading="loading" animated :count="3">
          <template slot="template">
            <zle-skeleton-item
              variant="image"
              style="width: 400px; height: 267px;"
            />
            <div style="padding: 14px;">
              <zle-skeleton-item variant="h3" style="width: 50%;" />
              <div
                style="display: flex; align-items: center; justify-items: space-between; margin-top: 16px; height: 16px;"
              >
                <zle-skeleton-item variant="text" style="margin-right: 16px;" />
                <zle-skeleton-item variant="text" style="width: 30%;" />
              </div>
            </div>
          </template>
          <template>
            <zle-card
              v-for="item in lists"
              :key="item.name"
              :body-style="{ padding: '0px', marginBottom: '1px' }"
            >
              <img :src="item.imgUrl" class="image multi-content">
              <div style="padding: 14px;">
                <span>{{ item.name }}</span>
                <div class="bottom card-header">
                  <span class="time">{{ currentDate }}</span>
                  <zle-button type="text" class="button">操作按钮</zle-button>
                </div>
              </div>
            </zle-card>
          </template>
        </zle-skeleton>
      </div>
    </zl-section>
    <zl-section header="防止渲染抖动">
      <div style="width: 240px">
        <p>
          <label style="margin-right: 16px;">切换 Loading</label>
          <zle-switch v-model="loading" />
        </p>
        <zle-skeleton
          style="width: 240px"
          :loading="loading"
          animated
          :throttle="500"
        >
          <template slot="template">
            <zle-skeleton-item
              variant="image"
              style="width: 240px; height: 240px;"
            />
            <div style="padding: 14px;">
              <zle-skeleton-item variant="h3" style="width: 50%;" />
              <div
                style="display: flex; align-items: center; justify-items: space-between; margin-top: 16px; height: 16px;"
              >
                <zle-skeleton-item variant="text" style="margin-right: 16px;" />
                <zle-skeleton-item variant="text" style="width: 30%;" />
              </div>
            </div>
          </template>
          <template>
            <zle-card :body-style="{ padding: '0px', marginBottom: '1px'}">
              <img
                src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                class="image"
              >
              <div style="padding: 14px;">
                <span>好吃的汉堡</span>
                <div class="bottom card-header">
                  <span class="time">{{ currentDate }}</span>
                  <zle-button type="text" class="button">操作按钮</zle-button>
                </div>
              </div>
            </zle-card>
          </template>
        </zle-skeleton>
      </div>
    </zl-section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
      currentDate: '2021-06-01',
      lists: []
    }
  },
  created() {},
  mounted() {
    this.loading = false
    this.lists = [
      {
        imgUrl:
            'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
        name: '鹿'
      },
      {
        imgUrl:
            'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
        name: '马'
      },
      {
        imgUrl:
            'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
        name: '山狮'
      }
    ]
  },
  methods: {
    setLoading() {
      this.loading = true
      setTimeout(() => (this.loading = false), 2000)
    }
  }
}
</script>

<style scoped lang="scss">
</style>
