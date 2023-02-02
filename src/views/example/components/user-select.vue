<template>
  <zl-table-select ref="baseTableSelect" v-model="userObj" :placeholder="placeholder" :api-obj="apiObj" :table-width="400" :props="props" @change="change">
    <el-table-column prop="name" label="用户名" min-width="100" align="center" />
    <el-table-column prop="phone" label="电话" min-width="150" align="center" />
  </zl-table-select>
</template>

<script>
export default {
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: null,
    placeholder: { type: String, default: '请选择' }
  },
  data() {
    return {
      apiObj: () => {}, // 请求接口
      props: {
        label: 'name', // select 的 label
        value: 'id', // select 的 value 唯一
        keyword: 'query', // 当是添加 filterable 时，在 select 上默认的参数
        page: 'pageNum', // 当前页
        pageSize: 'pageSize' // 当前分页条数
      },
      userObj: {}
    }
  },
  methods: {
    change() {
      this.$emit('change', this.userObj)
    }
  }
}
</script>

<style lang="scss" scoped></style>
