<template>
  <div>
    <zl-header> Progress 进度条 </zl-header>
    <zl-section header="线形进度条">
      <zle-tag> 进度条值 percentage:50</zle-tag>
      <zle-progress :percentage="percentage" />
      <zle-tag> 进度条状态 status :success,exception,warning</zle-tag>
      <zle-progress :percentage="percentage" status="success" />
      <zle-progress :percentage="percentage" status="exception" />
      <zle-progress :percentage="percentage" status="warning" />
      <zle-tag>自定义文字显示 format </zle-tag>
      <zle-progress :percentage="percentage" :format="format" />
      <hr>
      <div>
        {{ percentage }}
      </div>
    </zl-section>
    <zl-section header="百分比内显">
      <zle-tag>stroke-width 属性更改进度条的高度 </zle-tag>
      <zle-progress :stroke-width="25" :percentage="0" />
      <zle-tag> text-inside 属性来将进度条描述置于进度条内部</zle-tag>
      <zle-progress :text-inside="true" :stroke-width="24" :percentage="100" status="success" />
      <zle-progress :text-inside="true" :stroke-width="22" :percentage="80" status="warning" />
      <zle-progress :text-inside="true" :format="format" :stroke-width="20" :percentage="50" status="exception" />
      <hr>
      <div>
        0 100 80 50
      </div>
    </zl-section>
    <zl-section header="环形进度条 type=line/circle/dashboard">
      <zle-progress type="circle" :percentage="0" />
      <zle-progress type="circle" :percentage="25" />
      <zle-progress type="circle" :percentage="80" status="success" />
      <zle-progress type="circle" :percentage="70" status="warning" />
      <zle-progress type="dashboard" :percentage="50" status="exception" />
      <hr>
      <div>
        0 25 80 70 50
      </div>
    </zl-section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      percentage: 50
    }
  },
  created() {},
  methods: {
    format(percentage) {
      return percentage === 50 ? '一半' : `${percentage}%`
    }
  }
}
</script>

<style scoped lang="scss">
::v-deep .el-card__body {
  width: 50%;
}
::v-deep .el-progress {
  margin-bottom: 20px;
}
::v-deep .el-tag {
  margin-bottom: 10px;
}
</style>
