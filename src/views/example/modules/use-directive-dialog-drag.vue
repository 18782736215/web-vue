<template>
  <div>
    <zl-header>v-dialog-drag 弹窗拖拽</zl-header>
    <zl-section>
      <zle-button type="primary" @click="dialogVisible = true">点我</zle-button>
    </zl-section>
    <zl-section>
      <zle-alert title="在目标弹窗上使用v-dialog-drag来实现弹窗的放大、缩小、拖拽" />
      <zle-alert title="需要将弹窗的close-on-click-modal属性置为false，不然会导致在放大弹窗时弹窗关闭" type="error" />
    </zl-section>
    <zle-dialog v-dialog-drag title="提示" top="15vh" :visible.sync="dialogVisible" width="30%" :close-on-click-modal="false">
      <span>这是一段信息</span>
      <template #footer>
        <zle-button @click="dialogVisible = false">取 消</zle-button>
        <zle-button type="primary" @click="dialogVisible = false">确 定</zle-button>
      </template>
    </zle-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false
    }
  },
  methods: {}
}
</script>
