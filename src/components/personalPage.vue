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
              <img :src="userInfo.headPicUrl" alt="" width="160px" height="160px"
                style="margin:40px 8px 0 0;object-fit: cover;border-radius:5px;"
                @click="upload"
                :style="[isCurrentUser ? {cursor: 'pointer'} : {}]">
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
              {{ userInfo.userName }}
              <el-tooltip v-if="isCurrentUser" content="编辑个人信息" placement="right" effect="light">
                <i @click="addInfo" class="el-icon-edit"
                  style="margin:0 0 0 10px;font-size:16px;cursor:pointer;color:rgb(0, 154, 97)"></i>
              </el-tooltip>
            </div>
            <div style="margin:12px 0 0 0;font-size:14px;color:rgb(0, 154, 97);text-align:left;">
              <el-tooltip content="毕业院校" placement="left" effect="light">
                <i class="el-icon-school" style="margin-right:8px"></i>
              </el-tooltip>
              {{ userInfo.userSchool }}
            </div>
            <div style="margin:8px 0 0 0;font-size:14px;color:rgb(0, 154, 97);text-align:left;">
              <el-tooltip content="目前从事行业" placement="left" effect="light">
                <i class="el-icon-suitcase" style="margin-right:8px"></i>
              </el-tooltip>
              {{ userInfo.userJob }}
            </div>
            <div style="margin:8px 0 0 0;font-size:14px;color:rgb(0, 154, 97);text-align:left;">
              <el-tooltip content="所在公司/组织名称" placement="left" effect="light">
                <i class="el-icon-office-building" style="margin-right:8px"></i>
              </el-tooltip>
              {{ userInfo.userCompany }}
            </div>
            <div style="margin:8px 0 0 0;font-size:14px;color:rgb(0, 154, 97);text-align:left;">
              <el-tooltip content="个人网站主页" placement="left" effect="light">
                <i class="el-icon-link" style="margin-right:8px"></i>
              </el-tooltip>
              <a :href="userInfo.userPage" target="_blank"
                style="color:rgb(0, 154, 97);text-decoration:none;cursor:pointer;">{{ userInfo.userPage }}</a>
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
          <el-col :span="6" style="height:200px;position: relative;right: 4px;">
            <!-- <el-row>
              <el-button style="margin:50px 0 0 0;width:60%;background-color:rgb(2, 155, 98);color:white;">我的主页
              </el-button>
            </el-row> -->
            <el-row style="margin:40px 0 0 0;" v-if="isCurrentUser">
              <el-button @click="showMyPost" style="width:160px;background-color:rgb(2, 155, 98);color:white;">
                <i class="el-icon-document"></i> 我的帖子
              </el-button>
            </el-row>
            <el-row v-if="isCurrentUser">
              <el-button style="margin:10px 0 0 0px;width:160px;background-color:rgb(2, 155, 98);color:white;"
                @click="uploadPost">
                <i class="el-icon-edit-outline"></i> 发布帖子
              </el-button>
            </el-row>
            <el-row v-if="isCurrentUser">
              <el-button style="margin:10px 0 0 0px;width:160px;background-color:rgb(2, 155, 98);color:white;"
                @click="dialogFormVisible = true">
                <i class="el-icon-upload2"></i> 上传资源
              </el-button>
            </el-row>
            <el-row v-if="isCurrentUser">
              <el-button style="margin:10px 0 0 0px;width:160px;background-color:rgb(2, 155, 98);color:white;"
                @click="showFileList">
                <i class="el-icon-folder-opened"></i> 我的资源
              </el-button>
            </el-row>
          </el-col>
          <el-col style="padding:20px 0 0 0;" :span="18">
            <div class="test-1">
              <router-view v-if="!$route.path.endsWith('/myPost')"></router-view>
              <my-post v-else :posts="posts" :loading="loading" @refresh-posts="getUserPosts"></my-post>
            </div>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="6">
        <div style="color:white;">bfbcbc</div>
      </el-col>
    </el-row>
    <el-dialog title="上传资源" :visible.sync="dialogFormVisible">
      <el-upload ref="upload" class="upload-demo" action="https://graduation-project.lishangying.site/uploadResource"
        :on-preview="handlePreview" :on-remove="handleRemove" :before-remove="beforeRemove" :on-success="uploadSuccess"
        :on-error='uploadError' multiple :limit="1" :on-exceed="handleExceed" :auto-upload="false"
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
import MyPost from './myPost.vue'

