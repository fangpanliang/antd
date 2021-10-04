import io from 'socket.io-client'

// ('127.0.0.1', 9999)
// 创建socket连接，http使用ws协议，https使用wss协议
const socket = io('wss://www.dubo.world', {
      reconnectionAttempts: 10,
      query: {
           uid: this.state.user.uid
      }
})

// 发送消息
socket.emit('CHAT_SEND', {}, {})

// 接收消息
socket.on('CHAT_RES', res => {
       // res返回格式有前后端自己协定
       if (res.status === 200) {
           console.log(res)
       }
 })
