<!--
 * @Descripttion: 表格选择器组件
-->

<template>
  <zle-select
    ref="select"
    v-model="defaultValue"
    clearable
    :multiple="multiple"
    :value-key="defaultProps.value"
    :collapse-tags="collapse"
    filterable
    :placeholder="placeholder"
    :disabled="disabled"
    :filter-method="filterMethod"
    @remove-tag="removeTag"
    @visible-change="visibleChange"
    @clear="clear"
  >
    <template #empty>
      <div v-loading="loading" class="table_box" :style="{width: tableWidth+'px'}">
        <div>
          <slot name="header" :form="formData" :submit="formSubmit" :reset="formReset" />
        </div>
        <zle-table ref="table" :data="tableData" :height="245" :highlight-current-row="!multiple" :header-cell-style="$config.headerCellStyle" @row-click="click" @select="select" @select-all="selectAll">
          <zle-table-column v-if="multiple" type="selection" width="45" align="center" />
          <zle-table-column v-if="showIndex" type="index" label="序号" width="50" align="center">
            <template #default="scope"><span>{{ scope.$index+(currentPage - 1) * pageSize + 1 }}</span></template>
          </zle-table-column>
          <slot />
        </zle-table>
        <div class="table-select__page">
          <zle-pagination small background layout="prev, pager, next,total" :total="total" :current-page.sync="currentPage" :page-size="pageSize" @current-change="currentChange" />
        </div>
      </div>
    </template>
  </zle-select>
</template>

<script>
import config from './tableSelect'

