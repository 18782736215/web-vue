<template>
  <div class="flex_column">
    <zl-section>fullcalendar 日历</zl-section>
    <zl-section>
      <div class="main_container">
        <FullCalendar ref="fullCalendar" :options="calendarOptions" />
      </div>
    </zl-section>
    <zl-section>
      参考文档： <a href="https://fullcalendar.io/docs/initialize-globals" target="_blank" rel="noopener noreferrer">fullcalendar 使用方法</a>
      参考文档： <a href="https://www.npmjs.com/package/fullcalendar" target="_blank" rel="noopener noreferrer">fullcalendar 文档</a>
    </zl-section>
  </div>
</template>
<script>
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import moment from 'moment'
export default {
  components: {
    FullCalendar
  },
  data() {
    return {
      // 配置信息
      calendarOptions: {
        plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin, listPlugin],
        initialView: 'dayGridMonth',
        firstDay: 0, // 设置一周中显示的第一天是哪天，周日是0，周一是1，类推
        locale: 'zh-cn', // 切换语言，当前为中文
        eventColor: '#FFF', // 全部日历日程背景色
        eventClick: this.handleDateClick, // 点击日程触发
        dateClick: this.handleDateClick, // 点击日期触发
        events: [],
        initialDate: moment().format('YYYY-MM-DD'), // 日期时间
        aspectRatio: 2.6, // 设置日历单元格宽度与高度的比例。
        headerToolbar: {
          // 日历头部按钮位置
          left: 'today',
          center: 'prevYear,prev title next,nextYear',
          right: ''
        },
        buttonText: {
          today: '今天',
          month: '月',
          week: '周',
          day: '日'
        }
      }
    }
  },
  mounted() {
    this.gedata()
  },
  methods: {
    gedata() {
      this.calendarOptions.events = [
        {
          title: '任务1',
          start: '2023-01-21', // 事件开始事件
          // end: '', // 事件结束时间
          backgroundColor: '#eb0c0c', // 背景颜色
          // borderColor: '#ffcc99', // 边框颜色
          textColor: '#fff' // 文字颜色
        },
        {
          title: '任务2',
          start: '2023-01-12',
          color: '#ffcc99'
        }
      ]
    },
    handleDateClick(info) {
      console.log(info)
    }
  }
}
</script>

<style scoped lang="scss">
  ::v-deep .main_container {
    height: calc(100vh - 150px);
    .fc-button-primary:not(:disabled):active:focus,
    .fc-button-primary:not(:disabled).fc-button-active:focus,
    .fc-button:focus {
      box-shadow: none;
    }
    .fc .fc-button {
      height: 30px;
      line-height: 1.2em;
    }
    .fc .fc-toolbar-title {
      font-size: 1.2em;
    }
    .fc .fc-button .fc-icon {
      font-size: 1em;
    }
  }
  ::v-deep .fc-header-toolbar {
    .fc-toolbar-chunk:nth-child(1) {
      .fc-button-primary {
        color: #fff;
        background-color: #6091fc;
        border-color: #6091fc;
      }
    }
    .fc-toolbar-chunk:nth-child(2) {
      display: flex;
      align-items: center;
      .fc-button-primary {
        background-color: transparent;
        color: #99a2b7;
        border: none;
        border-color: transparent;
        outline: none;
      }
      .fc-button-primary:hover {
        color: #6091fc;
      }
      .fc-button-primary:active {
        border-color: transparent !important;
      }
    }
  }
  </style>