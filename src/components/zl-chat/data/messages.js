import ContactsData from './contacts'
import UserData from './user'
const generateRandId = () => {
  return Math.random()
    .toString(36)
    .substr(-8)
}
const getContact = id => {
  const data = ContactsData.find(contact => contact.id == id)
  return { id: data.id, avatar: data.avatar, displayName: data.displayName }
}
export default {
  1: [
    {
      id: generateRandId(),
      status: 'succeed',
      type: 'text',
      sendTime: 1566047865417,
      content: '问你件事',
      toContactId: 1,
      fromUser: UserData
    },
    {
      id: generateRandId(),
      status: 'succeed',
      type: 'text',
      sendTime: 1566047865417,
      content: '啥子。',
      toContactId: 1,
      fromUser: getContact(1)
    },
    {
      id: generateRandId(),
      status: 'succeed',
      type: 'text',
      sendTime: 1566047865417,
      content: '为什么',
      toContactId: 1,
      fromUser: UserData
    },
    {
      id: generateRandId(),
      status: 'succeed',
      type: 'text',
      sendTime: 1566047865417,
      content: '你穿了高跟鞋还这么矮',
      toContactId: 1,
      fromUser: UserData
    },
    {
      id: generateRandId(),
      status: 'going',
      type: 'text',
      sendTime: 1566047865417,
      content: '因为我矮啊。[!1f600][!1f600][!1f600]',
      toContactId: 1,
      fromUser: getContact(1)
    },
    {
      id: generateRandId(),
      status: 'failed',
      type: 'text',
      sendTime: 1566047865417,
      content: '你开心吗',
      toContactId: 1,
      fromUser: getContact(1)
    }
  ],
  2: [],
  3: [],
  4: [],
  5: [],
  6: [],
  7: [],
  8: [],
  9: [],
  10: [],
  11: [],
  12: [],
  13: [
    {
      id: generateRandId(),
      status: 'succeed',
      type: 'text',
      sendTime: 1566047865417,
      content: '我是测试时候看到的',
      toContactId: 1,
      fromUser: getContact(4)
    },
    {
      id: generateRandId(),
      status: 'succeed',
      type: 'text',
      sendTime: 1566047865417,
      content: '上新版本了，玩玩',
      toContactId: 1,
      fromUser: getContact(4)
    },
    {
      id: generateRandId(),
      status: 'succeed',
      type: 'text',
      sendTime: 1566047865417,
      content: '项目内没有搞这个',
      toContactId: 1,
      fromUser: getContact(4)
    },
    {
      id: generateRandId(),
      status: 'succeed',
      type: 'text',
      sendTime: 1566047865417,
      content: '@awesome 最新的，不然哪有这功能',
      toContactId: 1,
      fromUser: getContact(5)
    },
    {
      id: generateRandId(),
      status: 'succeed',
      type: 'text',
      sendTime: 1566047865417,
      content: '其实是跟你的遮罩层有冲突',
      toContactId: 1,
      fromUser: getContact(4)
    },
    {
      id: generateRandId(),
      status: 'succeed',
      type: 'text',
      sendTime: 1566047865417,
      content: '自己修改index哈',
      toContactId: 1,
      fromUser: UserData
    },
    {
      id: generateRandId(),
      status: 'succeed',
      type: 'text',
      sendTime: 1566047865417,
      content: '你们升级到最近版了吗？',
      toContactId: 1,
      fromUser: getContact(6)
    },
    {
      id: generateRandId(),
      status: 'succeed',
      type: 'text',
      sendTime: 1566047865417,
      content: 'wo 现在用的142',
      toContactId: 1,
      fromUser: getContact(7)
    }
  ],
  14: [],
  15: [],
  234: []
}
