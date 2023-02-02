<template>
  <div class="flex_column">
    <zl-header>拖拽打印</zl-header>
    <zl-section type="overspread">
      <zle-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="打印模板设计" name="first">
          <zl-drag-print v-if="activeName == 'first'" :print-list="localPrintData.list" :print-width="Number(localPrintData.width)" :print-height="Number(localPrintData.height)" :api-arr="apiArr" :show-edit="true" @saveData="saveData" />
        </el-tab-pane>
        <el-tab-pane label="模板打印" name="second">
          <zle-button @click="doPrint">打印</zle-button>
          <zl-drag-print v-if="activeName == 'second'" ref="print" :print-list="printObj.list" :plan-list="planList" :print-width="Number(printObj.width)" :print-height="Number(printObj.height)" :show-edit="false" />
        </el-tab-pane>
      </zle-tabs>
    </zl-section>
    <zl-section>
      参考文档： <a href="https://gitee.com/neequ_admin/vue-draggable-resizable" target="_blank" rel="noopener noreferrer">vue-draggable-resizable</a>
    </zl-section>
  </div>
</template>

<script>
import ZlDragPrint from '@/components/zl-print/drag-print'
export default {
  components: {
    ZlDragPrint
  },
  data() {
    return {
      activeName: 'first',
      apiArr: [
        // name集合
        { type: 'String', name: 'processName', label: '名称' },
        { type: 'String', name: 'sumNumber', label: '数量' },
        { type: 'String', name: 'printName', label: '打印人' },
        { type: 'QrCode', name: 'taskNumber', label: '二维码' },
        { type: 'BarCode', name: 'planNumber', label: '条形码' },
        {
          type: 'Array',
          name: 'bom',
          label: 'BOM数据',
          bomList: [
            { type: 'String', name: 'partName', label: '部件名称' },
            { type: 'String', name: 'color', label: '颜色' },
            { type: 'String', name: 'processWay', label: '备注' }
          ]
        }
      ],
      printObj: {},
      planList: [
        {
          processName: '柜体18R件',
          sumNumber: '13',
          printName: '张三',
          taskNumber: 'GT22122910-01-02-R-1',
          planNumber: 'GT22122910',
          bom: [
            {
              partName: '右外侧板R',
              color: '美洲实木_18-赛思青灰',
              processWay: '中间打孔，做R Rb30'
            },
            {
              partName: '右外侧板R',
              color: '美洲实木_18-赛思青灰',
              processWay: '中间打孔，做R Rb30'
            }
          ]
        },
        {
          processName: '柜体18R件2',
          sumNumber: '132',
          printName: '张三2',
          taskNumber: 'GT222',
          planNumber: 'GT223',
          bom: [
            {
              partName: '右外侧板R',
              color: '美洲实木_18-赛思青灰',
              processWay: '中间打孔，做R Rb30'
            }
          ]
        }
      ],
      localPrintData: {
      }
    }
  },
  created() {
    let printData = this.$u.tool._getLocalItem('printData')
    this.localPrintData = printData
  },
  methods: {
    saveData(val) {
      console.log(val)
      this.printObj = val
    },
    handleClick(tab, event) {
      // console.log(tab, event)
    },
    doPrint() {
      this.$refs.print.doPrint()
    }
  }
}
</script>

<style scoped lang="scss">

</style>
