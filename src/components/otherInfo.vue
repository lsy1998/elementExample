
<template>
  <div style="width:100%;">
<div v-for="artical in articals" :key="artical" style="width:100%; margin:30px 0 0 0">
    <el-row>
        <el-col :span='20'>
            <div> <a style="text-decoration:none;text-align:left; float:left; color:rgb(2, 155, 98)" :href="artical.link">{{artical.title}}</a></div>
        </el-col>
        <el-col :span='4'>
            <div> {{artical.date.replace(/T/g,' ').replace(/\.[\d]{3}Z/,'').substring(0, 10)}}</div>
        </el-col>
    </el-row>
</div>
  </div>
</template>

<script>
export default {
  name: 'otherInfo',
  data () {
    return {
      articals: []
    }
  },
  methods: {

  },
  mounted () {
    // alert(112)
    this.$axios({
      method: 'post',
      url: 'http://localhost:8082/getOtherInfo'
    }).then((res) => {
    //   alert(111)
      console.log(res.data)
      this.articals = res.data.data
    })
  }
}
</script>

<style scoped>

@import '../assets/iconfont/iconfont.css'

</style>
