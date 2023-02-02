<template>
  <div class="example_box">
    <div class="flex_column left_box">
      <zle-input v-model.trim="search" class="my_search" placeholder="搜索菜单" clearable @change="searchChange" />
      <div class="flex_1_auto no_scrollbar">
        <zle-nav-menu :default-active="activeNav" :data="navMenu" :collapse="false" index="component" @select="select" @open="select" />
      </div>
    </div>
    <div class="flex_column flex_1_auto right_box">
      <component :is="activeNav" v-if="allComponents.includes(activeNav)" />
    </div>
    <right-setting />
  </div>
</template>

<script>
/**
 * 通过获取 component 渲染
 */
import file from './file.js'
import exampleSide from '@/views/example/data/example-side'
import { reqGetHotJob, reqGetHotJob2 } from '@/api/login'
import rightSetting from '@/views/example/components/right-setting'
export default {
  name: 'ExampleCom',
  components: { ...file, rightSetting },
  data() {
    return {
      activeNav: '',
      search: '',
      navMenu: []
    }
  },
  computed: {
    initMenu() {
      return this.formatData(exampleSide, 0)
    },
    allComponents() {
      return Object.keys(file)
    }
  },
  async created() {
    reqGetHotJob()
    await reqGetHotJob2()
    this.searchChange()
    this.initNav()
  },
  methods: {
    initNav() {
      let active = this.$u.tool._getLocalItem('EXAMPLE_ACTIVE')
      if (active) {
        this.activeNav = active
      }
    },
    // 格式化数据
    formatData(data, index) {
      return data.map((v, i) => {
        if (Array.isArray(v.children) && v.children.length > 0) {
          v.children = this.formatData(v.children, i)
        }
        v.component = v.component || v.title
        return v
      })
    },
    select(index, path) {
      this.activeNav = index
      this.$u.tool._setLocalItem('EXAMPLE_ACTIVE', index)
    },
    searchChange() {
      let data = this.$u.tool._deepClone(this.initMenu)
      let str = this.search ? this.search.toUpperCase() : ''
      if (str) {
        this.navMenu = this.searchM(data, str)
      } else {
        this.navMenu = data
      }
      this.activeNav = this.getDefaultActive(this.navMenu, '')
    },
    // 过滤查找
    searchM(data, str) {
      return data.filter(v => {
        let itemStr = v.title ? v.title.toUpperCase() : ''
        if (itemStr.includes(str)) {
          return true
        } else {
          if (Array.isArray(v.children) && v.children.length > 0) {
            v.children = this.searchM(v.children, str)
            return v.children.length > 0
          }
          return false
        }
      })
    },
    // 获取defaultActive
    getDefaultActive(data, str) {
      if (data.length > 0) {
        let item = data[0]
        str = item.component
        if (Array.isArray(item.children) && item.children.length > 0) {
          str = this.getDefaultActive(item.children, str)
        }
      }
      return str
    }
  }
}
</script>
<style lang="scss">
.example_box {
  display: flex;
  height: 100%;
  overflow: hidden;
  .my_search {
    width: 90%;
    margin: 10px auto;
  }
  .left_box {
    width: 260px;
    background-color: #fff;
    overflow: hidden;
  }
}

</style>
