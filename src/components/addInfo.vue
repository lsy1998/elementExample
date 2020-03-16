
<template>
  <div v-show="showAddInfo" style="width:90%;height:400px;padding:30px;background-color:rgb(217, 237, 247);b">
    <div style="float:left; margin:10px 0;">请选择你的性别：</div><i class="icon icon-uniE014" @click="hideAddInfoDiv"></i>
    <el-input v-model="input" placeholder="请输入内容"></el-input>
    <div style="float:left; margin:10px 0;">请输入你的毕业学校：</div><br>
    <el-input v-model="input" placeholder="请输入内容"></el-input>
    <div style="float:left; margin:10px 0;">请输入你的公司/机构：</div>
    <el-input v-model="input" placeholder="请输入内容"></el-input>
    <div style="float:left; margin:10px 0;">请输入你的工作：</div>
    <el-input v-model="input" placeholder="请输入内容"></el-input>
    <div style="float:left; margin:10px 0;">请输入你的个人主页网址：</div>
     <el-input placeholder="请输入内容" v-model="input1">
    <template slot="prepend">Http://</template>
  </el-input>
  </div>
</template>

<script>
import router from '../router'
// import $ from 'jquery'
export default {
  name: 'addInfo',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      showAddInfo: true
    }
  },
  methods: {
    hideAddInfoDiv () {
      var _this = this
      _this._data.showAddInfo = false
      router.push({ path: '/personalPage' })
    }
  },
  mounted () {
    // $('el-select').css('float', 'left')
  }
}
</script>

<style scoped>
@import "../assets/iconfont/iconfont.css";
</style>
