/**
 * websocket 连接 接收 发送消息
 * 使用页面 聊天页面
 * readyState
 * 0 正在链接中
 * 1 已经链接并且可以通讯
 * 2 连接正在关闭
 * 3 连接已关闭或者没有链接成功
 *
 */
const connectUrl = process.env.NODE_ENV === 'production' ? 'ws://192.168.233.5:5001/webSocket/' : 'ws://192.168.233.5:5001/webSocket/'
export default {
  data() {
    return {
      connectUrl: connectUrl, // 测试服 websocket 链接地址
      socket: null, // 创建的连接
      lockReconnect: false, // 避免重复连接
      checkId: '', // 检测连接id是否存在
      times: 0 // 重连次数 超过2次关闭连接
    }
  },
  methods: {
    // 构建webSocket连接 id 连接的id
    createSocket(id) {
      this.checkId = id
      let url = this.connectUrl + id
      try {
        if ('WebSocket' in window) {
          this.socket = new WebSocket(url)
        } else if ('MozWebSocket' in window) {
          // eslint-disable-next-line no-undef
          this.socket = new MozWebSocket(url)
        }
        this.initSocket()
      } catch (e) {
        console.error(e)
        this.reconnect()
      }
    },
    // 初始化 websocket
    initSocket() {
      this.socket.onopen = () => {
        console.log('socket连接成功', this.connectUrl + this.checkId)
        // heartCheck.reset().start()//TODO 心跳检测
      }
      this.socket.onmessage = ev => {
        // 接收服务端返回的消息
        console.log(ev, '连接正常')
        if (ev.data) {
          try {
            this.dealMsg(JSON.parse(ev.data))
          } catch (error) {
            console.error('接收消息处理错误', error)
          }
        }
        // heartCheck.reset().start() //TODO 心跳检测
      }

      this.socket.onerror = () => {
        console.error('websocket服务出错了---onerror')
        this.reconnect()
      }

      this.socket.onclose = () => {
        console.error('websocket服务关闭了+++onclose')
        this.reconnect()
      }
    },
    /**
     *
     * @param {String} data  发送的消息体 字符串
     * @param {*} callback 连接成功的回调函数
     */
    socketSend(data, callback) {
      // console.log('this.socket', this.socket)
      if (this.socket && this.socket.readyState == 1) {
        let param = typeof data === 'string' ? data : JSON.stringify(data)
        console.log('发送消息', param)
        this.socket.send(param)
        // this.socket.onmessage = ev => {
        //   // 接口返回的消息
        //   console.log('发送成功', ev)
        //   callback && callback()
        // }
        return true
      } else {
        this.$zlMessage.error('连接服务器失败, 请重试')
        return false
      }
    },

    // 重连 websocket
    reconnect() {
      if (this.times != 0) {
        this.closeConnect()
        return false
      }
      if (!this.checkId) return false
      // 重新连接 websocket 函数
      if (this.lockReconnect) return false

      this.lockReconnect = true

      setTimeout(() => {
        this.times++
        this.createSocket(this.checkId)
        this.lockReconnect = false
      }, 2000)
    },
    // 关闭 webSocket 连接
    closeConnect() {
      console.error('websocket 已关闭重连')
      this.socket && this.socket.close()
      this.socket = null
    }
  }
}
