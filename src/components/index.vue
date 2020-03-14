
<template>
<div style="overflow:hidden">
<div>
   <div style="height:30px;"></div>
  <div style="width:100%;height:600px;background-color:black;filter: blur(5px); transform: scale(1.1);">
<img class="card" height="600px" src="~@/assets/image/bgc.png" >
  </div>
  <div style="position:relative;bottom:500px; left:0%;font-size:30px;color:white;">通用医学图像处理平台</div>
  <div style="display:inline-block;;position:relative;bottom:500px;height:2px;width:50%;background-color:rgba(255,255,255,0.5)"></div>
  <div style="position:relative;bottom:500px; left:0%;font-size:20px;color:white;">互联网上极速/专业的DICOM HTML5 Viewer</div>
  <div style="position:relative;bottom:500px; left:0%;font-size:20px;color:white;">互联网上极速/专业的DICOM HTML5 Viewer</div>
  <div style="position:relative;bottom:500px; left:0%;font-size:20px;color:white;">互联网上极速/专业的DICOM HTML5 Viewer</div>
  <el-button style="position:relative;bottom:250px;background-color:rgb(2, 155, 98);color:white;border:none;"><router-link style=" text-decoration:none;color:white;" to="/newDemo">点击试用</router-link></el-button>
  </div>
   <el-row style="position:relative;bottom:150px;background-color:white;">
      <el-col :span="4" style="color:white;">555</el-col>
      <el-col :span="16">
        <el-row>
          <el-col :span='8'>
            <div style="height:300px;background-color:white;margin:40px 40px;">
              <div style="font-size:25px;">基于cornerstone</div>
              <p>Cornerstone.js 提供了一个完整的基于 Web 的医疗成像平台。此存储库包含 Cornerstone.js "Core"组件，它是一个轻量级的 JavaScript 库，用于在支持 HTML5 画布元素的现代 Web 浏览器中显示医疗图像。</p>
            </div>
          </el-col>
          <el-col :span='8'>
            <div style="height:300px;background-color:white;margin:40px 40px;">
              <div style="font-size:25px;">基于cornerstone</div>
              <p>Cornerstone.js 提供了一个完整的基于 Web 的医疗成像平台。此存储库包含 Cornerstone.js "Core"组件，它是一个轻量级的 JavaScript 库，用于在支持 HTML5 画布元素的现代 Web 浏览器中显示医疗图像。</p>
            </div>
          </el-col>
          <el-col :span='8'>
            <div style="height:300px;background-color:white;margin:40px 40px;">
              <div style="font-size:25px;">基于cornerstone</div>
              <p>Cornerstone.js 提供了一个完整的基于 Web 的医疗成像平台。此存储库包含 Cornerstone.js "Core"组件，它是一个轻量级的 JavaScript 库，用于在支持 HTML5 画布元素的现代 Web 浏览器中显示医疗图像。</p>
            </div>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="4" style="color:white;">sas</el-col>
    </el-row>
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
