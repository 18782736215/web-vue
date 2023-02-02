<template>
  <div class="">
    <zl-header title="DatePicker 日期选择器" />
    <zl-section header="年份选择器">
      <zle-date-picker v-model="year" type="year" value-format="yyyy" placeholder="请选择" />
      <p>选择值： {{ year }}</p>
    </zl-section>
    <zl-section header="月份选择器">
      <zle-date-picker v-model="month" type="month" value-format="yyyy-MM" placeholder="请选择" />
      <p>选择值： {{ month }}</p>
    </zl-section>
    <zl-section header="日期选择器">
      <zle-date-picker v-model="date" type="date" placeholder="请选择" />
      <p>选择值： {{ date }}</p>
    </zl-section>
    <zl-section header="日期时间选择器">
      <zle-date-picker v-model="datetime" type="datetime" value-format="yyyy-MM-dd HH:mm:ss" placeholder="请选择" />
      <p>选择值： {{ datetime }}</p>
    </zl-section>
    <zl-section header="日期区间选择器">
      <zle-date-picker v-model="dateRange" type="daterange" start-placeholder="开始时间" end-placeholder="结束时间" />
      <p>选择值： {{ dateRange }}</p>
    </zl-section>
    <zl-section header="日期时间区间选择器">
      <zle-date-picker v-model="dateTimeRange" type="datetimerange" value-format="yyyy-MM-dd HH:mm:ss" start-placeholder="开始时间" end-placeholder="结束时间" />
      <p>选择值： {{ dateTimeRange }}</p>
    </zl-section>
    <zl-section header="日期范围示例">
      <div>限制当月，例如今天11.28，则限制仅能选择11月的</div>
      <zle-date-picker v-model="selectedDateValue" type="date" value-format="yyyy-MM-dd" :clearable="false" align="right" placeholder="请选择" :picker-options="pickerOptions" />
      <p>选择值： {{ selectedDateValue }}</p>
      <br>
      <div>限制选择近一个月，例如今天11.28，则减去30天</div>
      <zle-date-picker v-model="selectedDateValue1" type="date" value-format="yyyy-MM-dd" :clearable="false" align="right" placeholder="请选择" :picker-options="pickerOptions1" />
      <p>选择值： {{ selectedDateValue1 }}</p>
      <br>
      <div>限制今日之后，不包含今天</div>
      <zle-date-picker v-model="selectedDateValue2" type="date" value-format="yyyy-MM-dd" :clearable="false" align="right" placeholder="请选择" :picker-options="pickerOptions2" />
      <p>选择值： {{ selectedDateValue2 }}</p>
      <br>
      <div>限制今日之后，包含今天</div>
      <zle-date-picker v-model="selectedDateValue3" type="date" value-format="yyyy-MM-dd" :clearable="false" align="right" placeholder="请选择" :picker-options="pickerOptions3" />
      <p>选择值： {{ selectedDateValue3 }}</p>
      <br>
      <div>限制今日之前</div>
      <zle-date-picker v-model="selectedDateValue4" type="date" value-format="yyyy-MM-dd" :clearable="false" align="right" placeholder="请选择" :picker-options="pickerOptions4" />
      <p>选择值： {{ selectedDateValue4 }}</p>
    </zl-section>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      year: '',
      month: '',
      date: '',
      datetime: '',
      dateRange: '',
      dateTimeRange: '',
      selectedDateValue: '', // 日期
      selectedDateValue1: '', // 日期
      selectedDateValue2: '', // 日期
      selectedDateValue3: '', // 日期
      selectedDateValue4: '', // 日期
      pickerOptions: {
        disabledDate: time => {
          var nowTime = Date.now()
          var cache = new Date(Date.now())
          const startDay = cache.getDate() * 24 * 3600 * 1000
          const endDay = (new Date(cache.getFullYear(), cache.getMonth() + 1, 0).getDate() - cache.getDate()) * 24 * 3600 * 1000
          const minTime = nowTime - startDay
          const maxTime = nowTime + endDay
          return time.getTime() < minTime || time.getTime() > maxTime
        }
      },
      pickerOptions1: {
        disabledDate(time) {
          let currentTime = Date.now()
          let oneMonth = 60 * 60 * 1000 * 24 * 30
          let oneDay = 60 * 60 * 1000 * 24 * 30
          if (currentTime) {
            return time.getTime() > currentTime || time.getTime() < currentTime - oneMonth
          }
        }
      },
      pickerOptions2: {
        disabledDate(time) {
          let currentTime = Date.now()
          let oneMonth = 60 * 60 * 1000 * 24 * 30
          let oneDay = 60 * 60 * 1000 * 24
          if (currentTime) {
            return time.getTime() < currentTime
          }
        }
      },
      pickerOptions3: {
        disabledDate(time) {
          let currentTime = Date.now()
          let oneMonth = 60 * 60 * 1000 * 24 * 30
          let oneDay = 60 * 60 * 1000 * 24
          if (currentTime) {
            return time.getTime() < currentTime - oneDay
          }
        }
      },
      pickerOptions4: {
        disabledDate(time) {
          let currentTime = Date.now()
          let oneMonth = 60 * 60 * 1000 * 24 * 30
          let oneDay = 60 * 60 * 1000 * 24
          if (currentTime) {
            return time.getTime() > currentTime
          }
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.section-title {
  margin: 10px 0;
}
</style>
