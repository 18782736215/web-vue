<template>
  <div>
    <zl-header>Calendar 日历</zl-header>
    <zl-section>
      <h3 class="description">基础</h3>
      <zle-calender v-model="time" @change="change" />
    </zl-section>
    <zl-section>
      <h3 class="description">自定义内容</h3>
      <zle-calender>
        <template slot="dateCell" slot-scope="{ date, data }">
          <p :class="data.isSelected ? 'is-selected' : ''">
            {{
              data.day
                .split('-')
                .slice(1)
                .join('-')
            }}
            {{ data.isSelected ? '✔️' : '' }}
          </p>
        </template>
      </zle-calender>
      <zle-alert title="通过插槽控制选中内容样式" type="info" />
    </zl-section>
    <zl-section>
      <h3 class="description">自定义范围</h3>
      <zle-calender :range="['2019-03-04', '2019-03-24']" />
      <zle-alert title="通过设置range控制时间段" type="info" />
    </zl-section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      time: ''
    }
  },
  methods: {
    change(val) {
      console.log(111)
      console.log(val)
    }
  }
}
</script>

<style lang="scss" scoped>
.description {
  padding: 10px 0;
}
</style>
