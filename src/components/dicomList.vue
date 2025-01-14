
<template>
  <div id="dicomListDiv" style="">
    <el-row style="padding:100px 0 0 0">
      <el-col style="color:white;" :span='4'>brave</el-col>
      <el-col :span='16'>
        <el-table :data="tableData"  :border=true style="width: 100%" fit highlight-current-row max-height="750">
          <el-table-column prop="dicomId" label="序号" align="center">
          </el-table-column>
          <el-table-column prop="dicomPath" label="DICOM" align="center">
          </el-table-column>
           <el-table-column prop="dicomLength" label="图像数" align="center">
          </el-table-column>
          <el-table-column label="操作" align="center">
            <template slot-scope="scope">
              <el-button type="primary" size="mini" @click="handleEdit(scope.$index, scope.row)" >查看</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div style="display:inline-block;float:left;">数据源：</div><div style="display:inline-block;float:left; margin:4px 0 0 0;"><a href="https://wiki.cancerimagingarchive.net/display/Public/LIDC-IDRI" style="text-decoration:none;">LIDC-IDRI</a></div>
      </el-col>
      <el-col style="color:white;" :span='4'>confidence</el-col>
    </el-row>
    <div style="width:100%">

    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import axios from 'axios'
export default {
  name: 'dicomList',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      tableData: []
    }
  },
  methods: {
    handleEdit (index, row) {
      console.log(index, row)
      // console.log()
      // alert(row.dicomId)
      // alert(row.dicomPath)
      // alert(row.dicomLength)
    }
  },
  mounted () {
    $('#dicomListDiv').width($(window).width())
    $('#dicomListDiv').height($(window).height())
    axios.get('https://graduation-project.lishangying.site/getDicomList')
      .then((response) => {
        console.log(response.data)
        this.tableData = response.data.dicomList
      })
  }
}
</script>

<style scoped>
@import "../assets/iconfont/iconfont.css";
</style>
