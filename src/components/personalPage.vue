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
              <img :src="this.$store.state.headPicUrl" alt="" width="160px" height="160px"
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
              {{userName}}
              <i @click="addInfo" style="margin:0 0 0 10px;font-size:12px" >填写个人信息</i>
            </div>
            <div style="margin:12px 0 0 0;font-size:14px;color:rgb(0, 154, 97);text-align:left;">
              毕业院校：{{userSchool}}
            </div>
            <div style="margin:8px 0 0 0;font-size:14px;color:rgb(0, 154, 97);text-align:left;">
              目前从事行业：{{userJob}}
            </div>
            <div style="margin:8px 0 0 0;font-size:14px;color:rgb(0, 154, 97);text-align:left;">
              所在公司/组织名称：{{userCompany}}
            </div>
            <div style="margin:8px 0 0 0;font-size:14px;color:rgb(0, 154, 97);text-align:left;">
              个人网站主页：{{userPage}}
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
          <el-col :span="18">
            <router-view />
            <!-- <addInfo v-show="showAddInfo" @showM="showPostDivM"></addInfo> -->
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
      <el-upload ref="upload" class="upload-demo" action="http://47.115.131.98:888/uploadResource" :on-preview="handlePreview"
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
// import addInfo from './addInfo'
// import store from '../store'
export default {
  // store,
  name: 'personalPage',
  // components: {
  //   addInfo
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
      dialogFormVisible: false
      // fileList: [{ name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }, { name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }]
    }
  },
  methods: {
    checkResource (file) {
      console.log('badhbahb')
      axios({
        method: 'post',
        url: 'http://47.115.131.98:888/checkResource',
        data: {
          fileName: file.name,
          userCount: sessionStorage.userCount
        }
      }).then((response) => {
        // console.log(response.data)
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
      console.log(file, fileList)
    },
    handlePreview (file) {
      console.log(file)
    },
    handleExceed (files, fileList) {
      this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
    },
    beforeRemove (file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
    },
    beforeAvatarUpload (file) {
      console.log(file)
      // const isTAR = file.type === 'application/x-tar'
      // const isZIP = file.type === 'application/x-zip-compressed'
      // const isRAR = file.type === 'application/octet-stream'
      // const is7Z = file.type === 'application/x-7z-compressed'
      // const isSupport = isTAR || isRAR || isZIP || is7Z
      // console.log(isTAR)
      // console.log(isZIP)
      // console.log(isRAR)uploadFile
      // console.log(is7Z)
      // console.log(isSupport)
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
    // showPost (event) {
    //   // alert(111)
    //   // console.log(e.target)
    //   var el = event.currentTarget
    //   console.log($(el).attr('data-index'))
    //   sessionStorage.postId = $(el).attr('data-index')
    //   // alert('当前对象的内容：' + el.innerHTML)
    //   // console.log(this)
    //   router.push({ path: '/showPost' })
    // },
    addInfo () {
      // var _this = this
      // _this._data.showPostDiv = false
      // _this._data.showAddInfo = true
      router.push({ path: '/personalPage/addInfo' })
    },
    showPostDivM (data) {
      var _this = this
      _this._data.showPostDiv = data
    },
    upload () {
      alert(111)
      $('#headPic').click()
    },
    uploadHeadPic (e) {
      alert(222)
      var _this = this
      var files = e.target.files
      _this._data.headPicUrl = URL.createObjectURL(files[0])
      var formData = new FormData()
      // formData重复的往一个值添加数据并不会被覆盖掉，可以全部接收到，可以通过formData.getAll('files')来查看所有插入的数据
      formData.append('file', files[0])
      formData.append('userId', sessionStorage.userId)
      console.log(formData)
      for (var value of formData.values()) {
        console.log(value)
      }
      var url = 'http://47.115.131.98:888/upload'
      // var url = 'http://127.0.0.1:5000/upload'
      // var headers = {
      //   'Content-Type': 'application/x-www-form-urlencoded'
      // }
      // const instance = axios.create({
      //   withCredentials: true // 如果发送请求的时候需要带上token 验证之类的也可以写在这个对象里
      // })
      axios.post(url, formData).then((response) => {
        this.headPicUrl = response.data.path
        // this.headPicUrl = 'http://47.115.131.98:39002/headPic/6.jpg'
        this.$store.dispatch('commitHeadPicUrl', response.data.path)
        console.log(response.data)
      })
      // var json = {
      //   'token': sessionStorage.token,
      //   'userId': result.data.content.list[i].userId
      // }
      // var jsondata
      // jsondata = JSON.stringify(json)
      // console.log('-发送请求数据:')
      // console.log(json)
      // $.ajax({
      //   async: false,
      //   type: 'POST',
      //   url: url,
      //   data: formData,
      //   processData: false,
      //   contentType: false,
      //   success: function (result) {
      //     console.log('-返回结果: ')
      //     console.log(result)
      //     if (result.code === 200) {
      //     } else {
      //     }
      //   }
      // })
    },
    // getAllPost () {
    //   // alert(222)
    //   this.$axios({
    //     method: 'post',
    //     url: 'http://47.115.131.98:39002/getAllPost',
    //     data: {
    //       userId: sessionStorage.userId
    //     }
    //   }).then((response) => {
    //     console.log(response)
    //     // console.log(response.data.post[0].postValue.replace(/\s*/g, '').replace(/<[^>]+>/g, '').replace(/↵/g, '').replace(/[\r\n]/g, ''))
    //     for (var i = 0; i < response.data.post.length; i++) {
    //       // var reg = /<img\s+.*?src=(?:'(.+?)'|"(.+?)")\s*.*?(?:>|\/>)/igm
    //       // var reg = <img\b[^<>]*?\bsrc[\\s\t\r\n]*=[\\s\t\r\n]*[""']?[\\s\t\r\n]*(?<imgUrl>[^\\s\t\r\n""'<>]*)[^<>]*?/?[\\s\t\r\n]*>
    //       var imgReg = /<img.*?(?:>|\/>)/gi
    //       // 匹配src属性
    //       var srcReg = /src=[\\'\\"]?([^\\'\\"]*)[\\'\\"]?/i
    //       var arr = response.data.post[i].postValue.match(imgReg)
    //       // console.log('所有已成功匹配图片的数组：' + arr)
    //       if (arr != null) {
    //         for (var a = 0; a < arr.length; a++) {
    //           var src = arr[a].match(srcReg)
    //           // 获取图片地址
    //           if (src[1]) {
    //             response.data.post[i].postUrl = src[1]
    //             console.log('已匹配的图片地址' + (a + 1) + '：' + src[1])
    //           }

    //           // 当然你也可以替换src属性
    //           // if (src[0]) {
    //           //   var t = src[0].replace(/src/i, 'href')
    //           //   console.log(t)
    //           // }
    //         }
    //       }
    //       response.data.post[i].postValue = response.data.post[i].postValue.replace(/<[^>]+>/g, '').replace(/↵/g, '')
    //       //  Regex regImg = new Regex(@"<img\b[^<>]*?\bsrc[\s\t\r\n]*=[\s\t\r\n]*[""']?[\s\t\r\n]*(?<imgUrl>[^\s\t\r\n""'<>]*)[^<>]*?/?[\s\t\r\n]*>", RegexOptions.IgnoreCase)
    //       //  var r= /<img[^>]+?src=(/"|/')([^/'/"]+)/1/i
    //     }
    //     this.posts = response.data.post
    //     // var res =con.replace(/<[^>]+>/g, "");
    //   })
    // },
    uploadPost () {
      router.push({ path: '/post' })
    }
  },
  mounted () {
    alert(this.$route.query.userCount)
    // console.log(router.query.userCount)
    $('#personalPageDiv').height($(window).height() - $('#meun').height())
    console.log(this.$store.state.baseUrl)
    var _this = this
    _this._data.showPostDiv = true
    var wc = new Js2WordCloud(document.getElementById('wordCloudDiv'))
    var wd = $('#wordCloudDiv').width()
    $('#wordCloudDiv canvas').width(wd)
    $('#wordCloudDiv canvas').css('border-radius', '5px')

    axios({
      method: 'post',
      url: 'http://47.115.131.98:39002/getUserInfo',
      data: {
        userId: sessionStorage.userId
      }
    }).then((response) => {
      console.log(response.data)
      this.headPicUrl = response.data.userInfo[0].userImg
      sessionStorage.headPicUrl = response.data.userInfo[0].userImg
      this.$store.dispatch('commitHeadPicUrl', response.data.userInfo[0].userImg)
      this.$store.dispatch('commitUserName', response.data.userInfo[0].userName)
      this.$store.dispatch('commitUserJob', response.data.userInfo[0].userJob)
      this.$store.dispatch('commitUserCompany', response.data.userInfo[0].userCompany)
      // this.$store.dispatch('commitUserPage', response.data.userInfo[0].userPage)
      this.$store.dispatch('commitUserSchool', response.data.userInfo[0].userSchool)
      this._data.userName = response.data.userInfo[0].userName
      this._data.userJob = response.data.userInfo[0].userJob
      this._data.userCompany = response.data.userInfo[0].userCompany
      this._data.userPage = response.data.userInfo[0].userPage
      this._data.userSchool = response.data.userInfo[0].userSchool
      this._data.userCount = response.data.userInfo[0].userCount
      // this._data.ciyunList.push([response.data.userInfo[0].userName, 20])
      // this._data.ciyunList.push([response.data.userInfo[0].userName, 10])
      // this._data.ciyunList.push([response.data.userInfo[0].userName, 15])
      // this._data.ciyunList.push([response.data.userInfo[0].userJob, 10])
      // this._data.ciyunList.push([response.data.userInfo[0].userJob, 5])
      // this._data.ciyunList.push([response.data.userInfo[0].userJob, 15])
      // this._data.ciyunList.push([response.data.userInfo[0].userCompany, 15])
      // this._data.ciyunList.push([response.data.userInfo[0].userSchool, 15])
      // this._data.ciyunList.push([response.data.userInfo[0].userCompany, 10])
      // this._data.ciyunList.push([response.data.userInfo[0].userSchool, 20])
      // console.log(this._data.ciyunList)
      wc.setOption({
        maxFontSize: 30,
        minFontSize: 10,
        backgroundColor: 'rgb(246, 246, 246)',
        tooltip: {
          show: true,
          backgroundColor: 'rgba(2, 155, 98, 0.701961)'
        },
        list: [
          [this.$store.state.userName, 20],
          [this.$store.state.userName, 10],
          [this.$store.state.userSchool, 20],
          [this.$store.state.userCompany, 20],
          [this.$store.state.userName, 30],
          [this.$store.state.userJob, 10],
          [this.$store.state.userJob, 20],
          [this.$store.state.userCompany, 30],
          [this.$store.state.userCompany, 20],
          [this.$store.state.userSchool, 30],
          [this.$store.state.userName, 30]
        ],
        color: 'rgb(2, 155, 98)'
      })
    })
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
</style>
