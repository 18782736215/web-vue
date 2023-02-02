<template>
  <!-- 聊天页面 -->
  <div class="chat_example flex_column_nh">
    <zl-section header="聊天">
      <span>
        聊天对象:
        <user-select v-model="userObj" class="my-search_input" placeholder="请选择聊天对象" @change="userChange" />
        <zle-button type="primary" @click="goChat">立即沟通</zle-button>
      </span>
    </zl-section>
    <zl-section type="overspread">
      <zl-chat />
    </zl-section>
    <zl-section header="参考文档">
      <a href="https://gitee.com/june000/lemon-im" target="_blank" rel="noopener noreferrer">lemon-im</a>
      <a href="http://june000.gitee.io/lemon-im/" target="_blank" rel="noopener noreferrer">lemon-im文档</a>
      <zle-alert type="error">
        聊天组件如果需要适配当前块，则需调整外层布局。否则展示为默认宽高
      </zle-alert>
    </zl-section>
  </div>
</template>

<script>
import ZlChat from '@/components/zl-chat/chat'
import userSelect from '@/views/example/components/user-select'
export default {
  components: {
    ZlChat,
    userSelect
  },
  data() {
    return {
      userObj: {}
    }
  },
  mounted() { },
  methods: {
    userChange() {
      console.log(this.userObj)
    },
    goChat() {
      // 立即沟通传参
      let chatObj = {
        id: '234', // 用户id 必传
        displayName: '12345678900', // 用户名/公司名
        avatar: 'https://p.qqan.com/up/2020-2/2020022821001845128.jpg', // 用户头像
        // 当为公司名时，以下数据可不传
        age: 5, // 年龄
        working: 1, // 工作年限
        education: '无学历',
        jobStatus: 'NOT_ACTIVE'
      }
      this.$u.tool._setSessionItem('CHATOBJ', chatObj)
      // id 必传！！!
      this.$go({ path: '/chat', query: { id: chatObj.id }})
    }
  }
}
</script>

<style lang="scss" scoped>
a {
  margin: 0 10px;
}
</style>
