import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    baseUrl: 'http://localhost:8082/',
    headPicUrl: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png'
  },
  mutations: {
    changeBaseUrl (state, n) {
      state.baseUrl = state.baseUrl + n
    },
    changeHeadPicUrl (state, n) {
      state.headPicUrl = n
    }
  },
  actions: {
    commitBaseUrl (context, n) {
      context.commit('changeBaseUrl', n)
    },
    commitHeadPicUrl (context, n) {
      context.commit('changeHeadPicUrl', n)
    }
  }
})

export default store
