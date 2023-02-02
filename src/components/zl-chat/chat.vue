<template>
  <div ref="chatRef" v-loading="loading" class="chat_box">
    <lemon-imui
      v-show="!loading"
      ref="IMUI"
      :width="width + 'px'"
      :height="height + 'px'"
      :user="userData"
      avatar-cricle
      hide-menu
      v-bind="$attrs"
      @send="handleSend"
      @pull-messages="handlePullMessages"
      @change-contact="handleChangeContact"
      @loadContact="loadContact"
      v-on="$listeners"
    >
      <div slot="sidebar-message-fixedtop" class="left_top">
        30天内联系人
      </div>
      <template #message-title="contact">
        <div class="flex_a_center">
          <div>{{ contact.displayName }}</div>
          <!-- <jobDetail :contact="contact" /> -->
        </div>
      </template>
    </lemon-imui>
  </div>
</template>
<script>
// 聊天页面
import emojiData from './data/emoji'
import websocketChat from './websocket-chat'
// import { reqChatList, reqMsgList } from '@/api/chat'
import avatarImg from '@/assets/img/avatar.png'
import { mapGetters } from 'vuex'
// import jobDetail from '@/components/job-detail'
import { formDate, dateByNum } from '@/utils/modules/time'
export default {
  name: 'ZlChat',
  components: {
    // jobDetail
  },
  mixins: [websocketChat],
  props: {
    currentContact: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data() {
    return {
      IMUIRef: null,
      loading: true,
      width: 800, // 默认聊天宽度
      height: 400, // 默认聊天高度
      userData: {}, // 当前发送人
      messageData: {}, // 所有的消息
      pullMessage: {}, // 是否已进行拉取操作
      contractor: {}, // 左侧所有联系人信息
      // 左侧聊天列表
      contractData: [],
      contractTotal: 0,
      param: {
        startTime: '',
        endTime: '',
        current: 1,
        size: 20
      }
    }
  },
  computed: {
    ...mapGetters(['userInfo'])
  },
  created() {
    this.userData.id = this.userInfo.id
    this.userData.avatar = this.userInfo.avatar || avatarImg
    this.userData.displayName = this.userInfo.userName
  },
  mounted() {
    this.renderM()
  },
  deactivated() {
    this.closeConnect()
    this.clearMessages()
  },
  beforeDestroy() {
    this.closeConnect()
    this.clearMessages()
  },
  methods: {
    async loadContact() {
      // 需要为同步代码，保证请求完成之后，调用下一次请求
      if (this.contractTotal > 0 && this.contractTotal > this.contractData.length) {
        this.param.current++
        // await this.reqChatList()
      }
    },
    // 清空当前对话框消息
    clearMessages() {
      this.IMUIRef && this.IMUIRef.clearMessages()
    },
    async handlePullMessages(contact, next) {
      console.log('handlePullMessages', contact)
      if (this.pullMessage[contact.id]) {
        next()
      } else {
        // 自动拉取消息
        await this.reqMsgList(contact)
        next(this.messageData[contact.id], true)
        this.pullMessage[contact.id] = true
      }
    },
    handleChangeContact(contact, vm) {
      console.log('contact', contact)
      if (contact.unread > 0) {
        this.msgRead(contact)
      }
    },
    // 发送消息
    handleSend(message, next, file) {
      console.log('handleSend', message)
      let data = this.formData('send', message)
      let res = this.socketSend(data)
      if (res) {
        next()
      } else {
        next({ status: 'failed' })
      }
    },
    // 处理返回的消息数据
    dealMsg(message) {
      if (this.IMUIRef) {
        if (message.isRead == '1') {
          // TODO 已读消息单独处理，如果有 content 去修改已读数据 如果没有
          if (message.notReadNum == 0 && !message.content) {
            // 处理所有的消息已读  左侧导航栏 所有消息
          } else {
            // 处理单条消息已读
          }
        } else {
          if (message.receiveId == this.userData.id && message.content) {
            let data = this.formData('get', message)
            let arr = this.messageData[message.initiatorId]
            Array.isArray(arr) && arr.length > 0 ? this.messageData[message.initiatorId].push(data) : (this.messageData[message.initiatorId] = [data])
            console.log('data', data)
            this.IMUIRef.appendMessage(data, true)
          }
        }
      }
    },
    formData(type, message) {
      let data = {}
      if (type == 'get') {
        // isCurrent 代表当前人发送的信息
        // 处理后台返回接收的消息
        data.id = message.id || new Date().toISOString()
        data.content = message.content || '----无数据'
        data.sendTime = message.createdTime ? new Date(message.createdTime).getTime() : new Date().getTime()
        data.type = 'text'
        data.status = 'succeed'
        data.fromUser = {}
        data.fromUser.id = message.initiatorId
        data.toContactId = message.receiveId == this.userData.id ? message.initiatorId : message.receiveId // 接收人id
        if (message.initiatorId === this.userData.id) {
          // message.isCurrent === '0' 获取当前发送人的信息 	// 当前人自己发送的信息
          data.fromUser.avatar = this.userData.avatar
          data.fromUser.displayName = this.userData.displayName
        } else {
          // 获取别人发送当前人信息
          let current = this.contractor[message.initiatorId]
          data.fromUser.avatar = current.avatar
          data.fromUser.displayName = current.displayName
        }
        // console.log('message', data.fromUser.id, message)
      } else if (type == 'send') {
        // 前端发送的消息处理
        data = {
          initiatorId: this.userData.id,
          receiveId: message.toContactId,
          type: 'CHARACTERS',
          content: message.content,
          sendTime: new Date().getTime(),
          isRead: '0',
          status: 'going'
        }
      }
      return data
    },
    // 渲染组件布局
    renderM() {
      let chatRef = this.$refs.chatRef
      if (chatRef) {
        this.height = chatRef.offsetHeight < this.height ? this.height : chatRef.offsetHeight
        this.width = chatRef.offsetWidth
        this.loading = false
        this.$nextTick(() => {
          this.IMUIRef = this.$refs.IMUI
          this.IMUIRef.initEmoji(emojiData)
          this.createSocket(this.userData.id)
          // this.reqChatList()
        })
      }
    },
    // 渲染左侧联系人列表
    renderChat() {
      if (this.currentContact && this.currentContact.id != this.userData.id) {
        if (this.contractData.every(v => v.id !== this.currentContact.id)) {
          let item = this.$u.tool._deepClone(this.currentContact)
          item.lastSendTime = new Date().getTime()
          item.lastContent = item.lastContent || '---'
          this.contractor[item.id] = item
          this.contractData.unshift(item)
        }
        this.$nextTick(() => {
          this.IMUIRef.changeContact(this.currentContact.id)
        })
      }
      this.IMUIRef.initContacts(this.contractData)
    },
    // 左侧联系人
    async reqChatList() {
      // 查询30天内联系人
      /*
      this.param.startTime = `${dateByNum('', -30)} 00:00:00`
      this.param.endTime = `${formDate('')} 23:59:59`
      let { responseBody } = await reqChatList(this.param)
      let data = responseBody.records.map(v => {
        let item = {}
        item.index = 'T' // 通讯录索引 目前未使用
        item.id = v.receiveId == this.userData.id ? v.initiatorId : v.receiveId // 接收人id
        item.displayName = v.receiveName
        item.avatar = v.receiveAvatar || avatarImg
        item.unread = v.notReadNum ? parseInt(v.notReadNum) : 0
        item.lastSendTime = new Date(v.createdTime).getTime()
        item.lastContent = v.content || '---'
        item.role = item.receiveRole
        item.age = v.age
        item.working = v.working
        item.education = v.education
        item.jobStatus = v.jobStatus
        this.contractor[item.id] = item
        return item
      })
      this.contractData = this.param.current == 1 ? data : this.contractData.concat(data)
      this.contractTotal = responseBody.total

      this.renderChat()
      */
    },
    // 获取消息列表
    async reqMsgList(contact) {
      let param = {
        initiatorId: this.userData.id,
        receiveId: contact.id
      }
      // let { responseBody } = await reqMsgList(param)
      // console.log('messageData', responseBody)
      // let data = responseBody.map(v => {
      //   return this.formData('get', v)
      // })
      // let arr = this.messageData[contact.id]
      // arr = Array.isArray(arr) && arr.length > 0 ? arr.concat(data) : data
      // this.messageData[contact.id] = data
    },
    // 消息已读
    msgRead(contact) {
      let param = {
        initiatorId: contact.id,
        receiveId: this.userData.id,
        isRead: 1
      }
      this.updateContact(contact.id)
      this.socketSend(param)
    },
    // 更新左侧数据
    updateContact(id) {
      let item = this.contractor[id]
      item.unread = 0
      // this.IMUIRef && this.IMUIRef.updateContact(item)
    }
  }
}
</script>

<style lang="scss" scoped>
.chat_box {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.left_top {
  color: #3d4147;
  padding: 10px 20px;
}
</style>
