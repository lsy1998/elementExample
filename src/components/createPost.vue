<template>
  <div class="markdown" style="color:rgb(233, 236, 239); background-color:rgb(233, 236, 239)">
    <el-row>
      <el-col :span="4" style="">555</el-col>
      <el-col :span="16" style="background-color:white; margin:20px 0 0 0">
        <el-row style="margin:10px 0 0 0;">
          <el-col :span='18'>
            <input id="title" v-model="title" placeholder="请输入标题..."
              style="font-size:25px;margin:0 0 0 20px;width:100%;float:left;border: 0px;outline:none;">
          </el-col>
          <el-col :span='6'>
            <el-button @click="createPost" size="medium"
              style="background-color:rgb(2, 155, 98);color:white;float:right;margin:0 20px 0 0;">发布帖子<i
                class="el-icon-upload el-icon--right"></i></el-button>
          </el-col>
        </el-row>
        <div class="container">
          <mavon-editor :ishljs="true" @save='saveMD' :boxShadow='false' v-model="content" ref="md" @imgDel='$imgDel'
            @imgAdd="$imgAdd" @change="change" style="min-height: 900px;border:none;" />
          <!-- <mavon-editor v-model="content" v-html="getRender"   @imgAdd="$imgAdd" @change="change" style="min-height: 600px"/> -->
          <!-- <div v-html="render"></div> -->
          <!-- <button @click="submit">提交</button> -->
        </div>
      </el-col>
      <el-col :span="4" style="">sas</el-col>
    </el-row>
  </div>
</template>

<script>
// import mavonEditor from 'mavon-editor'
// import 'mavon-editor/dist/css/index.css'
import md from '../../README.md'
import $ from 'jquery'
// import Axios from 'axios'
// import marked from 'marked'
console.log(md)
export default {
  name: 'createPost',
  data () {
    return {
      content: '',
      html: '',
      configs: {},
      title: '',
      handbook: md,
      input: '',
      render: ''
    }
  },
  methods: {
    createPost () {
      $('.fa-mavon-floppy-o').click()
    },
    $imgDel (pos) {
      console.log(pos)
      var pic = pos[0].split('http://47.115.131.98:39002/MDPic/')
      console.log(pic)
      console.log(pic[1])
      this.$axios({
        url: 'http://47.115.131.98:888/deleteMDPic',
        method: 'post',
        data: {
          userId: sessionStorage.userId,
          userCount: sessionStorage.userCount,
          fileName: pic[1]
        }
      }).then((response) => {
        console.log(response.data)
      })
    },
    // 将图片上传到服务器，返回地址替换到md中
    $imgAdd (pos, $file) {
      var formdata = new FormData()
      formdata.append('file', $file)
      formdata.append('userId', sessionStorage.userId)
      formdata.append('userCount', sessionStorage.userCount)
      this.$axios({
        url: 'http://47.115.131.98:888/uploadMDPic',
        method: 'post',
        data: formdata,
        headers: { 'Content-Type': 'multipart/form-data' }
      }).then((url) => {
        this.$refs.md.$img2Url(pos, url.data.picUrl)
        console.log(url)
      })
    },
    // 所有操作都会被解析重新渲染
    change (value, render) {
      this.html = render
    },
    // 提交
    submit () {
      console.log(this.content)
      console.log(this.html)
      this.$message.success('提交成功，已打印至控制台！')
    },
    saveMD (value, render) {
      if ($('#title').val() === '') {
        alert('请输入标题')
      } else {
        this.$axios({
          url: 'http://47.115.131.98:39002/uploadPost',
          method: 'post',
          data: {
            userId: sessionStorage.userId,
            postValue: render,
            postTitle: this.title
          }
        }).then((result) => {
          console.log(result)
          if (result.data.code === 200) {
            alert('发布成功！')
            this.$router.push({path: '/personalPage'})
          }
          // console.log(url)
        })
      }
    }
  },
  mounted () {
    // var rendererMD = new marked.Renderer()
    // marked.setOptions({
    //   renderer: rendererMD,
    //   gfm: true,
    //   tables: true,
    //   breaks: false,
    //   pedantic: false,
    //   sanitize: false,
    //   smartLists: true,
    //   smartypants: false
    // })
  },
  computed: {
    // compiledMarkdown: function () {
    //   return marked(this.input, { sanitize: true })
    // },
    getRender: function () {
      return this.render
    }
  }
}
</script>

<style scoped>
@import "../assets/iconfont/iconfont.css";
</style>
