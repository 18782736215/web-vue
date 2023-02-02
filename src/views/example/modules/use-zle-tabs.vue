<template>
  <div>
    <zl-section header="Tabs 标签页">
      <zle-alert type="error">
        由于组件内层封装添加 name 校验， 使用此组件时 el-tab-pane 名称不变
      </zle-alert>
    </zl-section>
    <zl-section header="默认选项卡">
      <zle-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
        <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="角色管理" disabled name="third">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
      </zle-tabs>
    </zl-section>
    <zl-section header="type风格类型使用">
      <zle-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
        <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="角色管理" disabled name="third">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
      </zle-tabs>
      <zle-tabs v-model="activeName" type="border-card" @tab-click="handleClick">
        <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
        <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="角色管理" disabled name="third">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
      </zle-tabs>
    </zl-section>
    <zl-section header="tab-position位置修改">
      <zle-radio-group v-model="tabPosition" style="margin-bottom: 30px">
        <!-- TODO 添加组件后放开 -->
        <zle-radio-button label="top">top</zle-radio-button>
        <zle-radio-button label="right">right</zle-radio-button>
        <zle-radio-button label="bottom">bottom</zle-radio-button>
        <zle-radio-button label="left">left</zle-radio-button>
      </zle-radio-group>
      <zle-tabs v-model="activeName" :tab-position="tabPosition" style="height: 200px" @tab-click="handleClick">
        <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
        <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
      </zle-tabs>
    </zl-section>
    <zl-section header="自定义标签页">
      <zle-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="用户管理" name="first">
          <span slot="label"><i class="el-icon-date" /> 我的行程</span>
          我的行程
        </el-tab-pane>
        <el-tab-pane label="配置管理" name="second">
          <span slot="label"><i class="el-icon-date" /> 配置管理</span>
          配置管理</el-tab-pane>
        <el-tab-pane label="角色管理" name="third">
          <span slot="label"><i class="el-icon-date" /> 角色管理</span>
          角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿" name="fourth">
          <span slot="label"><i class="el-icon-date" /> 定时任务补偿</span>
          定时任务补偿</el-tab-pane>
      </zle-tabs>
    </zl-section>
    <zl-section header="动态增减标签页">
      <div>增减标签页按钮只能在选项卡样式的标签页下使用</div>
      <zle-tabs v-model="editableTabsValue1" type="card" editable @edit="handleTabsEdit" @tab-click="handleClick">
        <el-tab-pane v-for="item in editableTabs1" :key="item.name" :label="item.title" :name="item.name">
          {{ item.content }}
        </el-tab-pane>
      </zle-tabs>
    </zl-section>
    <zl-section header="自定义增加标签页触发器">
      <div style="margin-bottom: 20px">
        <zle-button size="small" @click="addTab(editableTabsValue2)"> add tab </zle-button>
      </div>
      <zle-tabs v-model="editableTabsValue2" type="card" closable @tab-remove="removeTab">
        <el-tab-pane v-for="item in editableTabs2" :key="item.name" :label="item.title" :name="item.name">
          {{ item.content }}
        </el-tab-pane>
      </zle-tabs>
    </zl-section>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      activeName: 'first',
      tabPosition: 'left',
      editableTabsValue1: '2',
      editableTabs1: [
        {
          title: 'Tab 1',
          name: '1',
          content: 'Tab 1 content'
        },
        {
          title: 'Tab 2',
          name: '2',
          content: 'Tab 2 content'
        }
      ],
      editableTabsValue2: '2',
      editableTabs2: [
        {
          title: 'Tab 1',
          name: '1',
          content: 'Tab 1 content'
        },
        {
          title: 'Tab 2',
          name: '2',
          content: 'Tab 2 content'
        }
      ],
      tabIndex1: 10,
      tabIndex2: 900
    }
  },
  created() {},
  methods: {
    handleClick(tab, event) {
      //   console.log(tab, event)
    },
    handleTabsEdit(targetName, action) {
      if (action === 'add') {
        let newTabName = ++this.tabIndex1 + ''
        this.editableTabs1.push({
          title: 'New Tab',
          name: newTabName,
          content: 'New Tab content'
        })
        this.editableTabsValue1 = newTabName
      }
      if (action === 'remove') {
        let tabs = this.editableTabs1
        let activeName = this.editableTabsValue1
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1]
              if (nextTab) {
                activeName = nextTab.name
              }
            }
          })
        }

        this.editableTabsValue1 = activeName
        this.editableTabs1 = tabs.filter(tab => tab.name !== targetName)
      }
    },
    addTab(targetName) {
      let newTabName = ++this.tabIndex2 + ''
      this.editableTabs2.push({
        title: 'New Tab',
        name: newTabName,
        content: 'New Tab content'
      })
      this.editableTabsValue2 = newTabName
    },
    removeTab(targetName) {
      let tabs = this.editableTabs2
      let activeName = this.editableTabsValue2
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1]
            if (nextTab) {
              activeName = nextTab.name
            }
          }
        })
      }

      this.editableTabsValue2 = activeName
      this.editableTabs2 = tabs.filter(tab => tab.name !== targetName)
    }
  }
}
</script>

<style scoped lang="scss"></style>
