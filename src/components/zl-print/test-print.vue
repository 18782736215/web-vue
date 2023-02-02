<template>
  <!-- 测试打印 -->
  <div class="content">
    <print @print="print" @printConfigChange="configChange" />
    <div
      :ref="ref"
      class="print-class"
      :style="{
        width: form.pageWidth + 'px',
        paddingTop: form.pagePaddingTop + 'px',
        paddingBottom: form.pagePaddingBottom + 'px',
        paddingLeft: form.pagePaddingLeft + 'px',
        paddingRight: form.pagePaddingRight + 'px'
      }"
    >
      <div class="top-title">
        <div class="text">测试打印</div>
      </div>
      <!-- 表单数据 -->
      <div class="table">
        <table>
          <thead>
            <tr>
              <th width="50px">序号</th>
              <th width="150px">测试名称</th>
              <th width="150px">年龄</th>
              <th width="60px">编号</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in tableData" :key="index">
              <td align="center">{{ index + 1 }}</td>
              <td align="center">{{ item.name || '-' }}</td>
              <td align="center">{{ item.age || '-' }}</td>
              <td align="center">{{ item.number || '-' }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import print from '@/components/zl-print/print.vue'
export default {
  components: {
    print
  },
  data() {
    return {
      tableData: [],
      user: {
        name: '刘德华',
        age: '18',
        number: '001'
      },
      form: {},
      ref: 'testPrint'
    }
  },
  created() {
    this.tableData = Array(10).fill(this.user)
    Object.assign(this.form, this.$u.tool._getLocalItem('printConfigL'))
  },
  methods: {
    print(val) {
      this.form = val
      this.$print(this.$refs[this.ref], val)
    },
    configChange(val) {
      this.form = val
    }
  }
}
</script>

<style lang="scss" scoped>
* {
  background-color: #fff;
}

.content {
  max-width: 1200px;
  min-height: 500px;
  padding: 10px;

  .top-title {
    width: 100%;
    font-size: 30px;
    display: flex;
    justify-content: center;
  }

  .table {
    .table-title {
      display: flex;
      justify-content: right;
      margin: 10px 20px 5px 0;

      .address-box {
        display: flex;
        margin-right: 10px;

        .address-text {
          min-width: 150px;
        }
      }
    }
  }

  .table thead th,
  .table tbody tr td,
  .table tfoot tr td {
    border: 1px solid;
  }

  .table thead th,
  .table tbody tr td {
    padding: 5px 0;
  }
}
::v-deep .el-input-number__decrease {
  height: calc(100% - 2px);
  display: flex;
  justify-content: center;
  align-items: center;
}
::v-deep .el-input-number__increase {
  height: calc(100% - 2px);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
