<template>
  <div>
    <zl-drag-print :print-list="printList" :plan-list="planList" :show-edit="false" />
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
      printList: [], // 模板数据
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
        // {
        //   processName: '柜体18R件3',
        //   sumNumber: '333',
        //   printName: '张三3',
        //   taskNumber: 'GT3',
        //   planNumber: 'GT3',
        //   bom: [
        //     {
        //       test1: '柜体18R件',
        //       test2: '13',
        //       test3: '张三',
        //       test4: 'GT22122910-01-02-R-1'
        //     }
        //   ]
        // }
      ]
    }
  },
  created() {
    this.printList = this.$route.query.list
  },
  mounted() {
    this.print()
  },
  methods: {
    print() {
      setTimeout(() => {
        window.print()
        this.$router.go(-1)
      }, 1000)
    }
  }
}
</script>

<style lang="scss" media="print" scoped>
/** 去掉页头和页尾 */
@page {
  size: auto; /* auto is the initial value */
  margin: 0mm; /* this affects the margin in the printer settings */

}
</style>
