import { _getVByLabel } from '@/utils/modules/tool'
// 存放静态数据
const staticData = {
  state: {
    // 客户类别
    categoryList: [
      { value: '1', label: '门店' },
      { value: '2', label: '工厂' }
    ]
  },
  getters: {
    // 客户类别
    getPlanState(state) {
      return val => {
        return _getVByLabel(state.categoryList, val)
      }
    }
  },
  mutations: {},
  actions: {}
}
export default staticData
