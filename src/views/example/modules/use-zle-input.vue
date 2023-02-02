<template>
  <div>
    <zl-header> Input 输入框 </zl-header>
    <zl-section header="基础用法">
      <zle-input v-model.trim="input" :maxlength="128" class="my-search_input" placeholder="请输入内容" />
    </zl-section>
    <zl-section header="文本域">
      <zle-input v-model.trim="textarea" :maxlength="255" resize="none" :autosize="{ minRows: 3, maxRows: 6 }" type="textarea" class="my-search_input" placeholder="请输入内容" />
    </zl-section>
    <zl-section header="复合型输入框">
      <div>
        <zle-input v-model.trim="input1" :maxlength="128" placeholder="请输入内容" class="my-input">
          <template slot="prepend">Http://</template>
        </zle-input>
      </div>
      <div style="margin-top: 15px">
        <zle-input v-model.trim="input2" placeholder="请输入内容" class="my-input">
          <template slot="append">.com</template>
        </zle-input>
      </div>
      <div style="margin-top: 15px">
        <zle-input v-model.trim="input3" placeholder="请输入内容" class="my-input">
          <zle-select slot="prepend" v-model="select" placeholder="请选择">
            <zle-option label="餐厅名" value="1" />
            <zle-option label="订单号" value="2" />
            <zle-option label="用户电话" value="3" />
          </zle-select>
          <zle-button slot="append" icon="el-icon-search" />
        </zle-input>
      </div>
    </zl-section>
    <zl-section header="可清空">
      <zle-input v-model.trim="input" clearable class="my-search_input" placeholder="请输入内容" />
    </zl-section>
    <zl-section header="密码框">
      <zle-input v-model.trim="password" placeholder="请输入密码" class="my-search_input" show-password />
    </zl-section>
    <zl-section header="带 icon 的输入框">
      <div class="demo-input-suffix">
        属性方式：
        <zle-input v-model.trim="input1" placeholder="请选择日期" class="my-search_input" suffix-icon="el-icon-date" />
        <zle-input v-model.trim="input2" placeholder="请输入内容" class="my-search_input" prefix-icon="el-icon-search" />
      </div>
      <div class="demo-input-suffix" style="margin-top: 10px;">
        slot 方式：
        <zle-input v-model.trim="input3" placeholder="请选择日期" class="my-search_input">
          <i slot="suffix" class="el-input__icon el-icon-date" />
        </zle-input>
        <zle-input v-model.trim="input4" placeholder="请输入内容" class="my-search_input">
          <i slot="prefix" class="el-input__icon el-icon-search" />
        </zle-input>
      </div>
    </zl-section>
    <zl-section header="输入长度限制">
      <zle-input v-model.trim="text" class="my-input" type="text" placeholder="请输入内容" :maxlength="10" show-word-limit />
      <div style="margin: 20px 0" />
      <zle-input v-model.trim="textarea" class="my-input" type="textarea" placeholder="请输入内容" :maxlength="30" show-word-limit />
    </zl-section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: '',
      input: '',
      textarea: '',
      input1: '',
      input2: '',
      input3: '',
      input4: '',
      select: '',
      password: '123'
    }
  },
  created() {},
  methods: {}
}
</script>

<style scoped lang="scss">
::v-deep .el-select .el-input {
  width: 130px;
}
.my-input {
  width: 400px;
}
</style>
