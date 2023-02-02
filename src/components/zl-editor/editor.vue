<template>
  <div ref="editorRef" v-loading="layout.loading" class="zle-editor">
    <div v-if="!layout.loading" class="zle-editor_box" :style="`height:${layout.height};`">
      <Toolbar style="border-bottom: 1px solid #ccc" :editor="editor" :default-config="toolbarConfig" :mode="mode" />
      <Editor v-model="editorValue" class="zle-editor_editor" :default-config="editorConfig" :mode="mode" @onCreated="onCreated" />
    </div>
  </div>
</template>

<script>
import '@wangeditor/editor/dist/css/style.css'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
export default {
  name: 'ZlEditer',
  components: { Editor, Toolbar },
  props: {
    value: [String, Object], // 传入默认数据
    height: {
      type: String,
      default: '450px'
    },
    placeholder: {
      type: String,
      default: '请输入内容...'
    },
    autoSize: { // 自适应外层布局大小
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      layout: {
        loading: false, // 加载富文本
        height: '' // 高度
      },
      editor: null, // editor 实例
      editorValue: '', // 富文本内容
      toolbarConfig: {}, // 工具栏配置
      editorConfig: { // 编辑器配置
        placeholder: this.placeholder,
        MENU_CONF: { // 其他属性...
          // 配置上传图片
          uploadImage: {
            customUpload: this.uploadImg
          }
        }
      },
      mode: 'simple' // 'default 默认模式' or 'simple 简洁模式'
    }
  },
  watch: {
    value: {
      handler(nv) {
        this.editorValue = nv
      },
      immediate: true
    },
    editorValue: {
      handler(nv) {
        this.$emit('change', nv)
      }
    }
  },
  created() {
    this.layout.loading = true
  },
  mounted() {
    this.renderEditor()
  },
  beforeDestroy() {
    const editor = this.editor
    if (editor == null) return
    editor.destroy() // 组件销毁时，及时销毁编辑器
  },
  methods: {
    renderEditor() {
      if (this.autoSize) {
        this.layout.height = this.$refs.editorRef ? this.$refs.editorRef.offsetHeight + 'px' : this.height
      } else {
        this.layout.height = this.height
      }
      this.$nextTick(() => {
        this.layout.loading = false
      })
    },
    onCreated(editor) {
      this.editor = Object.seal(editor) // 一定要用 Object.seal() ，否则会报错
    },
    // 上传图片
    async uploadImg(imgData, insertFn) {
      // TODO 上传图片
      // let res = await this.$API.file.reqUploadImg({ file: imgData })
      // if (res.code == '0') {
      //   insertFn(Array.isArray(res.responseBody) ? res.responseBody[0] : '')
      // }
    }
  }
}
</script>

<style lang="scss" scoped>
.zle-editor {
  height: 100%;
}
.zle-editor_box {
  height: 100%;
  display: flex;
  flex-direction: column;
  z-index: 100; /* 按需定义 */
  border: 1px solid #ccc;
  overflow: hidden;
  .zle-editor_editor {
    flex: 1;
    overflow: auto;
  }
  .w-e-full-screen-container {
    z-index: 999;
  }
}
</style>
