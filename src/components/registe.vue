<template>

 <div style="width:1000px;height:530px;margin:100px auto; background-color:rgb(240, 240, 240);">
    <div style="width:590px;height:530px;display:inline-block;">
        <img style="display:inline-block;vertical-align:top;margin:0px 0 0 0;height:100%" src="../assets/image/a08ef81d577c4642f5faa9bb3055a4da_2_3_art.png" alt="">
  </div>
    <div style="width:405px;display:inline-block;height:530px;vertical-align:top;background:#52A0FD;background:-webkit-linear-gradient(left,#52A0FD 0%,#00e2fa 80%,#00e2fa 100%);background:linear-gradient(to right,#52A0FD 0%,#00e2fa 80%,#00e2fa 100%);position:relative;right:10px;">
      <el-input clearable v-model="username" ref='hello' type="text"  placeholder="请输入用户名" style="margin:150px 0 0 5px; width:300px;" ><i slot="prefix" class="el-input__icon el-icon-user"></i></el-input>
      <el-input show-password  v-model="password" ref='hello' type="password" placeholder="请输入密码" style="margin:30px 0 0 5px;width:300px;"><i slot="prefix" class="el-input__icon el-icon-lock" ></i></el-input><br>
      <el-input show-password  v-model="password" ref='hello' type="password" placeholder="请确认密码" style="margin:30px 0 0 5px;width:300px;"><i slot="prefix" class="el-input__icon el-icon-lock" ></i></el-input><br>
      <el-button style="margin:30px 0 0 5px;width:300px; background-color:rgb(19, 130, 2142);border:none;color:white;">注册</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'registe',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    change (e) {
      console.log(this.$refs.hello.html)
      // this.$refs.hello.$forceUpdate()
    }
  }
}
</script>
<style scoped>
/* @import '../assets/iconfont/iconfont.css' */
  ::-ms-clear, ::-ms-reveal{display: none;}

</style>
