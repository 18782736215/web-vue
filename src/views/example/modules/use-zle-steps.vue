<template>
  <div class="step">
    <zl-header title="Steps 步骤条" />
    <zl-section header="基础用法">
      <p class="section-title"> space可设置间隙宽度，默认自适应</p>
      <zle-steps :active="active" :step-arr="arr" finish-status="success" />
      <zle-button @click="next">下一步</zle-button>
    </zl-section>
    <zl-section header="含状态步骤条">
      <zle-steps :active="1" :step-arr="stateData" :space="200" finish-status="success" />
    </zl-section>
    <zl-section header="有描述文字的步骤条">
      <zle-steps :active="1" :step-arr="dataDes" :space="300" />
    </zl-section>
    <zl-section header="居中的步骤条">
      <p class="section-title"> align-center </p>
      <zle-steps :active="2" :step-arr="arrDes" align-center :space="300" />
    </zl-section>
    <zl-section header="不同状态的步骤条">
      <zle-steps :step-arr="arrStatus" :space="300" />
    </zl-section>
    <zl-section header="带图标的步骤条">
      <zle-steps :active="1" :step-arr="arrIcon" :space="300" />
    </zl-section>
    <zl-section header="竖式步骤条">
      <div class="item_h">
        <p class="section-title"> direction="vertical" </p>
        <zle-steps :active="1" :step-arr="verticalData" direction="vertical" :space="100" />
      </div>
    </zl-section>
    <zl-section header="简洁风格的步骤条">
      <p class="section-title">（ align-center / description / direction / space 都将失效）</p>
      <zle-steps :active="1" :step-arr="arrIcon" simple />
      <zle-steps class="item_t" :active="1" :step-arr="arr" finish-status="success" simple />
    </zl-section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      arr: [
        { title: '步骤1' },
        { title: '步骤2' },
        { title: '步骤3' }
      ],
      stateData: [
        { title: '已完成' },
        { title: '进行中' },
        { title: '步骤 3' }
      ],
      arrDes: [
        { title: '步骤1', description: '这是一段很长很长很长的描述性文字' },
        { title: '步骤2', description: '这是一段很长很长很长的描述性文字' },
        { title: '步骤3', description: '这是一段很长很长很长的描述性文字' },
        { title: '步骤4', description: '这是一段很长很长很长的描述性文字' }
      ],
      dataDes: [
        { title: '步骤1', description: '这是一段很长很长很长的描述性文字' },
        { title: '步骤2', description: '这是一段很长很长很长的描述性文字' },
        { title: '步骤3', description: '这是一段很长很长很长的描述性文字' }
      ],
      arrStatus: [
        { title: '步骤1', description: 'wait状态', status: 'wait' },
        { title: '步骤2', description: 'process状态', status: 'process' },
        { title: '步骤3', description: 'finish状态', status: 'finish' },
        { title: '步骤4', description: 'error状态', status: 'error' },
        { title: '步骤5', description: 'success状态', status: 'success' }
      ],
      arrIcon: [
        { title: '步骤1', description: '这是一段很长很长很长的描述性文字', icon: 'el-icon-edit' },
        { title: '步骤2', description: '这是一段很长很长很长的描述性文字', icon: 'el-icon-upload' },
        { title: '步骤3', description: '这是一段很长很长很长的描述性文字', icon: 'el-icon-picture' }
      ],
      verticalData: [
        { title: '步骤1' },
        { title: '步骤2' },
        { title: '步骤3', description: '这是一段很长很长很长的描述性文字' }
      ]
    }
  },
  methods: {
    next() {
      if (this.active++ > this.arr.length - 1) {
        this.active = 0
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.section-title{
  margin-bottom: 10px;
}
.item_h{
  height: 300px;
}
.item_t{
  margin-top: 20px
}
</style>
