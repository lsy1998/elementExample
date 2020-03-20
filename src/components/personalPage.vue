<template>
  <div>
    <el-row>
      <el-col :span="6">
        <div style="color:white;">bfbcbc</div>
      </el-col>
      <el-col :span="12">
        <el-row>
          <el-col :span="6" style="height:200px;">
            <el-row>
              <input type="file" multiple @change="uploadHeadPic" v-show="showHeadPic" id="headPic" >
              <img :src="this.$store.state.headPicUrl" alt="" width="60%" height="60%" style="margin:40px 8px 0 0;object-fit: cover;border-radius:5px;" @click="upload">
            </el-row>
            <el-row style="margin:10px 0 0 20px;">
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
            </el-row>
          </el-col>
          <el-col :span="6">
            <div style="margin:35px 0 0 0;font-size:24px;text-align:left">
              {{userName}}
              <i @click="addInfo" style="margin:0 0 0 10px" class="el-icon-coordinate"></i>
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
            <el-row>
              <el-button style="margin:50px 0 0 0;width:60%;background-color:rgb(2, 155, 98);color:white;">我的主页
              </el-button>
            </el-row>
            <el-row>
              <el-button @click="showPost" style="margin:10px 0 0 0px;width:60%;background-color:rgb(2, 155, 98);color:white;">我的帖子
              </el-button>
            </el-row>
            <el-row>
              <el-button style="margin:10px 0 0 0px;width:60%;background-color:rgb(2, 155, 98);color:white;">发布帖子
              </el-button>
            </el-row>
          </el-col>
          <el-col :span="18">
            <div style="" id="postDiv" v-show="showPostDiv">
            <div style="margin:50px 0 0 0;font-size:14px;color:rgb(0, 154, 97);text-align:left;height:200px; ">
              <el-row style="height:100%">
                <el-col :span="18" style="height:100%;">
                  <div style="width:100%;margin:20px 0 0 0; height:90%">
                    <h3 style="height:20%;display:inline-block;float:left;margin:0 0 0 10px">
                      标题标题标题标题标题标题标题标题标题标题
                    </h3>
                    <p style="height:57%;display:inline-block; font-size:12px;margin:0 0 0 7px">
                      正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正正文正文正文正文正文正文正正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文
                    </p>
                    <div style="height:20%;display:inline-block; width:100%">
                      <div class="el-icon-star-off"
                        style="font-size:20px;float:left;margin:0 0 0 10px;display:inline-block;color:rgb(2, 155, 98)">
                        <div
                          style="font-size:14px;display:inline-block;margin:0 0 0 5px;color:rgb(2, 155, 98);position:relative;bottom:2px;">
                          x7
                        </div>
                      </div>
                      <div class="el-icon-share"
                        style="font-size:20px;float:left;display:inline-block;margin:0 0 0 15px;color:rgb(2, 155, 98)">
                      </div>
                      <div
                        style="font-size:14px;display:inline-block;margin:0 0 0 15px;color:rgb(2, 155, 98);float:left;">
                        2020：2：22
                      </div>
                      <el-avatar shape="square" :size="20" :src="squareUrl" style="float:right;"></el-avatar>
                    </div>
                  </div>
                  <div></div>
                </el-col>
                <el-col :span="6" style="height:100%;">
                  <div
                    style="height:80%;margin:20px 10px;background-color:rgb(2, 155, 98);border-radius:5px;color:rgb(2, 155, 98)">
                    cxcx
                  </div>
                </el-col>
              </el-row>
            </div>
            <div style="margin:50px 0 0 0;font-size:14px;color:rgb(0, 154, 97);text-align:left;height:200px; ">
              <el-row style="height:100%">
                <el-col :span="18" style="height:100%;">
                  <div style="width:100%;margin:20px 0 0 0; height:90%">
                    <h3 style="height:20%;display:inline-block;float:left;margin:0 0 0 10px">
                      标题标题标题标题标题标题标题标题标题标题
                    </h3>
                    <p style="height:57%;display:inline-block; font-size:12px;margin:0 0 0 7px">
                      正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正正文正文正文正文正文正文正正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文
                    </p>
                    <div style="height:20%;display:inline-block; width:100%">
                      <div class="el-icon-star-off"
                        style="font-size:20px;float:left;margin:0 0 0 10px;display:inline-block;color:rgb(2, 155, 98)">
                        <div
                          style="font-size:14px;display:inline-block;margin:0 0 0 5px;color:rgb(2, 155, 98);position:relative;bottom:2px;">
                          x7
                        </div>
                      </div>
                      <div class="el-icon-share"
                        style="font-size:20px;float:left;display:inline-block;margin:0 0 0 15px;color:rgb(2, 155, 98)">
                      </div>
                      <div
                        style="font-size:14px;display:inline-block;margin:0 0 0 15px;color:rgb(2, 155, 98);float:left;">
                        2020：2：22
                      </div>
                      <el-avatar shape="square" :size="20" :src="squareUrl" style="float:right;"></el-avatar>
                    </div>
                  </div>
                  <div></div>
                </el-col>
                <el-col :span="6" style="height:100%;">
                  <div
                    style="height:80%;margin:20px 10px;background-color:rgb(2, 155, 98);border-radius:5px;color:rgb(2, 155, 98)">
                    cxcx
                  </div>
                </el-col>
              </el-row>
            </div>
            <div style="margin:50px 0 0 0;font-size:14px;color:rgb(0, 154, 97);text-align:left;height:200px; ">
              <el-row style="height:100%">
                <el-col :span="18" style="height:100%;">
                  <div style="width:100%;margin:20px 0 0 0; height:90%">
                    <h3 style="height:20%;display:inline-block;float:left;margin:0 0 0 10px">
                      标题标题标题标题标题标题标题标题标题标题
                    </h3>
                    <p style="height:57%;display:inline-block; font-size:12px;margin:0 0 0 7px">
                      正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正正文正文正文正文正文正文正正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文
                    </p>
                    <div style="height:20%;display:inline-block; width:100%">
                      <div class="el-icon-star-off"
                        style="font-size:20px;float:left;margin:0 0 0 10px;display:inline-block;color:rgb(2, 155, 98)">
                        <div
                          style="font-size:14px;display:inline-block;margin:0 0 0 5px;color:rgb(2, 155, 98);position:relative;bottom:2px;">
                          x7
                        </div>
                      </div>
                      <div class="el-icon-share"
                        style="font-size:20px;float:left;display:inline-block;margin:0 0 0 15px;color:rgb(2, 155, 98)">
                      </div>
                      <div
                        style="font-size:14px;display:inline-block;margin:0 0 0 15px;color:rgb(2, 155, 98);float:left;">
                        2020：2：22
                      </div>
                      <el-avatar shape="square" :size="20" :src="squareUrl" style="float:right;"></el-avatar>
                    </div>
                  </div>
                  <div></div>
                </el-col>
                <el-col :span="6" style="height:100%;">
                  <div
                    style="height:80%;margin:20px 10px;background-color:rgb(2, 155, 98);border-radius:5px;color:rgb(2, 155, 98)">
                    cxcx
                  </div>
                </el-col>
              </el-row>
            </div>
            </div>
          <!-- <router-view></router-view> -->
          <addInfo v-show="showAddInfo" @showM="showPostDivM"></addInfo>
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
  </div>
