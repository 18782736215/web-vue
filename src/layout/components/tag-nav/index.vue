<template>
  <div class="tags_view_container no_select">
    <scroll-pane ref="scrollPane" @scroll="handleScroll">
      <router-link v-for="(tag, index) in visitedViews" :key="index" ref="tag" :class="`default_tag ${isActive(tag) ? 'active_tag' : ''} ${isAffix(tag) ? 'normal_tag' : ''}`" :to="{ path: tag.path, query: tag.query, fullPath: tag.fullPath }" @click.middle.native="!isAffix(tag) ? closeSelectedTag(tag) : ''" @contextmenu.prevent.native="openMenu(tag, $event)">
        {{ tag.title }}
        <span v-if="!isAffix(tag)" class="el-icon-circle-close" @click.prevent.stop="closeSelectedTag(tag)" />
      </router-link>
    </scroll-pane>
    <ul v-show="visible" :style="{ left: left + 'px', top: top + 'px' }" class="contextmenu">
      <li v-if="!isAffix(selectedTag)" @click="closeSelectedTag(selectedTag)">
        关闭当前
      </li>
      <li @click="closeOthersTags">关闭其他</li>
      <li @click="closeAllTags(selectedTag)">关闭所有</li>
    </ul>
  </div>
</template>

<script>
import ScrollPane from './scroll-pane'
import path from 'path'
import { mapState } from 'vuex'

export default {
  components: { ScrollPane },
  data() {
    return {
      visible: false,
      top: 0,
      left: 0,
      selectedTag: {},
      affixTags: [] // 默认存在的tags
    }
  },
  computed: {
    ...mapState({
      visitedViews: state => state.tag.visitedViews,
      menuList: state => state.user.menuList
    })
  },
  watch: {
    $route(to, from) {
      if (to.path == from.path) {
        return true
      }
      this.addTags()
      this.moveToCurrentTag()
    },
    visible(value) {
      if (value) {
        document.body.addEventListener('click', this.closeMenu)
      } else {
        document.body.removeEventListener('click', this.closeMenu)
      }
    }
  },
  mounted() {
    this.initTags()
    this.addTags()
  },
  methods: {
    isActive(route) {
      return route.path === this.$route.path
    },
    isAffix(tag) {
      return tag.meta && tag.meta.affix
    },
    initTags() {
      const affixTags = (this.affixTags = this.filterAffixTags(this.menuList))
      for (const tag of affixTags) {
        if (tag.name) {
          this.$store.dispatch('addVisitedViews', tag)
        }
      }
    },
    filterAffixTags(routes, basePath = '/') {
      let tags = []
      routes.forEach(route => {
        if (route.meta && route.meta.affix) {
          const tagPath = path.resolve(basePath, route.path)
          tags.push({
            fullPath: tagPath,
            path: tagPath,
            name: route.name,
            meta: { ...route.meta }
          })
        }
        if (route.children) {
          const tempTags = this.filterAffixTags(route.children, route.path)
          if (tempTags.length >= 1) {
            tags = [...tags, ...tempTags]
          }
        }
      })
      return tags
    },
    addTags() {
      // 不写name,代表不加入路由
      const { name, path } = this.$route

      if (name) {
        this.$store.dispatch('addVisitedViews', this.$route)
      }
      return false
    },
    moveToCurrentTag() {
      const tags = this.$refs.tag
      this.$nextTick(() => {
        for (const tag of tags) {
          if (tag.to.path === this.$route.path) {
            this.$refs.scrollPane.moveToTarget(tag)
            // when query is different then update
            // if (tag.to.fullPath !== this.$route.fullPath) {
            //   this.$store.dispatch('updateVisitedView', this.$route)
            // }
            break
          }
        }
      })
    },
    closeSelectedTag(view) {
      this.$store.dispatch('delVisitedViews', view).then(({ visitedViews }) => {
        if (this.isActive(view)) {
          this.toLastView(visitedViews, view)
          this.handFirstTag()
        }
      })
    },
    closeOthersTags() {
      this.$router.push(this.selectedTag)
      this.$store.dispatch('delOthersViews', this.selectedTag).then(() => {
        this.moveToCurrentTag()
      })
    },
    closeAllTags(view) {
      this.$store.dispatch('delAllViews').then(({ visitedViews }) => {
        this.toLastView(visitedViews, view)
        this.handFirstTag()
      })
    },
    toLastView(visitedViews, view) {
      const latestView = visitedViews.slice(-1)[0]
      if (latestView) {
        this.$router.push(latestView)
      } else {
        let curHomePath = '/' // 获取当前首页
        if (this.$route.path == curHomePath) {
          window.location.reload()
        } else if (view.name === '') {
          this.$router.push(curHomePath)
        } else {
          this.$router.push(curHomePath)
        }
      }
    },
    openMenu(tag, e) {
      const contextMenuWidth = 80
      const offsetLeft = this.$el.getBoundingClientRect().left
      const offsetWidth = this.$el.offsetWidth
      const maxLeft = offsetWidth - contextMenuWidth
      const left = e.clientX - offsetLeft + contextMenuWidth * 3
      if (left > maxLeft) {
        this.left = maxLeft
      } else {
        this.left = left
      }

      this.top = e.clientY
      this.visible = true
      this.selectedTag = tag
    },
    closeMenu() {
      this.visible = false
    },
    handleScroll() {
      this.closeMenu()
    },
    // render one tag
    handFirstTag() {
      if (this.visitedViews.length == 0) {
        this.addTags(this.affixTags[0])
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.tags_view_container {
  width: 100%;
  box-sizing: border-box;
  background: #fff;
  height: 32px;
  padding-left: 5px;
  .default_tag {
    display: inline-block;
    cursor: pointer;
    height: 24px;
    line-height: 24px;
    border: 1px solid #d8dce5;
    color: #495060;
    background: #fff;
    font-size: 12px;
    margin-left: 5px;
    padding: 0 3px 0 8px;
    // border-radius: 4px;
    &.normal_tag {
      padding: 0 10px;
    }
    &:first-of-type {
      margin-left: 0px;
    }
    &:last-of-type {
      margin-right: 15px;
    }
    &.active_tag {
      border-color: $--color-primary;
      color: #fff;
      background-color: $--color-primary;
      transition: all 0.5s linear;
    }
    .el-icon-circle-close {
      width: 16px;
      height: 16px;
      &:hover {
        background-color: #eee;
        color: #666;
      }
    }
  }
  .contextmenu {
    margin: 0;
    background: #fff;
    z-index: 3000;
    position: absolute;
    list-style-type: none;
    padding: 5px 0;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 400;
    color: #333;
    box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.3);
    li {
      margin: 0;
      padding: 7px 16px;
      cursor: pointer;
      &:hover {
        background: #eee;
      }
    }
  }
}
::v-deep .el-tag.el-tag--info .el-tag__close {
  color: #fff;
}
</style>
