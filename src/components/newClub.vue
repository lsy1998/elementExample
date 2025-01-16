/* eslint-disable */
<template>
  <div>
    <el-row style="margin: 10px 0 0 0">
      <el-col :span="4">
        <div style="color:white;">bfbcbc</div>
      </el-col>
      <el-col :span="16">
        <el-carousel height="180px" width="100%">
          <el-carousel-item v-for="item in imgList" :key="item">
            <img style="width:100%;height:100%" ref="imgHeight" :src="item" />
          </el-carousel-item>
        </el-carousel>
      </el-col>
      <el-col :span="4">
        <div style="color:white;">bfbcbc</div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="4">
        <div style="color:white;">bfbcbc</div>
      </el-col>
      <el-col :span="16">
        <el-row>
          <el-col :span='4'>
            <el-button @click="currentView = 'hot'"
              style="margin:50px 0 0 0;width:100%;background-color:rgb(2, 155, 98);color:white;">
              热门帖子
            </el-button>
            <el-button @click="currentView = 'recent'"
              style="margin:10px 0 0 0;width:100%;background-color:rgb(2, 155, 98);color:white;">
              最近帖子
            </el-button>
            <div style="height:900px;"></div>
          </el-col>
          <el-col :span='16'>
            <div style="margin:-20px 50px 50px 50px;" class="test-1">
              <my-post :posts="posts" :loading="loading"></my-post>
            </div>
          </el-col>
          <el-col :span='4'>
            <el-row style="border-radius:2px; background-color:rgb(2, 155, 98);margin:33px 0 0 0">
              <el-col :span="18">
                <el-button
                  style="margin:0px 0 0 0;width:100%;background-color:rgb(2, 155, 98);color:white;border:none;border-right:1px solid white;border-radius:3px 0px 0px 3px;">
                  发布帖子
                </el-button>
              </el-col>
              <el-col :span="6">
                <div
                  style="margin:0px 0 0 0;width:100%;background-color:rgb(2, 155, 98);color:white; font-size:16px;border:none;border-radius:0px 3px 3px 0px;">
                  <i class="el-icon-position" style="font-size:24px;margin-top:7px"></i>
                </div>
              </el-col>
            </el-row>
            <el-divider content-position="center" @click="showOtherInfo">友情链接</el-divider>
            <img src="../assets/image/logo/logo-jssq.jpg" alt="" height="40px" @click="jumpTo($event)"
              data-link='http://www.eepw.com.cn/tech/s/k/%E5%9B%BE%E5%83%8F%E5%A4%84%E7%90%86'>
            <el-row style="margin:0 40px">
              <el-col :span='12'><img src="../assets/image/logo/csdn-logo.png" alt="" height="50px"
                  style="position:relative; right:30px" @click="jumpTo($event)"
                  data-link='https://bbs.csdn.net/forums/VC_ImageProcessing'></el-col>
              <el-col :span='12'><img src="../assets/image/logo/ituring.png" alt="" height="30px"
                  @click="jumpTo($event)" data-link='https://www.ituring.com.cn/tag/2998'
                  style="margin:5px 0 0 0"></el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="4">
        <div style="color:white;">bfbcbc</div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import router from '../router'
import $ from 'jquery'
import MyPost from './myPost.vue'

export default {
  name: 'newClub',
  components: {
    MyPost
  },
  data() {
    return {
      currentView: 'hot',
      loading: false,
      posts: [],
      imgList: [
        'https://graduation-project.lishangying.site/lunbo/lunbo1.png',
        'https://graduation-project.lishangying.site/lunbo/lunbo2.png'
      ]
    }
  },
  watch: {
    async currentView(newVal) {
      if (newVal === 'hot') {
        await this.getHotPosts()
      } else {
        await this.getRecentPosts()
      }
    }
  },
  methods: {
    async getHotPosts() {
      this.loading = true
      try {
        const response = await this.$axios.get('https://graduation-project.lishangying.site/popularPosts')
        if (response.data.code === 200) {
          this.posts = response.data.result
        } else {
          this.$message.error(response.data.msg)
        }
      } catch (error) {
        console.error('获取热门帖子失败:', error)
        this.$message.error('获取热门帖子失败')
      } finally {
        this.loading = false
      }
    },

    async getRecentPosts() {
      this.loading = true
      try {
        const response = await this.$axios.get('https://graduation-project.lishangying.site/recentPosts')
        if (response.data.code === 200) {
          this.posts = response.data.result
        } else {
          this.$message.error(response.data.msg)
        }
      } catch (error) {
        console.error('获取最近帖子失败:', error)
        this.$message.error('获取最近帖子失败')
      } finally {
        this.loading = false
      }
    },

    jumpTo(e) {
      window.location.href = $(e.currentTarget).attr('data-link')
    },
    showOtherInfo() {
      router.push({ path: '/newClub/otherInfo' })
    }
  },
  async mounted() {
    if (sessionStorage.isLogin !== 'true') {
      this.$message.warning('请先登录！')
      sessionStorage.preRoute = this.$router.currentRoute.fullPath
      this.$router.push('/login')
      return
    }

    // 默认加载热门帖子
    await this.getHotPosts()

    $('.el-divider__text').css('font-size', '16px')
    $('.el-divider').css('height', '2px')
  }
}
</script>

<style scoped>
@import "../assets/iconfont/iconfont.css";

.post-card {
  margin: 50px 0 0 0;
  font-size: 14px;
  color: rgb(0, 154, 97);
  text-align: left;
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  cursor: pointer;
}

.el-divider__text {
  color: rgb(2, 155, 98)
}

.bg {
  border: 1px solid white;
}

.test-1::-webkit-scrollbar {
  width: 2px;
  height: 1px;
}

.test-1::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 5px rgba(255, 255, 255, 0.2);
  background: white;
}

.test-1::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 5px rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  background: white;
}
</style>
