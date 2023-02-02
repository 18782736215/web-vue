<template>
  <!-- 左侧导航栏 -->
  <div class="menuList_box">
    <zle-nav-menu :data="leftNav" :collapse="isCollapse" :default-active="activeMenu" index="path" @select="select" />
    <button class="toggle_btn" @click="toggleSideBar">
      <i :class="`toggle_icon ${sidebar.open ? 'el-icon-d-arrow-left' : 'el-icon-d-arrow-right'}`" />
    </button>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
export default {
  name: 'LeftNav',
  computed: {
    leftNav() {
      let menu = this.$u.tool._deepClone(this.menuList)
      return this.getMenu(menu)
    },
    ...mapState({
      menuList: state => state.user.menuList
    }),
    ...mapGetters(['sidebar']),
    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    isCollapse() {
      return !this.sidebar.open
    },
    menuClassObj() {
      return {
        hideSidebar: !this.sidebar.open,
        openSidebar: this.sidebar.open
      }
    }
  },
  methods: {
    select(index, indexPath) {
      // console.log('index', index, 'indexPath', indexPath)
    },
    getMenu(data) {
      return data.map(v => {
        let child = []
        if (Array.isArray(v.children) && v.children.length > 0) {
          child = this.$u.tool._deepClone(v.children)
          child = this.getMenu(child)
        }
        let item = {
          path: v.path,
          title: v.meta ? v.meta.title : '',
          icon: v.meta ? v.meta.icon : '',
          children: child
        }
        item.icon = item.icon || 'el-icon-setting'
        return item
      })
    },
    toggleSideBar() {
      this.$store.dispatch('toggleSideBar')
    }
  }
}
</script>

<style lang="scss" scoped>
.menuList_box {
  position: relative;
  background: #fff;
  height: 100%;
  border-right: 1px solid #eee;
  .zle_open_sidebar {
    width: $--base-side-width !important;
  }
  .zle_hide_sidebar {
    width: $--base-side-width-hide !important;
  }
  .toggle_btn {
    position: absolute;
    padding: 0;
    height: 40px;
    width: 15px;
    top: 50%;
    margin-top: -20px;
    right: 0;
    text-align: center;
    line-height: 40px;
    z-index: 10;
    border-radius: 10px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -ms-border-radius: 10px;
    -o-border-radius: 10px;
    color: #333;
    border: 1px solid #f2f2f2;

    &:hover {
      color: $--color-primary;
      background-color: $--color-secondary;
    }
  }
}
</style>
