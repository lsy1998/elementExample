// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import md5 from 'js-md5'
import Vuex from 'vuex'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import Router from 'vue-router'
// import routes from './router.js'
import router from './router'
import store from './store'
import VueDragResize from 'vue-drag-resize'
import mavonEditor from 'mavon-editor'
// import $ from 'jquery'
import axios from 'axios'
import 'mavon-editor/dist/css/index.css'
// import '../static/dist/prism1.css'
import './assets/css/prism.css'
import cookies from 'vue-cookies'
import HighchartsVue from 'highcharts-vue'

require('./assets/fonteditor/icon.css')
require('./assets/mycss.css')
require('./assets/animinate.css')

// 配置 axios
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
axios.interceptors.request.use(
  config => {
    if (config.method === 'post') {
      config.data = JSON.stringify(config.data)
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

Vue.use(Vuex)
Vue.use(store)
Vue.use(Element)
Vue.use(Router)
Vue.use(HighchartsVue)
// Vue.use(axios)
Vue.prototype.$md5 = md5
Vue.prototype.$axios = axios
Vue.prototype.$cookies = cookies
// Vue.use($)
Vue.component('vue-drag-resize', VueDragResize)
Vue.use(mavonEditor)

const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
// Vue.use(CKEditor)
// Vue.use(cornerstoneTools)
// Vue.use(hammer)
// Vue.use(cornerstoneMath)
// Vue.use(cornerstoneWadoImageLoader)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
