<template>
  <div id="app" style="margin:0px; background-color:white;">
    <el-row id="meun" style="box-shadow:0 2px 1px 1px rgb(228, 228, 228); border-top:2px solid rgb(2, 155, 98)">
      <el-col :span="4" style="color:white;">555</el-col>
      <el-col :span="16">
        <el-menu :default-active="activeIndex2" mode="horizontal" @select="handleSelect" text-color="black"
          active-text-color="black">
          <el-menu-item class="index" index="1" style="border:0;">
            <router-link  style=" text-decoration:none; font-size:16px" to="/index"><span class="meunItem index1" @click="toggleMeunItem($event)" > 首页</span></router-link>
          </el-menu-item>
          <el-menu-item class="viewer"  @click="demo1" index="4" style="border:0;">
            <router-link style=" text-decoration:none; font-size:16px" to="/viewer"> <span class="meunItem viewer1" @click="toggleMeunItem($event)" > 在线处理平台</span></router-link>
          </el-menu-item>
          <el-menu-item class="course" index="3" style="border:0;">
            <router-link  style=" text-decoration:none; font-size:16px" to="/course" > <span class="meunItem course1" @click="toggleMeunItem($event)"> 教程学习</span></router-link>
          </el-menu-item>
          <el-menu-item class="downloadFile" index="9" style="border:0;">
            <router-link class="downloadFile2" style=" text-decoration:none; font-size:16px" to="/downloadResource"><span class="meunItem downloadFile1" @click="toggleMeunItem($event)"> 资源下载</span></router-link>
          </el-menu-item>
          <el-menu-item class="talk" index="10" style="border:0;">
            <router-link style=" text-decoration:none; font-size:16px" to="/newClub"><span class="meunItem talk1" @click="toggleMeunItem($event)"> 社区交流</span></router-link>
          </el-menu-item>
          <!-- <el-menu-item class="talk" index="10" style="border:0;">
            <router-link style=" text-decoration:none; font-size:16px" to="/threeD"><span class="meunItem talk1" @click="toggleMeunItem($event)"> 3D</span></router-link>
            <a href="../static/index.html" title="100素材网" target="_blank">Welcome</a>
          </el-menu-item> -->
          <el-menu-item class="talk" index="10" style="border:0;">
            <span class="meunItem talk1" @click="jump3D"> 3D</span>
          </el-menu-item>
          <!-- <el-menu-item class="talk" index="10" style="border:0;">
            <router-link style=" text-decoration:none; font-size:16px" to="/viewer"><span class="meunItem talk1" @click="toggleMeunItem($event)"> 新查看器</span></router-link>
          </el-menu-item> -->
          <!-- <el-menu-item index="7" style="border:0;">
            <el-autocomplete v-model="state" :fetch-suggestions="querySearchAsync" placeholder="请输入内容"
              @select="handleSelect"></el-autocomplete>
          </el-menu-item> -->
          <el-menu-item index="8" style="border:0;float:right;"  @click="toPersonalPage">
            <template slot="title">
              <el-avatar shape="square" :size="30" :src="this.$store.state.headPicUrl"></el-avatar>
            </template>
          </el-menu-item>
          <el-menu-item index="6" style="border:0;float:right;">
            <el-button style="text-decoration:none;background-color:rgb(2, 155, 98); color:white;">
              <router-link style=" text-decoration:none;  font-size:14px" to="/registe">免费注册</router-link>
            </el-button>
          </el-menu-item>
          <el-menu-item index="5" style="border:0;float:right;">
            <router-link style=" text-decoration:none;  font-size:14px" to="/login">立即登录</router-link>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="4" style="color:white;">sas</el-col>
    </el-row>
    <router-view />
  </div>
