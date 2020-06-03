<template>
  <div @resize="resize" id='registeDiv' style="">
    <div style="width:1000px;height:530px;margin:100px auto; ">
      <div style="width:590px;height:530px;display:inline-block;">
        <img style="display:inline-block;vertical-align:top;margin:0px 0 0 0;height:100%"
          src="../assets/image/a08ef81d577c4642f5faa9bb3055a4da_2_3_art.png" alt="">
      </div>
      <div
        style="width:405px;display:inline-block;height:530px;vertical-align:top;background:#52A0FD;background:-webkit-linear-gradient(left,#52A0FD 0%,#00e2fa 80%,#00e2fa 100%);background:linear-gradient(to right,#52A0FD 0%,#00e2fa 80%,#00e2fa 100%);position:relative;right:10px;">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
          <el-form-item style="width:150px;margin:0 0 0 55px;" prop="userCount">
            <el-tooltip class="item" effect="dark" content="请输入11位手机号码" placement="right-end">
              <el-input clearable v-model="ruleForm.userCount" ref='hello' type="text" placeholder="请输入用户名"
                style="margin:110px 0 0 0px; width:300px;"><i slot="prefix" class="el-input__icon el-icon-user"></i>
              </el-input>
            </el-tooltip>
          </el-form-item>
          <el-form-item style="width:150px;margin:0 0 0 55px;" prop="userPassword">
            <el-tooltip effect="dark" content="请输入您的密码" placement="right-end">
              <el-input show-password v-model="ruleForm.userPassword" ref='hello' type="password" placeholder="请输入密码"
                style="margin:30px 0 0 0px;width:300px;"><i slot="prefix" class="el-input__icon el-icon-lock"></i>
              </el-input>
            </el-tooltip>
          </el-form-item>
          <el-form-item style="width:150px;margin:0 0 0 55px;" prop="checkUserPassword">
            <el-tooltip class="item" effect="dark" content="请确认您的密码" placement="right-end">
              <el-input show-password v-model="ruleForm.checkUserPassword" ref='hello' type="password"
                placeholder="请输入密码" style="margin:30px 0 0 0px;width:300px;"><i slot="prefix"
                  class="el-input__icon el-icon-lock"></i></el-input>
            </el-tooltip>
          </el-form-item>
          <el-row style="margin:30px 0 0 0">
            <el-col :span='11'>
              <el-form-item style="width:150px;margin:0 0 0 55px;" prop="checkNum">
                <!-- <el-tooltip class="item" effect="dark" content="请输入11位手机号码" placement="right-end"> -->
                <el-input v-model="ruleForm.checkNum" ref='hello' placeholder="请输入验证码"
                  style="margin:0px 0 0 0px;width:160px;"></el-input>
                <!-- </el-tooltip> -->
              </el-form-item>
            </el-col>

            <el-col :span='13'>
              <el-button style="margin:0 0 0 5px;background-color:rgb(19, 130, 255);color:white;border:none;" @click="getCheckNum">
                获取验证码</el-button>
            </el-col>
          </el-row>
          <el-button
            style="margin:30px 0 0 5px;width:300px; background-color:rgb(19, 130, 2142);border:none;color:white;"
            @click="registe">修改密码</el-button>
        </el-form>
        <!-- <el-button style="margin:30px 0 0 5px;width:300px; background-color:rgb(19, 130, 2142);border:none;color:white;" @click="moban">模板</el-button> -->
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
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.userPassword) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      userPassword: '',
      userCount: '',
      ruleForm: {
        userPassword: '',
        checkUserPassword: '',
        userCount: '',
        checkNum: ''
      },
      rules: {
        userCount: [
          { required: true, message: '内容不能为空', trigger: 'blur' },
          { min: 11, max: 11, message: '请输入11位手机号码', trigger: 'change' }
        ],
        checkUserPassword: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        userPassword: [
          { required: true, message: '内容不能为空', trigger: 'blur' }
          // { min: 11, max: 11, message: '请输入11位手机号码', trigger: 'change' }
        ],
        checkNum: [
          { required: true, message: '内容不能为空', trigger: 'blur' },
          { min: 6, max: 6, message: '请输入6位验证码', trigger: 'change' }
        ]
      }
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
::-ms-clear,
::-ms-reveal {
  display: none;
}
</style>
