import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    userInfo: {
      userId: '',
      userCount: '',
      headPicUrl: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png' // 默认头像
    }
  },
  mutations: {
    SET_LOGIN_STATE (state, isLogin) {
      state.isLogin = isLogin
      sessionStorage.isLogin = isLogin ? 'true' : 'false'
    },
    SET_USER_INFO (state, userInfo) {
      state.userInfo = {...state.userInfo, ...userInfo}
    },
    RESET_USER_INFO (state) {
      state.userInfo = {
        userId: '',
        userCount: '',
        headPicUrl: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png'
      }
    }
  },
  actions: {
    login ({ commit }, userInfo) {
      commit('SET_LOGIN_STATE', true)
      commit('SET_USER_INFO', userInfo)
    },
    logout ({ commit }) {
      commit('SET_LOGIN_STATE', false)
      commit('RESET_USER_INFO')
      sessionStorage.clear()
    }
  }
})
