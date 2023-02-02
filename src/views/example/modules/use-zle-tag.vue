<template>
  <div>
    <zl-header> Tag 标签 </zl-header>
    <zl-section header="基础用法 type">
      <zle-tag>标签一</zle-tag>
      <zle-tag type="success">标签一</zle-tag>
      <zle-tag type="info">标签三</zle-tag>
      <zle-tag type="warning">标签四</zle-tag>
      <zle-tag type="danger">标签五</zle-tag>
    </zl-section>
    <zl-section header="可移除标签  closable">
      <zle-tag v-for="tag in tags" :key="tag.name" closable :type="tag.type"> {{ tag.name }}</zle-tag>
    </zl-section>
    <zl-section header="动态编辑标签">
      <div style="display: flex;align-items: center;">
        <zle-tag v-for="tag in dynamicTags" :key="tag" closable :disable-transitions="false" @close="handleClose(tag)">
          {{ tag }}
        </zle-tag>
        <zle-input v-if="inputVisible" ref="saveTagInput" v-model="inputValue" size="small" class="input-new-tag" @keyup.enter.native="handleInputConfirm" @blur="handleInputConfirm" />
        <zle-button v-else class="button-new-tag" @click="showInput">+ New Tag</zle-button>
      </div>
    </zl-section>
    <zl-section header="不同尺寸 medium、small、mini，通过设置size属性来配置它们。">
      <zle-tag closable>默认标签</zle-tag>
      <zle-tag size="medium" closable>中等标签</zle-tag>
      <zle-tag size="small" closable>小型标签</zle-tag>
      <zle-tag size="mini" closable>超小标签</zle-tag>
    </zl-section>
    <zl-section header="不同主题 dark、light 和 plain">
      <div class="tag-group">
        <span class="tag-group__title">Dark </span>
        <zle-tag v-for="item in tags" :key="item.name" :type="item.type" effect="dark">
          {{ item.name }}
        </zle-tag>
      </div>
      <div class="tag-group">
        <span class="tag-group__title">Plain </span>
        <zle-tag v-for="item in tags" :key="item.name" :type="item.type" effect="plain">
          {{ item.name }}
        </zle-tag>
      </div>
      <div class="tag-group">
        <span class="tag-group__title">Light </span>
        <zle-tag v-for="item in tags" :key="item.name" :type="item.type" effect="light">
          {{ item.name }}
        </zle-tag>
      </div>
    </zl-section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tags: [
        { name: '标签一', type: '' },
        { name: '标签二', type: 'success' },
        { name: '标签三', type: 'info' },
        { name: '标签四', type: 'warning' },
        { name: '标签五', type: 'danger' }
      ],
      dynamicTags: ['标签一', '标签二', '标签三'],
      inputVisible: false,
      inputValue: ''
    }
  },
  created() {},
  methods: {
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1)
    },

    showInput() {
      this.inputVisible = true
    },

    handleInputConfirm() {
      let inputValue = this.inputValue
      if (inputValue) {
        if (this.dynamicTags.every(item => item != inputValue)) {
          this.dynamicTags.push(inputValue)
          this.inputVisible = false
          this.inputValue = ''
        } else {
          this.inputValue = ''
          this.$zleMessage.warning('名称重复，换一个试试')
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
::v-deep .el-tag + .el-tag {
  margin-left: 10px;
}
.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 108px;
  margin-left: 10px;
  vertical-align: bottom;
}
.tag-group {
  margin-bottom: 10px;
}
</style>
