<template>
    <div class="markdown">
      <el-row>
      <el-col :span="4" style="color:white;">555</el-col>
      <el-col :span="16">
        <el-row style="margin:10px 0 0 0;">
        <el-col :span='18'>
          <input v-model="title" placeholder="请输入标题..." style="font-size:25px;margin:0 0 0 20px;width:100%;float:left;border: 0px;outline:none;">
        </el-col>
        <el-col :span='6'>
          <el-button size="medium" style="background-color:rgb(2, 155, 98);color:white;float:right;margin:0 20px 0 0;">发布帖子<i class="el-icon-upload el-icon--right"></i></el-button>
        </el-col>
      </el-row>
      <div class="container">
            <mavon-editor  :boxShadow='false' v-model="content" ref="md" @imgAdd="$imgAdd" @change="change" style="min-height: 900px;border:none;"/>
            <!-- <mavon-editor v-model="content" v-html="handbook"   @imgAdd="$imgAdd" @change="change" style="min-height: 600px"/> -->
            <!-- <button @click="submit">提交</button> -->
        </div>
      </el-col>
      <el-col :span="4" style="color:white;">sas</el-col>
    </el-row>
    </div>
</template>

<script>
// import mavonEditor from 'mavon-editor'
// import 'mavon-editor/dist/css/index.css'
import md from '../../README.md'
export default {
  name: 'createPost',
  data () {
    return {
      content: '',
      html: '',
      configs: {},
      title: '',
      handbook: md
    }
  },
  methods: {
    // 将图片上传到服务器，返回地址替换到md中
    $imgAdd (pos, $file) {
      let formdata = new FormData()

      this.$upload.post('/上传接口地址', formdata).then(res => {
        console.log(res.data)
        this.$refs.md.$img2Url(pos, res.data)
      }).catch(err => {
        console.log(err)
      })
    },
    // 所有操作都会被解析重新渲染
    change (value, render) {
      // render 为 markdown 解析后的结果[html]
      this.html = render
    },
    // 提交
    submit () {
      console.log(this.content)
      console.log(this.html)
      this.$message.success('提交成功，已打印至控制台！')
    }
  },
  mounted () {

  }
}
</script>

<style scoped>

@import '../assets/iconfont/iconfont.css'

</style>
