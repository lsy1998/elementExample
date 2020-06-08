<template>
<div id='loginDiv' >
<div style="width:1000px;height:530px;margin:100px auto; ">
    <div style="width:590px;height:530px;display:inline-block;">
        <img style="display:inline-block;vertical-align:top;margin:0px 0 0 0;height:100%" src="../assets/image/a08ef81d577c4642f5faa9bb3055a4da_2_3_art.png" alt="">
  </div>
    <div style="width:405px;display:inline-block;height:530px;vertical-align:top;background:#52A0FD;background:-webkit-linear-gradient(left,#52A0FD 0%,#00e2fa 80%,#00e2fa 100%);background:linear-gradient(to right,#52A0FD 0%,#00e2fa 80%,#00e2fa 100%);position:relative;right:10px;">
     <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
      <el-form-item style="width:150px;margin:0 0 0 55px;" prop="userCount">
        <el-tooltip class="item" effect="dark" content="请输入11位手机号码" placement="right-end">
        <el-input clearable v-model="ruleForm.userCount" ref='hello' type="text"  placeholder="请输入用户名" style="margin:150px 0 0 0px; width:300px;" ><i slot="prefix" class="el-input__icon el-icon-user"></i></el-input>
        </el-tooltip>
      </el-form-item>
      <el-form-item style="width:150px;margin:0 0 0 55px;"  prop="userPassword">
        <el-tooltip  effect="dark" content="请输入您的密码" placement="right-end">
      <el-input show-password  v-model="ruleForm.userPassword" ref='hello' type="password" placeholder="请输入密码" style="margin:30px 0 0 0px;width:300px;"><i slot="prefix" class="el-input__icon el-icon-lock" ></i></el-input>
      </el-tooltip>
      </el-form-item>
      <el-button style="margin:20px 0 0 5px;width:80px; background-color:rgba(19, 130, 2142,0);border:none;color:white; position:relative; right:86px; bottom:30px;">记住密码</el-button><el-button style="margin:30px 0 0 5px;width:80px; background-color:rgba(19, 130, 2142, 0);border:none;color:white;position:relative; left:64px; bottom:30px;" @click="forgetPassword">忘记密码？</el-button>
      <el-button style="margin:0px 0 0 5px;width:300px; background-color:rgb(19, 130, 2142);border:none;color:white;position:relative; bottom:30px;" @click="login">登录</el-button>
      </el-form>
    </div>
  </div>
     <!-- <ckeditor value="Hello, World!"></ckeditor> -->
</div>
</template>

<script>
import $ from 'jquery'
import axios from 'axios'
// import router from 'vue-router'
// import router from '../router'
import md5 from 'js-md5'
export default {
  name: 'login',
  data () {
    return {
      ruleForm: {
        userPassword: '',
        userCount: ''
      },
      rules: {
        userCount: [
          { required: true, message: '内容不能为空', trigger: 'blur' },
          { min: 11, max: 11, message: '请输入11位手机号码', trigger: 'change' }
        ],
        userPassword: [
          { required: true, message: '内容不能为空', trigger: 'blur' }
          // { min: 11, max: 11, message: '请输入11位手机号码', trigger: 'change' }
        ]
      },
      style1: {
        backgroundImage: 'url(' + require('../assets/image/desktop-viewer-with-iphone.jpg-1578217495543.png') + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'fit'
      },
      imageUrl: '../assets/image/desktop-viewer-with-iphone.jpg',
      icon1: 'iconfont icon-user1',
      icon2: 'iconfont icon-eyeclose-fill',
      userCount: '',
      userPassword: ''
    }
  },
  methods: {
    forgetPassword () {
      this.$router.push({path: '/changePassword'})
    },
    // change (e) {
    //   console.log(this.$refs.hello.html)
    //   // this.$refs.hello.$forceUpdate()
    // },
    resize () {
      $('#loginDiv').height($(window).height() - $('#meun').height() - 100)
    },
    login () {
      // var _this = this
      axios({
        method: 'post',
        url: 'http://47.115.131.98:39002/login',
        data: {
          userCount: this.ruleForm.userCount,
          userPassword: md5(`${this.ruleForm.userPassword}545464`)
        }
      }).then((response) => {
        console.log(response.data)
        sessionStorage.isLogin = true
        sessionStorage.userId = response.data.userId
        sessionStorage.userCount = this.ruleForm.userCount
        this.$cookies.set('userCount', this.ruleForm.userCount, 60 * 60 * 24 * 7)
        this.$cookies.set('userPassword', this.ruleForm.userPassword, 60 * 60 * 24 * 7)

        axios({
          method: 'post',
          url: 'http://47.115.131.98:39002/getUserInfo',
          data: {
            userId: response.data.userId
          }
        }).then((response) => {
          console.log(response.data)
          sessionStorage.headPicUrl = response.data.userInfo[0].userImg
          this.$store.dispatch('commitHeadPicUrl', response.data.userInfo[0].userImg)
        })

        console.log(sessionStorage.preRoute)
        if (sessionStorage.preRoute === null || sessionStorage.preRoute === undefined) {
          // console.log()
          // alert(111)
          this.$router.push({
            path: '/personalPage',
            query: {
              userCount: this.ruleForm.userCount
            }
          })
        } else {
          console.log(sessionStorage.preRoute)
          this.$router.push({path: `${sessionStorage.preRoute}`})
        }

        // console.log(sessionStorage.userId)
      })
    }
  },
  mounted () {
    if (this.$cookies.get('userCount') !== '') {
      this.ruleForm.userCount = this.$cookies.get('userCount')
      this.ruleForm.userPassword = this.$cookies.get('userPassword')
    }
    $('#loginDiv').height($(window).height() - $('#meun').height() - 100)
    // alert($(window).height() - $('#meun').height())
    // resize()
  }
}
</script>
<style scoped>
/* @import '../assets/iconfont/iconfont.css' */
  ::-ms-clear, ::-ms-reveal{display: none;}

</style>
