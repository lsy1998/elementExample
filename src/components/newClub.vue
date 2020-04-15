<template>
  <div>
    <el-row>
      <el-col :span="6">
        <div style="color:white;">bfbcbc</div>
      </el-col>
      <el-col :span="12">
        <el-carousel height="150px" width="100%">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3 class="small">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </el-col>
      <el-col :span="6">
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
            <el-button style="margin:50px 0 0 0;width:100%;background-color:rgb(2, 155, 98);color:white;">为你推荐
            </el-button>
            <el-divider content-position="left" @click="showDownloadFileList">医学图像下载</el-divider>
            <div style="width:80%;padding:5px 10px 5px 10px;">MRI</div>
            <div style="width:80%;padding:5px 10px 5px 10px;">CT</div>
            <el-divider content-position="left">相关教程</el-divider>
            <el-divider content-position="left">友情链接</el-divider>
            <div style="height:900px;"></div>
          </el-col>
          <el-col :span='16'>
            <div style="margin:50px;">
              <router-view />
            </div>
          </el-col>
          <el-col :span='4'>
            <div style="margin:50px 0 0 0; color:rgb(2, 155, 98);display:inline-block;">活跃用户</div>
            <div style="margin:50px 0 0 0; color:rgb(2, 155, 98);display:inline-block;float:right;">更多<i
                class="el-icon-d-arrow-right"></i></div>
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
export default {
  name: 'newClub',
  data () {
    return {
      circleUrl:
        'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
      squareUrl:
        'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png'
    }
  },
  methods: {
    showDownloadFileList () {
      // alert(111)
      router.push({path: '/newClub/DownloadFileList'})
    }
  },
  mounted () {
    router.push({path: '/newClub/clubNewPost'})
  }
}
</script>

<style scoped>
@import "../assets/iconfont/iconfont.css";
</style>
