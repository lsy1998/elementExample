<template>
  <div>
    <!-- <el-row style="margin: 10px 0 0 0" id="lunboBox">
      <el-col :span="4">
        <div style="color:white;">bfbcbc</div>
      </el-col>
      <el-col :span="16"> -->
        <!-- <img ref="imgHeight" src="../assets/image/loginBackground.jpg"/> -->
        <!-- <el-carousel height="180px" width="100%">
          <el-carousel-item v-for="item in imgList" :key="item">
            <img style="width:100%;height:100%" ref="imgHeight" :src="item" />
          </el-carousel-item>
        </el-carousel>
      </el-col>
      <el-col :span="4">
        <div style="color:white;">bfbcbc</div>
      </el-col>
    </el-row> -->

    <el-row style="margin:10px 0 0 0">
      <el-col :span="4">
        <div style="color:white;">bfbcbc</div>
      </el-col>
      <el-col :span="16">
        <el-row>
          <el-col :span='5' id="courseBox" style="overflow-y:scroll" class="test-1">
            <!-- <el-divider content-position="left" @click="showDownloadFileList" style="font-size:18px">图像几何变换</el-divider> -->
            <div style=" margin:10px 0 0 0;text-align:left;padding:0 0 0 0px;font-size:18px; color:rgb(2, 155, 98)">图像几何变换<i class="el-icon-arrow-down" style="float:right;margin:0 10px 0 0"></i></div>

            <div id="zjl" class="courseItem" style=" margin:30px 0 0 0;text-align:left;cursor:default" @click="chooseMethod($event)" data-name='zjl'>最近邻插值法</div>
            <div class="courseItem" style=" margin:30px 0 0 0;text-align:left;cursor:default" @click="chooseMethod($event)" data-name='bilinearInterpolation'>双线性插值法</div>

            <div class="courseItem" style=" margin:30px 0 0 0;text-align:left;padding:0 0 0 0px;font-size:18px; color:rgb(2, 155, 98)">图像增强<i class="el-icon-arrow-down" style="float:right;margin:0 10px 0 0"></i></div>

            <div class="courseItem" style=" margin:30px 0 0 0;text-align:left;cursor:default" @click="chooseMethod($event)" data-name='canny'>傅里叶变换</div>
            <div class="courseItem" style=" margin:30px 0 0 0;text-align:left;cursor:default">离散余弦变换</div>
            <div class="courseItem" style=" margin:30px 0 0 0;text-align:left;cursor:default">小波变换</div>

            <div class="courseItem" style=" margin:30px 0 0 0;text-align:left;padding:0 0 0 0px;font-size:18px; color:rgb(2, 155, 98)">图像分割<i class="el-icon-arrow-down" style="float:right;margin:0 10px 0 0"></i></div>

            <div class="courseItem" style=" margin:30px 0 0 0;text-align:left;cursor:default" @click="chooseMethod($event)" data-name='canny'>canny边缘检测</div>
            <div class="courseItem" style=" margin:30px 0 0 0;text-align:left;cursor:default" @click="chooseMethod($event)" data-name='Laplacian'>拉普拉斯边缘检测</div>
            <div class="courseItem" style=" margin:30px 0 0 0;text-align:left;cursor:default" @click="chooseMethod($event)" data-name='OTSU'>OTSU大津阈值分割</div>
            <div class="courseItem" style=" margin:30px 0 0 0;text-align:left;cursor:default" @click="chooseMethod($event)" data-name='regionGrow'>区域生长算法</div>

            <div class="courseItem" style=" margin:30px 0 0 0;text-align:left;padding:0 0 0 0px;font-size:18px; color:rgb(2, 155, 98)">特征提取<i class="el-icon-arrow-down" style="float:right;margin:0 10px 0 0"></i></div>

            <div class="courseItem" style=" margin:30px 0 0 0;text-align:left;cursor:default" @click="chooseMethod($event)" data-name='histogram'>PCA算法</div>
            <div class="courseItem" style=" margin:30px 0 0 0;text-align:left;cursor:default">LDA算法</div>
            <div class="courseItem" style=" margin:30px 0 0 0;text-align:left;cursor:default">LBP特征</div>
            <div class="courseItem" style=" margin:30px 0 0 0;text-align:left;cursor:default">灰度共生矩阵算法</div>
            <div class="courseItem" style=" margin:30px 0 0 0;text-align:left;cursor:default">SIFT特征算法</div>
            <div class="courseItem" style=" margin:30px 0 0 0;text-align:left;cursor:default">HOG特征算法</div>
          </el-col>
          <el-col :span='19' style="overflow-y:scroll; " id="courseContent" class="test-1">
              <router-view style=""/>
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
import activeUser from '../components/activeUser'
export default {
  name: 'course',
  components: {
    'activeUser': activeUser
  },
  data () {
    return {
      courseItem: true,
      circleUrl:
        'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
      squareUrl:
        'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
      imgList: ['http://47.115.131.98:39002/lunbo/dc.jpg', 'http://47.115.131.98:39002/lunbo/26.png']
    }
  },
  methods: {
    chooseMethod (e) {
      var el = e.currentTarget
      $(el).addClass('courseItem1')
      $(el).removeClass('courseItem')
      $('.courseItem').removeClass('courseItem1')
      $(el).addClass('courseItem')

      router.push({ path: `/course/${$(e.currentTarget).attr('data-name')}Course` })
    },
    jumpTo (e) {
      // $(e.tatget).attr('data-link')
      console.log($(e.currentTarget).attr('data-link'))
      window.location.href = $(e.currentTarget).attr('data-link')
    },
    showOtherInfo () {
      router.push({ path: '/newClub/otherInfo' })
    },
    showDownloadFileList () {
      // alert(111)
      router.push({ path: '/newClub/DownloadFileList' })
    }
  },
  mounted () {
    // var height = $(window).height() - $('#lunboBox').height() - $('#meun').height() - 200
    // var height1 = $(window).height()
    // alert(height)
    // alert(height1)
    $('#courseBox').height($(window).height() - $('#meun').height() - 43)
    $('#courseContent').height($(window).height() - $('#meun').height() - 43)
    this.$router.push({ path: `/course/zjlCourse` })
    $('#zjl').addClass('courseItem2')
    // router.push({ path: '/newClub/clubNewPost' })
    // $('.el-divider__text is-left').css('color', 'rgb(2, 155, 98)')
  }
}
</script>

<style scoped>
@import "../assets/iconfont/iconfont.css";
</style>
<style scoped>
@keyframes myfirst
{
from {padding:0;}
to {padding:8px}
}
.courseItem1 {
  background-color:rgb(2, 155, 98);
  color:white;
  animation: myfirst 0.5s;
  padding:8px;
}
.courseItem2 {
  background-color:rgb(2, 155, 98);
  color:white;
  /* animation: myfirst 0.5s; */
  padding:8px;
}
.el-divider__text {
  color: rgb(2, 155, 98);
}
.bg {
  border: 1px solid black;
}
.test-1::-webkit-scrollbar {
  width: 2px;
  height: 1px;
}
.test-1::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: rgb(255, 255, 255);
}
.test-1::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background: #ededed;
}
</style>
