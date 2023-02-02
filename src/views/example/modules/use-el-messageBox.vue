<template>
  <div>
    <zl-header title="MessageBox 弹框" />
    <zl-section header="消息提示alert">
      <zle-button type="text" @click="openAlert">点击打开alert</zle-button>
    </zl-section>
    <zl-section header="消息确认confirm">
      <zle-button type="text" @click="openConfirm">点击打开 confirm</zle-button>
    </zl-section>
    <zl-section header="消息提交prompt">
      <zle-button type="text" @click="openPrompt">点击打开 prompt</zle-button>
    </zl-section>
    <zl-section header="自定义">
      <zle-button type="text" @click="openMsgBox">点击打开 Message Box</zle-button>
    </zl-section>
    <zl-section header="使用 HTML 片段">
      <zle-button type="text" @click="openHtml">点击打开 HTML 片段</zle-button>
    </zl-section>
    <zl-section header="居中布局">
      <zle-button type="text" @click="openCenter">点击打开居中布局</zle-button>
    </zl-section>
  </div>
</template>

<script>
export default {
  name: '',
  methods: {
    // 消息提示alert
    openAlert() {
      this.$zlAlert('这是一段内容', '标题名称', {
        confirmButtonText: '确定',
        callback: action => {
          this.$zlMessage({
            type: 'info',
            message: `action: ${action}`
          })
        }
      })
    },
    // 消息确认confirm
    openConfirm() {
      this.$zlConfirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.$zlMessage({
            type: 'success',
            message: '删除成功!'
          })
        })
        .catch(() => {
          this.$zlMessage({
            type: 'info',
            message: '已取消删除'
          })
        })
    },
    // 消息提交prompt
    openPrompt() {
      this.$zlPrompt('请输入邮箱', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
        inputErrorMessage: '邮箱格式不正确'
      }).then(({ value }) => {
        this.$zlMessage({
          type: 'success',
          message: '你的邮箱是: ' + value
        })
      }).catch(() => {
        this.$zlMessage({
          type: 'info',
          message: '取消输入'
        })
      })
    },
    // 自定义
    openMsgBox() {
      const h = this.$createElement
      this.$zlMsgbox({
        title: '消息',
        message: h('p', null, [
          h('span', null, '内容可以是 '),
          h('i', { style: 'color: teal' }, 'VNode')
        ]),
        showCancelButton: true,
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        beforeClose: (action, instance, done) => {
          if (action === 'confirm') {
            instance.confirmButtonLoading = true
            instance.confirmButtonText = '执行中...'
            setTimeout(() => {
              done()
              setTimeout(() => {
                instance.confirmButtonLoading = false
              }, 300)
            }, 3000)
          } else {
            done()
          }
        }
      }).then(action => {
        this.$zlMessage({
          type: 'info',
          message: 'action: ' + action
        })
      })
    },
    // 使用 HTML 片段
    openHtml() {
      this.$zlAlert('<h1>这是 <i>HTML</i> 片段</h1>', 'HTML 片段', {
        dangerouslyUseHTMLString: true
      })
    },
    // 居中布局
    openCenter() {
      this.$zlConfirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
      }).then(() => {
        this.$zlMessage({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$zlMessage({
          type: 'info',
          message: '已取消删除'
        })
      })
    }

  }
}
</script>

<style lang="scss" scoped>
</style>
