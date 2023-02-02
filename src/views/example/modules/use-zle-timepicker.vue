<template>
  <div class="">
    <zl-header title="TimePicker 时间选择器" />
    <zl-section header="时分秒选择器">
      <zle-time-picker v-model="time1" placeholder="时分秒选择器" />
      <hr>
      <div>{{ '当前值：' + time1 }}</div>
    </zl-section>
    <zl-section header="时分选择器">
      <zle-time-picker v-model="time2" placeholder="时分选择器" format="HH:mm" value-format="HH:mm" />
      <hr>
      <div>{{ '当前值：' + time2 }}</div>
    </zl-section>
    <zl-section header="时分秒选择器（十二小时制）">
      <zle-time-picker v-model="time3" placeholder="时分秒十二小时制选择器" format="hh:mm:ss A" value-format="hh:mm:ss A" />
      <hr>
      <div>{{ '当前值：' + time3 }}</div>
    </zl-section>
    <zl-section header="时分秒选择器（十二小时制）">
      <zle-time-picker v-model="time4" placeholder="时分十二小时制选择器" format="hh:mm A" value-format="hh:mm A" />
      <hr>
      <div>{{ '当前值：' + time4 }}</div>
    </zl-section>
    <zl-section header="时间区间选择器">
      <zle-time-picker v-model="timeRange" value-format="HH:mm:ss" is-range start-placeholder="开始时间" end-placeholder="结束时间" />
      <hr>
      <div>{{ '当前值：' + timeRange }}</div>
    </zl-section>
    <zl-section header="固定时间点">
      <zle-time-select v-model="time5" :picker-options="{ start: '08:30', step: '00:15', end: '18:30' }" placeholder="选择时间" />
      <hr>
      <div>{{ '当前值：' + time5 }}</div>
    </zl-section>
    <zl-section header="任意时间点">
      <div class="flex">
        <div>鼠标滚轮进行选择： <zle-time-picker v-model="time6" :picker-options="{ selectableRange: '18:30:00 - 20:30:00' }" placeholder="任意时间点" /></div>
        <div>箭头进行选择： <zle-time-picker v-model="time7" arrow-control :picker-options="{ selectableRange: '18:30:00 - 20:30:00' }" placeholder="任意时间点" /></div>
      </div>
      <hr>
      <div>{{ '当前值：' + time6 + '  ' + time7 }}</div>
    </zl-section>
    <zl-section header="固定时间范围">
      <div class="flex">
        <zle-time-select v-model="startTime" placeholder="起始时间" :picker-options="{ start: '08:30', step: '00:15', end: '18:30' }" />
        <zle-time-select v-model="endTime" placeholder="结束时间" :picker-options="{ step: '00:15', end: '18:30', minTime: startTime }" />
      </div>
      <hr>
      <div>{{ '当前值：' + startTime + '  ' + endTime }}</div>
    </zl-section>
    <zl-section header="任意时间范围">
      <div class="flex">
        <div>鼠标滚轮进行选择： <zle-time-picker v-model="time8" is-range range-separator="至" start-placeholder="开始时间" end-placeholder="结束时间" placeholder="选择时间范围" /></div>
        <div>箭头进行选择：  <zle-time-picker v-model="time9" is-range arrow-control range-separator="至" start-placeholder="开始时间" end-placeholder="结束时间" placeholder="选择时间范围" /></div>
      </div>
      <hr>
      <div>{{ '当前值：' + time8 + '  ' + time9 }}</div>
    </zl-section>
  </div>
</template>

<script>
export default {
  name: 'Timepicker',
  data() {
    return {
      time1: '',
      time2: '',
      time3: '',
      time4: '',
      time5: '',
      time6: '',
      time7: '',
      time8: '',
      time9: '',
      timeRange: '',
      startTime: '',
      endTime: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.section-title {
  margin: 10px 0;
}
.flex {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>
