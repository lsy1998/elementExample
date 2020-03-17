
<template>
  <div v-show="showAddInfo" style="width:90%;height:400px;padding:30px;background-color:rgb(217, 237, 247);margin:50px 0 0 0">
    <div style="float:left; margin:10px 0;">请选择你的性别：</div><i class="icon icon-uniE014" @click="hideAddInfoDiv" style="position:relative;bottom:10px; left:41%;"></i>
    <el-input v-model="userGender" placeholder="请输入内容"></el-input>
    <div style="float:left; margin:10px 0;">请输入你的毕业学校：</div><br>
    <el-input v-model="userSchool" placeholder="请输入内容"></el-input>
    <div style="float:left; margin:10px 0;">请输入你的公司/机构：</div>
    <el-input v-model="userCompany" placeholder="请输入内容"></el-input>
    <div style="float:left; margin:10px 0;">请输入你的工作：</div>
    <el-input v-model="userJob" placeholder="请输入内容"></el-input>
    <div style="float:left; margin:10px 0;">请输入你的个人主页网址：</div>
    <el-input placeholder="请输入内容" v-model="userPage">
    <template slot="prepend">Http://</template>
  </el-input>
  <el-button @click="addInfo">提交</el-button>
  </div>
</template>

<script>
// import router from '../router'
import axios from 'axios'
// import $ from 'jquery'
export default {
  name: 'addInfo',
  data () {
    return {
      userGender: '',
      userSchool: '',
      userCompany: '',
      userJob: '',
      userPage: ''
    }
  },
  methods: {
    hideAddInfoDiv () {
      var _this = this
      _this.$emit('showM', true)
    },
    addInfo () {
      var _this = this
      // if (_this._data.userGender) {

      // } else {

      // }
      axios({
        method: 'post',
        url: 'http://localhost:8082/addUserInfo',
        data: {
          userGender: 1,
          userSchool: _this._data.userSchool,
          userCompany: _this._data.userCompany,
          userJob: _this._data.userJob,
          userPage: _this._data.userPage,
          userId: sessionStorage.userId
        }
      }).then(function (response) {
        console.log(response.data)
        // sessionStorage.userId = response.data.userId
        // router.push({ path: '/personalPage' })
        // console.log(sessionStorage.userId)
      })
    }
  },
  mounted () {
    // $('el-select').css('float', 'left')
  }
}
</script>

<style scoped>
@import "../assets/iconfont/iconfont.css";
</style>
