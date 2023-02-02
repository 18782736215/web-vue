<template>
  <div>
    <zl-header title="Notification 通知" />
    <zl-section header="基本用法">
      <zle-button plain @click="openAutoClose"> 默认可自动关闭 </zle-button>
      <zle-button plain @click="openClose"> 不自动关闭 </zle-button>
      <zle-button plain @click="openShowClose"> 隐藏关闭按钮 </zle-button>
    </zl-section>
    <zl-section header="带有类型的">
      <zle-button plain style="margin-right: 10px" @click="open1"> 成功 </zle-button>
      <zle-button plain style="margin-right: 10px" @click="open2"> 警告 </zle-button>
      <zle-button plain style="margin-right: 10px" @click="open3"> 消息 </zle-button>
      <zle-button plain style="margin-right: 10px" @click="open4"> 错误 </zle-button>
    </zl-section>
    <zl-section header="不同弹出位置">
      <zle-button plain style="margin-right: 10px" @click="open11"> 默认右上角 </zle-button>
      <zle-button plain style="margin-right: 10px" @click="open22"> 右下角 </zle-button>
      <zle-button plain style="margin-right: 10px" @click="open33"> 左下角 </zle-button>
      <zle-button plain style="margin-right: 10px" @click="open44"> 左上角 </zle-button>
    </zl-section>
    <zl-section header="带有偏移">
      <zle-button plain @click="openOffset"> 偏移的消息 </zle-button>
    </zl-section>
    <zl-section header="使用 HTML 片段">
      <zle-button plain @click="openHtml"> 使用 HTML 片段 </zle-button>
    </zl-section>
  </div>
</template>

<script>
export default {
  name: '',
  methods: {
    openClose() {
      this.$zlNotify({
        title: '提示',
        message: '这是一条不会自动关闭的消息',
        duration: 0
      })
    },
    openAutoClose() {
      this.$zlNotify({
        title: '提示',
        message: '这是一条不会自动关闭的消息'
      })
    },
    openShowClose() {
      this.$zlNotify.success({
        title: 'Info',
        message: '这是一条没有关闭按钮的消息',
        showClose: false
      })
    },
    open1() {
      this.$zlNotify({
        title: '成功',
        message: '这是一条成功的提示消息',
        type: 'success'
      })
    },

    open2() {
      this.$zlNotify({
        title: '警告',
        message: '这是一条警告的提示消息',
        type: 'warning'
      })
    },

    open3() {
      this.$zlNotify.info({
        title: '消息',
        message: '这是一条消息的提示消息'
      })
    },

    open4() {
      this.$zlNotify.error({
        title: '错误',
        message: '这是一条错误的提示消息'
      })
    },
    open11() {
      this.$zlNotify({
        title: '自定义位置',
        message: '右上角弹出的消息'
      })
    },

    open22() {
      this.$zlNotify({
        title: '自定义位置',
        message: '右下角弹出的消息',
        position: 'bottom-right'
      })
    },

    open33() {
      this.$zlNotify({
        title: '自定义位置',
        message: '左下角弹出的消息',
        position: 'bottom-left'
      })
    },

    open44() {
      this.$zlNotify({
        title: '自定义位置',
        message: '左上角弹出的消息',
        position: 'top-left'
      })
    },
    openOffset() {
      this.$zlNotify({
        title: '这是一条带有偏移的提示消息',
        message: '通过设置 offset 字段，可以使弹出的消息距屏幕边缘偏移一段距离。注意在同一时刻，所有的 Notification 实例应当具有一个相同的偏移量',
        offset: 500
      })
    },
    openHtml() {
      this.$zlNotify({
        title: 'HTML 片段',
        dangerouslyUseHTMLString: true,
        message: '<h1>这是HTML片段</h1>'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