export default {
  name: 'personalPage',
  components: {
    MyPost
  },
  data() {
    return {
      uploadFileDate: {
        'userId': sessionStorage.userId
      },
      circleUrl:
        'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
      squareUrl:
        'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
      showPostDiv: false,
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
        userCount: '',
        headPicUrl: ''
      },
      loading: false,
      posts: [],
      isCurrentUser: false
    }
  },
  created() {
    this.initUserInfo()
  },
  watch: {
    // 监听路由参数变化，重新获取用户信息
    '$route.params.userId': {
      handler: 'initUserInfo',
      immediate: true
    }
  },
  methods: {
    async initUserInfo() {
      const routeUserId = this.$route.params.userId

      // 如果store中没有userId，但sessionStorage中有，则从sessionStorage恢复
      if (!this.$store.state.userInfo.userId && sessionStorage.userId) {
        // 获取用户信息
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

      const currentUserId = this.$store.state.userInfo.userId

      // 如果URL中没有userId或者userId等于当前登录用户，显示当前用户信息
      if (!routeUserId || routeUserId == currentUserId) {
        this.isCurrentUser = true
        this.userInfo = {
          userName: this.$store.state.userInfo.userName,
          userSchool: this.$store.state.userInfo.userSchool,
          userJob: this.$store.state.userInfo.userJob,
          userCompany: this.$store.state.userInfo.userCompany,
          userPage: this.$store.state.userInfo.userPage,
          headPicUrl: this.$store.state.userInfo.headPicUrl
        }
        this.getUserPosts(this.$store.state.userInfo.userId)
      } else {
        // 获取指定用户的信息
        this.isCurrentUser = false
        try {
          const response = await this.$axios({
            url: 'https://graduation-project.lishangying.site/getUserInfo',
            method: 'post',
            data: {
              userId: routeUserId
            }
          })
          if (response.data.code === 200) {
            const userInfo = response.data.userInfo
            // 更新本地数据
            this.userInfo = {
              userName: userInfo.userName,
              userJob: userInfo.userJob,
              userCompany: userInfo.userCompany,
              userPage: userInfo.userPage,
              userSchool: userInfo.userSchool,
              headPicUrl: userInfo.userImg
            }
            this.getUserPosts(routeUserId)
          } else {
            this.$message.error('获取用户信息失败')
          }
        } catch (error) {
          this.$message.error('获取用户信息失败，请检查网络连接')
        }
      }

      // 等待 DOM 更新后再更新词云
      this.$nextTick(() => {
        this.updateWordCloud()
      })
    },

    // 修改获取帖子的方法，支持获取指定用户的帖子
    async getUserPosts(userId = this.$store.state.userInfo.userId) {
      this.loading = true
      try {
        const response = await this.$axios({
          url: 'https://graduation-project.lishangying.site/getAllPost',
          method: 'post',
          data: {
            userId: userId
          }
        })
        if (response.data.code === 200) {
          this.posts = response.data.result
        } else {
          this.$message.error('获取帖子失败')
        }
      } catch (error) {
        this.$message.error('获取帖子失败，请检查网络连接')
      } finally {
        this.loading = false
      }
    },
    checkResource(file) {
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
    uploadError() {
      alert('上传失败')
    },
    uploadSuccess() {
      alert('上传成功')
      this.dialogFormVisible = false
    },
    showMyPost() {
      const userId = this.$route.params.userId || this.$store.state.userInfo.userId
      this.$router.push(`/personalPage/${userId}/myPost`)
    },
    submitUpload() {
      this.uploadFileDate.fileDesc = this.fileDesc
      this.uploadFileDate.userName = this.userName
      this.uploadFileDate.userCount = this.userCount
      this.$refs.upload.submit()
    },
    showFileList() {
      const userId = this.$route.params.userId || this.$store.state.userInfo.userId
      this.$router.push(`/personalPage/${userId}/fileList`)
    },
    handleRemove(file, fileList) {
      //console.log(file, fileList)
    },
    handlePreview(file) {
      //console.log(file)
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
    },
    beforeAvatarUpload(file) {
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

    addInfo() {
      const userId = this.$route.params.userId || this.$store.state.userInfo.userId
      this.$router.push(`/personalPage/${userId}/addInfo`)
    },
    showPostDivM(data) {
      var _this = this
      _this._data.showPostDiv = data
    },
    upload() {
      if (this.isCurrentUser) {
        $('#headPic').click()
      }
    },
    uploadHeadPic(e) {
      const files = e.target.files
      const formData = new FormData()
      formData.append('file', files[0])
      formData.append('userId', this.$store.state.userInfo.userId)

      axios.post('https://graduation-project.lishangying.site/uploadHeadPic', formData)
        .then((response) => {
          // 更新 Vuex store 中的头像
          this.$store.commit('SET_USER_INFO', {
            ...this.$store.state.userInfo,
            headPicUrl: response.data.path
          })
        })
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
    uploadPost() {
      const userId = this.$route.params.userId || this.$store.state.userInfo.userId
      this.$router.push(`/personalPage/${userId}/post`)
    },
  },
  async mounted() {
    $('#personalPageDiv').height($(window).height() - $('#meun').height())
    this.showPostDiv = true

    // 初始化用户信息和帖子
    await this.initUserInfo()

    // 如果没有指定路由，默认显示我的帖子页面
    if (this.$route.path === '/personalPage' || this.$route.path === `/personalPage/${this.$route.params.userId}`) {
      this.$router.push({
        path: `/personalPage/${this.$route.params.userId || this.$store.state.userInfo.userId}/myPost`
      })
    }

    // 初始化词云
    this.$nextTick(() => {
      this.updateWordCloud()
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
