<template>
  <div>
    <zl-header>表格选择</zl-header>
    <zl-section header="单选">
      <!-- table-width 视选择的宽度来定 -->
      <!-- Tips 如果有多个地方使用，建议写成组件使用 -->
      <zl-table-select ref="baseTableSelect" v-model="singleValue" :api-obj="apiObj" :table-width="400" :props="props">
        <zle-table-column prop="name" label="用户名" min-width="100" align="center" />
        <zle-table-column prop="phone" label="电话" min-width="150" align="center" />
      </zl-table-select>
      <zle-button class="my_button" @click="resetM">重置</zle-button>
    </zl-section>
    <zl-section header="多选">
      <zl-table-select ref="multipleTableSelect" v-model="multipleValue" :api-obj="apiObj" :table-width="1000" multiple :props="props">
        <template #header="{form, submit,reset}">
          <zle-form :inline="true" :model="form">
            <zle-form-item>
              <zle-input v-model.trim="form.number" class="my-search_input_mini" placeholder="请输入客户编码" clearable maxlength="50" />
            </zle-form-item>
            <zle-form-item>
              <zle-input v-model.trim="form.customName" class="my-search_input_mini" placeholder="请输入客户名称" clearable maxlength="50" />
            </zle-form-item>
            <zle-form-item>
              <!-- !!! :popper-append-to-body="false" 如果是select选择 必须有这个属性 -->
              <zle-select v-model="form.customType" class="my-search_input_mini" filterable clearable collapse-tags placeholder="请选择客户类别" :popper-append-to-body="false">
                <zle-option v-for="(item, index) in typeList.KHLB" :key="index" :label="item.name" :value="item.code" />
              </zle-select>
            </zle-form-item>
            <zle-form-item>
              <zle-button type="primary" @click="submit">查询</zle-button>
              <zle-button type="plain" @click="reset">重置</zle-button>
            </zle-form-item>
          </zle-form>
        </template>
        <zle-table-column prop="name" label="用户名" min-width="100" align="center" />
        <zle-table-column prop="phone" label="电话" min-width="150" align="center" />
      </zl-table-select>
    </zl-section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      apiObj: () => { }, // 请求接口
      typeList: {}, // 客户类别
      props: {
        label: 'name', // select 的 label
        value: 'id', // select 的 value 唯一
        keyword: 'query', // 当是添加 filterable 时，在 select 上默认的参数
        page: 'pageNum', // 当前页
        pageSize: 'pageSize' // 当前分页条数
      },
      singleValue: {}, // 单选参数
      multipleValue: [] // 多选参数
    }
  },
  created() { },
  methods: {
    resetM() {
      this.$refs.baseTableSelect.reset()
      this.$refs.multipleTableSelect.reset()
    }
  }
}
</script>

<style lang="scss" scoped>
.section_title {
  margin-bottom: 10px;
}
.my_button {
  margin-left: 10px;
}
</style>
