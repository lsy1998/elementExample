import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/components/login'
import registe from '@/components/registe'
import demo from '@/components/demo'
import newDemo from '@/components/newDemo'
import createPost from '@/components/createPost'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/registe',
      name: 'registe',
      component: registe
    },
    {
      path: '/demo',
      name: 'demo',
      component: demo
    },
    {
      path: '/newDemo',
      name: 'newDemo',
      component: newDemo
    },
    {
      path: '/Post',
      name: 'createPost',
      component: createPost
    }
  ]
})
// 等同于以下代码
// let routes = [
//   {
//     path: '/',
//     name: 'HelloWorld',
//     component: HelloWorld
//   },
//   {
//     path: '/lsy',
//     name: 'lsy',
//     component: hahaha
//   }
// ]

// let router = new Router({
//   routes: routes
// })

// Vue({
//   el: "#app",
//   router: router
// })
