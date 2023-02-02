<template>
  <div>
    <div v-drag class="right_setting">
      <i class="el-icon-setting cursor" @click.stop="showModel" />
    </div>
    <zle-drawer title="设置" direction="rtl" :visible.sync="showDrawer" size="30%">
      <zl-section header="布局设置">
        <zle-form :model="configForm" label-width="200px" label-position="left">
          <zle-form-item label="框架布局">
            <zle-select v-model="layoutConfig" value-key="value" @change="layoutChange">
              <zle-option v-for="(item,index) in menuConfig" :key="index" :label="item.name" :value="item" />
            </zle-select>
          </zle-form-item>
          <zle-form-item label="展示顶部">
            <zle-switch v-model="configForm.header" />
          </zle-form-item>
          <zle-form-item label="展示顶部菜单">
            <zle-switch v-model="configForm.topMenu" />
          </zle-form-item>
          <zle-form-item label="展示顶部导航">
            <zle-switch v-model="configForm.topNav" />
          </zle-form-item>
          <zle-form-item label="展示左侧菜单">
            <zle-switch v-model="configForm.leftMenu" />
          </zle-form-item>
        </zle-form>
      </zl-section>
      <zle-alert>点击确定后生效</zle-alert>
      <div slot="footer">
        <zle-button @click="closeDrawer">取消</zle-button>
        <zle-button type="primary" @click="confirmDrawer">确定</zle-button>
      </div>
    </zle-drawer>
  </div>

</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      showDrawer: false,
      layoutConfig: {}, // 框架布局默认
      menuConfig: [
        { name: '默认', value: 'default', layout: ['header', 'topNav', 'leftMenu'] },
        { name: '通栏', value: 'header', layout: ['header', 'topMenu', 'topNav', 'leftMenu'] }, // 顶部控制左侧菜单展示
        { name: '经典', value: 'menu', layout: ['header', 'topNav', 'leftMenu'] },
        { name: '功能坞', value: 'dock', layout: ['header', 'topMenu', 'topNav'] }
      ],
      configForm: {
        header: true, // 展示顶部 header
        topMenu: true,
        topNav: true,
        leftMenu: true
      }
    }
  },
  computed: {
    ...mapState({
      layoutList: state => state.setting.layoutList // layout 布局
    })
  },
  methods: {
    layoutChange(val) {
      console.log(val)
      if (Object.keys(val).length > 0) {
        this.resetConfig()
      } else {
        this.resetConfig(false)
      }
    },
    showModel() {
      this.resetConfig()
      this.showDrawer = true
    },
    confirmDrawer() {
      this.$store.commit('SET_LAYOUT', this.getShow())
      this.showDrawer = false
    },
    getShow() {
      let arr = []
      if (this.layoutConfig.layout && this.layoutConfig.layout.length > 0) {
        arr = this.layoutConfig.layout
      } else {
        for (let key in this.configForm) {
          if (this.configForm[key]) {
            arr.push(key)
          }
        }
      }
      return arr
    },
    closeDrawer() {
      this.showDrawer = false
    },
    resetConfig(flag) {
      flag = typeof flag == 'boolean' ? flag : false
      for (let key in this.configForm) {
        let curFlag = flag || this.layoutList.includes(key)
        this.$set(this.configForm, key, curFlag)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.right_setting {
  position: fixed;
  right: 0;
  top: 25%;
  width: 50px;
  height: 50px;
  box-sizing: border-box;
  font-size: 40px;
  background: $--color-primary;
  color: #fff;
  padding: 5px;
  border-radius: 4px;
  z-index: 999;
}
</style>
