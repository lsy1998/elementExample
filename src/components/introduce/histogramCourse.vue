/* eslint-disable */
<template>
  <div style="">
    <el-row>
      <h2 style="color:rgb(2, 155, 98);float:left;margin:0px 0px 10px 40px">灰度直方图:</h2>
      <div style="color:black;margin:10px 45px 0px 45px;text-align:left;text-indent:2em;clear:both">
        一幅图像由不同灰度值的像素组成，图像中灰度的分布情况是该图像的一个重要特征。图像的灰度直方图就描述了图像中灰度分布情况，能够很直观的展示出图像中各个灰度级所占的多少。
</div>
      <div style="color:black;margin:10px 45px 0px 45px;text-align:left;text-indent:2em">
       图像的灰度直方图是灰度级的函数，描述的是图像中具有该灰度级的像素的个数：其中，横坐标是灰度级，纵坐标是该灰度级出现的频率。图像的灰度直方图是灰度级的函数，描述的是图像中具有该灰度级的像素的个数：其中，横坐标是灰度级，纵坐标是该灰度级出现的频率。
      </div>
      <img src="../../assets/image/histogram.png" alt="">
      <div style="color:black;margin:10px 45px 0px 45px;text-align:left;text-indent:2em">
        不过通常会将纵坐标归一化到[0,1]区间内，也就是将灰度级出现的频率（像素个数）除以图像中像素的总数。灰度直方图的计算公式如下：p(r)=n/MN。其中，r是像素的灰度级，n是具有灰度r的像素的个数，MN是图像中总的像素个数。</div>
<div style="margin:0px 45px 0px 40px;">
        <pre id="code" class="line-numbers">
          <code class="language-python">
import numpy as np
import sys
import matplotlib.pyplot as plt
import cv2

def calcGrayHist(image):
    rows, cols = image.shape
    grayHist = np.zeros([256], np.uint64)
    for r in range(rows):
        for c in range(cols):
            grayHist[image[r][c]] += 1

    return grayHist

if __name__ == "__main__":
    #if len(sys.argv) > 1:
    #    image = cv2.imread(sys.argv[1], cv2.IMREAD_GRAYSCALE)
    #else:
    #    print("sys.argv null")
    image = cv2.imread("./2.png", cv2.IMREAD_GRAYSCALE)

    grayHist = calcGrayHist(image)

    x_range = range(256)
    plt.plot(x_range, grayHist, 'r', linewidth=2, c='red')
    y_maxValue = np.max(grayHist)
    plt.axis([0, 255, 0, y_maxValue])
    plt.xlabel("gray level")
    plt.ylabel("num of pixles")
    plt.show()
        </code></pre>
      </div>
      <el-button style="background-color:rgb(2, 155, 98); color:white;float:left;margin:0px 0px 0 40px">在线示例 <i
          class="el-icon-video-play"></i></el-button>
      <el-button style="background-color:rgb(2, 155, 98); color:white;float:right;margin:0 45px 0 0">下一个 <i
          class="el-icon-arrow-right"></i></el-button>
    </el-row>
  </div>
</template>

<script>
// import $ from 'jquery'
import prism from '../../../static/dist/prism.js'
export default {
  name: 'histogramCourse',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
