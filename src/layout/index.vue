<template>
  <!-- 页面框架 -->
  <layout>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" :key="$route.path" />
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" :key="$route.path" />
  </layout>
</template>

<script>
import { mapState } from 'vuex'
import layout from '@/layout/components/layout'
export default {
  name: 'Layout',
  components: {
    layout
  },
  data() {
    return {}
  },
  computed: {
    ...mapState({
      keepAliveArr: state => state.user.keepAliveArr // 获取需要缓存的页面
    })
  }
}
</script>
