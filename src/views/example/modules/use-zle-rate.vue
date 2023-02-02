<template>
  <div class="rate">
    <zl-header title="Rate 评分" />
    <zl-section class="section">
      <h3 class="section-title">
        基础评分
      </h3>
      <zle-rate v-model="value" />
      <hr>
      <h3 class="section-title">
        展示
      </h3>
      <p class="section-title">
        评分分数（show-score） 分数颜色（text-color）：<zle-rate v-model="value" show-score text-color="#ff9900" />
      </p>
      <hr>

      <h3 class="section-title">
        允许半选（allow-half）
      </h3>
      <zle-rate v-model="value" allow-half show-score text-color="#ff9900" />
      <hr>

      <h3 class="section-title">
        颜色自定义
      </h3>
      <p class="section-title">
        设置colors：<zle-rate v-model="value" :colors="colors" />
      </p>
      <hr>

      <h3 class="section-title">
        展示辅助文字
      </h3>
      <p class="section-title">
        设置texts可以为每个分值指定对应的文字：<zle-rate v-model="value" :texts="texts" show-text />
      </p>
      <hr>
      <h3 class="section-title">
        自定义icon
      </h3>
      <p class="section-title">
        设置iconClasses：<zle-rate v-model="value" :icon-classes="iconClasses" void-icon-class="el-icon-ice-cream-round" />
      </p>
      <hr>

      <h3 class="section-title">
        只读评分
      </h3>
      <zle-rate v-model="score" disabled show-score text-color="#ff9900" score-template="{value}" />
    </zl-section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: null,
      score: 4.2,
      colors: ['#cccccc', '#FF0000', '#FF9900'],
      texts: ['差评', '不太满意', '一般', '满意', '非常满意'],
      iconClasses: ['el-icon-grape', 'el-icon-pear', 'el-icon-lollipop']
    }
  }
}
</script>

<style lang="scss" scoped>
.section-title {
  display: flex;
  align-items: center;
  margin: 10px 0;
}
</style>
