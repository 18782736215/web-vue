<template>
  <div ref="baseEcharts" :style="{height:height, width:width}" />
</template>

<script>
import * as echarts from 'echarts'
import T from './echarts-theme-T.js'
echarts.registerTheme('T', T)
const unwarp = (obj) => obj && (obj.__v_raw || obj.valueOf() || obj)

export default {
  ...echarts,
  name: 'ZlCharts',
  props: {
    height: { type: String, default: '100%' },
    width: { type: String, default: '100%' },
    nodata: { type: Boolean, default: false },
    option: { type: Object, default: () => { } }
  },
  data() {
    return {
      isActive: false,
      myChart: null,
      timer: null
    }
  },
  computed: {
    myOptions: function() {
      return this.option || {}
    }
  },
  watch: {
    option: {
      deep: true,
      handler(v) {
        if (this.myChart) {
          unwarp(this.myChart).setOption(v)
        }
      }
    }
  },
  activated() {
    if (!this.isActive) {
      this.$nextTick(() => {
        this.myChart.resize()
      })
    }
  },
  deactivated() {
    this.isActive = false
    clearInterval(this.timer)
  },
  mounted() {
    this.isActive = true
    // this.$nextTick(() => {
    this.draw()
    // })
  },
  methods: {
    draw() {
      var myChart = echarts.init(this.$refs.baseEcharts, 'T')
      myChart.setOption(this.myOptions)
      this.myChart = myChart
      window.addEventListener('resize', () => myChart.resize())
    },
    showAction(arr) {
      let index = -1
      this.timer = setInterval(() => {
        index++
        if (index == arr.length) {
          index = 0
        }
        this.myChart.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: index
        })
      }, 2000)
    }
  }
}
</script>
