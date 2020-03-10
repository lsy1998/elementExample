<template>
  <div id="app" style="margin:0px; background-color:white;">
    <el-row>
      <el-col :span="4" style="color:white;">555</el-col>
      <el-col :span="16">
        <el-menu
          :default-active="activeIndex2"
          mode="horizontal"
          @select="handleSelect"
          background-color="white"
          text-color="black"
          active-text-color="rgb(0, 154, 97)"
        >
          <el-menu-item index="1" style="border:0;">
            <router-link style=" text-decoration:none;" to="/demo">DEMO</router-link>
          </el-menu-item>
          <el-menu-item index="3" style="border:0;">
            <router-link style=" text-decoration:none;" to="/Post">POST</router-link>
          </el-menu-item>
          <el-menu-item index="4" style="border:0;">
            <router-link style=" text-decoration:none;" to="/newDemo">DEMO1</router-link>
          </el-menu-item>
           <el-menu-item index="7" style="border:0;">
            <el-autocomplete
              v-model="state"
              :fetch-suggestions="querySearchAsync"
              placeholder="请输入内容"
              @select="handleSelect"
            ></el-autocomplete>
          </el-menu-item>
          <el-menu-item index="8" style="border:0;float:right;">
            <template slot="title">
              <el-avatar shape="square" :size="30" :src="squareUrl"></el-avatar>
            </template>
          </el-menu-item>
           <el-menu-item index="6" style="border:0;float:right;">
            <el-button style="text-decoration:none;background-color:rgb(2, 155, 98); color:white;" to="/newDemo">免费注册</el-button>
          </el-menu-item>
          <el-menu-item index="5" style="border:0;float:right;">
            <router-link style=" text-decoration:none;" to="/newDemo">立即登录</router-link>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="4" style="color:white;">sas</el-col>
    </el-row>
    <router-view />
    <el-row>
      <el-col :span="6">
        <div style="color:white;">bfbcbc</div>
      </el-col>
      <el-col :span="12">
        <el-carousel height="150px" width="100%">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3 class="small">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </el-col>
      <el-col :span="6">
        <div style="color:white;">bfbcbc</div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="4">
        <div style="color:white;">bfbcbc</div>
      </el-col>
      <el-col :span="16">
         <el-row>
          <el-col :span='4' >
            <el-button style="margin:50px 0 0 0;width:100%;background-color:rgb(2, 155, 98);color:white;">为你推荐</el-button>
             <el-divider content-position="left">医学图像下载</el-divider>
             <div style="width:80%;padding:5px 10px 5px 10px;">MRI</div>
             <div style="width:80%;padding:5px 10px 5px 10px;">CT</div>
              <el-divider content-position="left">相关教程</el-divider>
              <el-divider content-position="left">友情链接</el-divider>
            <div style="height:900px;"></div>
          </el-col>
          <el-col :span='16'>
            <div  style="margin:50px;">
 <div style="width:100%;height:200px;background-color:white;margin:10px 0 10px 0;">
   <el-row style="height:100%">
     <el-col :span='18' style="height:100%;">
       <div style="width:100%;margin:20px 0 0 0; height:90%">
         <h3 style="height:20%;display:inline-block;float:left;margin:0 0 0 10px">标题标题标题标题标题标题标题标题标题标题</h3>
         <p style="height:57%;display:inline-block; font-size:12px;margin:0 0 0 7px">正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正正文正文正文正文正文正文正正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p>
       <div style="height:20%;display:inline-block; width:100%">
         <div class='el-icon-star-off' style="font-size:20px;float:left;margin:0 0 0 10px;display:inline-block;color:rgb(2, 155, 98)">
           <div style="font-size:14px;display:inline-block;margin:0 0 0 5px;color:rgb(2, 155, 98);position:relative;bottom:2px;">x7</div></div>
         <div class='el-icon-share' style="font-size:20px;float:left;display:inline-block;margin:0 0 0 15px;color:rgb(2, 155, 98)"></div>
         <div style="font-size:14px;display:inline-block;margin:0 0 0 15px;color:rgb(2, 155, 98);float:left;">2020：2：22</div>
         <el-avatar shape="square" :size="20" :src="squareUrl" style="float:right;"></el-avatar>
       </div>
       </div>
       <div></div>
     </el-col>
     <el-col :span='6' style="height:100%;">
       <div style="height:80%;margin:20px 10px;background-color:rgb(2, 155, 98);border-radius:5px;color:rgb(2, 155, 98)">cxcx</div>
     </el-col>
   </el-row>
 </div>
 <div style="width:100%;height:200px;background-color:white;margin:10px 0 10px 0;">
   <el-row style="height:100%">
     <el-col :span='18' style="height:100%;">
       <div style="width:100%;margin:20px 0 0 0; height:90%">
         <h3 style="height:20%;display:inline-block;float:left;margin:0 0 0 10px">标题标题标题标题标题标题标题标题标题标题</h3>
         <p style="height:57%;display:inline-block; font-size:12px;margin:0 0 0 7px">正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正正文正文正文正文正文正文正正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p>
       <div style="height:20%;display:inline-block; width:100%">
         <div class='el-icon-star-off' style="font-size:20px;float:left;margin:0 0 0 10px;display:inline-block;color:rgb(2, 155, 98)">
           <div style="font-size:14px;display:inline-block;margin:0 0 0 5px;color:rgb(2, 155, 98);position:relative;bottom:2px;">x7</div></div>
         <div class='el-icon-share' style="font-size:20px;float:left;display:inline-block;margin:0 0 0 15px;color:rgb(2, 155, 98)"></div>
         <div style="font-size:14px;display:inline-block;margin:0 0 0 15px;color:rgb(2, 155, 98);float:left;">2020：2：22</div>
         <el-avatar shape="square" :size="20" :src="squareUrl" style="float:right;"></el-avatar>
       </div>
       </div>
       <div></div>
     </el-col>
     <el-col :span='6' style="height:100%;">
       <div style="height:80%;margin:20px 10px;background-color:rgb(2, 155, 98);border-radius:5px;color:rgb(2, 155, 98)">cxcx</div>
     </el-col>
   </el-row>
 </div>
 <div style="width:100%;height:200px;background-color:white;margin:10px 0 10px 0;">
   <el-row style="height:100%">
     <el-col :span='18' style="height:100%;">
       <div style="width:100%;margin:20px 0 0 0; height:90%">
         <h3 style="height:20%;display:inline-block;float:left;margin:0 0 0 10px">标题标题标题标题标题标题标题标题标题标题</h3>
         <p style="height:57%;display:inline-block; font-size:12px;margin:0 0 0 7px">正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正正文正文正文正文正文正文正正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文正文</p>
       <div style="height:20%;display:inline-block; width:100%">
         <div class='el-icon-star-off' style="font-size:20px;float:left;margin:0 0 0 10px;display:inline-block;color:rgb(2, 155, 98)">
           <div style="font-size:14px;display:inline-block;margin:0 0 0 5px;color:rgb(2, 155, 98);position:relative;bottom:2px;">x7</div></div>
         <div class='el-icon-share' style="font-size:20px;float:left;display:inline-block;margin:0 0 0 15px;color:rgb(2, 155, 98)"></div>
         <div style="font-size:14px;display:inline-block;margin:0 0 0 15px;color:rgb(2, 155, 98);float:left;">2020：2：22</div>
         <el-avatar shape="square" :size="20" :src="squareUrl" style="float:right;"></el-avatar>
       </div>
       </div>
       <div></div>
     </el-col>
     <el-col :span='6' style="height:100%;">
       <div style="height:80%;margin:20px 10px;background-color:rgb(2, 155, 98);border-radius:5px;color:rgb(2, 155, 98)">cxcx</div>
     </el-col>
   </el-row>
 </div>
            </div>
          </el-col>
          <el-col :span='4'>
           <div style="margin:50px 0 0 0; color:rgb(2, 155, 98);display:inline-block;">活跃用户</div>
           <div style="margin:50px 0 0 0; color:rgb(2, 155, 98);display:inline-block;float:right;">更多<i class="el-icon-d-arrow-right"></i></div>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="4">
        <div style="color:white;">bfbcbc</div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      circleUrl:
        'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
      squareUrl:
        'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
      sizeList: ['medium']
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.el-menu--popup {
  width: 100px;
}
</style>
