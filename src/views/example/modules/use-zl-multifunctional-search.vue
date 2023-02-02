<template>
  <div class="flex_column">
    <zl-header title="多功能搜索" />
    <div class="section">
      <zl-multifunctional-search :condition-list="conditionData" :connect-list="list" :option-list="options" value-key="id" label-name="label" @searchChange="searchChange" @resetChange="resetChange" />
    </div>
  </div>
</template>
<script>
import ZlMultifunctionalSearch from '@/components/zl-multifunctional-search/multifunctional-search'
export default {
  components: {
    ZlMultifunctionalSearch
  },
  data() {
    return {
      options: [
        {
          id: '1',
          label: '任务名称'
        },
        {
          id: '2',
          label: '编号'
        },
        {
          id: '3',
          label: '任务状态'
        },
        {
          id: '4',
          label: '任务描述'
        },
        {
          id: '5',
          label: '指派给'
        },
        {
          id: '6',
          label: '优先级'
        },
        {
          id: '7',
          label: '所属项目'
        },
        {
          id: '8',
          label: '所属模块'
        }
      ],
      conditionData: [
        {
          id: '包含',
          label: '包含'
        },
        {
          id: '介于',
          label: '介于'
        },
        {
          id: '不包含',
          label: '不包含'
        },
        {
          id: '从属于',
          label: '从属于'
        },
        {
          id: '=',
          label: '='
        },
        {
          id: '!=',
          label: '!='
        },
        {
          id: '>',
          label: '>'
        },
        {
          id: '>=',
          label: '>='
        },
        {
          id: '<',
          label: '<'
        },
        {
          id: '<=',
          label: '<='
        }

      ],
      list: [
        {
          id: '&&',
          label: '并且'
        },
        {
          id: '||',
          label: '或者'
        }
      ]
    }
  },
  methods: {
    // 查询
    searchChange(val) {
      console.log(val)
    },
    // 重置
    resetChange(val) {
      console.log(val)
    }
  }
}
</script>