</template>

<script>
// require('../assets/js/js2wordcloud')
import Js2WordCloud from 'js2wordcloud'
import $ from 'jquery'
import axios from 'axios'
import router from '../router'
import addInfo from './addInfo'
export default {
  name: 'personalPage',
  components: {
    addInfo
  },
  data () {
    return {
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
      ciyunList: []
    }
  },
  methods: {
    showPost () {
      alert(111)
      router.push({ path: '/showPost' })
    },
    addInfo () {
      var _this = this
      _this._data.showPostDiv = false
      _this._data.showAddInfo = true
      // router.push({ path: '/personalPage/addInfo' })
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
      for (let i = 0; i < files.length; i++) {
        formData.append('files', files[i])
      }
      formData.append('userId', sessionStorage.userId)
      var url = 'http://localhost:8082/uploadHeadPic'
      var headers = {
        'Content-Type': 'multipart/form-data'
      }
      axios.post(url, formData, {headers: headers}).then((response) => {
        // var _this = this
        // _this._data.headPicUrl = response.data.headPicUrl
        this.$store.dispatch('commitHeadPicUrl', response.data.headPicUrl)
        console.log(response.data)
        // sessionStorage.userId = response.data.userId
        // router.push({ path: '/personalPage' })
        // console.log(sessionStorage.userId)
      })
    }
  },
  mounted () {
    console.log(this.$store.state.baseUrl)
    var _this = this
    _this._data.showPostDiv = true
    var wc = new Js2WordCloud(document.getElementById('wordCloudDiv'))
    var wd = $('#wordCloudDiv').width()
    $('#wordCloudDiv canvas').width(wd)
    $('#wordCloudDiv canvas').css('border-radius', '5px')

    axios({
      method: 'post',
      url: 'http://localhost:8082/getUserInfo',
      data: {
        userId: sessionStorage.userId
      }
    }).then((response) => {
      console.log(response.data)
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
    })
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
  }
}
</script>

<style scoped>
@import "../assets/iconfont/iconfont.css";
</style>
