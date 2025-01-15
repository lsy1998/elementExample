<template>
  <div id="personalPageDiv">
    <el-row>
      <el-col :span="6">
        <div style="color:white;">bfbcbc</div>
      </el-col>
      <el-col :span="12">
        <el-row>
          <el-col :span="6" style="height:200px;">
            <el-row>
              <input type="file" multiple @change="uploadHeadPic" v-show="showHeadPic" id="headPic">
              <img :src="$store.state.userInfo.headPicUrl" alt="" width="160px" height="160px"
                style="margin:40px 8px 0 0;object-fit: cover;border-radius:5px;" @click="upload">
            </el-row>
            <!-- <el-row style="margin:10px 0 0 20px;">
              <el-col :span="4" style="color:white">brave</el-col>
              <el-col :span="6">关注</el-col>
              <el-col :span="5">粉丝</el-col>
              <el-col :span="9" style="color:white">happy</el-col>
            </el-row>
            <el-row style="margin:0px 0 0 20px;">
              <el-col :span="4" style="color:white">brave</el-col>
              <el-col :span="6" style="font-size:12px;color:rgb(0, 154, 97)">2人</el-col>
              <el-col :span="5" style="font-size:12px;color:rgb(0, 154, 97)">12人</el-col>
              <el-col :span="9" style="color:white">happy</el-col>
            </el-row> -->
          </el-col>
          <el-col :span="6">
            <div style="margin:50px 0 0 0;font-size:24px;text-align:left">
              {{userInfo.userName}}
              <i @click="addInfo" style="margin:0 0 0 10px;font-size:12px">填写个人信息</i>
            </div>
            <div style="margin:12px 0 0 0;font-size:14px;color:rgb(0, 154, 97);text-align:left;">
              毕业院校：{{userInfo.userSchool}}
            </div>
            <div style="margin:8px 0 0 0;font-size:14px;color:rgb(0, 154, 97);text-align:left;">
              目前从事行业：{{userInfo.userJob}}
            </div>
            <div style="margin:8px 0 0 0;font-size:14px;color:rgb(0, 154, 97);text-align:left;">
              所在公司/组织名称：{{userInfo.userCompany}}
            </div>
            <div style="margin:8px 0 0 0;font-size:14px;color:rgb(0, 154, 97);text-align:left;">
              个人网站主页：{{userInfo.userPage}}
            </div>
          </el-col>
          <el-col :span="12">
            <div id="wordCloudDiv"
              style="width:100%;margin:30px 0 0 0;color:white;background-color:white;height:170px;color:white;"></div>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="6">
        <div style="color:white;">bfbcbc</div>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="6">
        <div style="color:white;">bfbcbc</div>
      </el-col>
      <el-col :span="12">
        <el-row>
          <el-col :span="6" style="height:200px;">
            <!-- <el-row>
              <el-button style="margin:50px 0 0 0;width:60%;background-color:rgb(2, 155, 98);color:white;">我的主页
              </el-button>
            </el-row> -->
            <el-row style="margin:50px 0 0 0;">
              <el-button @click="showMyPost"
                style="margin:10px 0 0 0px;width:60%;background-color:rgb(2, 155, 98);color:white;">我的帖子
              </el-button>
            </el-row>
            <el-row>
              <el-button style="margin:10px 0 0 0px;width:60%;background-color:rgb(2, 155, 98);color:white;"
                @click="uploadPost">发布帖子
              </el-button>
            </el-row>
            <el-row>
              <el-button style="margin:10px 0 0 0px;width:60%;background-color:rgb(2, 155, 98);color:white;"
                @click="dialogFormVisible = true">上传资源
              </el-button>
            </el-row>
            <el-row>
              <el-button style="margin:10px 0 0 0px;width:60%;background-color:rgb(2, 155, 98);color:white;"
                @click="showFileList">我的资源
              </el-button>
            </el-row>
            <!-- <el-row>
              <el-button style="margin:10px 0 0 0px;width:60%;background-color:rgb(2, 155, 98);color:white;"
                @click="checkResource">我的
              </el-button>
            </el-row> -->
          </el-col>
          <el-col :span="18" id="lsy" style="padding: 0 0;">
            <router-view />
          </el-col>
          <!-- <el-col :span='6'>
                <div style="color:white;background-color:white;height:200px;color:white;">sad</div>
          </el-col>-->
        </el-row>
      </el-col>
      <el-col :span="6">
        <div style="color:white;">bfbcbc</div>
      </el-col>
    </el-row>
    <el-dialog title="上传资源" :visible.sync="dialogFormVisible">
      <el-upload ref="upload" class="upload-demo" action="https://graduation-project.lishangying.site/uploadResource" :on-preview="handlePreview"
        :on-remove="handleRemove" :before-remove="beforeRemove" :on-success="uploadSuccess" :on-error='uploadError' multiple :limit="1" :on-exceed="handleExceed" :auto-upload="false"
        :on-change="checkResource" :data='uploadFileDate' accept=".zip,.rar,.tar,.7z">
        <el-button size="small" type="primary">选择文件</el-button>
        <div slot="tip" class="el-upload__tip">只能上传.rar/.zip/.tar/.7z文件</div>
      </el-upload>
      <div style="float:left; margin:10px 0;">添加文件描述：</div>
    <!-- <i class="icon icon-uniE014" @click="hideAddInfoDiv" style="position:relative;bottom:10px; left:41%;"></i> -->
    <el-input v-model="fileDesc" placeholder="请输入内容"></el-input>
     <el-button style="margin:20px 0 0 10px; " size="small" type="success" @click="submitUpload">点击上传</el-button>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogFormVisible = false">取 消</el-button>
        <!-- <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button> -->
      </div>
    </el-dialog>
  </div>
