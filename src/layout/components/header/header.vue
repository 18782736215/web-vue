<template>
  <header class="layout_head">
    <div class="lh_left cursor" @click="goHomeMixins">
      <zle-image class="home_logo" :src="require('@/assets/img/home-logo.png')" fit="contain" />
      <h1 class="home_title">{{ appName }}</h1>
    </div>
    <template v-if="isLogin">
      <div class="lh_right flex_b_center">
        <header-nav v-if="layoutList.includes('topMenu')" />
      </div>
      <zle-avatar class="lhr_img" :size="32" :src="userInfo.avatar" fit="contain" @error="errorHandler">
        <img src="@/assets/img/home-logo.png">
      </zle-avatar>
      <span class="lhr_user">{{ userInfo.userName }}</span>
    </template>
  </header>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import headerNav from '@/layout/components/header-nav/index.vue'
import layoutMixins from '../mixins'
export default {
  components: {
    headerNav
  },
  mixins: [layoutMixins],
  data() {
    return {
      appName: process.env.VUE_APP_TITLE
    }
  },
  computed: {
    ...mapState({
      layoutList: state => state.setting.layoutList, // layout 布局
      isLogin: state => state.user.isLogin // 登录
    }),
    ...mapGetters(['userInfo'])
  },
  methods: {
    errorHandler() {
      return true
    },
    goChat() {
      this.$router.push({ path: '/chat' })
    }
  }
}
</script>

<style lang="scss" scoped>
.layout_head {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 4;
  border-bottom: 1px solid #e5e6eb;
  .home_title {
    margin-left: 10px;
    font-size: 16px;
    font-weight: 700;
  }
  .lh_left {
    padding: 0 10px;
    height: $--base-top;
    display: flex;
    align-items: center;
    justify-content: center;
    .home_logo {
      width: auto;
      height: calc(#{$--base-top} - 10px);
    }
  }
  .out_icon {
    font-weight: 700;
    font-size: 22px;
    &:hover {
      color: $--color-primary;
    }
  }
}
.layout_head {
  display: flex;
  align-items: center;
  background-color: #fff;
  .lh_right {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 20px;
  }
  .lhr_user {
    font-size: 14px;
    font-weight: 700;
    margin: 0 10px;
  }
  .lhr_btn {
    margin: 0 16px;
  }
}
.chat {
  font-size: 30px;
  font-weight: bold;
  margin-right: 20px;
  cursor: pointer;
  padding-top: 5px;
}
</style>
