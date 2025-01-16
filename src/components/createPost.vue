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
import Compressor from 'compressorjs'
// import Axios from 'axios'
// import marked from 'marked'
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
      if (!sessionStorage.userId) {
        this.$message.error('请先登录')
        return
      }
      if (this.title.trim() === '') {
        this.$message.error('请输入标题')
        return
      }
      if (this.content.trim() === '') {
        this.$message.error('请输入内容')
        return
      }
      $('.fa-mavon-floppy-o').click()
    },
    $imgDel (pos) {
      this.$message({
        message: '正在删除图片...',
        type: 'info'
      })
      var pic = pos[0].split('https://graduation-project.lishangying.site/MDPic/')
      this.$axios({
        url: 'https://graduation-project.lishangying.site/deleteMDPic',
        method: 'post',
        data: {
          userId: sessionStorage.userId,
          userCount: sessionStorage.userCount,
          fileName: pic[1]
        }
      }).then((response) => {
        if (response.data.code === 200) {
          this.$message({
            message: '图片删除成功',
            type: 'success'
          })
        } else {
          this.$message.error('图片删除失败')
        }
      }).catch(() => {
        this.$message.error('图片删除失败，请检查网络连接')
      })
    },
    // 将图片上传到服务器，返回地址替换到md中
    $imgAdd (pos, $file) {
      // 检查文件大小，限制为 5MB
      if ($file.size > 5 * 1024 * 1024) {
        this.$message.error('图片大小不能超过 5MB')
        return
      }

      // 检查文件类型
      const allowedTypes = ['image/jpeg', 'image/png', 'image/gif']
      if (!allowedTypes.includes($file.type)) {
        this.$message.error('只支持 JPG、PNG、GIF 格式的图片')
        return
      }

      this.$message({
        message: '正在处理图片...',
        type: 'info'
      })

      // 使用 Compressor 压缩图片
      new Compressor($file, {
        quality: 0.8, // 压缩质量，范围0-1，默认0.8
        maxWidth: 2000, // 最大宽度
        maxHeight: 2000, // 最大高度
        convertSize: 1000000, // 如果图片大于1MB才转换
        success: (compressedFile) => {
          var formdata = new FormData()
          formdata.append('file', compressedFile)
          formdata.append('userId', sessionStorage.userId)
          formdata.append('userCount', sessionStorage.userCount)

          this.$axios({
            url: 'https://graduation-project.lishangying.site/uploadMDPic',
            method: 'post',
            data: formdata,
            headers: { 'Content-Type': 'multipart/form-data' }
          }).then((url) => {
            if (url.data.code === 200) {
              this.$refs.md.$img2Url(pos, url.data.picUrl)
              this.$message({
                message: '图片上传成功',
                type: 'success'
              })
            } else {
              this.$message.error('图片上传失败')
            }
          }).catch(() => {
            this.$message.error('图片上传失败，请检查网络连接')
          })
        },
        error(err) {
          this.$message.error('图片处理失败：' + err.message)
        }
      })
    },
    // 所有操作都会被解析重新渲染
    change (value, render) {
      this.html = render
    },
    // 提交
    submit () {
      //console.log(this.content)
      //console.log(this.html)
      this.$message.success('提交成功，已打印至控制台！')
    },
    saveMD (value, render) {
      if (this.title.trim() === '') {
        this.$message.error('请输入标题')
        return
      }

      this.$message({
        message: '正在发布帖子...',
        type: 'info'
      })

      // 检查是否是编辑模式
      const mode = this.$route.query.mode
      const url = mode === 'edit'
        ? 'https://graduation-project.lishangying.site/updatePost'
        : 'https://graduation-project.lishangying.site/uploadPost'

      const postData = {
        userId: sessionStorage.userId,
        postValue: render,
        postTitle: this.title
      }

      // 如果是编辑模式，添加帖子ID
      if (mode === 'edit') {
        postData.postId = sessionStorage.getItem('editPostId')
      }

      this.$axios({
        url: url,
        method: 'post',
        data: postData
      }).then((result) => {
        if (result.data.code === 200) {
          this.$message({
            message: mode === 'edit' ? '更新成功！' : '发布成功！',
            type: 'success'
          })
          // 清除编辑相关的 sessionStorage
          if (mode === 'edit') {
            sessionStorage.removeItem('editPostTitle')
            sessionStorage.removeItem('editPostContent')
            sessionStorage.removeItem('editPostId')
          }
          this.$router.push({path: '/personalPage'})
        } else {
          this.$message.error(mode === 'edit' ? '更新失败，请重试' : '发布失败，请重试')
        }
      }).catch(() => {
        this.$message.error('操作失败，请检查网络连接')
      })
    }
  },
  mounted () {
    // 检查是否是编辑模式
    const mode = this.$route.query.mode
    if (mode === 'edit') {
      // 从 sessionStorage 获取编辑数据
      const editTitle = sessionStorage.getItem('editPostTitle')
      const editContent = sessionStorage.getItem('editPostContent')

      if (editTitle && editContent) {
        this.title = editTitle
        this.content = editContent
      }
    }
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
