<template>
  <div @resize="resize" id='registeDiv'>
    <div style="width:1000px;height:530px;margin:100px auto;">
      <div style="width:590px;height:530px;display:inline-block;">
        <img style="display:inline-block;vertical-align:top;margin:0px 0 0 0;height:100%"
          src="../assets/image/a08ef81d577c4642f5faa9bb3055a4da_2_3_art.png" alt="">
      </div>
      <div style="width:405px;display:inline-block;height:530px;vertical-align:top;background:#52A0FD;background:-webkit-linear-gradient(left,#52A0FD 0%,#00e2fa 80%,#00e2fa 100%);background:linear-gradient(to right,#52A0FD 0%,#00e2fa 80%,#00e2fa 100%);position:relative;right:10px;">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
          <el-form-item style="width:150px;margin:0 0 0 55px;" prop="userCount">
            <el-tooltip class="item" effect="dark" content="请输入有效的邮箱地址" placement="right-end">
              <el-input clearable v-model="ruleForm.userCount" ref='hello' type="email" placeholder="请输入邮箱"
                style="margin:110px 0 0 0px; width:300px;">
                <i slot="prefix" class="el-input__icon el-icon-message"></i>
              </el-input>
            </el-tooltip>
          </el-form-item>
          <el-form-item style="width:150px;margin:0 0 0 55px;" prop="userPassword">
            <el-tooltip effect="dark" content="请输入您的密码" placement="right-end">
              <el-input show-password v-model="ruleForm.userPassword" type="password" placeholder="请输入密码"
                style="margin:30px 0 0 0px;width:300px;">
                <i slot="prefix" class="el-input__icon el-icon-lock"></i>
              </el-input>
            </el-tooltip>
          </el-form-item>
          <el-form-item style="width:150px;margin:0 0 0 55px;" prop="checkUserPassword">
            <el-tooltip class="item" effect="dark" content="请确认您的密码" placement="right-end">
              <el-input show-password v-model="ruleForm.checkUserPassword" type="password"
                placeholder="请再次输入密码" style="margin:30px 0 0 0px;width:300px;">
                <i slot="prefix" class="el-input__icon el-icon-lock"></i>
              </el-input>
            </el-tooltip>
          </el-form-item>
          <el-row style="margin:30px 0 0 0">
            <el-col :span='11'>
              <el-form-item style="width:150px;margin:0 0 0 55px;" prop="checkNum">
                <el-input v-model="ruleForm.checkNum" placeholder="请输入验证码"
                  style="margin:0px 0 0 0px;width:160px;"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span='13'>
              <el-button id="checkcode" 
                style="margin:0 0 0 5px;background-color:rgb(19, 130, 255);color:white;border:none;" 
                @click="getCheckNum">
                获取验证码
              </el-button>
            </el-col>
          </el-row>
          <el-button
            style="margin:30px 0 0 5px;width:300px; background-color:rgb(19, 130, 2142);border:none;color:white;"
            @click="registe">注册</el-button>
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

    resize() {
      $('#registeDiv').height($(window).height() - $('#meun').height() - 100)
    }
  },
  mounted() {
    $('#registeDiv').height($(window).height() - $('#meun').height() - 100)
  }
}
</script>

<style scoped>
::-ms-clear,
::-ms-reveal {
  display: none;
}
</style>
