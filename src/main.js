// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
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
// use
// import CKEditor from 'ckeditor4-vue'
// import cornerstoneWadoImageLoader from 'cornerstone-wado-image-loader'
// import cornerstoneTools from 'cornerstone-tools'
// import hammer from 'hammerjs'
// import cornerstoneMath from 'cornerstone-math'

// import './assets/iconfont/iconfont.css'
// require('./assets/fontIcon/icon.css')
// require('./assets/cornerstoneToolFont/icon.css')
require('./assets/fonteditor/icon.css')
require('./assets/mycss.css')
require('./assets/animinate.css')

Vue.use(Vuex)
Vue.use(store)
Vue.use(Element)
Vue.use(Router)
// Vue.use(axios)
Vue.prototype.$axios = axios
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
