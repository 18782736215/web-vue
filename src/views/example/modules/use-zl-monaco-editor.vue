<template>
  <div>
    <zl-section>monaco-editor 编辑器</zl-section>
    <zl-section>
      <div class="box">
        <zl-monaco-editor ref="myEditor" :theme="themeColor" :size="14" :language="language" :code="htmlCodes" :editor-options="options" :language-type-data="typeData" @onMounted="htmlOnMounted" @onCodeChange="htmlOnCodeChange" />
      </div>
    </zl-section>
    <zl-section>
      参考文档： <a href="https://www.npmjs.com/package/vue-monaco-editor" target="_blank" rel="noopener noreferrer">vue-monaco-editor 文档</a>
    </zl-section>
  </div>
</template>
<script>
import ZlMonacoEditor from '@/components/zl-monaco-editor/monaco-editor'
export default {
  components: {
    ZlMonacoEditor
  },
  data() {
    return {
      htmlCodes: '',
      typeData: [
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
        },
        {
          value: 'java',
          label: 'java'
        },
        {
          value: 'php',
          label: 'php'
        }
      ], // 可自定义下拉语言类型选择
      themeColor: 'vs-dark', // 主题总共有三种分别是 vs、 hc-black、vs-dark 默认为 vs
      language: '', // 语言类型 若不传类型则可以选择编辑器语言
      options: {
        selectOnLineNumbers: true
      }
    }
  },
  mounted() {
    // 初始化渲染
    this.$nextTick(() => {
      this.$refs.myEditor.initEditor()
    })
  },
  methods: {
    htmlOnMounted(edit) {
      this.htmlEditor = edit
    },
    htmlOnCodeChange(value, event) {
      console.log(value)
    }
  }
}
</script>

<style lang="scss" scoped>
.box{
  height: calc(100vh - 150px);
}
</style>
