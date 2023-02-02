<template>
  <!-- 弹框使用 -->
  <div>
    <h2 class="section_title">弹框</h2>
    <el-alert title="默认修改弹框样式" type="success" />
    <zle-button @click="dialogVisible = true">打开弹框</zle-button>
    <el-dialog title="弹框样式测试" :visible.sync="dialogVisible" width="1200" :before-close="dialogBeforeClose" append-to-body>
      <zle-table :data="tableData" height="30vh">
        <el-table-column prop="code" label="供应商编码" align="center" />
        <el-table-column prop="name" label="供应商名称" align="center" />
        <el-table-column prop="contacts" label="业务联系人" align="center" />
        <el-table-column prop="phone" label="联系电话" align="center" />
        <el-table-column prop="address" label="供应商地址" align="center" />
        <el-table-column prop="type" label="供应商类别" align="center" />
        <el-table-column prop="settlementMethod" label="结算方式" align="center" />
      </zle-table>
      <div slot="footer">
        <el-button @click="dialogBeforeClose">取 消</el-button>
        <el-button type="primary" @click="dialogBeforeClose">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
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
      ]
    }
  },
  methods: {
    dialogBeforeClose() {
      this.dialogVisible = false
    }
  }
}
</script>
