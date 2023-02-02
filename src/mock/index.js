/**
 * mock 模拟api请求数据
 * 由于本地当前的引入，是由vue.config.js引入的，所有在本地运行项目，新加请求接口，需要重新运行一下项目才会生效
 */
const Mock = require('mockjs')
const { _param2Obj } = require('./utils')

const todoList = require('./modules/todo-list.js')
const login = require('./modules/login.js')

const mocks = [...todoList, ...login]

// for front mock
// please use it cautiously, it will redefine XMLHttpRequest,
// which will cause many of your third-party libraries to be invalidated(like progress event).
function mockXHR() {
  // mock patch
  // https://github.com/nuysoft/Mock/issues/300
  Mock.XHR.prototype.proxy_send = Mock.XHR.prototype.send
  Mock.XHR.prototype.send = function() {
    if (this.custom.xhr) {
      this.custom.xhr.withCredentials = this.withCredentials || false

      if (this.responseType) {
        this.custom.xhr.responseType = this.responseType
      }
    }
    this.proxy_send(...arguments)
  }

  function XHR2ExpressReqWrap(respond) {
    return function(options) {
      let result = null
      if (respond instanceof Function) {
        const { body, type, url } = options
        console.log(body)
        // https://expressjs.com/en/4x/api.html#req
        result = respond({
          method: type,
          body: body,
          query: _param2Obj(url)
        })
      } else {
        result = respond
      }
      return Mock.mock(result)
    }
  }

  for (const i of mocks) {
    Mock.mock(new RegExp(i.url), i.type || 'get', XHR2ExpressReqWrap(i.response))
  }
}

module.exports = {
  mocks,
  mockXHR
}
