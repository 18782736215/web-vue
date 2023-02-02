// 防照后端数据接口

const user = {
  name: 'abcdefg'
}

let data1 = Array(150).fill(user)
let data2 = []

export const infiniteMethod1 = param => {
  let list = []
  list = data1.slice(param.current * param.size - param.size, param.current * param.size)

  let result = {
    code: 0,
    responseBody: {
      records: list,
      total: data1.length
    }
  }
  return result
}

export const infiniteMethod2 = param => {
  let list = []
  list = data2.slice(param.current * param.size - param.size, param.current * param.size)

  let result = {
    code: 0,
    responseBody: {
      records: list,
      total: data2.length
    }
  }
  return result
}
