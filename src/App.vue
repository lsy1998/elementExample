<template>
  <div id="app" style="margin:0px; background-color:white;">
    <el-row id="meun">
      <el-col :span="4" style="color:white;">555</el-col>
      <el-col :span="16">
        <el-menu :default-active="activeIndex2" mode="horizontal" @select="handleSelect" text-color="black"
          active-text-color="rgb(0, 154, 97)">
          <el-menu-item index="1" style="border:0;">
            <router-link style=" text-decoration:none;" to="/marked">DEMO</router-link>
          </el-menu-item>
          <el-menu-item index="3" style="border:0;">
            <router-link style=" text-decoration:none;" to="/Post">POST</router-link>
          </el-menu-item>
          <el-menu-item id="demo1" @click="demo1" index="4" style="border:0;">
            <router-link style=" text-decoration:none;" to="/newDemo">DEMO1</router-link>
          </el-menu-item>
          <el-menu-item index="9" style="border:0;">
            <router-link style=" text-decoration:none;" to="/personalPage">PERSONALPAGE</router-link>
          </el-menu-item>
          <el-menu-item index="10" style="border:0;">
            <router-link style=" text-decoration:none;" to="/club">CLUB</router-link>
          </el-menu-item>
          <el-menu-item index="7" style="border:0;">
            <el-autocomplete v-model="state" :fetch-suggestions="querySearchAsync" placeholder="请输入内容"
              @select="handleSelect"></el-autocomplete>
          </el-menu-item>
          <el-menu-item index="8" style="border:0;float:right;">
            <template slot="title">
              <el-avatar shape="square" :size="30" :src="this.$store.state.headPicUrl"></el-avatar>
            </template>
          </el-menu-item>
          <el-menu-item index="6" style="border:0;float:right;">
            <el-button style="text-decoration:none;background-color:rgb(2, 155, 98); color:white;">
              <router-link style=" text-decoration:none;" to="/registe">免费注册</router-link>
            </el-button>
          </el-menu-item>
          <el-menu-item index="5" style="border:0;float:right;">
            <router-link style=" text-decoration:none;" to="/login">立即登录</router-link>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="4" style="color:white;">sas</el-col>
    </el-row>
    <router-view />
  </div>
</template>
<script>
import $ from 'jquery'
import router from './router'

export default {
  // store,
  data () {
    return {
      color: '',
      activeIndex: '1',
      activeIndex2: '1',
      circleUrl:
        'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
      squareUrl:
        'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
      sizeList: ['medium'],
      state: ''
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    demo1 () {
      // var _this = this
      console.log('click')
      $('#meun').hide()
      // _this._data.color = '#323232'
      // $('menu').css('background-color', 'rgb(50, 50, 50)')
      // if ($('#demo1').click()) {
      //   console.log('click')
      // }
    },
    querySearchAsync () {

    }
  },
  mounted () {
    router.push({ path: '/index' })
    // if ($('#demo1').click()) {
    //   console.log('click')
    // }
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
