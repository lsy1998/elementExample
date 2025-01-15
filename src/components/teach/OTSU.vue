<template>
  <div style="">
    <el-row>
      <el-col :span="8" id='code' style="background-color:white;box-shadow:5px 0 3px -1px rgb(228, 228, 228);">
        <div style="color:black;margin:40px 45px 20px 45px;text-align:left">
          最近邻插值法nearest_neighbor是最简单的灰度值插值。也称作零阶插值，就是令变换后像素的灰度值等于距它最近的输入像素的灰度值。</div>
        <div style="margin:0px 45px 0px 40px;">
          <pre id="code" class="line-numbers"><code class="language-python">
        def Laplacian():
            num1 = <input id="num1" ref="num1" v-model="num2" style="width:20px" value="6" type="text" >
            image = cv2.imread("/root/NodeServer/jiaocheng/bgc.png")
            image = cv2.cvtColor(image,cv2.COLOR_BGR2GRAY)#将图像转化为灰度图像
            lap = cv2.Laplacian(image,num))#拉普拉斯边缘检测
            lap = np.uint8(np.absolute(lap))##对lap去绝对值
            if not os.path.exists(f'/root/NodeServer/jiaocheng/{userCount}'):
                os.makedirs(f'/root/NodeServer/jiaocheng/{userCount}')
            cv2.imwrite(f'/root/NodeServer/jiaocheng/{userCount}/Laplacian.jpg', lap)
        </code></pre>
        </div>
        <el-button id="submit" @click="submit">提交</el-button>
      </el-col>
      <el-col :span="16">
        <div id="yanshiPic">
          <el-button style="float:right; background-color:rgb(45, 45, 45);color:white;margin:5px 0 0 0">示例图片</el-button>
          <img style="" src="https://graduation-project.lishangying.site/jiaocheng/bgc.png" width="50%" alt="">
        </div>
        <div id="resultPic"
          style="overflow:hidden;box-shadow:0 -5px 3px -1px rgb(228, 228, 228);overflow-x:scroll;overflow-y:scroll">
          <el-button style="float:right; background-color:rgb(45, 45, 45);color:white;margin:5px 0 0 0;">运行结果
          </el-button>
          <img style="" id="image" src="https://graduation-project.lishangying.site/jiaocheng/bgc.png" width="50%" alt="hhaha">
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import $ from 'jquery'
// import '../../static/dist/prism.js'
import prism from '../../../static/dist/prism.js'
// prism.highlightAll()
// import prism from 'prismjs'
export default {
  name: 'OTSU',
  data () {
    return {
      num1: 2,
      num2: 2,
      $route: ''
    }
  },
  methods: {
    fetchData () {
      // this.timer = setTimeout(() => {
      //   //console.log(111)
      //   // prism.highlightAll() // 这里加定时器让它后执行，不然没效果
      // }, 0)
    },
    submit () {
      //   //console.log($('#num1').val())
      //   //console.log($('#num2').val())
      //   //console.log(this.$refs.num1.value)
      //   //console.log(this.$refs.num2.value)
      alert(12)
      this.$axios({
        url: 'http://47.115.131.98:888/OTSU',
        method: 'post',
        data: {
          userCount: sessionStorage.userCount,
          num1: $('#num1').val()
        //   num2: $('#num2').val()
        }
      }).then((res) => {
        //console.log(res.data)
        alert(123)
        // $('#image').css('width', '100%')
        $('#image').attr('src', 'https://graduation-project.lishangying.site/jiaocheng/' + res.data.picUrl + '?' + new Date().getTime())
      })
    }
  },
  mounted () {
    // $('#num1').on('input', () => {
    //   //console.log('你按了一下111')
    // })
    // prism.highlightAll()
    // alert(1233)
    $('#yanshiPic').height($(window).height() * 0.5)
    $('#resultPic').height($(window).height() * 0.5)
    $('#code').height($(window).height())
    // alert(234)
    // prism.highlightElement($('#code'))
    // this.fetchData()
    prism.highlightAll()
    // document.write("<script language=javascript src='../assets/prism.js'><\\/script>")
  },
  created () {
    // alert(536)
  },
  watch: {
    '$route': {
      handler (route) {
        const that = this
        if (route.name === 'teach') {
          that.fetchData()
        }
      }
    }
  }
}
// alert(234)
// highlightAll()
// //console.log(prism)
</script>
