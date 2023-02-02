<template>
  <div class="monaco-editor">
    <div class="type_item">
      <zle-select v-model="languageType" :disabled="language!=''" class="my_select" :clearable="false" placeholder="请选择" @change="changeType">
        <zle-option v-for="item in languageTypeData" :key="item.value" :label="item.label" :value="item.value" />
      </zle-select>
    </div>
    <div class="flex_column">
      <div id="editor" ref="editorContainer" />
    </div>
  </div>

</template>
<script>
import * as monaco from 'monaco-editor'
export default {
  name: 'ZlMonacoEditor',
  props: {
    code: {
      type: String,
      default: () => {
        return ''
      }
    },
    // 语言类型
    language: {
      type: String,
      default: () => {
        return ''
      }
    },
    // 主题色
    theme: {
      type: String,
      default: () => {
        return 'vs'
      }
    },
    // 字体大小
    size: {
      type: Number,
      default: () => {
        return 16
      }
    },
    // 配置信息
    editorOptions: {
      type: Object,
      default: () => {
        return {
          selectOnLineNumbers: true,
          roundedSelection: false,
          readOnly: false, // 只读
          cursorStyle: 'line', // 光标样式
          automaticLayout: false, // 自动布局
          glyphMargin: true // 字形边缘
        }
      }
    },
    // 语言类型
    languageTypeData: {
      type: Array,
      default: () => {
        return [
          {
            value: 'html',
            label: 'HTML'
          },
          {
            value: 'javascript',
            label: 'Javascript'
          },
          {
            value: 'typescript',
            label: 'Typescript'
          }
        ]
      }
    }
  },
  data() {
    return {
      languageType: 'html',
      codeCopy: null, // 内容备份
      monacoEditor: null
    }
  },
  mounted() {
    this.initEditor()
  },
  methods: {
    initEditor() {
      // 初始化
      this.$refs.editorContainer.innerHTML = ''
      this.monacoEditor = monaco.editor.create(this.$refs.editorContainer, {
        value: this.codeCopy || this.code,
        language: this.language || this.languageType, // 语言类型
        fontSize: this.size,		// 字体大小
        theme: this.theme, // vs, hc-black, or vs-dark
        editorOptions: this.editorOptions
      })
      this.$emit('onMounted', this.monacoEditor) // 编辑器创建完成回调
      this.monacoEditor.onDidChangeModelContent(() => {
        // 编辑器内容changge事件
        this.format()
        this.codeCopy = this.monacoEditor.getValue()
      })
      // 监听失去焦点事件
      this.monacoEditor.onDidBlurEditorText(event => {
        this.$emit('onCodeChange', this.monacoEditor.getValue(), event)
      })
    },
    // 自动格式化代码
    format() {
      this.monacoEditor.trigger('anything', 'editor.action.formatDocument')
    },
    // 选择类型
    changeType() {
      this.codeCopy = ''
      this.initEditor()
    }
  }
}
</script>

<style lang="scss" scoped>
.my_select{
  width: 100px;
}
.type_item{
    text-align: right;
    padding: 5px 0;
    margin-bottom: 10px;
    background-color: #242933;
    ::v-deep .el-input__inner {
    border:none;
    padding: 0;
    background-color: #242933;
    color: rgb(226, 226, 226);
    }
}
.flex_column{
  height: calc(100% - 50px)
}
#editor{
  height: 100%;
}
</style>