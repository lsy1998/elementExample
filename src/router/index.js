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
import otherInfo from '@/components/otherInfo'
// import teach from '@/components/teach'
import canny from '@/components/teach/canny'
import Laplacian from '@/components/teach/Laplacian'
import OTSU from '@/components/teach/OTSU'
import regionGrow from '@/components/teach/regionGrow'
import zjl from '@/components/teach/zjl'
import bilinearInterpolation from '@/components/teach/bilinearInterpolation'
import histogram from '@/components/teach/histogram'
import downloadResource from '@/components/downloadResource'
import course from '@/components/course'
import zjlCourse from '@/components/introduce/zjlCourse'
import bilinearInterpolationCourse from '@/components/introduce/bilinearInterpolationCourse'
import cannyCourse from '@/components/introduce/cannyCourse'
import LaplacianCourse from '@/components/introduce/LaplacianCourse'
import OTSUCourse from '@/components/introduce/OTSUCourse'
import regionGrowCourse from '@/components/introduce/regionGrowCourse'
import histogramCourse from '@/components/introduce/histogramCourse'
import viewer from '@/components/viewer'
import threeD from '@/components/threeD'
import histogramJhhCourse from '@/components/introduce/histogramJhhCourse'
import histogramGdhCourse from '@/components/introduce/histogramGdhCourse'
import laplaceJztCourse from '@/components/introduce/laplaceJztCourse'
import smallWaveCourse from '@/components/introduce/smallWaveCourse'
import SSDACourse from '@/components/introduce/SSDACourse'
import FlyCourse from '@/components/introduce/FlyCourse'
import RCCourse from '@/components/introduce/RCCourse'
import MCCourse from '@/components/introduce/MCCourse'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/threeD',
      name: 'threeD',
      component: threeD
    },
    {
      path: '/viewer',
      name: 'viewer',
      component: viewer
    },
    {
      path: '/course',
      name: 'course',
      component: course,
      children: [
        {
          path: 'zjlCourse',
          name: 'zjlCourse',
          component: zjlCourse
        },
        {
          path: 'RCCourse',
          name: 'RCCourse',
          component: RCCourse
        },
        {
          path: 'MCCourse',
          name: 'MCCourse',
          component: MCCourse
        },
        {
          path: 'FlyCourse',
          name: 'FlyCourse',
          component: FlyCourse
        },
        {
          path: 'SSDACourse',
          name: 'SSDACourse',
          component: SSDACourse
        },
        {
          path: 'smallWaveCourse',
          name: 'smallWaveCourse',
          component: smallWaveCourse
        },
        {
          path: 'laplaceJztCourse',
          name: 'laplaceJztCourse',
          component: laplaceJztCourse
        },
        {
          path: 'histogramJhhCourse',
          name: 'histogramJhhCourse',
          component: histogramJhhCourse
        },
        {
          path: 'histogramGdhCourse',
          name: 'histogramGdhCourse',
          component: histogramGdhCourse
        },
        {
          path: 'histogramCourse',
          name: 'histogramCourse',
          component: histogramCourse
        },
        {
          path: 'regionGrowCourse',
          name: 'regionGrowCourse',
          component: regionGrowCourse
        },
        {
          path: 'OTSUCourse',
          name: 'OTSUCourse',
          component: OTSUCourse
        },
        {
          path: 'LaplacianCourse',
          name: 'LaplacianCourse',
          component: LaplacianCourse
        },
        {
          path: 'cannyCourse',
          name: 'cannyCourse',
          component: cannyCourse
        },
        {
          path: 'bilinearInterpolationCourse',
          name: 'bilinearInterpolationCourse',
          component: bilinearInterpolationCourse
        }
      ]
    },
    {
      path: '/downloadResource',
      name: 'downloadResource',
      component: downloadResource,
      children: [
        {
          path: 'downloadFileList',
          name: 'downloadFileList',
          component: downloadFileList
        }
      // {
      //   path: 'otherInfo',
      //   name: 'otherInfo',
      //   component: otherInfo
      // },
      ]
    },
    {
      path: '/histogram',
      name: 'histogram',
      component: histogram
    },
    {
      path: '/canny',
      name: 'canny',
      component: canny
    },
    {
      path: '/bilinearInterpolation',
      name: 'bilinearInterpolation',
      component: bilinearInterpolation
    },
    {
      path: '/regionGrow',
      name: 'regionGrow',
      component: regionGrow
    },
    {
      path: '/OTSU',
      name: 'OTSU',
      component: OTSU
    },
    {
      path: '/Laplacian',
      name: 'Laplacian',
      component: Laplacian
    },
    {
      path: '/zjl',
      name: 'zjl',
      component: zjl
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
      path: '/personalPage/:userId?',
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
      path: '/showPost/:postId',
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
          path: 'otherInfo',
          name: 'otherInfo',
          component: otherInfo
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
