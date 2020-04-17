
<template>
  <div v-show="showAddInfo" style="width:90%;height:600px;padding:30px;background-color:rgb(217, 237, 247);margin:50px 0 0 0">
    <div style="float:left; margin:10px 0;">请选择你的性别：</div><i class="icon icon-uniE014" @click="hideAddInfoDiv" style="position:relative;bottom:10px; left:41%;"></i>
    <el-input v-model="userGender" placeholder="请选择你的性别"></el-input>
    <div style="float:left; margin:10px 0;">请输入你的毕业学校：</div><br>
    <el-input v-model="userSchool" placeholder="请输入你的毕业学校"></el-input>
    <div style="float:left; margin:10px 0;">请输入你的公司/机构：</div>
    <el-input v-model="userCompany" placeholder="请输入你的公司/机构"></el-input>
    <div style="float:left; margin:10px 0;">请输入你的工作：</div>
    <el-input v-model="userJob" placeholder="请输入你的工作"></el-input>
    <div style="float:left; margin:10px 0;">请输入你的个人主页网址：</div>
    <el-input placeholder="请输入你的个人主页网址" v-model="userPage">
    <template slot="prepend">Http://</template>
  </el-input>
  <el-button @click="addInfo">提交</el-button>
  </div>
</template>

<script>
export default {
  name: 'changePersonalInfo',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>

@import '../assets/iconfont/iconfont.css'

</style>
