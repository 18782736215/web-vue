<template>
  <div>
    <div class="type_item">
      <zle-select v-model="languageType" :disabled="language!=''" :clearable="false" class="my_select  test" placeholder="请选择" @change="changeType">
        <zle-option v-for="item in modes" :key="item.value" :label="item.label" :value="item.value" />
      </zle-select>
    </div>
    <div ref="editorRef" class="flex_column">
      <textarea ref="textarea" v-model="value" />
    </div>
  </div>
</template>

<script>
// 核心样式
import 'codemirror/lib/codemirror.css'
// 引入主题后还需要在 options 中指定主题才会生效
import 'codemirror/theme/base16-dark.css'
import 'codemirror/theme/blackboard.css'
import 'codemirror/theme/cobalt.css'
// 代码自动补全
import 'codemirror/addon/hint/show-hint.css'
import 'codemirror/addon/hint/show-hint.js'
import 'codemirror/addon/hint/show-hint'
// 各种代码折叠
import 'codemirror/addon/fold/foldgutter.css'
import 'codemirror/addon/fold/foldcode.js'
import 'codemirror/addon/fold/foldgutter.js'
import 'codemirror/addon/fold/brace-fold.js'
import 'codemirror/addon/fold/comment-fold.js'
// 搜索功能的依赖
import 'codemirror/addon/dialog/dialog.js'
import 'codemirror/addon/dialog/dialog.css'
// 支持搜索功能
import 'codemirror/addon/search/search'
import 'codemirror/addon/search/searchcursor.js'
// 代码区域全屏功能
import 'codemirror/addon/display/fullscreen.css'
import 'codemirror/addon/display/fullscreen.js'
// 行注释
import 'codemirror/addon/comment/comment.js'
// 引入的语法
import 'codemirror/mode/javascript/javascript.js'
import 'codemirror/mode/css/css.js'
import 'codemirror/mode/xml/xml.js'
import 'codemirror/mode/clike/clike.js'
import 'codemirror/mode/markdown/markdown.js'
import 'codemirror/mode/python/python.js'
import 'codemirror/mode/r/r.js'
import 'codemirror/mode/shell/shell.js'
import 'codemirror/mode/sql/sql.js'
import 'codemirror/mode/swift/swift.js'
// 代码括号 自动补全
import 'codemirror/addon/edit/closebrackets.js'

const CodeMirror = require('codemirror/lib/codemirror')
export default {
  name: 'ZlCodeMirror',
  props: {
    // 编译器内容
    value: {
      type: String,
      default: ''
    },
    // 语言类型
    language: {
      type: String,
      default: ''
    },
    options: {
      type: Object,
      default: () => {
        return {
          tabSize: 2, // 缩进格式
          theme: 'blackboard', // 主题，对应主题库 JS 需要提前引入
          line: true,
          lineNumbers: true, // 显示行号
          cursorHeight: 0.8, // 光标高度，默认是1
          autoCloseBrackets: true,
          matchBrackets: true, // 括号匹配
          lineWrapping: 'wrap', // 文字过长时，是换行(wrap)还是滚动(scroll),默认是滚动
          showCursorWhenSelecting: true, // 文本选中时显示光标
          smartIndent: true, // 智能缩进
          completeSingle: false // 当匹配只有一项的时候是否自动补全
        }
      }
    }
  },
  data() {
    return {
      // 内容
      code: '',
      // 编辑器实例
      coder: null,
      // 默认的语法类型
      mode: 'html',
      languageType: 'html', // 语言类型
      //   theme: 'default', // 主题
      modes: [
        { value: 'css', label: 'CSS' },
        { value: 'javascript', label: 'Javascript' },
        { value: 'html', label: 'HTML' },
        { value: 'x-java', label: 'Java' },
        { value: 'x-objectivec', label: 'Objective-C' },
        { value: 'x-python', label: 'Python' },
        { value: 'x-rsrc', label: 'R' },
        { value: 'x-sh', label: 'Shell' },
        { value: 'x-sql', label: 'SQL' },
        { value: 'x-swift', label: 'Swift' },
        { value: 'x-vue', label: 'Vue' },
        { value: 'markdown', label: 'Markdown' }
      ]
    }
  },
  mounted() {
    // 初始化
    this.initialize()
  },
  methods: {
    // 初始化
    initialize() {
      // 初始化编辑器实例，传入需要被实例化的文本域对象和默认配置
      this.coder = CodeMirror.fromTextArea(this.$refs.textarea, this.options)
      this.coder.setSize('auto', this.$refs.editorRef.offsetHeight || 200) // 设置编辑器高度
      this.coder.on('inputRead', () => {
        this.coder.showHint()
      })
      // 显示提示
      this.coder.on('cursorActivity', () => {
        this.coder.showHint()
      })
      // 编辑器赋值
      if (this.value || this.code) {
        this.setCodeContent(this.value || this.code)
      } else {
        this.coder.setValue('')
      }
      // 支持双向绑定
      this.coder.on('change', coder => {
        this.code = coder.getValue()
        if (this.$emit) {
          this.$emit('input', this.code)
        }
      })
      let type = this.language || this.languageType
      if (type) {
        // 获取具体的语法类型对象
        let modeObj = this.getLanguage(type)
        // 判断语言类型是否支持的语法是否被支持
        if (modeObj) {
          this.mode = modeObj.label
        }
      }
    },
    setCodeContent(val) {
      setTimeout(() => {
        if (!val) {
          this.coder.setValue('')
        } else {
          this.coder.setValue(val)
        }
      }, 300)
    },
    getLanguage(language) {
      // 在支持的语法类型列表中寻找传入的语法类型
      return this.modes.find(mode => {
        // 所有的值都忽略大小写，方便比较
        const currentLanguage = language.toLowerCase()
        const currentLabel = mode.label.toLowerCase()
        const currentValue = mode.value.toLowerCase()
        // 由于真实值可能不规范，例如 java 的真实值是 x-java ，所以讲 value 和 label 同时和传入语法进行比较
        return currentLabel === currentLanguage || currentValue === currentLanguage
      })
    },
    changeMode(val) {
      // 修改编辑器的语法配置
      this.coder.setOption('mode', `text/${val}`)
      // 获取修改后的语法
      const label = this.getLanguage(val).label.toLowerCase()
      // 允许父容器通过以下函数监听当前的语法值
      this.$emit('language-change', label)
    },
    // 选择语言类型
    changeType() {
      // 删除实例
      this.coder.setValue('')
      this.coder.toTextArea()
      this.code = ''
      this.$emit('input', this.code)
      this.initialize()
    }
  }
}
</script>

<style lang="scss" scoped>
.my_select {
  width: 100px;
}
.type_item {
  text-align: right;
  padding: 5px 0;
  background-color: #242933;
  ::v-deep .el-input__inner {
    border: none;
    padding: 0;
    background-color: #242933;
    color: rgb(226, 226, 226);
  }

}
.flex_column {
  height: calc(100% - 50px);
}
.flex_column_h {
  height: 100%;
}
</style>