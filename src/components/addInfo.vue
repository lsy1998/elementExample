<template>
  <div style="width:90%;height:520px;padding:30px;background-color:rgb(246, 246, 246);margin:50px 0 0 0">
    <div style="float:left; margin:10px 0;">
      <i class="el-icon-user" style="margin-right:8px;color:rgb(0, 154, 97)"></i>
      昵称：
    </div>
    <el-input v-model="userName" placeholder="请输入昵称"></el-input>

    <div style="float:left; margin:10px 0;">
      <i class="el-icon-school" style="margin-right:8px;color:rgb(0, 154, 97)"></i>
      毕业院校：
    </div>
    <el-input v-model="userSchool" placeholder="请输入毕业院校"></el-input>

    <div style="float:left; margin:10px 0;">
      <i class="el-icon-suitcase" style="margin-right:8px;color:rgb(0, 154, 97)"></i>
      目前从事行业：
    </div>
    <el-input v-model="userJob" placeholder="请输入目前从事的行业"></el-input>

    <div style="float:left; margin:10px 0;">
      <i class="el-icon-office-building" style="margin-right:8px;color:rgb(0, 154, 97)"></i>
      所在公司/组织名称：
    </div>
    <el-input v-model="userCompany" placeholder="请输入所在公司或组织名称"></el-input>

    <div style="float:left; margin:10px 0;">
      <i class="el-icon-link" style="margin-right:8px;color:rgb(0, 154, 97)"></i>
      个人网站主页：
    </div>
    <el-input placeholder="请输入个人网站主页地址" v-model="userPage">
      <template slot="prepend">Http://</template>
    </el-input>

    <el-button @click="addInfo" style="margin:20px 0 0 0;background-color:rgb(2, 155, 98);color:white">
      <i class="el-icon-check" style="margin-right:5px"></i>
      保存修改
    </el-button>
  </div>
</template>

<script>
import axios from 'axios'
import router from '../router'

export default {
  name: 'addInfo',
  data () {
    return {
      userName: '',
      userSchool: '',
      userCompany: '',
      userJob: '',
      userPage: '',
      showAddInfo: ''
    }
  },
  methods: {
    async getUserInfo() {
      try {
        const response = await axios({
          method: 'post',
          url: 'https://graduation-project.lishangying.site/getUserInfo',
          data: {
            userId: sessionStorage.userId
          }
        })

        const userInfo = response.data.userInfo
        this.userName = userInfo.userName
        this.userSchool = userInfo.userSchool
        this.userCompany = userInfo.userCompany
        this.userJob = userInfo.userJob
        this.userPage = userInfo.userPage ? userInfo.userPage.replace('Http://', '') : ''
      } catch (error) {
        console.error('获取用户信息失败:', error)
        this.$message.error('获取用户信息失败')
      }
    },
    async addInfo () {
      try {
        const response = await axios({
          method: 'post',
          url: 'https://graduation-project.lishangying.site/addUserInfo',
          data: {
            userName: this.userName,
            userGender: 1,
            userSchool: this.userSchool,
            userCompany: this.userCompany,
            userJob: this.userJob,
            userPage: this.userPage,
            userId: sessionStorage.userId
          }
        })

        if (response.data) {
          this.$message.success('保存成功')
          router.push({
            path: '/personalPage',
            query: { _t: Date.now() }  // 添加时间戳参数强制刷新
          }).then(() => {
            window.location.reload()  // 刷新页面
          })
        }
      } catch (error) {
        console.error('保存失败:', error)
        this.$message.error('保存失败')
      }
    }
  },
  mounted () {
    this.getUserInfo()
  }
}
</script>

<style scoped>
@import "../assets/iconfont/iconfont.css";

.el-input {
  margin-bottom: 15px;
}

.el-button {
  width: 120px;
}
</style>
