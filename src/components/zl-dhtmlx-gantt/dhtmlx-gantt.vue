<template>
  <div v-loading="ganttLoading" class="ganntClass" :style="`height: ${getContainerHeight}`">
    <div ref="gantt" class="gantt-container" />
    <zle-pagination :page-sizes="[10, 20, 50]" :page.sync="loadParams.current" :size.sync="loadParams.size" layout="total, sizes, prev, pager, next, jumper" :total="total" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
  </div>
</template>

<script>
import gantt from 'dhtmlx-gantt'
import 'dhtmlx-gantt/codebase/dhtmlxgantt.css'
import { yearScaleTemplate, monthScaleTemplate, yearScaleCss, monthScaleCss } from './utils'
export default {
  props: {
    ganttConfig: {
      type: Object,
      default: () => {
        return {
          // 自适应甘特图的尺寸大小, 使得在不出现滚动条的情况下, 显示全部任务
          autosize: false,
          // 是否只读
          readonly: false,
          // 是否显示左侧树表格
          show_grid: true,
          // 表头高度
          scale_height: 50,
          // 自适应
          fit_tasks: false,
          // 禁用双击事件
          details_on_dblclick: false,
          // 关闭所有错误提示信息：gantt有自己的异常消息，如果不关闭可能页面会弹出异常消息
          show_errors: false,
          // 禁止拖动任务
          drag_move: false,
          // 禁止拖动任务进度
          drag_progress: false,
          // 禁止拖放添加Link
          drag_links: false,
          // 甘特图展示列表
          scales: [
            { unit: 'year', step: 1, format: yearScaleTemplate, css: yearScaleCss },
            { unit: 'month', step: 1, format: monthScaleTemplate, css: monthScaleCss }
          ],
          // 展示列
          columns: [],
          // 列的名称 用于tooltip
          customName: {}
        }
      }
    },
    // api 获取数据的接口
    api: {
      type: Function,
      require: true,
      default: () => {}
    },
    params: {
      type: Object,
      default: () => {}
    },
    // 甘特图距离顶部的高度，主要是调整高度
    offsetHeight: {
      type: [String, Number],
      default: () => {}
    }
  },
  data() {
    return {
      ganttLoading: false,
      projectId: '',
      tasks: {
        data: []
      },
      loadParams: {
        current: 1,
        size: 20
      },
      checkList: [],
      total: 0
    }
  },
  computed: {
    getContainerHeight() {
      let h = (this.offsetHeight && this.offsetHeight.replace(/\D/g, '')) || 0
      return innerHeight - 170 - Number(h) + 'px'
    }
  },
  watch: {
    params: {
      handler(newV) {
        Object.assign(this.loadParams, newV)
        this.getProjectTaskData()
      },
      immediate: true,
      deep: true
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    // 初始化甘特图
    async init() {
      let that = this
      // 语言
      gantt.i18n.setLocale('cn')
      // 设置灯箱label 和任务列对应 详见 https://docs.dhtmlx.com/gantt/api__gantt_locale_other.html
      //                               https://docs.dhtmlx.com/gantt/api__gantt_lightbox_config.html
      gantt.i18n.setLocale({
        labels: this.ganttConfig.locale.labels
      })
      // 基础配置生效
      Object.assign(gantt.config, this.ganttConfig)
      // 注册tooltip插件
      gantt.plugins({
        tooltip: true
      })
      // 生成tooltip信息
      gantt.attachEvent('onGanttReady', () => {
        const { customName } = this.ganttConfig
        gantt.templates.tooltip_text = (start, end, task) => {
          let res = ''
          Object.keys(task).forEach(key => {
            if (customName[key]) {
              res += `${customName[key]}：${task[key]}</br>`
            }
          })
          return res + '计划开始时间：' + gantt.templates.tooltip_date_format(start) + '<br/>计划结束时间：' + gantt.templates.tooltip_date_format(end)
        }
      })
      // 灯箱事件
      gantt.attachEvent('onBeforeLightbox', function(task_id) {
        // 刷新灯箱数据
        gantt.resetLightbox()
        // true：打开灯箱
        return true
      })
      // 禁止拖动设置任务长度
      gantt.attachEvent('onBeforeTaskDrag', function(id, mode, e) {
        return false
      })
      // 自定义
      gantt.attachEvent('onTaskClick', function(id, e) {
        let oId = e.srcElement.id
        let index = that.checkList.findIndex(v => v == id)
        switch (oId) {
          case 'delButton':
            if (index != -1) {
              that.checkList.splice(index, 1)
            }
            gantt.deleteTask(id)
            break
          case 'checkOne':
            if (e.target.checked && index == -1) {
              that.checkList.push(id)
            } else {
              that.checkList.splice(index, 1)
            }
            break
        }
        console.log(that.checkList)
        return true
      })
      // 开启标记
      gantt.plugins({
        marker: true
      })
      // 标记当前日期
      var dateToStr = gantt.date.date_to_str(gantt.config.task_date)
      var markerId = gantt.addMarker({
        start_date: new Date(),
        css: 'today', // 标记样式，style中对应
        text: 'Today',
        title: dateToStr(new Date())
      })
      gantt.getMarker(markerId)
      // 初始化
      gantt.init(this.$refs.gantt)
    },
    // 获取甘特图数据
    async getProjectTaskData() {
      this.ganttLoading = true
      gantt.clearAll()
      let res = await this.api(this.loadParams)
      this.tasks.data = res.responseBody.records
      this.total = res.responseBody.total
      gantt.parse(this.tasks)
      // 刷新数据
      gantt.refreshData()
      this.ganttLoading = false
    },
    delete(id) {
      gantt.deleteTask(id)
    },
    handleSizeChange(val) {
      this.loadParams.size = val
      this.getProjectTaskData()
    },
    handleCurrentChange(val) {
      this.loadParams.current = val
      this.getProjectTaskData()
    }
  }
}
</script>
<style lang="scss" scoped>
.gantt-container {
  height: 100%;
}
.ganntClass {
  background-color: #fff;
  padding: 10px;
  border-radius: 4px;
}
</style>
