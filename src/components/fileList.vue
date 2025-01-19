
<template>
  <div id="fileListDiv" style="">
    <el-row style="padding:100px 0 0 0">
      <!-- <el-col style="color:white;" :span='4'>brave</el-col> -->
      <el-col :span='24'>
        <el-table :data="tableData"  :border=true style="width: 100%" fit highlight-current-row max-height="750">
          <el-table-column prop="fileId" label="序号" align="center">
          </el-table-column>
          <el-table-column prop="fileName" label="文件名" align="center">
          </el-table-column>
           <el-table-column prop="fileDesc" label="描述" align="center">
          </el-table-column>
          <el-table-column label="操作" align="center">
            <template slot-scope="scope">
              <el-button style="background-color:rgb(2,155,98)" type="primary" size="mini" @click="handleDownload(scope.$index, scope.row)" >下载</el-button>
            </template>
          </el-table-column>
        </el-table>
        <!-- <div style="display:inline-block;float:left;">数据源：</div><div style="display:inline-block;float:left; margin:4px 0 0 0;"><a href="https://wiki.cancerimagingarchive.net/display/Public/LIDC-IDRI" style="text-decoration:none;">LIDC-IDRI</a></div> -->
      </el-col>
      <!-- <el-col style="color:white;" :span='4'>confidence</el-col> -->
    </el-row>
    <div style="width:100%">

    </div>
  </div>
</template>

<script>
import axios from 'axios'
import router from '../router'
import $ from 'jquery'
export default {
  name: 'fileList',
  data () {
    return {
      tableData: []
    }
  },
  methods: {
    handleDownload (index, row) {
      //console.log(row.filePath)
      this.$axios({
        method: 'get',
        url: 'https://graduation-project.lishangying.site/download',
        params: {
          path: row.filePath,
          name: row.fileName
        }
      }).then((res) => {
        // const url = window.URL.createObjectURL(new Blob([res.data]))
        // const link = document.createElement('a')
        // link.href = url
        // link.setAttribute('download', Buffer.from(row.fileName, 'base64').toString())
        // document.body.appendChild(link)
        // link.click()
        const url = window.URL.createObjectURL(new Blob([res.data]))
        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', row.fileName)
        document.body.appendChild(link)
        link.click()
      })
    },
    showPost (event) {
      // alert(111)
      // //console.log(e.target)
      var el = event.currentTarget
      //console.log($(el).attr('data-index'))
      sessionStorage.postId = $(el).attr('data-index')
      // alert('当前对象的内容：' + el.innerHTML)
      // //console.log(this)
      router.push({ path: '/showPost' })
    }
  },
  mounted () {
    axios({
      method: 'post',
      url: 'https://graduation-project.lishangying.site/getFileList',
      data: {
        userId: sessionStorage.userId
      }
    }).then((res) => {
      //console.log(res.data.data)
      this.tableData = res.data.data
    })
  }
}
</script>

<style scoped>

@import '../assets/iconfont/iconfont.css'

</style>