</template>
<script>
import $ from 'jquery'
import router from './router'
import md5 from 'js-md5'
export default {
  // store,
  data () {
    return {
      color: '',
      strWindowFeatures: 'width=1000,height=500,menubar=yes,location=yes,resizable=yes,scrollbars=true,status=true',
      activeIndex: '1',
      activeIndex2: '1',
      circleUrl:
        'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
      squareUrl:
        'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
      sizeList: ['medium'],
      state: ''
    }
  },
  methods: {
    jump3D () {
      window.open('../static/index.html', 'B_page', this.strWindowFeatures)
      // window.open('../static/index.html', '_blank')
      // window.location.href = '../static/index.html'
    },
    // toggleMeunItem (e) {
    //   var el = e.currentTarget
    //   $(el).addClass('meunItem1')
    //   $(el).removeClass('meunItem')
    //   $('.meunItem').removeClass('meunItem1')
    //   $(el).addClass('meunItem')
    // },
    toPersonalPage () {
      if (sessionStorage.isLogin !== 'true') {
        alert('请先登录！')
        this.$router.push({path: '/login'})
      } else {
        this.$router.push({path: '/personalPage'})
      }
      // alert(111)
    },
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    demo1 () {
      // var _this = this 25f9e794323b453885f5181f1b624d0b
      console.log('click')
      // $('#meun').hide()
      // _this._data.color = '#323232'
      // $('menu').css('background-color', 'rgb(50, 50, 50)')
      // if ($('#demo1').click()) {
      //   console.log('click')
      // }
    },
    querySearchAsync () {

    }
  },
  mounted () {
    sessionStorage.isLogin = false
    router.push({ path: '/index' })
    $('body').css('background-color', 'white')
    console.log(md5(`${111}545464`))
    // if ($('#demo1').click()) {
    //   console.log('click')
    // }
  },
  watch: {
    $route (to) {
      console.log(to)
      // if (to.path.indexOf('index') != -1) {
      //   // 路由变化后重新获取帖子列表
      //   this.$http.get('/api/communityList').then((res) => {
      //     if (res.data.errCode === 0) {
      //       let getRes = res.data.data.hotList
      //       this.postList = getRes
      //     }
      //   })
      // }
      if (to.name === 'newDemo' || to.name === 'viewer') {
        $('#meun').hide()
      } else {
        $('#meun').show()
      }
      if (to.matched[0].name === 'downloadResource') {
        // console.log('dbajd')
        // $('.meunItem').addClass('meunItem2')
        // $('#downloadFile').removeClass('meunItem1')
        // $('.meunItem').removeClass('meunItem1')
        // $('.downloadFile1').addClass('meunItem3')
        // $('#downloadFile').addClass('meunItem')
        // $('.downloadFile').click()
        // $('.downloadFile1').click()
        // $('.downloadFile2').click()
        // var el = e.currentTarget
        $('.downloadFile1').addClass('meunItem1')
        $('.downloadFile1').removeClass('meunItem')
        $('.meunItem').removeClass('meunItem1')
        $('.downloadFile1').addClass('meunItem')
      }
      if (to.matched[0].name === 'index') {
        $('.index1').addClass('meunItem1')
        $('.index1').removeClass('meunItem')
        $('.meunItem').removeClass('meunItem1')
        $('.index1').addClass('meunItem')
        // $('#index').addClass('meunItem1')
        // $('#index').removeClass('meunItem')
        // $('.meunItem').removeClass('meunItem1')
        // $('.meunItem').addClass('meunItem2')
        // $('#index').addClass('meunItem')
        // $('.index').click()
      }
      if (to.matched[0].name === 'newClub') {
        $('.talk1').addClass('meunItem1')
        $('.talk1').removeClass('meunItem')
        $('.meunItem').removeClass('meunItem1')
        $('.talk1').addClass('meunItem')
        // $('#talk').addClass('meunItem1')
        // $('#talk').removeClass('meunItem')
        // $('.meunItem').removeClass('meunItem1')
        // $('.meunItem').addClass('meunItem2')
        // $('#talk').addClass('meunItem')
        // $('.talk').click()
      }
      if (to.matched[0].name === 'newDemo') {
        $('.viewer1').addClass('meunItem1')
        $('.viewer1').removeClass('meunItem')
        $('.meunItem').removeClass('meunItem1')
        $('.viewer1').addClass('meunItem')
        // $('#viewer').addClass('meunItem1')
        // $('#viewer').removeClass('meunItem')
        // $('.meunItem').removeClass('meunItem1')
        // $('.meunItem').addClass('meunItem2')
        // $('#viewer').addClass('meunItem')
        // $('.viewer').click()
      }
      if (to.matched[0].name === 'course') {
        $('.course1').addClass('meunItem1')
        $('.course1').removeClass('meunItem')
        $('.meunItem').removeClass('meunItem1')
        $('.course1').addClass('meunItem')
        // $('#course').addClass('meunItem1')
        // $('#course').removeClass('meunItem')
        // $('.meunItem').removeClass('meunItem1')
        // $('.meunItem').addClass('meunItem2')
        // $('#course').addClass('meunItem')
        // $('.course').click()
      }
    }
  }
}
</script>

<style scope>
@keyframes mymove {
  from{font-size:16px;}
  to{font-size:20px;}
}
.meunItem1 {
  animation: mymove 0.5s;
  font-size:20px;
  color:rgb(2, 155, 98)
}
.meunItem3 {
  font-size:20px;
  color:rgb(2, 155, 98)
}
.meunItem2 {
  /* animation: mymove 0.5s;
  font-size:20px; */
  font-size:16px;
  color:black
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.el-menu--popup {
  width: 100px;
}
</style>
