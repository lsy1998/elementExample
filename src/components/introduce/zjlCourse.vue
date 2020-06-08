/* eslint-disable */
<template>
  <div style="">
    <el-row>
      <h2 style="color:rgb(2, 155, 98);float:left;margin:0px 0px 10px 40px">最近邻插值:</h2>
      <div style="color:black;margin:10px 45px 20px 45px;text-align:left;text-indent:2em; clear:both">
       最近邻插值是一种简单的插值算法：不需要计算，在待求象素的四邻象素中，将距离待求象素最近的邻象素灰度赋给待求象素
设i+u, j+v(i, j为正整数， u, v为大于零小于1的小数，下同)为待求象素坐标，则待求象素灰度的值 f(i+u, j+v)
如下图所示：</div>
<img src="https://img-blog.csdn.net/20171122101516338" alt="">
<div style="color:black;margin:40px 45px 20px 45px;text-align:left;text-indent:2em">
      如果(i+u, j+v)落在A区，即u&lt;0.5, v&lt;0.5，则将左上角象素的灰度值赋给待求象素，同理，落在B区则赋予右上角的象素灰度值，落在C区则赋予左下角象素的灰度值，落在D区则赋予右下角象素的灰度值。
最邻近元法计算量较小，但可能会造成插值生成的图像灰度上的不连续，在灰度变化的地方可能出现明显的锯齿状</div>
      <div style="margin:0px 45px 0px 40px;">
        <pre id="code" class="line-numbers"><code class="language-python">
        def NN_interpolation(img, dstH, dstW):
            scrH, scrW, s = img.shape
            retimg = np.zeros((dstH, dstW, 3), dtype=np.uint8)
            for i in range(dstH-1):
            for j in range(dstW-1):
                scrx = round(i*(scrH/dstH))
                scry = round(j*(scrW/dstW))
                retimg[i, j] = img[scrx, scry]
            return retimg
        im_path = f'./{name}'
        image = np.array(Image.open(im_path))
        image1 = NN_interpolation(image, image.shape[0]*<input id="num1" ref="num1" v-model="num1" type="text" style="width:20px" value="1">, image.shape[1]*<input id="num2" ref="num2" v-model="num2" style="width:20px" value="1" type="text" >)
        </code></pre>
      </div>
      <el-button @click="jump" style="background-color:rgb(2, 155, 98); color:white;float:left;margin:0px 0px 0 40px">在线示例 <i class="el-icon-video-play"></i></el-button>
      <el-button style="background-color:rgb(2, 155, 98); color:white;float:right;margin:0 45px 0 0">下一个 <i class="el-icon-arrow-right"></i></el-button>
    </el-row>
  </div>
</template>

<script>
// import $ from 'jquery'
import prism from '../../../static/dist/prism.js'
export default {
  name: 'zjlCourse',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    jump () {
      this.$router.push({path: '/zjl'})
    }
  },
  mounted () {
    prism.highlightAll()
  }
}
</script>

<style scoped>
/* @import '../assets/iconfont/iconfont.css' */
</style>
