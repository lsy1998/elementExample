
<template>
  <div style="width:100%;height:100%;">
    <div style="margin:10px 0 0 0">
      <el-row>
        <el-col :span='10' style="color:white">
           brave
        </el-col>
        <el-col :span='2'>
           <el-avatar shape="square" :size="30" :src="this.$store.state.headPicUrl"></el-avatar>
        </el-col>
        <el-col :span='12'>
          <div style="margin:7px 0 0 0">lsy</div>
        </el-col>
      </el-row>
    </div>
    <div style="margin:10px 0 0 0">
      <el-row>
        <el-col :span='10' style="color:white">
           brave
        </el-col>
        <el-col :span='2'>
           <el-avatar shape="square" :size="30" :src="this.$store.state.headPicUrl"></el-avatar>
        </el-col>
        <el-col :span='12'>
          <div style="margin:7px 0 0 0">lsy</div>
        </el-col>
      </el-row>
    </div>
    <div style="margin:10px 0 0 0">
      <el-row>
        <el-col :span='10' style="color:white">
           brave
        </el-col>
        <el-col :span='2'>
           <el-avatar shape="square" :size="30" :src="this.$store.state.headPicUrl"></el-avatar>
        </el-col>
        <el-col :span='12'>
          <div style="margin:7px 0 0 0">lsy</div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'activeUser',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
@import "../assets/iconfont/iconfont.css";
</style>
