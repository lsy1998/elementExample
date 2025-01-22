<template>
  <div id='loginDiv' class="page-container">
    <div class="login-container">
      <div class="left-section">
        <div class="animated-bg"></div>
        <div class="welcome-content">
          <div class="brand-logo">
            <i class="el-icon-connection"></i>
          </div>
          <h1>Welcome Back!</h1>
          <div class="feature-icons">
            <div class="icon-item">
              <i class="el-icon-edit"></i>
            </div>
            <div class="icon-item">
              <i class="el-icon-share"></i>
            </div>
            <div class="icon-item">
              <i class="el-icon-reading"></i>
            </div>
          </div>
          <div class="register-link">
            还没有账号？ <router-link to="/registe" class="register-text">立即注册</router-link>
          </div>
        </div>
      </div>
      <div class="right-section">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="login-form">
          <h2 class="form-title">账号登录</h2>
          <el-form-item prop="userCount">
            <el-tooltip class="item" effect="dark" content="请输入邮箱" placement="right-end">
              <el-input clearable v-model="ruleForm.userCount" type="email" placeholder="请输入邮箱">
                <i slot="prefix" class="el-input__icon el-icon-message"></i>
              </el-input>
            </el-tooltip>
          </el-form-item>
          <el-form-item prop="userPassword">
            <el-tooltip class="item" effect="dark" content="请输入密码" placement="right-end">
              <el-input show-password v-model="ruleForm.userPassword" type="password" placeholder="请输入密码">
                <i slot="prefix" class="el-input__icon el-icon-lock"></i>
              </el-input>
            </el-tooltip>
          </el-form-item>
          <el-form-item>
            <el-button class="login-btn" type="primary" @click="login">登录</el-button>
          </el-form-item>
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

.page-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f7fa;
  overflow-y: hidden;
}

.login-container {
  display: flex;
  width: 900px;
  height: 454px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  overflow: hidden;
  background: white;
  margin: 0 auto;
}

.left-section {
  flex: 0.7;
  background: linear-gradient(135deg, #029B62 0%, #029B90 100%);
  padding: 30px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.animated-bg {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    45deg,
    #029B62,
    #029B90,
    #02B062,
    #029B78
  );
  animation: gradient 15s ease infinite;
  transform-origin: center center;
  z-index: 1;
  opacity: 0.8;
}

.welcome-content {
  text-align: center;
  position: relative;
  z-index: 2;
}

.brand-logo {
  font-size: 3.5em;
  margin-bottom: 25px;
  animation: float 3s ease-in-out infinite;
  position: relative;
}

.welcome-content h1 {
  font-size: 2.5em;
  margin-bottom: 40px;
  font-weight: 300;
}

.feature-icons {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 30px 0;
}

.icon-item {
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5em;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.icon-item::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  transform: scale(0);
  transition: transform 0.5s ease;
}

.icon-item:hover::before {
  transform: scale(2);
}

.icon-item i {
  position: relative;
  z-index: 1;
}

.register-link {
  position: absolute;
  left: 0;
  right: 0;
  font-size: 1em;
}

.register-text {
  color: white;
  text-decoration: none;
  border-bottom: 1px solid white;
  padding-bottom: 2px;
  transition: all 0.3s ease;
}

.register-text:hover {
  opacity: 0.8;
}

.right-section {
  flex: 1;
  padding: 60px 40px;
  display: flex;
  align-items: center;
}

.login-form {
  max-width: 320px;
  margin: 0 auto;
  width: 100%;
}

.form-title {
  text-align: center;
  color: #029B62;
  margin-bottom: 50px;
  font-size: 1.8em;
  font-weight: 300;
}

.el-form-item {
  margin-bottom: 30px;
}

.el-form-item:last-child {
  margin-top: 50px;
  margin-bottom: 0;
}

.el-input {
  margin-bottom: 0;
}

.el-input__inner {
  border-radius: 8px;
}

.login-btn {
  width: 100%;
  background-color: #029B62;
  border: none;
  height: 40px;
  font-size: 1.1em;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.login-btn:hover {
  background-color: #028B52;
  transform: translateY(-2px);
}

/* 添加响应式悬浮效果 */
.el-input__inner:focus {
  border-color: #029B62;
  box-shadow: 0 0 0 2px rgba(2, 155, 98, 0.1);
}

@keyframes gradient {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
}

@keyframes pulse {
  0% {
    transform: translate(-50%, -50%) scale(0.8);
    opacity: 0.5;
  }
  50% {
    transform: translate(-50%, -50%) scale(1.2);
    opacity: 0.2;
  }
  100% {
    transform: translate(-50%, -50%) scale(0.8);
    opacity: 0.5;
  }
}
</style>
