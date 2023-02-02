const data = [
  { id: 1, no: '1', text: 'Task #1', roleName: '123', ownerName: 'test', start_date: new Date(2022, 0, 9, 22, 19, 35), end_date: new Date(), duration: 3, progress: 0.6 },
  { id: 2, no: '2', text: 'Task #2', roleName: '123456', ownerName: 'test', start_date: new Date(2022, 0, 8, 22, 19, 35), end_date: new Date(), duration: 3, progress: 0.4 },
  { id: 3, no: '3', text: 'Task #3', roleName: '123456', ownerName: 'test', start_date: new Date(2022, 0, 7, 22, 19, 35), end_date: new Date(), duration: 3, progress: 0.4 },
  { id: 4, parent: '3', no: '4', text: 'Task #4', roleName: '123456', ownerName: 'test', start_date: new Date(2022, 0, 6, 22, 19, 35), end_date: new Date(), duration: 3, progress: 0.4 },
  { id: 5, parent: '4', no: '5', text: 'Task #5', roleName: '123456', ownerName: 'test', start_date: new Date(2022, 0, 8, 22, 19, 35), end_date: new Date(), duration: 3, progress: 0.4 },
  { id: 6, no: '6', text: 'Task #6', roleName: '123456', ownerName: 'test', start_date: new Date(2022, 0, 8, 22, 19, 35), end_date: new Date(), duration: 3, progress: 0.4 },
  { id: 7, no: '7', text: 'Task #7', roleName: '123456', ownerName: 'test', start_date: new Date(2022, 0, 8, 22, 19, 35), end_date: new Date(), duration: 3, progress: 0.4 },
  { id: 8, no: '8', text: 'Task #8', roleName: '123456', ownerName: 'test', start_date: new Date(2022, 0, 8, 22, 19, 35), end_date: new Date(), duration: 3, progress: 0.4 },
  { id: 9, no: '9', text: 'Task #9', roleName: '123456', ownerName: 'test', start_date: new Date(2022, 0, 8, 22, 19, 35), end_date: new Date(), duration: 3, progress: 0.4 },
  { id: 10, no: '10', text: 'Task #10', roleName: '123456', ownerName: 'test', start_date: new Date(2022, 0, 8, 22, 19, 35), end_date: new Date(2022, 0, 10, 22, 19, 35), duration: 3, progress: 0.4 },
  { id: 11, no: '11', text: 'Task #11', roleName: '123456', ownerName: 'test', start_date: new Date(2022, 0, 8, 22, 19, 35), end_date: new Date(), duration: 3, progress: 0.4 },
  { id: 12, no: '12', text: 'Task #12', roleName: '123456', ownerName: 'test', start_date: new Date(2022, 0, 9, 22, 19, 35), end_date: new Date(), duration: 3, progress: 0.4 },
  { id: 13, no: '13', text: 'Task #13', roleName: '123456', ownerName: 'test', start_date: new Date(2022, 0, 8, 22, 19, 35), end_date: new Date(), duration: 3, progress: 0.4 },
  { id: 14, no: '14', text: 'Task #14', roleName: '123456', ownerName: 'test', start_date: new Date(2022, 0, 8, 22, 19, 35), end_date: new Date(), duration: 3, progress: 0.4 },
  { id: 15, no: '15', text: 'Task #15', roleName: '123456', ownerName: 'test', start_date: new Date(2022, 0, 8, 22, 19, 35), end_date: new Date(), duration: 3, progress: 0.4 },
  { id: 16, no: '16', text: 'Task #16', roleName: '123456', ownerName: 'test', start_date: new Date(2022, 0, 8, 22, 19, 35), end_date: new Date(), duration: 3, progress: 0.4 },
  { id: 17, no: '17', text: 'Task #17', roleName: '123456', ownerName: 'test', start_date: new Date(2022, 0, 8, 22, 19, 35), end_date: new Date(), duration: 3, progress: 0.4 },
  { id: 18, no: '18', text: 'Task #18', roleName: '123456', ownerName: 'test', start_date: new Date(2022, 0, 8, 22, 19, 35), end_date: new Date(), duration: 3, progress: 0.4 },
  { id: 19, no: '19', text: 'Task #19', roleName: '123456', ownerName: 'test', start_date: new Date(2022, 0, 10, 22, 19, 35), end_date: new Date(), duration: 3, progress: 0.4 },
  { id: 20, no: '20', text: 'Task #20', roleName: '123456', ownerName: 'test', start_date: new Date(2022, 0, 8, 22, 19, 35), end_date: new Date(), duration: 3, progress: 0.4 },
  { id: 21, no: '21', text: 'Task #21', roleName: '123456', ownerName: 'test', start_date: new Date(2022, 0, 7, 22, 19, 35), end_date: new Date(), duration: 3, progress: 0.4 },
  { id: 22, no: '22', text: 'Task #22', roleName: '123456', ownerName: 'test', start_date: new Date(2022, 0, 8, 22, 19, 35), end_date: new Date(), duration: 3, progress: 0.4 },
  { id: 23, no: '23', text: 'Task #23', roleName: '123456', ownerName: 'test', start_date: new Date(2022, 0, 8, 22, 19, 35), end_date: new Date(), duration: 3, progress: 0.4 },
  { id: 24, no: '24', text: 'Task #24', roleName: '123456', ownerName: 'test', start_date: new Date(2022, 0, 12, 22, 19, 35), end_date: new Date(), duration: 3, progress: 0.4 },
  { id: 25, no: '25', text: 'Task #25', roleName: '123456', ownerName: 'test', start_date: new Date(2022, 0, 8, 22, 19, 35), end_date: new Date(), duration: 3, progress: 0.4 },
  { id: 26, no: '26', text: 'Task #26', roleName: '123456', ownerName: 'test', start_date: new Date(2022, 0, 8, 22, 19, 35), end_date: new Date(), duration: 3, progress: 0.4 },
  { id: 27, no: '27', text: 'Task #27', roleName: '123456', ownerName: 'test', start_date: new Date(2022, 0, 8, 22, 19, 35), end_date: new Date(), duration: 3, progress: 0.4 },
  { id: 28, no: '28', text: 'Task #28', roleName: '123456', ownerName: 'test', start_date: new Date(2022, 0, 8, 22, 19, 35), end_date: new Date(2022, 0, 10, 22, 19, 35), duration: 3, progress: 0.4 },
  { id: 29, no: '29', text: 'Task #29', roleName: '123456', ownerName: 'test', start_date: new Date(2022, 0, 8, 22, 19, 35), end_date: new Date(), duration: 3, progress: 0.4 },
  { id: 30, no: '30', text: 'Task #30', roleName: '123456', ownerName: 'test', start_date: new Date(2022, 0, 8, 22, 19, 35), end_date: new Date(), duration: 3, progress: 0.4 },
  { id: 31, no: '31', text: 'Task #31', roleName: '123456', ownerName: 'test', start_date: new Date(2022, 0, 8, 22, 19, 35), end_date: new Date(), duration: 3, progress: 0.4 },
  { id: 32, no: '32', text: 'Task #32', roleName: '123456', ownerName: 'test', start_date: new Date(2022, 0, 8, 22, 19, 35), end_date: new Date(), duration: 3, progress: 0.4 },
  { id: 33, no: '33', text: 'Task #33', roleName: '123456', ownerName: 'test', start_date: new Date(2022, 0, 12, 22, 19, 35), end_date: new Date(2022, 0, 11, 22, 19, 35), duration: 3, progress: 0.4 },
  { id: 34, no: '34', text: 'Task #34', roleName: '123456', ownerName: 'test', start_date: new Date(2022, 0, 8, 22, 19, 35), end_date: new Date(), duration: 3, progress: 0.4 },
  { id: 35, no: '35', text: 'Task #35', roleName: '123456', ownerName: 'test', start_date: new Date(2022, 0, 8, 22, 19, 35), end_date: new Date(), duration: 3, progress: 0.4 },
  { id: 36, no: '36', text: 'Task #36', roleName: '123456', ownerName: 'test', start_date: new Date(2022, 0, 5, 22, 19, 35), end_date: new Date(), duration: 3, progress: 0.4 },
  { id: 37, no: '37', text: 'Task #37', roleName: '123456', ownerName: 'test', start_date: new Date(2022, 0, 8, 22, 19, 35), end_date: new Date(), duration: 3, progress: 0.4 },
  { id: 38, no: '38', text: 'Task #38', roleName: '123456', ownerName: 'test', start_date: new Date(2022, 0, 8, 22, 19, 35), end_date: new Date(), duration: 3, progress: 0.4 },
  { id: 39, no: '39', text: 'Task #39', roleName: '123456', ownerName: 'test', start_date: new Date(2022, 0, 8, 22, 19, 35), end_date: new Date(), duration: 3, progress: 0.4 },
  { id: 40, no: '40', text: 'Task #40', roleName: '123456', ownerName: 'test', start_date: new Date(2022, 0, 8, 22, 19, 35), end_date: new Date(2023, 1, 10, 22, 19, 35), duration: 3, progress: 0.4 },
  { id: 41, no: '41', text: 'Task #41', roleName: '123456', ownerName: 'test', start_date: new Date(2022, 0, 8, 22, 19, 35), end_date: new Date(), duration: 3, progress: 0.4 },
  { id: 42, no: '42', text: 'Task #42', roleName: '123456', ownerName: 'test', start_date: new Date(2022, 0, 6, 22, 19, 35), end_date: new Date(), duration: 3, progress: 0.4 },
  { id: 43, no: '43', text: 'Task #43', roleName: '123456', ownerName: 'test', start_date: new Date(2022, 0, 8, 22, 19, 35), end_date: new Date(), duration: 3, progress: 0.4 },
  { id: 44, no: '44', text: 'Task #44', roleName: '123456', ownerName: 'test', start_date: new Date(2022, 0, 5, 22, 19, 35), end_date: new Date(), duration: 3, progress: 0.4 },
  { id: 45, no: '45', text: 'Task #45', roleName: '123456', ownerName: 'test', start_date: new Date(2022, 0, 8, 22, 19, 35), end_date: new Date(), duration: 3, progress: 0.4 }
]

export const reqGantt = params => {
  let res = {}
  let currentSize = (params.current - 1) * params.size
  let list = data.slice(currentSize, currentSize + params.size + 1)
  res = {
    code: 0,
    responseBody: {
      records: list,
      total: data.length
    }
  }
  return new Promise((resolve, reject) => {
    if (res.code == 0) {
      resolve(res)
    } else {
      reject()
    }
  })
}
