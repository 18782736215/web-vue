<template>
  <div>
    <zl-header>
      <h3 class="section_title">Timeline 时间线</h3>
    </zl-header>
    <zl-section>
      <h3 class="description">基础时间轴</h3>
      <zle-timeline class="timeline">
        <zle-timeline-item v-for="(item, index) in activities1" :key="index" :activity="item">
          <div>{{ item.content }}</div>
        </zle-timeline-item>
      </zle-timeline>
      <zle-alert title="通过传入activities来展示事件列表" type="info" />
    </zl-section>
    <zl-section>
      <h3 class="description">时间轴反序</h3>
      <zle-timeline class="timeline" :reverse="true">
        <zle-timeline-item v-for="(item, index) in activities1" :key="index" :activity="item">
          <div>{{ item.content }}</div>
        </zle-timeline-item>
      </zle-timeline>
      <zle-alert title="通过设置reverse属性控制" type="info" />
    </zl-section>
    <zl-section>
      <h3 class="description">自定义时间轴</h3>
      <zle-timeline class="timeline">
        <zle-timeline-item v-for="(item, index) in activities2" :key="index" :activity="item">
          <div>{{ item.content }}</div>
        </zle-timeline-item>
      </zle-timeline>
      <zle-alert title="通过设置activities里的一些属性来控制" type="info" />
    </zl-section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activities1: [
        {
          content: '按期开始',
          timestamp: '2022-11-9'
        },
        {
          content: '通过审核',
          timestamp: '2022-11-10'
        },
        {
          content: '创建成功',
          timestamp: '2022-11-11'
        }
      ],
      activities2: [
        {
          content: '自定义大小、类型、图标',
          timestamp: '2022-11-9',
          size: 'large',
          type: 'primary',
          icon: 'el-icon-more'
        },
        {
          content: '自定义颜色',
          color: '#0bbd87',
          timestamp: '2022-11-10'
        },
        {
          content: '时间戳位置',
          color: '#0bbd87',
          timestamp: '2022-11-10',
          placement: 'top'
        },
        {
          content: '隐藏时间',
          color: '#0bbd87',
          timestamp: '2022-11-10',
          hideTimestamp: true
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.description {
  padding: 10px 0;
}
.timeline {
  width: 200px;
}
</style>
