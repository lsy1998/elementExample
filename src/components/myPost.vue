
<template>
  <div style="" id="postDiv">
    <div v-for="post in posts" @click="showPost($event)" :data-index='post.postId' :key='post'
      style="margin:50px 0 0 0;font-size:14px;color:rgb(0, 154, 97);text-align:left;" :class="{'postHeight':post.postHeight, 'postHeight1':post.postHeight1 }">
      <el-row style="height:100%">
        <el-col :span="post.leftSpan" style="height:100%;">
          <div style="width:100%;margin:20px 0 0 0; height:90%" :class="{'postHeight':post.postHeight}">
            <h3 style="height:30px;float:left;margin:0 0 0 10px; font-size:18px">
              {{post.postTitle}}
            </h3>
            <p style="height:47%; clear:both; font-size:13px;margin:0 0 0 10px;color:rgb(120, 120, 120);line-height:1.5rem" :class="{'postContentHeight':post.postContentHeight}">
              {{post.postValue.substring(0,100)}}
            </p>
            <div style="height:20%;display:inline-block; width:100%;margin:20px 0 0 0">
              <div class="el-icon-star-off"
                style="font-size:20px;float:left;margin:0 0 0 10px;display:inline-block;color:rgb(2, 155, 98)">
                <!-- <div
                  style="font-size:14px;display:inline-block;margin:0 0 0 5px;color:rgb(2, 155, 98);position:relative;bottom:2px;">
                  x7
                </div> -->
              </div>
              <!-- <div class="el-icon-share"
                style="font-size:20px;float:left;display:inline-block;margin:0 0 0 15px;color:rgb(2, 155, 98)">
              </div> -->
              <div style="font-size:14px;display:inline-block;margin:0 0 0 15px;color:rgb(2, 155, 98);float:left;">
                {{post.postDate.replace(/T/g,' ').replace(/\.[\d]{3}Z/,'')}}
              </div>
              <el-avatar shape="square" :size="20" :src="headPicUrl" style="float:right;"></el-avatar>
            </div>
          </div>
          <!-- <div></div> -->
        </el-col>
        <el-col :span="post.rightSpan" style="height:100%;">
          <div
            style="height:80%;margin:20px 0 20px 10px;background-color:rgb(2, 155, 98);border-radius:5px;color:rgb(2, 155, 98)">
            <img :src="post.postUrl" alt="" width="100%" height="100%" style="object-fit:cover;border-radius:5px;">
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import router from '../router'
// import axios from 'axios'
import $ from 'jquery'
export default {
  name: 'myPost',
  data () {
    return {
      headPicUrl: '',
      posts: []
    }
  },
  methods: {
    showPost (event) {
      // alert(111)
      // console.log(e.target)
      var el = event.currentTarget
      console.log($(el).attr('data-index'))
      sessionStorage.postId = $(el).attr('data-index')
      // alert('当前对象的内容：' + el.innerHTML)
      // console.log(this)
      router.push({ path: '/showPost' })
    },
    getAllPost () {
      this.$axios({
        method: 'post',
        url: 'https://graduation-project.lishangying.site/getAllPost',
        data: {
          userId: sessionStorage.userId
        }
      }).then((response) => {
        this.headPicUrl = sessionStorage.headPicUrl
        console.log(response)
        for (var i = 0; i < response.data.post.length; i++) {
          var imgReg = /<img.*?(?:>|\/>)/gi
          var srcReg = /src=[\\'\\"]?([^\\'\\"]*)[\\'\\"]?/i
          var arr = response.data.post[i].postValue.match(imgReg)
          if (arr != null) {
            response.data.post[i].postHeight = false
            response.data.post[i].postHeight1 = true
            response.data.post[i].postContentHeight = false
            response.data.post[i].leftSpan = '18'
            response.data.post[i].rightSpan = '6'
            for (var a = 0; a < arr.length; a++) {
              var src = arr[a].match(srcReg)
              if (src[1]) {
                response.data.post[i].postUrl = src[1]
                console.log('已匹配的图片地址' + (a + 1) + '：' + src[1])
              }
            }
          } else {
            response.data.post[i].postHeight = true
            response.data.post[i].postHeight1 = false
            response.data.post[i].postContentHeight = true
            response.data.post[i].leftSpan = '24'
            response.data.post[i].rightSpan = '0'
          }
          response.data.post[i].postValue = response.data.post[i].postValue.replace(/<[^>]+>/g, '').replace(/↵/g, '')
        }
        this.posts = response.data.post
      })
    }
  },
  mounted () {
    this.headPicUrl = sessionStorage.headPicUrl
    // $('el-select').css('float', 'left')
    this.getAllPost()
  }
}
</script>

<style scoped>
@import "../assets/iconfont/iconfont.css";
.postContentHeight{
max-height: 30%;
}
.postHeight{
height: 130px;
}
.postHeight1{
  height: 200px;
}
</style>
