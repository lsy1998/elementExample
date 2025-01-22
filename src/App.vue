/* eslint-disable */
<template>
  <div id="app" style="margin:0px; background-color:white;">
    <el-row id="meun" style="box-shadow:0 2px 1px 1px rgb(228, 228, 228); border-top:2px solid rgb(2, 155, 98)">
      <el-col :span="4" style="color:white;">555</el-col>
      <el-col :span="16">
        <el-menu :default-active="activeIndex2" mode="horizontal" @select="handleSelect" text-color="black"
          active-text-color="black">
          <el-menu-item class="index" index="1" style="border:0;">
            <router-link  style=" text-decoration:none; font-size:16px" to="/index"><span class="meunItem index1"  > 首页</span></router-link>
          </el-menu-item>
          <el-menu-item class="viewer"  @click="demo1" index="4" style="border:0;">
            <router-link style=" text-decoration:none; font-size:16px" to="/viewer"> <span class="meunItem viewer1"  > 在线处理平台</span></router-link>
          </el-menu-item>
          <el-menu-item class="course" index="3" style="border:0;">
            <router-link  style=" text-decoration:none; font-size:16px" to="/course" > <span class="meunItem course1" > 教程学习</span></router-link>
          </el-menu-item>
          <el-menu-item class="downloadFile" index="9" style="border:0;">
            <router-link class="downloadFile2" style=" text-decoration:none; font-size:16px" to="/downloadResource"><span class="meunItem downloadFile1" > 资源下载</span></router-link>
          </el-menu-item>
          <el-menu-item class="talk" index="10" style="border:0;">
            <router-link style=" text-decoration:none; font-size:16px" to="/newClub"><span class="meunItem talk1" > 社区交流</span></router-link>
          </el-menu-item>
          <!-- <el-menu-item class="talk" index="10" style="border:0;">
            <router-link style=" text-decoration:none; font-size:16px" to="/threeD"><span class="meunItem talk1" > 3D</span></router-link>
            <a href="../static/index.html" title="100素材网" target="_blank">Welcome</a>
          </el-menu-item> -->
          <el-menu-item class="talk" index="10" style="border:0;">
            <span class="meunItem talk1" @click="jump3D"> 3D</span>
          </el-menu-item>
          <!-- <el-menu-item class="talk" index="10" style="border:0;">
            <router-link style=" text-decoration:none; font-size:16px" to="/viewer"><span class="meunItem talk1" > 新查看器</span></router-link>
          </el-menu-item> -->
          <!-- <el-menu-item index="7" style="border:0;">
            <el-autocomplete v-model="state" :fetch-suggestions="querySearchAsync" placeholder="请输入内容"
              @select="handleSelect"></el-autocomplete>
          </el-menu-item> -->
          <el-menu-item index="8" style="border:0;float:right;">
            <el-dropdown v-if="$store.state.isLogin" @command="handleCommand" trigger="hover">
              <span class="el-dropdown-link">
                <el-avatar shape="square" :size="30" :src="$store.state.userInfo.headPicUrl"></el-avatar>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="personal">个人中心</el-dropdown-item>
                <el-dropdown-item command="logout">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <el-avatar v-else shape="square" :size="30" :src="$store.state.userInfo.headPicUrl"></el-avatar>
          </el-menu-item>
          <el-menu-item index="6" style="border:0;float:right;" v-if="!$store.state.isLogin">
            <el-button style="text-decoration:none;background-color:rgb(2, 155, 98); color:white;">
              <router-link style="text-decoration:none; font-size:14px" to="/registe">免费注册</router-link>
            </el-button>
          </el-menu-item>
          <el-menu-item index="5" style="border:0;float:right;" v-if="!$store.state.isLogin">
            <router-link style="text-decoration:none; font-size:14px" to="/login">立即登录</router-link>
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
      state: '',
      isLogin: false
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
        this.$message.error('请先登录！')
        this.$router.push({path: '/login'})
      } else {
        this.$router.push(`/personalPage/${sessionStorage.userId}/myPost`)
      }
    },
    handleSelect (key, keyPath) {

    },
    demo1 () {
    },
    querySearchAsync () {

    },
    handleCommand (command) {
      if (command === 'logout') {
        this.$store.dispatch('logout')
        this.$router.push('/login')
      } else if (command === 'personal') {
        this.$router.push(`/personalPage/${sessionStorage.userId}/myPost`)
      }
    }
  },
  async mounted () {
    // 页面刷新时恢复登录状态
    if (sessionStorage.isLogin === 'true' && sessionStorage.userId) {
      try {
        const response = await this.$axios({
          url: 'https://graduation-project.lishangying.site/getUserInfo',
          method: 'post',
          data: {
            userId: sessionStorage.userId
          }
        })

        if (response.data.code === 200) {
          const userInfo = response.data.userInfo
          // 更新 Vuex store
          this.$store.commit('SET_USER_INFO', {
            userId: userInfo.userId,
            userCount: userInfo.userCount,
            userName: userInfo.userName,
            userSchool: userInfo.userSchool,
            userJob: userInfo.userJob,
            userCompany: userInfo.userCompany,
            userPage: userInfo.userPage,
            headPicUrl: userInfo.userImg
          })
          this.$store.commit('SET_LOGIN_STATE', true)
        }
      } catch (error) {
        console.error('恢复用户信息失败:', error)
      }
    }

    // 只有在根路径时才跳转到主页
    if (this.$route.path === '/') {
      this.$router.push('/index')
    }

    $('body').css('background-color', 'white')
  },
  watch: {
    $route(to) {
      if (to.name === 'newDemo' || to.name === 'viewer') {
        $('#meun').hide()
      } else {
        $('#meun').show()
      }

      // 使用可选链操作符，避免访问未定义的属性
      if (to.matched?.[0]?.name === 'downloadResource') {
        $('.downloadFile1').addClass('meunItem1')
        $('.downloadFile1').removeClass('meunItem')
        $('.meunItem').removeClass('meunItem1')
        $('.downloadFile1').addClass('meunItem')
      }
      if (to.matched?.[0]?.name === 'index') {
        $('.index1').addClass('meunItem1')
        $('.index1').removeClass('meunItem')
        $('.meunItem').removeClass('meunItem1')
        $('.index1').addClass('meunItem')
      }
      if (to.matched?.[0]?.name === 'newClub') {
        $('.talk1').addClass('meunItem1')
        $('.talk1').removeClass('meunItem')
        $('.meunItem').removeClass('meunItem1')
        $('.talk1').addClass('meunItem')
      }
      if (to.matched?.[0]?.name === 'newDemo') {
        $('.viewer1').addClass('meunItem1')
        $('.viewer1').removeClass('meunItem')
        $('.meunItem').removeClass('meunItem1')
        $('.viewer1').addClass('meunItem')
      }
      if (to.matched?.[0]?.name === 'course') {
        $('.course1').addClass('meunItem1')
        $('.course1').removeClass('meunItem')
        $('.meunItem').removeClass('meunItem1')
        $('.course1').addClass('meunItem')
      }
    },
    'sessionStorage.isLogin': {
      deep: true,
      immediate: true,
      handler () {
        console.log('Watch - sessionStorage.isLogin changed:', sessionStorage.isLogin)
        this.isLogin = sessionStorage.isLogin === 'true'
        console.log('Watch - isLogin updated:', this.isLogin)
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
  min-height: 100vh;
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
.el-dropdown-menu {
  z-index: 9999;
}

.el-dropdown {
  cursor: pointer;
}

#meun {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: white;
  box-shadow: 0 2px 1px 1px rgb(228, 228, 228);
  border-top: 2px solid rgb(2, 155, 98);
}

.router-view-container {
  padding-top: 60px;
}
</style>
