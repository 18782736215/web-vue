<template>
  <div>
    <zl-header>Card 卡片</zl-header>
    <zl-section header="基础用法">
      <zle-card class="card">
        <template slot="header">
          <span>卡片名称</span>
          <zle-button style="float: right; padding: 3px 0" type="text">操作按钮</zle-button>
        </template>
        <div v-for="o in 4" :key="o" class="text item">
          {{ '列表内容 ' + o }}
        </div>
      </zle-card>
    </zl-section>
    <zl-section header="简单卡片">
      <div>卡片可以只有内容区域</div>
      <zle-card class="card">
        <div v-for="o in 4" :key="o" class="text item">
          {{ '列表内容 ' + o }}
        </div>
      </zle-card>
    </zl-section>
    <zl-section header="带图片">
      <div>可自定义更丰富的内容展示</div>
      <zle-card class="card" :body-style="{ padding: '0px' }">
        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
        <div style="padding: 14px;">
          <span>好吃的汉堡</span>
          <div class="bottom clearfix">
            <time class="time">{{ currentDate }}</time>
          </div>
        </div>
      </zle-card>
    </zl-section>
    <zl-section header="卡片阴影">
      <div>通过shadow属性设置卡片阴影出现的时机：always、hover或never。</div>
      <zle-row>
        <zle-col :span="8">
          <zle-card class="card" shadow="always">
            <div>总是</div>
          </zle-card>
        </zle-col>
        <zle-col :span="8">
          <zle-card class="card" shadow="hover">
            <div>鼠标悬浮时显示</div>
          </zle-card>
        </zle-col>
        <zle-col :span="8">
          <zle-card class="card" shadow="never">
            <div>从不显示</div>
          </zle-card>
        </zle-col>
      </zle-row>
    </zl-section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentDate: new Date()
    }
  }
}
</script>

<style lang="scss" scoped>
.description {
  padding: 10px 0;
}
.header {
  font-size: 20px;
  font-weight: bold;
}
.card {
  max-width: 255px;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: '';
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
}
</style>
