<template>
  <div class="my_page">
    <el-empty description=" ">
      <h4 class="my_page_tip">对不起，您暂无权限查看，请联系管理员</h4>
      <el-button type="primary" plain round @click="goLogin">重新登录</el-button>
      <el-button type="primary" round @click="$router.go(-1)">返回上一页</el-button>
    </el-empty>
  </div>
</template>

<script>
export default {
  methods: {
    goLogin() {
      this.$router.replace('/login')
    }
  }
}
</script>

<style lang="scss" scoped>
.my_page_tip {
  margin-bottom: 20px;
  color: #999;
  font-size: 16px;
}
</style>
