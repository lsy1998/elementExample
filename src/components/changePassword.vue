<template>
<div  @resize="resize" id='changePasswordDiv' style="">
<div style="width:1000px;height:530px;margin:100px auto; ">
    <div style="width:590px;height:530px;display:inline-block;">
        <img style="display:inline-block;vertical-align:top;margin:0px 0 0 0;height:100%" src="../assets/image/a08ef81d577c4642f5faa9bb3055a4da_2_3_art.png" alt="">
  </div>
    <div style="width:405px;display:inline-block;height:530px;vertical-align:top;background:#52A0FD;background:-webkit-linear-gradient(left,#52A0FD 0%,#00e2fa 80%,#00e2fa 100%);background:linear-gradient(to right,#52A0FD 0%,#00e2fa 80%,#00e2fa 100%);position:relative;right:10px;">
      <el-input clearable v-model="userCount" ref='hello' type="text"  placeholder="请输入用户名" style="margin:150px 0 0 5px; width:300px;" ><i slot="prefix" class="el-input__icon el-icon-user"></i></el-input>
      <el-input show-password  v-model="userPassword" ref='hello' type="password" placeholder="请输入密码" style="margin:30px 0 0 5px;width:300px;"><i slot="prefix" class="el-input__icon el-icon-lock" ></i></el-input><br>
      <el-input show-password  v-model="userPassword" ref='hello' type="password1" placeholder="请确认密码" style="margin:30px 0 0 5px;width:300px;"><i slot="prefix" class="el-input__icon el-icon-lock" ></i></el-input><br>
      <el-button style="margin:30px 0 0 5px;width:300px; background-color:rgb(19, 130, 2142);border:none;color:white;" @click="changePassword">修改密码</el-button>
    </div>
  </div>
</div>
</template>

<script>
import $ from 'jquery'
import axios from 'axios'
import router from '../router'
import md5 from 'js-md5'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
export default {
  name: 'changePassword',
  data () {
    return {
      userPassword: '',
      userCount: ''
    }
  },
  methods: {
    change (e) {
      console.log(this.$refs.hello.html)
      // this.$refs.hello.$forceUpdate()
    },
    resize () {
      $('#registeDiv').height($(window).height() - $('#meun').height() - 100)
    },
    changePassword () {
    //   console.log('王者荣耀')
      var _this = this
      axios({
        method: 'post',
        url: 'http://47.115.131.98:39002/changePassword',
        data: {
          userCount: _this._data.userCount,
          userPassword: md5(`${_this._data.userPassword}545464`)
        }
      }).then(function (response) {
        console.log(response.data)
        if (response.data.code === 200) {
          router.push({ path: '/personalPage' })
        }
      })
    }
  },
  mounted () {
    $('#changePasswordDiv').height($(window).height() - $('#meun').height() - 100)
    // alert($(window).height() - $('#meun').height())
    // resize()
  }
}
</script>
<style scoped>
/* @import '../assets/iconfont/iconfont.css' */
  ::-ms-clear, ::-ms-reveal{display: none;}

</style>
