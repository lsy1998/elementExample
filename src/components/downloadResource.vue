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
            <!-- <el-button style="margin:50px 0 0 0;width:100%;background-color:rgb(2, 155, 98);color:white; font-size:16px">资源上传
            </el-button> -->
            <el-button
              style="margin:30px 0 0 0;width:100%;background-color:rgb(2, 155, 98);color:white; font-size:16px">资源下载
            </el-button>
            <el-divider content-position="left" @click="showDownloadFileList" style="font-size:16px;">资源分类</el-divider>
            <div style="width:80%;padding:5px 10px 5px 10px; font-size:14px">软件/工具</div>
            <div style="width:80%;padding:5px 10px 5px 10px; font-size:14px">书本/文档</div>
            <div style="width:80%;padding:5px 10px 5px 10px; font-size:14px">源代码</div>
            <div style="width:80%;padding:5px 10px 5px 10px; font-size:14px">小型数据集</div>
            <el-divider content-position="left" @click="showDownloadFileList" style="font-size:16px">医学图像数据集
            </el-divider>
            <div style="width:80%;padding:5px 10px 5px 10px; font-size:14px">LIDC-IDRI</div>
            <div style="width:80%;padding:5px 10px 5px 10px; font-size:14px">FastMRI</div>
            <div style="width:80%;padding:5px 10px 5px 10px; font-size:14px">COVID-19</div>
            <el-row style="border-radius:2px; background-color:rgb(2, 155, 98);margin:10px 0 0 0">
              <el-col :span="18">
                <el-button
                  style="margin:0px 0 0 0;width:100%;background-color:rgb(2, 155, 98);color:white; font-size:16px;border:none;border-right:1px solid white;border-radius:3px 0px 0px 3px;">资源上传
                </el-button>
              </el-col>
              <el-col :span="6">
                <div style="margin:0px 0 0 0;width:100%;background-color:rgb(2, 155, 98);color:white; font-size:16px;border:none;order-radius:0px 3px 3px 0px;"><i class="el-icon-folder-add" style="font-size:24px;margin-top:7px"></i>
                </div>
              </el-col>
            </el-row>
            <!-- <el-divider content-position="left" @click="showOtherInfo">友情链接</el-divider> -->
            <!-- <img src="../assets/image/logo/logo-jssq.jpg" alt="" height="40px"  @click="jumpTo($event)" data-link='http://www.eepw.com.cn/tech/s/k/%E5%9B%BE%E5%83%8F%E5%A4%84%E7%90%86'>
            <el-row style="margin:0 40px">
              <el-col :span='12'><img src="../assets/image/logo/csdn-logo.png" alt="" height="50px" style="position:relative; right:30px"  @click="jumpTojumpTo($event)" data-link='https://bbs.csdn.net/forums/VC_ImageProcessing'></el-col>
              <el-col :span='12'><img src="../assets/image/logo/ituring.png" alt="" height="30px"  @click="jumpTojumpTo($event)" data-link='https://www.ituring.com.cn/tag/2998' style="margin:5px 0 0 0"></el-col>
            </el-row> -->
            <div style="height:900px;"></div>
          </el-col>
          <el-col :span='16'>
            <div style="margin:10px 50px 50px 50px;">
              <router-view />
            </div>
          </el-col>
          <el-col :span='4'>
            <!-- <div style="margin:50px 0 0 0; color:rgb(2, 155, 98);display:inline-block;">活跃用户</div>
            <div style="margin:50px 0 0 0; color:rgb(2, 155, 98);display:inline-block;float:right;">更多<i class="el-icon-d-arrow-right"></i></div> -->
            <el-row>
              <el-col :span='5' style="color:white">brave</el-col>
              <el-col :span='19'>
                <div style="width:100%;height:2px;"></div>
              </el-col>
            </el-row>
            <el-divider content-position="center" @click="showDownloadFileList" style="font-size:16px">友情链接</el-divider>
            <!-- <activeUser></activeUser> -->
            <img src="../assets/image/logo/logo-jssq.jpg" alt="" height="40px" @click="jumpTo($event)"
              data-link='http://www.eepw.com.cn/tech/s/k/%E5%9B%BE%E5%83%8F%E5%A4%84%E7%90%86'>
            <el-row style="margin:0 40px">
              <el-col :span='12'><img src="../assets/image/logo/csdn-logo.png" alt="" height="50px"
                  style="position:relative; right:30px" @click="jumpTojumpTo($event)"
                  data-link='https://bbs.csdn.net/forums/VC_ImageProcessing'></el-col>
              <el-col :span='12'><img src="../assets/image/logo/ituring.png" alt="" height="30px"
                  @click="jumpTojumpTo($event)" data-link='https://www.ituring.com.cn/tag/2998'
                  style="margin:5px 0 0 0"></el-col>
            </el-row>
            <!-- <el-button style="margin:10px 0 0 0;width:100%;background-color:rgb(2, 155, 98);color:white; font-size:16px">信息汇总
            </el-button> -->
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
  name: 'downloadResource',
  components: {
    'activeUser': activeUser
  },
  data () {
    return {
      circleUrl:
        'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
      squareUrl:
        'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
      imgList: ['https://graduation-project.lishangying.site/lunbo/lunbo1.png', 'https://graduation-project.lishangying.site/lunbo/lunbo2.png']
    }
  },
  methods: {
    chooseMethod (e) {
      router.push({ path: `/${$(e.currentTarget).attr('data-name')}` })
    },
    jumpTo (e) {
      // $(e.tatget).attr('data-link')
      //console.log($(e.currentTarget).attr('data-link'))
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
    router.push({ path: '/downloadResource/downloadFileList' })
    $('.el-divider__text').css('font-size', '16px')
    // $('.el-divider').css('margin', '23px 0 24px 0')
    $('.el-divider').css('height', '2px')
    // $('.el-divider__text is-left').css('color', 'rgb(2, 155, 98)')
  }
}
</script>

<style scoped>
@import "../assets/iconfont/iconfont.css";
</style>
<style scoped>
.el-divider__text {
  color: rgb(2, 155, 98);
}
</style>
