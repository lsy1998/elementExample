<template>
  <div>
    <el-row style="margin: 10px 0 0 0">
      <el-col :span="4">
        <div style="color:white;">bfbcbc</div>
      </el-col>
      <el-col :span="16">
        <!-- <img ref="imgHeight" src="../assets/image/loginBackground.jpg"/> -->
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
            <el-button style="margin:50px 0 0 0;width:100%;background-color:rgb(2, 155, 98);color:white;">热门帖子
            </el-button>
            <el-button style="margin:10px 0 0 0;width:100%;background-color:rgb(2, 155, 98);color:white;">最近帖子
            </el-button>
            <!-- <el-button style="margin:10px 0 0 0;width:100%;background-color:rgb(2, 155, 98);color:white;">相关帖子
            </el-button> -->
            <!-- <el-divider content-position="left" @click="showDownloadFileList">医学图像下载</el-divider>
            <div style="width:80%;padding:5px 10px 5px 10px;">MRI</div>
            <div style="width:80%;padding:5px 10px 5px 10px;">CT</div> -->
            <!-- <el-divider content-position="left" style="color:rgb(2, 155, 98)">相关教程</el-divider> -->
            <!-- <el-collapse accordion style="margin:0 40px;">
              <el-collapse-item>
                <template slot="title">图像几何变换</template>
                <div style="border-bottom:1px solid rgb(226, 228, 234);margin:3px 0 0 0"  @click="chooseMethod($event)" data-name='zjl'>最近邻插值法</div>
                <div @click="chooseMethod($event)" data-name='bilinearInterpolation'>双线性插值法</div>
              </el-collapse-item>
              <el-collapse-item title="图像增强">
                <div style="border-bottom:1px solid rgb(226, 228, 234);margin:3px 0 0 0"  @click="chooseMethod($event)" data-name='canny'>傅里叶变换</div>
                <div style="border-bottom:1px solid rgb(226, 228, 234);margin:3px 0 0 0">离散余弦变换</div>
                <div>小波变换</div>
              </el-collapse-item>
              <el-collapse-item title="图像分割">
                <div style="border-bottom:1px solid rgb(226, 228, 234);margin:3px 0 0 0" @click="chooseMethod($event)" data-name='canny'>canny边缘检测</div>
                <div style="border-bottom:1px solid rgb(226, 228, 234);margin:3px 0 0 0" @click="chooseMethod($event)" data-name='Laplacian'>拉普拉斯边缘检测</div>
                <div style="border-bottom:1px solid rgb(226, 228, 234);margin:3px 0 0 0" @click="chooseMethod($event)" data-name='OTSU'>OTSU大津阈值分割</div>
                <div  @click="chooseMethod($event)" data-name='regionGrow'>区域生长算法</div>
              </el-collapse-item>
              <el-collapse-item title="特征提取">
                <div style="border-bottom:1px solid rgb(226, 228, 234);margin:3px 0 0 0"  @click="chooseMethod($event)" data-name='histogram'>PCA算法</div>
                <div style="border-bottom:1px solid rgb(226, 228, 234);margin:3px 0 0 0">LDA算法</div>
                <div style="border-bottom:1px solid rgb(226, 228, 234);margin:3px 0 0 0">LBP特征</div>
                <div style="border-bottom:1px solid rgb(226, 228, 234);margin:3px 0 0 0">灰度共生矩阵算法</div>
                <div style="border-bottom:1px solid rgb(226, 228, 234);margin:3px 0 0 0">SIFT特征算法</div>
                <div>HOG特征算法</div>
              </el-collapse-item>
            </el-collapse> -->
            <div style="height:900px;"></div>
          </el-col>
          <el-col :span='16'>
            <!-- <div style="margin:-20px 50px 50px 50px;height:700px;overflow-y:scroll" class="test-1"> -->
            <div style="margin:-20px 50px 50px 50px;" class="test-1">
              <router-view />
            </div>
          </el-col>
          <el-col :span='4'>
            <el-row>
              <el-col :span='5' style="color:white">brave</el-col>
              <el-col :span='19'>
                <div style="width:100%;height:2px;"></div>
              </el-col>
            </el-row>
            <el-row style="border-radius:2px; background-color:rgb(2, 155, 98);margin:33px 0 0 0">
              <el-col :span="18">
                <el-button
                  style="margin:0px 0 0 0;width:100%;background-color:rgb(2, 155, 98);color:white;border:none;border-right:1px solid white;border-radius:3px 0px 0px 3px;">发布帖子
                </el-button>
              </el-col>
              <el-col :span="6">
                <div style="margin:0px 0 0 0;width:100%;background-color:rgb(2, 155, 98);color:white; font-size:16px;border:none;order-radius:0px 3px 3px 0px;"><i class="el-icon-position" style="font-size:24px;margin-top:7px"></i>
                </div>
              </el-col>
            </el-row>
            <el-divider content-position="center" @click="showOtherInfo">友情链接</el-divider>
            <img src="../assets/image/logo/logo-jssq.jpg" alt="" height="40px"  @click="jumpTo($event)" data-link='http://www.eepw.com.cn/tech/s/k/%E5%9B%BE%E5%83%8F%E5%A4%84%E7%90%86'>
            <el-row style="margin:0 40px">
               <el-col :span='12'><img src="../assets/image/logo/csdn-logo.png" alt="" height="50px" style="position:relative; right:30px"  @click="jumpTojumpTo($event)" data-link='https://bbs.csdn.net/forums/VC_ImageProcessing'></el-col>
              <el-col :span='12'><img src="../assets/image/logo/ituring.png" alt="" height="30px"  @click="jumpTojumpTo($event)" data-link='https://www.ituring.com.cn/tag/2998' style="margin:5px 0 0 0"></el-col>
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
import activeUser from '../components/activeUser'
export default {
  name: 'newClub',
  components: {
    'activeUser': activeUser
  },
  data () {
    return {
      circleUrl:
        'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
      squareUrl:
        'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
      imgList: ['http://47.115.131.98:39002/lunbo/dc.jpg', 'http://47.115.131.98:39002/lunbo/26.png']
    }
  },
  methods: {
    chooseMethod (e) {
      router.push({path: `/${$(e.currentTarget).attr('data-name')}`})
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
    if (sessionStorage.isLogin !== 'true') {
      alert('请先登录！')
      console.log(this.$router.currentRoute.fullPath)
      sessionStorage.preRoute = this.$router.currentRoute.fullPath
      this.$router.push({path: '/login'})
    } else {
      router.push({ path: '/newClub/clubNewPost' })
      $('.el-divider__text').css('font-size', '16px')
      // $('.el-divider').css('margin', '23px 0 24px 0')
      $('.el-divider').css('height', '2px')
    // $('.el-divider__text is-left').css('color', 'rgb(2, 155, 98)')
    }
  }
}
</script>

<style scoped>
@import "../assets/iconfont/iconfont.css";
</style>
<style scoped>
   .el-divider__text {
      color:rgb(2, 155, 98)
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
