import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/components/login'
import registe from '@/components/registe'
import demo from '@/components/demo'
import newDemo from '@/components/newDemo'
import createPost from '@/components/createPost'
import personalPage from '@/components/personalPage'
// import club from '@/components/club'
import index from '@/components/index'
import addInfo from '@/components/addInfo'
import marked from '@/components/marked'
import showPost from '@/components/showPost'
import changePassword from '@/components/changePassword'
import dicomList from '@/components/dicomList'
import changePersonalInfo from '@/components/changePersonalInfo'
import fileList from '@/components/fileList'
import myPost from '@/components/myPost'
import newClub from '@/components/newClub'
import clubNewPost from '@/components/clubNewPost'
import downloadFileList from '@/components/downloadFileList'
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
      component: newDemo,
      children: [
      ]
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
        },
        {
          path: 'fileList',
          name: 'fileList',
          component: fileList
        },
        {
          path: 'myPost',
          name: 'myPost',
          component: myPost
        },
        {
          path: 'changePersonalInfo',
          name: 'changePersonalInfo',
          component: changePersonalInfo
        }
      ]
    },
    // {
    //   path: 'club',
    //   name: 'club',
    //   component: club
    // },
    {
      path: '/marked',
      name: 'marked',
      component: marked
    },
    {
      path: '/showPost',
      name: 'showPost',
      component: showPost
    },
    {
      path: '/changePassword',
      name: 'changePassword',
      component: changePassword
    },
    {
      path: '/newClub',
      name: 'newClub',
      component: newClub,
      children: [
        {
          path: 'clubNewPost',
          name: 'clubNewPost',
          component: clubNewPost
        },
        {
          path: 'downloadFileList',
          name: 'downloadFileList',
          component: downloadFileList
        }
      ]
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/dicomList',
      name: 'dicomList',
      component: dicomList
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
