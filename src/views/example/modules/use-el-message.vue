<template>
  <div class="">
    <zl-header title="Message 消息提示" />
    <zl-section header="基础用法">
      <zle-button :plain="true" @click="open">打开消息提示</zle-button>
    </zl-section>
    <zl-section header="不同状态">
      <zle-button :plain="true" @click="open2">成功</zle-button>
      <zle-button class="margin" :plain="true" @click="open3">警告</zle-button>
      <zle-button class="margin" :plain="true" @click="open1">消息</zle-button>
      <zle-button class="margin" :plain="true" @click="open4">错误</zle-button>
    </zl-section>
    <zl-section header="可关闭的">
      <zle-button :plain="true" @click="open22">成功</zle-button>
      <zle-button class="margin" :plain="true" @click="open33">警告</zle-button>
      <zle-button class="margin" :plain="true" @click="open11">消息</zle-button>
      <zle-button class="margin" :plain="true" @click="open44">错误</zle-button>
    </zl-section>
    <zl-section header="文字居中">
      <zle-button :plain="true" @click="openCenter">文字居中</zle-button>
    </zl-section>
    <zl-section header="使用 HTML 片段">
      <zle-button :plain="true" @click="openHTML">使用 HTML 片段</zle-button>
    </zl-section>
  </div>
</template>

<script>
export default {
  name: '',
  methods: {
    open() {
      this.$zlMessage('这是一条消息提示')
    },
    open1() {
      this.$zlMessage('这是一条消息提示')
    },
    open2() {
      this.$zlMessage({
        message: '恭喜你，这是一条成功消息',
        type: 'success'
      })
    },
    open3() {
      this.$zlMessage({
        message: '警告哦，这是一条警告消息',
        type: 'warning'
      })
    },
    open4() {
      this.$zlMessage.error('错了哦，这是一条错误消息')
    },
    open11() {
      this.$zlMessage({ message: '这是一条消息提示', showClose: true })
    },
    open22() {
      this.$zlMessage({
        message: '恭喜你，这是一条成功消息',
        type: 'success',
        showClose: true
      })
    },
    open33() {
      this.$zlMessage({
        message: '警告哦，这是一条警告消息',
        type: 'warning',
        showClose: true
      })
    },
    open44() {
      this.$zlMessage.error({ message: '错了哦，这是一条错误消息', showClose: true })
    },
    openCenter() {
      this.$zlMessage({
        message: '居中的文字',
        center: true
      })
    },
    openHTML() {
      this.$zlMessage({
        dangerouslyUseHTMLString: true,
        message: '<h1>这是 <i style="color: red">HTML</i> 片段</h1>'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.margin {
  margin-left: 10px;
}
</style>
