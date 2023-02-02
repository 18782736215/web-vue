<template>
  <div class="zle_top_menu">
    <zle-nav-menu :data="leftNav" mode="horizontal" :collapse="false" :default-active="activeMenu" index="path" @select="select" />
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
export default {
  name: 'HeaderNav',
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
.zle_top_menu {
  ::v-deep {
    .el-menu-item,
    .el-submenu__title {
      height: $--base-top;
      line-height: $--base-top;
    }
  }
}
</style>
