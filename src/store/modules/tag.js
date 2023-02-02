/**
 * 横向导航栏
 */
import { _decode } from '@/utils/modules/tool' // 引入utils中的所有方法并注册
const tagView = {
  state: {
    defaultTags: [],
    visitedViews: []
  },
  mutations: {
    ADD_VISITED_VIEWS: (state, view) => {
      // 设置noMainRoute true时，不将路由写进tags
      if (view.meta.noMainRoute) return
      let query = view.query ? _decode(view.query) : {}
      let myTitle = ''
      if (Object.keys(query).indexOf('metaTitle') > -1) {
        myTitle = query.metaTitle
      }
      let flag = state.visitedViews.some(v => v.path === view.path)
      if (flag) {
        state.visitedViews = state.visitedViews.map(v => {
          if (v.path == view.path) {
            v.title = myTitle || view.meta.title
            v.query = view.query
          }
          return v
        })
      } else {
        state.visitedViews.push({
          name: view.name,
          path: view.path,
          title: myTitle || view.meta.title,
          query: view.query,
          meta: view.meta
        })
      }
    },
    // if tags > 10 delete first tag
    DEl_FIRST_VIEWS: (state, view) => {
      if (state.visitedViews.length > 10) {
        state.visitedViews.splice(0, 1)
      }
    },
    DEL_VISITED_VIEWS: (state, view) => {
      for (const [i, v] of state.visitedViews.entries()) {
        if (v.path === view.path) {
          state.visitedViews.splice(i, 1)
          break
        }
      }
    },
    DEL_OTHERS_VIEWS: (state, view) => {
      state.visitedViews = state.visitedViews.filter(v => {
        return v.meta.affix || v.path === view.path
      })
    },
    DEL_ALL_VIEWS: state => {
      const affixTags = state.visitedViews.filter(tag => tag.meta.affix)
      state.visitedViews = affixTags
    },
    UPDATE_VISITED_VIEW: (state, view) => {
      for (let v of state.visitedViews) {
        if (v.path === view.path) {
          v = Object.assign(v, view)
          break
        }
      }
    }
  },
  actions: {
    addVisitedViews({ commit }, view) {
      commit('ADD_VISITED_VIEWS', view)
      commit('DEl_FIRST_VIEWS', view)
    },
    delVisitedViews({ commit, state }, view) {
      return new Promise(resolve => {
        commit('DEL_VISITED_VIEWS', view)
        resolve({ visitedViews: [...state.visitedViews] })
      })
    },
    delOthersViews({ commit, state }, view) {
      return new Promise(resolve => {
        commit('DEL_OTHERS_VIEWS', view)
        resolve({ visitedViews: [...state.visitedViews] })
      })
    },
    delAllViews({ commit, state }) {
      return new Promise(resolve => {
        commit('DEL_ALL_VIEWS')
        resolve({ visitedViews: [...state.visitedViews] })
      })
    },
    updateVisitedView({ commit }, view) {
      commit('UPDATE_VISITED_VIEW', view)
    }
  }
}

export default tagView
