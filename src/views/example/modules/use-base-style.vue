<template>
  <div class="">
    <zl-header>style/base.scss</zl-header>
    <zl-section header="cursor">
      <span class="cursor pointer">鼠标手势1</span>
      <span class="cursor crosshair">鼠标手势2</span>
      <span class="cursor move">鼠标手势3</span>
      <span class="cursor wait">鼠标手势4</span>
      <span class="cursor help">鼠标手势5</span>
    </zl-section>
    <zl-section header="my_link">
      <span class="my_link">跳转链接</span>
      <span class="my_link my_link_blue ml">跳转链接</span>
      <span class="my_link my_link_deep_blue ml">跳转链接</span>
      <span class="my_link my_link_yellow ml">跳转链接</span>
    </zl-section>
    <zl-section header="round_tip">
      <span class="round_tip success">成功</span>
      <span class="round_tip danger">驳回</span>
      <span class="round_tip primary">开放中</span>
      <span class="round_tip danger">已驳回</span>
      <span class="round_tip">已关闭</span>
      <span class="round_tip warning">审核中</span>
    </zl-section>
    <zl-section header="msg_tip">
      <span class="msg_tip bg_success">已认证</span>
      <span class="msg_tip bg_warning">已认证</span>
      <span class="msg_tip primary">已认证</span>
      <span class="msg_tip black">已认证</span>
      <span class="msg_tip danger">已认证</span>
      <span class="msg_tip success">已认证</span>
      <span class="msg_tip warning">已认证</span>
    </zl-section>
    <zl-section header="超出隐藏">
      <h5>一行超出</h5>
      <p class="hide_text line_one">0很多文字超出隐藏很多文字超出隐藏很多文字超出隐藏很多文字超出隐藏很多文字超出隐藏很多文字超出隐藏很多文字超出隐藏很多文字超出隐藏很多文字超出隐藏很多文字超出隐藏很多文字超出隐藏很多文字超出隐藏很多文字超出隐藏很多文字超出隐藏很多文字超出隐藏很多文字超出隐藏很多文字超出隐藏很多文字超出隐藏很多文字超出隐藏很多文字超出隐藏很多文字超出隐藏很多文字超出隐藏</p>
      <h5>两行超出</h5>
      <p class="hide_text line_two">0很多文字超出隐藏很多文字超出隐藏很多文字超出隐藏很多文字超出隐藏很多文字超出隐藏很多文字超出隐藏很多文字超出隐藏很多文字超出隐藏很多文字超出隐藏很多文字超出隐藏很多文字超出隐藏很多文字超出隐藏很多文字超出隐藏很多文字超出隐藏很多文字超出隐藏很多文字超出隐藏很多文字超出隐藏很多文字超出隐藏很多文字超出隐藏很多文字超出隐藏很多文字超出隐藏很多文字超出隐藏</p>
    </zl-section>
    <zl-section header="文字不可选中">
      <p class="no_select">不可选中的文字</p>
    </zl-section>
    <zl-section header="搜索表单">
      <div class="my-search">
        <zle-form :inline="true" :model="form" class="demo-form-inline">
          <zle-form-item label="审批人">
            <zle-input v-model="form.user" placeholder="审批人" />
          </zle-form-item>
          <zle-form-item label="活动区域">
            <zle-select v-model="form.region" placeholder="活动区域">
              <zle-option label="区域一" value="shanghai" />
              <zle-option label="区域二" value="beijing" />
            </zle-select>
          </zle-form-item>
          <zle-form-item label="时间">
            <zle-date-picker
              v-model="form.time"
              type="date"
              placeholder="选择日期"
            />
          </zle-form-item>
          <zle-form-item class="my-search_group">
            <zle-button type="primary">搜索</zle-button>
          </zle-form-item>
        </zle-form>
      </div>
    </zl-section>
    <zl-section header="布局">
      <div class="flex_column" style="background-color: #fff">
        <div class="flex_row" style="background: #f2f2f2">
          <p class="block">元素</p>
          <p class="block">元素</p>
          <p class="block">元素</p>
        </div>
        <div class="flex_center" style="margin-top: 10px; background: #f2f2f2">
          <p class="block">元素</p>
          <p class="block">元素</p>
          <p class="block">元素</p>
        </div>
        <div class="flex_e_center" style="margin-top: 10px; background: #f2f2f2">
          <p class="block">元素</p>
          <p class="block">元素</p>
          <p class="block">元素</p>
        </div>
        <div class="flex_1" style=" margin-top: 10px; background: aquamarine">元素</div>
      </div>
    </zl-section>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      input: '',
      form: {
        user: '',
        region: '',
        time: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.msg_tip, .cursor {
  margin-right: 10px;
}
.ml {
  padding-left: 10px;
}
.hide_text{
  width: 300px;
}
.block {
  width: 100px;
  height: 40px;
  background-color: aquamarine;
}
</style>
