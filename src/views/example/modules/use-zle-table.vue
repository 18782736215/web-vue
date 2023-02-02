<template>
  <div>
    <zl-header> Table 表格 </zl-header>
    <zl-section header="列出所有column">
      <zle-table :data="tableData" height="30vh" @selection-change="selectionChange">
        <zle-table-column type="selection" align="center" width="55" />
        <zle-table-column prop="code" label="供应商编码" align="center" />
        <zle-table-column prop="name" label="供应商名称" align="center" />
        <zle-table-column prop="contacts" label="业务联系人" align="center" />
        <zle-table-column prop="phone" label="联系电话" align="center" />
        <zle-table-column prop="address" label="供应商地址" align="center" />
        <zle-table-column prop="type" label="供应商类别" align="center" />
        <zle-table-column prop="settlementMethod" label="结算方式" align="center" />
      </zle-table>
    </zl-section>
    <zl-section header="column使用传参">
      <zle-table :data="tableData" :column="tableColumn" height="30vh" />
    </zl-section>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  data() {
    return {
      tableData: [
        {
          code: '345666', // 供应商编码
          name: '亚度家具', // 供应商名称
          contacts: '江直树', // 业务联系人
          phone: '13456678555', // 联系电话
          address: '中江县兴隆镇', // 供应商地址
          type: '门店', // 供应商类别
          settlementMethod: '货到付款', // 结算方式
          state: 1 // 状态
        },
        {
          code: '789012', // 供应商编码
          name: '全一定制', // 供应商名称
          contacts: '袁湘琴', // 业务联系人
          phone: '13456789012', // 联系电话
          address: '成都市武侯区', // 供应商地址
          detailedAddress: '详细地址', // 详细地址
          type: '工厂', // 供应商类别
          settlementMethod: '预付款', // 结算方式
          state: 0 // 状态
        }
      ],
      tableColumn: [
        { prop: 'code', label: '供应商编码', width: 140, sortable: false, fixed: false, hide: false },
        { prop: 'name', label: '供应商名称', width: 140, sortable: false, fixed: false, hide: false },
        { prop: 'contacts', label: '业务联系人', width: 140, sortable: false, fixed: false, hide: false },
        { prop: 'phone', label: '联系电话', width: 140, sortable: false, fixed: false, hide: false },
        { prop: 'address', label: '供应商地址', width: 140, sortable: false, fixed: false, hide: false },
        { prop: 'type', label: '供应商类别', width: 140, sortable: false, fixed: false, hide: false },
        { prop: 'settlementMethod', label: '结算方式', width: 140, sortable: false, fixed: false, hide: false }
      ]
    }
  },
  computed: {
    ...mapState({
      isUseOption: state => state.static.isUseOption // 状态
    }),
    ...mapGetters([
      'getIsUse' // 状态
    ])
  },
  methods: {
    selectionChange(val) {
      console.log(val)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
