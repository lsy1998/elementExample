<template>
  <div style="">
    <el-row>
      <el-col :span="8" id='code' style="background-color:white;box-shadow:5px 0 3px -1px rgb(228, 228, 228);">
        <div style="color:black;margin:40px 45px 20px 45px;text-align:left">
          区域生长是一种串行区域分割的图像分割方法。区域生长是指从某个像素出发，按照一定的准则，逐步加入邻近像素，当满足一定的条件时，区域生长终止。区域生长的好坏决定于1.初始点（种子点）的选取。2.生长准则。3.终止条件。区域生长是从某个或者某些像素点出发，最后得到整个区域，进而实现目标的提取。
        </div>
        <div style="color:black;margin:40px 45px 20px 45px;text-align:left">
         区域生长的原理：<br>
区域生长的基本思想是将具有相似性质的像素集合起来构成区域。具体先对每个需要分割的区域找一个种子像素作为生长起点，然后将种子像素和周围邻域中与种子像素有相同或相似性质的像素（根据某种事先确定的生长或相似准则来判定）合并到种子像素所在的区域中。将这些新像素当作新的种子继续上面的过程，直到没有满足条件的像素可被包括进来。这样一个区域就生长成了。
        </div>
        <div style="color:black;margin:40px 45px 20px 45px;text-align:left">
         区域生长实现的步骤如下：
         </div>
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
  name: 'regionGrow',
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
      //   console.log(111)
      //   // prism.highlightAll() // 这里加定时器让它后执行，不然没效果
      // }, 0)
    },
    submit () {
      //   console.log($('#num1').val())
      //   console.log($('#num2').val())
      //   console.log(this.$refs.num1.value)
      //   console.log(this.$refs.num2.value)
      alert(12)
      this.$axios({
        url: 'http://47.115.131.98:888/regionGrow',
        method: 'post',
        data: {
          userCount: sessionStorage.userCount,
          num1: $('#num1').val()
          //   num2: $('#num2').val()
        }
      }).then((res) => {
        console.log(res.data)
        alert(123)
        // $('#image').css('width', '100%')
        $('#image').attr('src', 'https://graduation-project.lishangying.site/jiaocheng/' + res.data.picUrl + '?' + new Date().getTime())
      })
    }
  },
  mounted () {
    // $('#num1').on('input', () => {
    //   console.log('你按了一下111')
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
// console.log(prism)
</script>
