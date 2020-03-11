// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import VueDragResize from 'vue-drag-resize'
import mavonEditor from 'mavon-editor'
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
Vue.use(Element)
Vue.component('vue-drag-resize', VueDragResize)
Vue.use(mavonEditor)
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
  components: { App },
  template: '<App/>'
})
