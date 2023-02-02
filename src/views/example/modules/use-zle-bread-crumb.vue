<template>
  <div>
    <zl-header>Breadcrumb 面包屑</zl-header>
    <zl-section header="基础用法">
      <div class="title">适用广泛的基础用法。</div>
      <zle-bread-crumb class="my-bread-crumb">
        <zle-bread-crumb-item v-for="(item, index) in options" :key="index" :to="item.path" :replace="item.replace">
          {{ item.name }}
        </zle-bread-crumb-item>
      </zle-bread-crumb>
    </zl-section>
    <zl-section header="图标分隔符">
      <zle-bread-crumb separator-class="el-icon-arrow-right" class="my-bread-crumb">
        <zle-bread-crumb-item v-for="(item, index) in options" :key="index" :to="item.path" :replace="item.replace">
          {{ item.name }}
        </zle-bread-crumb-item>
      </zle-bread-crumb>
      <zle-alert title="面包屑间隔的符号可以是字符，可以是图标" type="info" />
    </zl-section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          name: '首页', // 面包屑名称
          path: '/1', // 跳转路径
          replace: true // 是否使用replace方式跳转
        },
        {
          name: '活动管理',
          path: '/2',
          replace: false
        },
        {
          name: '活动列表',
          path: '/3',
          replace: false
        },
        {
          name: '活动详情',
          path: '/4',
          replace: false
        }
      ]
    }
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
.my-bread-crumb {
  margin: 10px 0;
}
.title {
  margin: 10px 0;
}
</style>
