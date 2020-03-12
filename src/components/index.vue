
<template>
<div><div style="width:100%;height:600px;background-color:black;filter: blur(5px)">
<img class="card" height="600px" src="~@/assets/image/bgc.png" >
  </div>
  <div style="position:relative;bottom:500px; left:0%;font-size:30px;color:white;">通用医学图像处理平台</div>
  <div style="display:inline-block;;position:relative;bottom:500px;height:2px;width:50%;background-color:rgba(255,255,255,0.5)"></div>
  <div style="position:relative;bottom:500px; left:0%;font-size:20px;color:white;">互联网上极速/专业的DICOM HTML5 Viewer</div>
  <div style="position:relative;bottom:500px; left:0%;font-size:20px;color:white;">互联网上极速/专业的DICOM HTML5 Viewer</div>
  <div style="position:relative;bottom:500px; left:0%;font-size:20px;color:white;">互联网上极速/专业的DICOM HTML5 Viewer</div>
  <el-button style="position:relative;bottom:250px;background-color:rgb(2, 155, 98);color:white;border:none;"><router-link style=" text-decoration:none;color:white;" to="/newDemo">点击试用</router-link></el-button>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
    $('#meun').show()
  }
}
</script>

<style scoped>

@import '../assets/iconfont/iconfont.css'

</style>
