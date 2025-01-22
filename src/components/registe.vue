<template>
  <div id='registeDiv' class="page-container">
    <div class="register-container">
      <div class="left-section">
        <div class="animated-bg"></div>
        <div class="welcome-content">
          <div class="brand-logo">
            <i class="el-icon-connection"></i>
          </div>
          <h1>Hello!</h1>
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
          <div class="login-link">
            已有账号？ <router-link to="/login" class="login-text">登录</router-link>
          </div>
        </div>
      </div>
      <div class="right-section">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="register-form">
          <h2 class="form-title">注册账号</h2>
          <el-form-item prop="userCount">
            <el-tooltip class="item" effect="dark" content="请输入有效的邮箱地址" placement="right-end">
              <el-input clearable v-model="ruleForm.userCount" ref='hello' type="email" placeholder="请输入邮箱">
                <i slot="prefix" class="el-input__icon el-icon-message"></i>
              </el-input>
            </el-tooltip>
          </el-form-item>
          <el-form-item prop="userPassword">
            <el-tooltip effect="dark" content="请输入您的密码" placement="right-end">
              <el-input show-password v-model="ruleForm.userPassword" type="password" placeholder="请输入密码">
                <i slot="prefix" class="el-input__icon el-icon-lock"></i>
              </el-input>
            </el-tooltip>
          </el-form-item>
          <el-form-item prop="checkUserPassword">
            <el-tooltip class="item" effect="dark" content="请确认您的密码" placement="right-end">
              <el-input show-password v-model="ruleForm.checkUserPassword" type="password" placeholder="请再次输入密码">
                <i slot="prefix" class="el-input__icon el-icon-lock"></i>
              </el-input>
            </el-tooltip>
          </el-form-item>
          <el-form-item prop="checkNum" class="verification-code">
            <el-row :gutter="10">
              <el-col :span="14">
                <el-input v-model="ruleForm.checkNum" placeholder="请输入验证码"></el-input>
              </el-col>
              <el-col :span="10">
                <el-button id="checkcode" @click="getCheckNum">获取验证码</el-button>
              </el-col>
            </el-row>
          </el-form-item>
          <el-form-item>
            <el-button class="register-btn" type="primary" @click="registe">注册</el-button>
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

export default {
  name: 'registe',
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
    // 密码确认验证规则
    const validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.userPassword) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      counterNum: 60,
      ruleForm: {
        userCount: '', // 用户账号（邮箱）
        userPassword: '',
        checkUserPassword: '',
        checkNum: '' // 验证码
      },
      rules: {
        userCount: [
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          { validator: validateEmail, trigger: 'blur' }
        ],
        checkUserPassword: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        userPassword: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, message: '密码长度至少为6个字符', trigger: 'blur' }
        ],
        checkNum: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { len: 6, message: '请输入6位验证码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 倒计时方法
    settime() {
      if (this.counterNum === 0) {
        $('#checkcode').removeAttr('disabled')
        $('#checkcode').html('获取验证码')
        this.counterNum = 180
        return
      } else {
        $('#checkcode').attr('disabled', true)
        $('#checkcode').html(`重新发送${this.counterNum}`)
        this.counterNum--
      }
      setTimeout(() => {
        this.settime()
      }, 1000)
    },

    // 获取验证码
    async getCheckNum() {
      try {
        // 验证邮箱格式
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(this.ruleForm.userCount)) {
          this.$message.error('请输入有效的邮箱地址')
          return
        }

        const response = await this.$axios({
          method: 'POST',
          url: 'https://graduation-project.lishangying.site/sendVerificationCode',
          data: {
            email: this.ruleForm.userCount
          }
        })

        if (response.data.code === 200) {
          this.$message.success(response.data.msg)
          this.settime() // 开始倒计时
        } else {
          this.$message.error(response.data.msg || '验证码发送失败')
        }
      } catch (error) {
        console.error('发送验证码失败:', error)
        this.$message.error('验证码发送失败，请稍后重试')
      }
    },

    // 更新后的注册方法
    async registe() {
      try {
        await this.$refs.ruleForm.validate()

        const response = await this.$axios.post('https://graduation-project.lishangying.site/register', {
          userCount: this.ruleForm.userCount,
          userPassword: md5(`${this.ruleForm.userPassword}545464`),
          email: this.ruleForm.userCount, // 邮箱和账号使用同一个值
          code: this.ruleForm.checkNum
        })

        if (response.data.code === 200) {
          this.$message.success('注册成功')
          this.$router.push('/login')
        } else {
          this.$message.error(response.data.msg || '注册失败')
        }
      } catch (error) {
        console.error('注册失败:', error)
        this.$message.error('注册失败，请重试')
      }
    },
  },
  mounted() {
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

.register-container {
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

.brand-logo::after {
  content: '';
  position: absolute;
  width: 100px;
  height: 100px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: pulse 2s ease-in-out infinite;
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

.login-link {
  position: absolute;
  left: 0;
  right: 0;
  font-size: 1em;
}

.login-text {
  color: white;
  text-decoration: none;
  border-bottom: 1px solid white;
  padding-bottom: 2px;
  transition: all 0.3s ease;
}

.login-text:hover {
  opacity: 0.8;
}

.right-section {
  flex: 1;
  padding: 40px;
}

.register-form {
  max-width: 320px;
  margin: 0 auto;
}

.form-title {
  text-align: center;
  color: #029B62;
  margin-bottom: 30px;
  font-size: 1.8em;
  font-weight: 300;
}

.el-form-item {
  margin-bottom: 20px;
}

.el-input {
  margin-bottom: 0;
}

.el-input__inner {
  border-radius: 8px;
}

#checkcode {
  width: 100%;
  background-color: #029B62;
  color: white;
  border: none;
  border-radius: 8px;
  height: 36px;
  transition: all 0.3s ease;
}

#checkcode:hover {
  background-color: #028B52;
}

#checkcode:disabled {
  background-color: #909399;
}

.register-btn {
  width: 100%;
  background-color: #029B62;
  border: none;
  height: 36px;
  font-size: 1.1em;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.register-btn:hover {
  background-color: #028B52;
  transform: translateY(-2px);
}

.verification-code {
  margin-bottom: 25px;
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
</style>
