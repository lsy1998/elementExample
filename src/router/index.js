import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/components/login'
import registe from '@/components/registe'
import demo from '@/components/demo'
import newDemo from '@/components/newDemo'
import createPost from '@/components/createPost'
import personalPage from '@/components/personalPage'
import club from '@/components/club'
import index from '@/components/index'
import addInfo from '@/components/addInfo'
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
    },
    {
      path: '/personalPage',
      name: 'personalPage',
      component: personalPage,
      children: [
        {
          path: 'addInfo',
          name: 'addInfo',
          component: addInfo
        }
      ]
    },
    {
      path: '/club',
      name: 'club',
      component: club
    },
    {
      path: '/index',
      name: 'index',
      component: index
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
