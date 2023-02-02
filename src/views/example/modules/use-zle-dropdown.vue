<template>
  <div class="">
    <zl-header title="Dropdown 下拉菜单" />
    <zl-section header="基础用法">
      <zle-dropdown :drop-item="arr">
        <span class="el-dropdown-link"> 下拉菜单<i class="el-icon-arrow-down el-icon--right" /> </span>
      </zle-dropdown>
    </zl-section>
    <zl-section header="触发对象">
      <zle-dropdown :drop-item="arr" class="more">
        <zle-button type="primary"> 更多菜单<i class="el-icon-arrow-down el-icon--right" /> </zle-button>
      </zle-dropdown>
      <zle-dropdown class="default_item " :drop-item="arr" split-button type="primary">更多菜单</zle-dropdown>
    </zl-section>
    <zl-section header="触发方式">
      <div class="flex_a_center">
        <div class="more">
          <span class="demonstration">hover 激活</span>
          <zle-dropdown :drop-item="arr" class="more">
            <span class="el-dropdown-link"> 下拉菜单<i class="el-icon-arrow-down el-icon--right" /> </span>
          </zle-dropdown>
        </div>
        <div class="more">
          <span class="demonstration">click 激活</span>
          <zle-dropdown :drop-item="arr" trigger="click" class="more">
            <span class="el-dropdown-link"> 下拉菜单<i class="el-icon-arrow-down el-icon--right" /> </span>
          </zle-dropdown>
        </div>
      </div>
    </zl-section>
    <zl-section header="菜单隐藏方式">
      <zle-dropdown :drop-item="arr" :hide-on-click="false">
        <span class="el-dropdown-link"> 下拉菜单<i class="el-icon-arrow-down el-icon--right" /> </span>
      </zle-dropdown>
    </zl-section>
    <zl-section header="指令事件">
      <zle-dropdown :drop-item="arr" @command="handleCommand">
        <span class="el-dropdown-link"> 下拉菜单<i class="el-icon-arrow-down el-icon--right" /> </span>
      </zle-dropdown>
    </zl-section>
    <zl-section header="不同尺寸">
      <zle-dropdown class="more default_item" :drop-item="arr" split-button type="primary">默认尺寸</zle-dropdown>
      <zle-dropdown class="more medium_item" :drop-item="arr" split-button size="medium" type="primary">中等尺寸</zle-dropdown>
      <zle-dropdown class="more" :drop-item="arr" split-button size="small" type="primary">小型尺寸</zle-dropdown>
      <zle-dropdown class="more" :drop-item="arr" split-button size="mini" type="primary">超小尺寸</zle-dropdown>
    </zl-section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      triggerData: [
        {
          name: '黄金糕',
          icon: 'el-icon-plus'
        },
        {
          name: '狮子头',
          icon: 'el-icon-circle-plus'
        },
        {
          name: '螺蛳粉',
          icon: 'el-icon-circle-plus-outline'
        },
        {
          name: '双皮奶',
          icon: 'el-icon-check'
        },
        {
          name: '蚵仔煎',
          icon: 'el-icon-circle-check'
        }
      ],
      arr: [
        { label: '黄金糕', command: 'a' },
        { label: '狮子头', command: 'b' },
        { label: '螺蛳粉', command: 'c' },
        { label: '双皮奶', disabled: 'disabled', command: 'd' },
        { label: '蚵仔煎', divided: 'divided', command: 'e' }
      ]
    }
  },
  methods: {
    handleCommand(command) {
      this.$zlMessage('click on item ' + command)
    }
  }
}
</script>

<style lang="scss" scoped>
.section-title {
  margin: 10px 0;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.more {
  margin: 10px 10px 0 0;
}
.demonstration {
  display: block;
  color: #8492a6;
  font-size: 14px;
}
.default_item {
  ::v-deep .el-button-group .el-button {
    height: 40px;
  }
  // ::v-deep .el-button-group > .el-button:last-child{
  //   top: -1px;
  // }
}
.medium_item {
  ::v-deep .el-button-group .el-button {
    height: 36px;
  }
  // ::v-deep .el-button-group > .el-button:last-child{
  //   top: -1px;
  // }
}
</style>
