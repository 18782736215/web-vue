<template>
  <div>
    <zl-header> Statistic 统计数值 </zl-header>
    <zl-section header="基础用法">
      <zle-row :gutter="20">
        <zle-col :span="6">
          <div>
            <zle-statistic group-separator="," :precision="2" :value="value2" :title="title" />
          </div>
        </zle-col>
        <zle-col :span="6">
          <div>
            <zle-statistic title="男女比">
              <template slot="formatter">
                456/2
              </template>
            </zle-statistic>
          </div>
        </zle-col>
        <zle-col :span="6">
          <div>
            <zle-statistic group-separator="," :precision="2" decimal-separator="." :value="value1" :title="title">
              <template slot="prefix">
                <i class="el-icon-s-flag" style="color: red" />
              </template>
              <template slot="suffix">
                <i class="el-icon-s-flag" style="color: blue" />
              </template>
            </zle-statistic>
          </div>
        </zle-col>
        <zle-col :span="6">
          <div>
            <zle-statistic :value="like ? 521 : 520" title="Feedback">
              <template slot="suffix">
                <span class="like" @click="like = !like">
                  <i v-show="!!like" class="el-icon-star-on" style="color:red" />
                  <i v-show="!like" class="el-icon-star-off" />
                </span>
              </template>
            </zle-statistic>
          </div>
        </zle-col>
      </zle-row>
    </zl-section>
    <zl-section header="倒计时">
      <zle-row>
        <zle-col :size="14">
          <div style="width: 100%; display: inline-block; ">
            <zle-statistic :value="deadline2" time-indices title="商品降价">
              <template slot="suffix">
                抢购即将开始
              </template>
            </zle-statistic>
          </div>
          <div style="width: 100%; display: inline-block; margin-top: 50px; ">
            <zle-statistic :value="deadline3" time-indices title="一寸光阴一寸金" @finish="hilarity">
              <template slot="suffix">
                <zle-button type="primary " size="small" @click="add">add 10 second</zle-button>
              </template>
            </zle-statistic>
          </div>
        </zle-col>
        <zle-col :size="10">
          <zle-card shadow="hover" style="width: 100%;">
            <div slot="header" class="clearfix">
              <span>文嘉《明日歌》</span>
              <zle-button style="float: right; padding: 3px 0" type="text" @click="clickFn"> {{ stop ? '继续' : '暂停' }}</zle-button>
            </div>
            <div style="font-size: 18px;text-align: center; ">明日复明日</div>
            <div style="font-size: 18px;text-align: center;">明日何其多</div>
            <div style="font-size: 18px;text-align: center;">我生待明日</div>
            <div style="font-size: 18px;text-align: center;">万事成蹉跎</div>
            <div style="margin-top: 40px;" />
            <zle-statistic ref="statistic" format="HH:mm:ss" :value="deadline4" title="距离明日：" time-indices @finish="hilarity" />
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
      like: true,
      value1: 4154.564,
      value2: 2222,
      title: '今年的增长',
      input: 'Hzlelo zleement UI!',
      format: 'HH小时:mm:ss:SSS',
      deadline: Date.now() + 1000 * 60 * 60 * 24 * 2,
      deadline2: Date.now() + 1000 * 60 * 60 * 8,
      deadline3: Date.now() + 1000 * 60 * 30,
      deadline4: Date.now() + (new Date().setHours(23, 59, 59) - Date.now()),
      stop: false
    }
  },
  created() {},
  methods: {
    hilarity() {
      this.$zlNotify({
        title: '提示',
        message: '时间已到，你可知寸金难买寸光阴？',
        duration: 0
      })
    },
    clickFn() {
      this.stop = !this.stop
      this.$refs.statistic.suspend(this.stop)
    },
    add() {
      this.deadline3 = this.deadline3 + 1000 * 10
    }
  }
}
</script>

<style scoped lang="scss">
.like {
  cursor: pointer;
  font-size: 25px;
  display: inline-block;
}
</style>
