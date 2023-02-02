<template>
  <div id="app" ref="app">
    <keep-alive :include="includeArr">
      <router-view />
    </keep-alive>
    <template>
      <zle-backtop v-if="!isShowBackTop" target="#app" />
      <zl-backtop v-else />
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      includeArr: ['/iMyOrder', '/qualityTestManage'], // 需要保持滚动的页面
      scrollHeight: 0, // 滚动距离
      scrollPage: '', // 当前滚动页面
      scrollTarget: '' // 当前滚动页面的节点
    }
  },
  computed: {
    isShowBackTop() {
      return this.$u.validate.isMobile()
    }
  },
  watch: {
    '$route.path': {
      handler(newVal) {
        if (this.includeArr.includes(newVal)) {
          this.scrollPage = newVal + 'ScorllHeight'
          this.scrollHeight = this.$u.tool._getSessionItem(this.scrollPage) || 0
          if (this.scrollHeight) {
            this.$nextTick(() => {
              if (this.scrollTarget) {
                this.scrollTarget.scrollTop = this.scrollHeight
              }
            })
          }
        } else {
          this.scrollPage = ''
        }
      },
      immediate: true
    }

  },
  mounted() {
    this.watchScroll()
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
    this.clearScroll()
  },
  methods: {
    watchScroll() {
      window.addEventListener('scroll', this.handleScroll, true)
    },
    handleScroll(e) {
      // 元素滚动高度
      if (this.includeArr.includes(this.$route.path)) {
        this.scrollTarget = e.target
        this.$u.tool._setSessionItem(this.scrollPage, e.target.scrollTop)
      }
    },
    clearScroll() { // 清空存储的高度
      this.includeArr.forEach(v => {
        this.$u.tool._removeSessionItem(v + 'ScorllHeight')
      })
    }
  }
}
</script>
<style lang="scss">
html,
body {
  height: 100%;
	background-color: $--bg;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $--font;
  height: 100%;
}
@media screen and (max-width: 749px) {
  #app {
    font-size: $--font-size_mobile;
  }
}
@media screen and (min-width: 750px) {
  #app {
    font-size: $--font-size;
  }
}
</style>
