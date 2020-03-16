<template>
<div  @resize="resize" id='registeDiv' style="">
<div style="width:1000px;height:530px;margin:100px auto; ">
    <div style="width:590px;height:530px;display:inline-block;">
        <img style="display:inline-block;vertical-align:top;margin:0px 0 0 0;height:100%" src="../assets/image/a08ef81d577c4642f5faa9bb3055a4da_2_3_art.png" alt="">
  </div>
    <div style="width:405px;display:inline-block;height:530px;vertical-align:top;background:#52A0FD;background:-webkit-linear-gradient(left,#52A0FD 0%,#00e2fa 80%,#00e2fa 100%);background:linear-gradient(to right,#52A0FD 0%,#00e2fa 80%,#00e2fa 100%);position:relative;right:10px;">
      <el-input clearable v-model="userCount" ref='hello' type="text"  placeholder="请输入用户名" style="margin:150px 0 0 5px; width:300px;" ><i slot="prefix" class="el-input__icon el-icon-user"></i></el-input>
      <el-input show-password  v-model="userPassword" ref='hello' type="password" placeholder="请输入密码" style="margin:30px 0 0 5px;width:300px;"><i slot="prefix" class="el-input__icon el-icon-lock" ></i></el-input><br>
      <el-input show-password  v-model="userPassword" ref='hello' type="password1" placeholder="请确认密码" style="margin:30px 0 0 5px;width:300px;"><i slot="prefix" class="el-input__icon el-icon-lock" ></i></el-input><br>
      <el-button style="margin:30px 0 0 5px;width:300px; background-color:rgb(19, 130, 2142);border:none;color:white;" @click="registe">注册</el-button>
    </div>
  </div>
</div>
</template>

<script>
import $ from 'jquery'
import axios from 'axios'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
export default {
  name: 'registe',
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
    registe () {
      console.log('王者荣耀')
      var _this = this
      axios({
        method: 'post',
        url: 'http://localhost:8082/addUser',
        data: {
          userCount: _this._data.userCount,
          userPassword: _this._data.userPassword
        }
      }).then(function (response) {
        console.log(response.data)
      })
      // axios.post('http://localhost:8081/addUser', {
      //   userCount: _this._data.userCount,
      //   userPassword: _this._data.userPassword
      // })
      //   .then(function (response) {
      //     console.log(response)
      //   })
      //   .catch(function (error) {
      //     console.log(error)
      //   })
      // $.ajax({
      //   async: false,
      //   type: 'GET',
      //   url: 'http://127.0.0.1:8082/hello?userCount=111&userPassword=222',
      //   dataType: 'json',
      //   contentType: 'application/json;charset=UTF-8',
      //   success: function (result) {
      //     console.log('-返回结果: ')
      //     console.log(result)
      //     if (result.code === 200) {
      //     } else {
      //     }
      //   }
      // })
      // var json = {
      //   userCount: _this._data.userCount,
      //   userPassword: _this._data.userPassword
      // }
      // // var jsondata
      // // jsondata = JSON.stringify(json)
      // console.log('-发送请求数据:')
      // console.log(json)
      // $.ajax({
      //   async: false,
      //   type: 'POST',
      //   url: 'http://127.0.0.1:8082/addUser',
      //   data: json,
      //   dataType: 'json',
      //   contentType: 'application/json;charset=UTF-8',
      //   success: function (result) {
      //     console.log('-返回结果: ')
      //     console.log(result)
      //     if (result.code === 200) {
      //     } else {
      //     }
      //   }
      // })
    }
  },
  mounted () {
    $('#registeDiv').height($(window).height() - $('#meun').height() - 100)
    // alert($(window).height() - $('#meun').height())
    // resize()
  }
}
</script>
<style scoped>
/* @import '../assets/iconfont/iconfont.css' */
  ::-ms-clear, ::-ms-reveal{display: none;}

</style>
