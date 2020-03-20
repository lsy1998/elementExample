import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    baseUrl: 'http://localhost:8082/',
    headPicUrl: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
    userName: '',
    userSchool: '',
    userJob: '',
    userCompany: ''
  },
  mutations: {
    changeBaseUrl (state, n) {
      state.baseUrl = state.baseUrl + n
    },
    changeHeadPicUrl (state, n) {
      state.headPicUrl = n
    },
    changeUserName (state, n) {
      state.userName = n
    },
    changeUserSchool (state, n) {
      state.userSchool = n
    },
    changeUserJob (state, n) {
      state.userJob = n
    },
    changeUserCompany (state, n) {
      state.userCompany = n
    }
  },
  actions: {
    commitBaseUrl (context, n) {
      context.commit('changeBaseUrl', n)
    },
    commitHeadPicUrl (context, n) {
      context.commit('changeHeadPicUrl', n)
    },
    commitUserName (context, n) {
      context.commit('changeUserName', n)
    },
    commitUserSchool (context, n) {
      context.commit('changeUserSchool', n)
    },
    commitUserJob (context, n) {
      context.commit('changeUserJob', n)
    },
    commitUserCompany (context, n) {
      context.commit('changeUserCompany', n)
    }
  }
})

export default store
