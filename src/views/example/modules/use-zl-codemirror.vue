<template>
  <div>
    <zl-section>CodeMirror 编辑器</zl-section>
    <zl-section>
      <div class="box">
        <zl-codemirror :value="content" :language="language" :options="options" @input="changeTextarea" />
      </div>
    </zl-section>
    <zl-section><span>参考文档： <a href="https://www.npmjs.com/package/codemirror" target="_blank" rel="noopener noreferrer">codemirror 文档</a></span> <span>参考文档： <a href="https://codemirror.net/" class="color_item" target="_blank" rel="noopener noreferrer">codemirror 文档</a></span></zl-section>
  </div>
</template>

<script>
import zlCodemirror from '@/components/zl-codemirror/codemirror'
export default {
  components: { zlCodemirror },
  data() {
    return {
      content: '', // 内容
      language: '', // 语言类型 需要对应引入语言类型对应的js文件 目前组件只引入了 css、javascript、html、Java、Objective-C、Python、R、Shell、SQL、Swift、Vue、Markdown
      options: {
        tabSize: 2, // 缩进格式
        theme: 'blackboard', // 主题，对应主题库 JS 需要提前引入 目前组件只引入了 base16-dark、blackboard、cobalt
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
  },
  methods: {
    changeTextarea(val) {
      this.content = val
    }
  }
}
</script>

<style lang="scss" scoped>
.box{
  height: calc(100vh - 150px);
}
.color_item{
    color: rgb(39, 21, 241);
}
</style>
