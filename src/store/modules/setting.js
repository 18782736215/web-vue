const setting = {
  state: {
    // 配置是否展开左侧菜单栏
    sidebar: {
      open: true
    },
    // 所有的 'header', 'topMenu', 'topNav', 'leftMenu'
    layoutList: [] // 默认布局展示，根据项目需求配置
  },
  getters: {
    sidebar: state => state.sidebar
  },
  mutations: {
    // 设置布局
    SET_LAYOUT: (state, view) => {
      state.layoutList = view
    },
    TOGGLE_SIDEBAR: state => {
      state.sidebar.open = !state.sidebar.open
    }
  },
  actions: {
    toggleSideBar({ commit }) {
      commit('TOGGLE_SIDEBAR')
    }
  }
}
export default setting
