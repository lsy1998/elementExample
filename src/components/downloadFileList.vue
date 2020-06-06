
<template>
<div style="width:100%;height:100%;">
<div v-for="file in files" :key="file" style="width:100%;height:100%;background-color:white; margin:30px 20px 30px 20px">
      <el-row>
          <el-col :span='18'>
              <div style="margin:20px 0 0 20px;font-size:15px; height:60px; text-align:left;line-height:1.5rem;color:black">{{file.fileDesc}}</div>
              <el-row style="margin:10px 0 0 0">
                  <el-col :span='9'>
                      <div style="margin:10px 0 0 20px;float:left;font-size:14px;color:rgb(2, 155, 98)">{{file.userName}}</div>
                  </el-col>
                  <el-col :span='12'>
                      <div style="margin:10px 0 0 20px;float:right;font-size:14px;">{{file.date.replace(/T/g,' ').replace(/T/g,' ').replace(/\.[\d]{3}Z/,'')}}</div>
                  </el-col>
                  <el-col :span='3'>
                      <el-button :data-index='file.filePath' :data-name='file.fileName' style="background-color:rgb(2, 155, 98); color:white;float:right; " @click="downloadFile($event)" size='small'>下载</el-button>
                  </el-col>
              </el-row>
          </el-col>
          <el-col :span='6'>
              <div style="width:100%; height:100px; font-size:100px; margin:20px 0 0 -20px; color:rgb(2, 155, 98)" class="iconfont icon-geshi_yasuobaozip"></div>
          </el-col>
          <!-- <el-col></el-col> -->
      </el-row>
  </div>
</div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'downloadFileList',
  data () {
    return {
      files: []
    }
  },
  methods: {
    downloadFile (event) {
      var el = event.currentTarget
      console.log($(el).attr('data-index'))
      console.log($(el).attr('data-name'))
      this.$axios({
        method: 'get',
        url: 'http://47.115.131.98:39002/download',
        // url: 'http://47.115.131.98:39002/download',
        params: {
          // path: $(el).attr('data-index')
          path: $(el).attr('data-index'),
          name: $(el).attr('data-name')
        }
      }).then((res) => {
        const url = window.URL.createObjectURL(new Blob([res.data]))
        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', $(el).attr('data-name'))
        document.body.appendChild(link)
        link.click()
      })
    }
  },
  mounted () {
    this.$axios({
      method: 'post',
      url: 'http://47.115.131.98:39002/getAllFileList'
    }).then((res) => {
      this.files = res.data.data
    })
  }
}
</script>

<style scoped>

@import '../assets/iconfont/iconfont.css'

</style>