</template>

<script>
// require('../assets/js/js2wordcloud')
import Js2WordCloud from 'js2wordcloud'
import $ from 'jquery'
import axios from 'axios'
import router from '../router'
// import PostSkeleton from './PostSkeleton.vue'
// import addInfo from './addInfo'
// import store from '../store'
export default {
  // store,
  name: 'personalPage',
  // components: {
  //   addInfo
  // },
  // components: {
  //   PostSkeleton
  // },
  data () {
    return {
      uploadFileDate: {
        'userId': sessionStorage.userId
      },
      circleUrl:
        'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
      squareUrl:
        'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
      showPostDiv: true,
      showAddInfo: false,
      showHeadPic: false,
      headPicUrl: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
      userName: '',
      userJob: '',
      userCompany: '',
      userPage: '',
      userSchool: '',
      userCount: '',
      fileDesc: '',
      ciyunList: [],
      num: 2,
      dialogFormVisible: false,
      userInfo: {
        userName: '',
        userJob: '',
        userCompany: '',
        userPage: '',
        userSchool: '',
        userCount: ''
      }
    }
  },
  methods: {
    checkResource (file) {
      //console.log('badhbahb')
      axios({
        method: 'post',
        url: 'https://graduation-project.lishangying.site/checkResource',
        data: {
          fileName: file.name,
          userCount: sessionStorage.userCount
        }
      }).then((response) => {
        // //console.log(response.data)
        if (response.data.result === 1) {
          alert('已存在同名文件')
          this.$refs.upload.clearFiles()
        }
      })
    },
    uploadError () {
      alert('上传失败')
    },
    uploadSuccess () {
      alert('上传成功')
      this.dialogFormVisible = false
    },
    showMyPost () {
      router.push({path: '/personalPage/myPost'})
    },
    submitUpload () {
      this.uploadFileDate.fileDesc = this.fileDesc
      this.uploadFileDate.userName = this.userName
      this.uploadFileDate.userCount = this.userCount
      this.$refs.upload.submit()
    },
    showFileList () {
      router.push({path: '/personalPage/fileList'})
    },
    handleRemove (file, fileList) {
      //console.log(file, fileList)
    },
    handlePreview (file) {
      //console.log(file)
    },
    handleExceed (files, fileList) {
      this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
    },
    beforeRemove (file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
    },
    beforeAvatarUpload (file) {
      //console.log(file)
      // const isTAR = file.type === 'application/x-tar'
      // const isZIP = file.type === 'application/x-zip-compressed'
      // const isRAR = file.type === 'application/octet-stream'
      // const is7Z = file.type === 'application/x-7z-compressed'
      // const isSupport = isTAR || isRAR || isZIP || is7Z
      // //console.log(isTAR)
      // //console.log(isZIP)
      // //console.log(isRAR)uploadFile
      // //console.log(is7Z)
      // //console.log(isSupport)
      // // const isJPG = (file.type === 'x-zip-compressed' || file.type === 'application/x-tarx-tar' || file.type === 'application/octet-stream' || file.type === 'x-7z-compressed')
      // const isLt2M = file.size / 1024 / 1024 < 2

      // if (!isSupport) {
      //   this.$message.error('上传的不是压缩包')
      // }
      // if (!isLt2M) {
      //   this.$message.error('上传头像图片大小不能超过 2MB!')
      // }
      // return isSupport && isLt2M
    },

    addInfo () {
      router.push({ path: '/personalPage/addInfo' })
    },
    showPostDivM (data) {
      var _this = this
      _this._data.showPostDiv = data
    },
    upload () {
      $('#headPic').click()
    },
    uploadHeadPic (e) {
      const files = e.target.files
      const formData = new FormData()
      formData.append('file', files[0])
      formData.append('userId', sessionStorage.userId)

      axios.post('https://graduation-project.lishangying.site/uploadHeadPic', formData)
        .then((response) => {
          // 更新 Vuex store 中的头像
          this.$store.commit('SET_USER_INFO', {
            headPicUrl: response.data.path
          })
        })
    },
    async getUserInfo () {
      try {
        const response = await axios({
          method: 'post',
          url: 'https://graduation-project.lishangying.site/getUserInfo',
          data: {
            userId: sessionStorage.userId
          }
        })

        const userInfo = response.data.userInfo
        
        // 更新本地数据
        this.userInfo = {
          userName: userInfo.userName,
          userJob: userInfo.userJob,
          userCompany: userInfo.userCompany,
          userPage: userInfo.userPage,
          userSchool: userInfo.userSchool,
          userCount: userInfo.userCount
        }

        // 更新 Vuex store
        this.$store.commit('SET_USER_INFO', {
          headPicUrl: userInfo.userImg,
          ...this.userInfo
        })

        // 等待 DOM 更新后再更新词云
        this.$nextTick(() => {
          this.updateWordCloud()
        })
      } catch (error) {
        console.error('获取用户信息失败:', error)
        this.$message.error('获取用户信息失败')
      }
    },

    updateWordCloud() {
      // 确保 DOM 元素已经加载
      this.$nextTick(() => {
        const wordCloudDiv = document.getElementById('wordCloudDiv')
        if (!wordCloudDiv) {
          console.warn('wordCloudDiv not found')
          return
        }

        const wc = new Js2WordCloud(wordCloudDiv)
        const wd = $('#wordCloudDiv').width()
        if (!wd) {
          console.warn('wordCloudDiv width is 0')
          return
        }

        $('#wordCloudDiv canvas').width(wd)
        $('#wordCloudDiv canvas').css('border-radius', '5px')

        wc.setOption({
          maxFontSize: 30,
          minFontSize: 10,
          backgroundColor: 'rgb(246, 246, 246)',
          tooltip: {
            show: true,
            backgroundColor: 'rgba(2, 155, 98, 0.701961)'
          },
          list: [
            [this.userInfo.userName || '', 20],
            [this.userInfo.userName || '', 10],
            [this.userInfo.userSchool || '', 20],
            [this.userInfo.userCompany || '', 20],
            [this.userInfo.userName || '', 30],
            [this.userInfo.userJob || '', 10],
            [this.userInfo.userJob || '', 20],
            [this.userInfo.userCompany || '', 30],
            [this.userInfo.userCompany || '', 20],
            [this.userInfo.userSchool || '', 30],
            [this.userInfo.userName || '', 30]
          ].filter(item => item[0]), // 过滤掉空值
          color: 'rgb(2, 155, 98)'
        })
      })
    },
    uploadPost () {
      router.push({ path: '/post' })
    }
  },
  async mounted () {
    $('#personalPageDiv').height($(window).height() - $('#meun').height())
    this._data.showPostDiv = true
    
    await this.getUserInfo()
    
    this.$router.push({
      path: '/personalPage/myPost',
      query: {
        userCount: this.$route.query.userCount
      }
    })
  }
}
</script>

<style scoped>
@import "../assets/iconfont/iconfont.css";

/* 确保骨架屏容器有足够的高度和合适的样式 */
.el-col-18 {
  min-height: 400px;
  padding: 20px;
  background-color: #fff;
}

/* 添加过渡效果 */
.post-skeleton-enter-active,
.post-skeleton-leave-active {
  transition: opacity 0.3s;
}

.post-skeleton-enter,
.post-skeleton-leave-to {
  opacity: 0;
}
</style>
