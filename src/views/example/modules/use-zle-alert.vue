<template>
  <div class="">
    <zl-header title="Alert 警告" />
    <zl-section header="基本用法">
      <p>宽度可以通过width自定义，默认300px</p>
      <zle-alert title="成功提示:width==300px" type="success" />
      <zle-alert title="消息提示:width==400px" width="400" type="info" />
      <zle-alert title="警告提示:width==500px" width="500" type="warning" />
      <zle-alert title="错误提示:width==600px" width="600" type="error" />
    </zl-section>
    <zl-section header="插槽使用">
      <h4>默认插槽</h4>
      <zle-alert type="success">与el-alert一致</zle-alert>
      <h4>title</h4>
      <zle-alert type="success">
        <span slot="title">与el-alert一致</span>
        与el-alert一致
      </zle-alert>
    </zl-section>
    <zl-section header="主题">
      <p>通过effect来设置主题，默认是light，还有一种dark 如下：</p>
      <zle-alert title="成功提示的文案" effect="dark" type="success" />
      <zle-alert title="消息提示的文案" effect="dark" type="info" />
      <zle-alert title="警告提示的文案" effect="dark" type="warning" />
      <zle-alert title="错误提示的文案" effect="dark" type="error" />
    </zl-section>
    <zl-section header="icon图标和文字居中">
      <p>设置show-icon来控制是否展示icon，设置center使文字居中</p>
      <zle-alert title="错误提示的文案" show-icon center />
    </zl-section>
    <zl-section header="辅助文字">
      <p>description设置文字说明</p>
      <zle-alert title="成功提示的文案" description="文字说明文字说明文字说明文字说明文字说明文字说明" show-icon type="success" />
      <zle-alert title="消息提示的文案" description="文字说明文字说明文字说明文字说明文字说明文字说明" show-icon type="info" />
      <zle-alert title="警告提示的文案" description="文字说明文字说明文字说明文字说明文字说明文字说明" show-icon type="warning" />
      <zle-alert title="错误提示的文案" description="文字说明文字说明文字说明文字说明文字说明文字说明" show-icon type="error" />
    </zl-section>
    <zl-section header="自定义关闭按钮">
      <zle-alert title="不可关闭的alert" :closable="false" type="success" />
      <zle-alert title="自定义按钮内容" close-text="知道了" type="warning" />
      <zle-alert title="设置关闭回调事件" type="error" @close="hello" />
    </zl-section>
  </div>
</template>

<script>
export default {
  name: '',
  methods: {
    hello() {
      alert('Hello World!')
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
