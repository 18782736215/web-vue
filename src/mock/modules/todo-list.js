const Mock = require('mockjs')

const TODO_List = [
  {
    key: 'admin',
    name: 'admin',
    description: 'Super Administrator. Have access to view all pages.'
  },
  {
    key: 'editor',
    name: 'editor',
    description: 'Normal Editor. Can see all pages except permission page'
  },
  {
    key: 'visitor',
    name: 'visitor',
    description: 'Just a visitor. Can only see the home page and the document page'
  }
]

module.exports = [
  // mock get all TODO_List form server
  {
    url: '/web-vue2-service/getTodoList',
    type: 'get',
    response: _ => {
      return {
        code: 0,
        data: TODO_List
      }
    }
  }
]
