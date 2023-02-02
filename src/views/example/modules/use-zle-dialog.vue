<template>
  <div>
    <div class="section">
      <h3 class="section_title">Dialog 对话框</h3>
    </div>
    <div class="section">
      <h3 class="description">基础弹窗</h3>
      <zle-button @click="dialogShow1 = true">点我打开弹窗</zle-button>
      <zle-dialog :title="'提示'" :visible.sync="dialogShow1">
        <template #footer>
          <zle-button @click="dialogShow1 = false">取 消</zle-button>
          <zle-button type="primary" @click="dialogShow1 = false">确 定</zle-button>
        </template>
      </zle-dialog>
      <zle-alert title="通过修改绑定show的值来显示或隐藏弹窗" type="info" />
    </div>
    <div class="section">
      <h3 class="description">自定义弹窗标题</h3>
      <zle-button @click="dialogShow2 = true">点我打开弹窗</zle-button>
      <zle-dialog :title="'我是一个提示弹窗'" :visible.sync="dialogShow2" @handleClose="dialogChange2">
        <p>test title</p>
        <template #footer>
          <zle-button @click="dialogShow2 = false">取 消</zle-button>
          <zle-button type="primary" @click="dialogShow2 = false">确 定</zle-button>
        </template>
      </zle-dialog>
      <zle-alert title="使用title来自定义弹窗标题" type="info" />
      <zle-alert title="弹窗点击确定和取消都会返回一个方法，通过方法的类型来判断做取消还是确认操作" type="info" />
    </div>
    <div class="section">
      <h3 class="description">自定义弹窗宽度</h3>
      <zle-button @click="dialogShow3 = true">点我打开弹窗</zle-button>
      <zle-dialog :title="'提示'" width="50%" :visible.sync="dialogShow3" @handleClose="dialogChange3">
        <p>test width</p>
        <template #footer>
          <zle-button @click="dialogShow3 = false">取 消</zle-button>
          <zle-button type="primary" @click="dialogShow3 = false">确 定</zle-button>
        </template>
      </zle-dialog>
      <zle-alert title="使用width来自定义弹窗宽度" type="info" />
    </div>
    <div class="section">
      <h3 class="description">使用插槽定义弹窗标题</h3>
      <zle-button @click="dialogShow4 = true">点我打开弹窗</zle-button>
      <zle-dialog :title="'提示'" width="30%" :visible.sync="dialogShow4" @handleClose="dialogChange4">
        <template #title>
          <p>标题</p>
        </template>
        <p>test</p>
        <template #footer>
          <zle-button @click="dialogShow4 = false">取 消</zle-button>
          <zle-button type="primary" @click="dialogShow4 = false">确 定</zle-button>
        </template>
      </zle-dialog>
      <zle-alert title="使用width来自定义弹窗宽度" type="info" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogShow1: false,
      dialogShow2: false,
      dialogShow3: false,
      dialogShow4: false
    }
  },
  beforeDestroy() {
    this.dialogShow1 = false
    this.dialogShow2 = false
    this.dialogShow3 = false
    this.dialogShow4 = false
  },
  methods: {
    dialogChange1(val) {
      if (val) {
        this.$zleMessage.success(val)
      }
      this.dialogShow1 = false
    },
    dialogChange2(val) {
      if (val) {
        this.$zleMessage.success(val)
      }
      this.dialogShow2 = false
    },
    dialogChange3(val) {
      if (val) {
        this.$zleMessage.success(val)
      }
      this.dialogShow3 = false
    },
    dialogChange4(val) {
      if (val) {
        this.$zleMessage.success(val)
      }
      this.dialogShow4 = false
    }
  }
}
</script>

<style lang="scss" scoped>
.description {
  padding: 10px 0;
}
</style>