export default {
  name: 'ZlTableSelect',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: null,
    apiObj: { type: Function, required: true }, // 请求调用方法
    // !!! 当查询的参数设置成 keyword 时，params不要重复设置值 会被覆盖
    params: { type: Object, default: () => { } }, // 除 props 中的请求参数外的额外参数
    placeholder: { type: String, default: '请选择' },
    multiple: { type: Boolean, default: false }, // 是否可以多选
    collapse: { type: Boolean, default: true }, // element 的 select 多选折叠
    disabled: { type: Boolean, default: false }, // 是否禁用
    tableWidth: { type: Number, default: 400 }, // 选择弹框的表格的宽度
    showIndex: { type: Boolean, default: false }, // 是否默认展示 index
    props: { type: Object, default: () => { } } // 默认的请求参数
  },
  data() {
    return {
      loading: false,
      keyword: '',
      defaultValue: [],
      tableData: [],
      pageSize: config.pageSize,
      total: 0,
      currentPage: 1,
      defaultProps: {
        label: config.props.label,
        value: config.props.value,
        page: config.request.page,
        pageSize: config.request.pageSize,
        // !!! 当查询的参数设置成 keyword 时，params不要重复设置值
        keyword: config.request.keyword // 当为 filterable 时，用当前关键字搜索，
      },
      formData: {}
    }
  },
  watch: {
    value: {
      handler() {
        this.defaultValue = this.value
        this.autoCurrentLabel()
      },
      deep: true
    }
  },
  mounted() {
    this.defaultProps = Object.assign(this.defaultProps, this.props)
    this.defaultValue = this.value
    this.autoCurrentLabel()
  },
  methods: {
    // 表格显示隐藏回调
    visibleChange(visible) {
      if (visible) {
        this.currentPage = 1
        this.keyword = ''
        this.formData = {}
        this.getData()
      } else {
        this.autoCurrentLabel()
      }
    },
    // 获取表格数据
    async getData() {
      this.loading = true
      var reqData = {
        [this.defaultProps.page]: this.currentPage,
        [this.defaultProps.pageSize]: this.pageSize,
        [this.defaultProps.keyword]: this.keyword,
        loading: false
      }
      Object.assign(reqData, this.params, this.formData)
      // console.log('reqData', reqData)
      this.pageSize = reqData[this.defaultProps.pageSize]
      var res = await this.apiObj(reqData)
      var parseData = config.parseData(res)
      this.tableData = parseData.records
      this.total = parseInt(parseData.total)
      this.loading = false
      // 表格默认赋值
      this.$nextTick(() => {
        if (this.multiple) {
          this.defaultValue.forEach(row => {
            var setrow = this.tableData.filter(item => item[this.defaultProps.value] === row[this.defaultProps.value])
            if (setrow.length > 0) {
              this.$refs.table.toggleRowSelection(setrow[0], true)
            }
          })
        } else {
          var setrow = this.tableData.filter(item => item[this.defaultProps.value] === this.defaultValue[this.defaultProps.value])
          this.$refs.table.setCurrentRow(setrow[0])
        }
        this.$refs.table.$el.querySelector('.el-table__body-wrapper').scrollTop = 0
      })
    },
    // 插糟表单提交
    formSubmit() {
      this.currentPage = 1
      this.keyword = ''
      this.getData()
    },
    // 插槽表单数据重置
    formReset() {
      this.formData = this.$options.data().formData
      this.currentPage = 1
      this.getData()
    },
    // 分页表格
    currentChange(val) {
      this.currentPage = val
      this.getData()
    },
    // 自动模拟options赋值
    autoCurrentLabel() {
      this.$nextTick(() => {
        if (this.multiple) {
          this.$refs.select.selected.forEach(item => {
            item.currentLabel = item.value[this.defaultProps.label]
          })
        } else {
          this.$refs.select.selectedLabel = this.defaultValue[this.defaultProps.label]
        }
      })
    },
    // 表格勾选事件
    select(rows, row) {
      var isSelect = rows.length && rows.indexOf(row) !== -1
      if (isSelect) {
        this.defaultValue.push(row)
      } else {
        this.defaultValue.splice(this.defaultValue.findIndex(item => item[this.defaultProps.value] == row[this.defaultProps.value]), 1)
      }
      this.autoCurrentLabel()
      this.$emit('change', this.defaultValue)
    },
    // 表格全选事件
    selectAll(rows) {
      var isAllSelect = rows.length > 0
      if (isAllSelect) {
        rows.forEach(row => {
          var isHas = this.defaultValue.find(item => item[this.defaultProps.value] == row[this.defaultProps.value])
          if (!isHas) {
            this.defaultValue.push(row)
          }
        })
      } else {
        this.tableData.forEach(row => {
          var isHas = this.defaultValue.find(item => item[this.defaultProps.value] == row[this.defaultProps.value])
          if (isHas) {
            this.defaultValue.splice(this.defaultValue.findIndex(item => item[this.defaultProps.value] == row[this.defaultProps.value]), 1)
          }
        })
      }
      this.autoCurrentLabel()
      this.$emit('change', this.defaultValue)
    },
    click(row) {
      if (this.multiple) {
        // 处理多选点击行
      } else {
        this.defaultValue = row
        this.$refs.select.blur()
        this.autoCurrentLabel()
        this.$emit('change', this.defaultValue)
      }
    },
    // tags删除后回调
    removeTag(tag) {
      var row = this.findRowByKey(tag[this.defaultProps.value])
      this.$refs.table.toggleRowSelection(row, false)
      this.$emit('change', this.defaultValue)
    },
    // 清空后的回调
    clear() {
      this.$emit('change', this.defaultValue)
    },
    // 关键值查询表格数据行
    findRowByKey(value) {
      return this.tableData.find(item => item[this.defaultProps.value] === value)
    },
    filterMethod(keyword) {
      this.keyword = keyword
      this.getData()
    },
    // 重置数据
    reset() {
      this.defaultValue = []
      this.tableData = []
      this.formData = this.$options.data().formData
      this.currentPage = 1
    }
  }
}
</script>

<style scoped>
.table_box {
  margin-top: 0;
  padding: 10px;
}
.table-select__page {
  padding-top: 10px;
  text-align: center;
}
</style>
