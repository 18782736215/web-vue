<template>
  <!-- 页面框架 -->
  <div id="layout">
    <headerCom v-if="showHeader" />
    <div id="layout_main_box" :class="{'show_top':showHeader}">
      <aside v-if="layoutList.includes('leftMenu')" class="layout_left">
        <leftNav />
      </aside>
      <section class="flex_1 flex_column">
        <tagNav v-if="layoutList.includes('topNav')" />
        <main class="flex_1_auto">
          <slot />
        </main>
      </section>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import leftNav from '@/layout/components/left-nav/index.vue'
import tagNav from '@/layout/components/tag-nav/index.vue'
import headerCom from '@/layout/components/header/header'
export default {
  name: 'InLayout',
  components: {
    leftNav,
    tagNav,
    headerCom
  },
  computed: {
    showHeader() {
      return this.layoutList.includes('header')
    },
    ...mapState({
      layoutList: state => state.setting.layoutList, // layout 布局
      isLogin: state => state.user.isLogin // 校验是否登录
    })
  }
}
</script>

<style lang="scss" scoped>
#layout_main_box {
  box-sizing: border-box;
  display: flex;
  height: 100%;
  .layout_main {
    flex: 1;
    overflow-y: auto;
  }
}
.show_top {
  padding-top: $--base-top;
}
</style>
