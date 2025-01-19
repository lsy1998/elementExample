<template>
  <div id='loginDiv'>
    <div style="width:1000px;height:530px;margin:100px auto;">
    <div style="width:590px;height:530px;display:inline-block;">
        <img style="display:inline-block;vertical-align:top;margin:0px 0 0 0;height:100%"
          src="../assets/image/a08ef81d577c4642f5faa9bb3055a4da_2_3_art.png" alt="">
  </div>
    <div style="width:405px;display:inline-block;height:530px;vertical-align:top;background:#52A0FD;background:-webkit-linear-gradient(left,#52A0FD 0%,#00e2fa 80%,#00e2fa 100%);background:linear-gradient(to right,#52A0FD 0%,#00e2fa 80%,#00e2fa 100%);position:relative;right:10px;">
     <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
          <!-- 邮箱输入框 -->
      <el-form-item style="width:150px;margin:0 0 0 55px;" prop="userCount">
            <el-tooltip class="item" effect="dark" content="请输入邮箱" placement="right-end">
              <el-input clearable v-model="ruleForm.userCount" type="email" placeholder="请输入邮箱"
                style="margin:110px 0 0 0px; width:300px;">
                <i slot="prefix" class="el-input__icon el-icon-message"></i>
              </el-input>
        </el-tooltip>
      </el-form-item>
          <!-- 密码输入框 -->
          <el-form-item style="width:150px;margin:0 0 0 55px;" prop="userPassword">
            <el-tooltip class="item" effect="dark" content="请输入密码" placement="right-end">
              <el-input show-password v-model="ruleForm.userPassword" type="password" placeholder="请输入密码"
                style="margin:30px 0 0 0px;width:300px;">
                <i slot="prefix" class="el-input__icon el-icon-lock"></i>
              </el-input>
      </el-tooltip>
      </el-form-item>
          <!-- 登录按钮 -->
          <el-button
            style="margin:30px 0 0 5px;width:300px; background-color:rgb(19, 130, 2142);border:none;color:white;"
            @click="login">登录</el-button>
          <!-- 注册链接 -->
          <div style="margin:10px 0 0 0px;">
            <router-link to="/registe" style="color:white;text-decoration:none;">
              还没有账号？立即注册
            </router-link>
          </div>
      </el-form>
      </div>
    </div>
</div>
</template>

<script>
import $ from 'jquery'
import axios from 'axios'
import md5 from 'js-md5'
import router from '../router'

export default {
  name: 'login',
  data() {
    // 邮箱验证规则
    const validateEmail = (rule, value, callback) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (value === '') {
        callback(new Error('请输入邮箱地址'))
      } else if (!emailRegex.test(value)) {
        callback(new Error('请输入有效的邮箱地址'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        userCount: '',
        userPassword: ''
      },
      rules: {
        userCount: [
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          { validator: validateEmail, trigger: 'blur' }
        ],
        userPassword: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 登录方法
    async login() {
      try {
        await this.$refs.ruleForm.validate()

        const response = await this.$axios({
          method: 'post',
          url: 'https://graduation-project.lishangying.site/login',
          data: {
            userCount: this.ruleForm.userCount,
            userPassword: md5(`${this.ruleForm.userPassword}545464`)
          }
        })

        if (response.data.code === 200) {
          // 获取完整的用户信息
          const userInfo = response.data.userInfo

          // 更新 Vuex store，存储所有用户信息
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

          // 设置登录状态
          this.$store.commit('SET_LOGIN_STATE', true)

          // 只在 sessionStorage 中存储必要的信息
          sessionStorage.isLogin = 'true'
          sessionStorage.userId = userInfo.userId

          this.$message.success('登录成功')
          this.$router.push(`/personalPage/${userInfo.userId}/myPost`)
        } else {
          this.$message.error(response.data.msg || '登录失败')
        }
      } catch (error) {
        if (error.message) {
          this.$message.error(error.message)
        } else {
          console.error('登录失败:', error)
          this.$message.error('登录失败，请稍后重试')
        }
      }
    }
  },
  mounted() {
    $('#loginDiv').height($(window).height() - $('#meun').height() - 100);
  }
}
</script>

<style scoped>
::-ms-clear,
::-ms-reveal {
  display: none;
}
</style>
