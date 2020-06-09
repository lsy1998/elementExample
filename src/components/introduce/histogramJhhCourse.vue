/* eslint-disable */
<template>
  <div style="">
    <el-row>
      <h2 style="color:rgb(2, 155, 98);float:left;margin:0px 0px 10px 40px">灰度直方图:</h2>
      <div style="color:black;margin:10px 45px 0px 45px;text-align:left;text-indent:2em;clear:both">
       直方图均衡化是使用图像直方图进行对比度调整的图像处理的方法。
</div>
      <div style="color:black;margin:10px 45px 0px 45px;text-align:left;text-indent:2em">
       该方法通常会增加许多图像的整体对比度，尤其是当图像的可用数据由接近的对比度值表示时。 通过这种调整，强度可以更好地分布在直方图上。 这允许局部对比度较低的区域获得较高的对比度。 直方图均衡化通过有效地分散最频繁的强度值来实现这一点。</div>
      <img src="../../assets/image/histogramJhh.png" alt="">
      <div style="color:black;margin:10px 45px 0px 45px;text-align:left;text-indent:2em">
        假如图像的灰度分布不均匀，其灰度分布集中在较窄的范围内，使图像的细节不够清晰，对比度较低。通常采用直方图均衡化及直方图规定化两种变换，使图像的灰度范围拉开或使灰度均匀分布，从而增大反差，使图像细节清晰，以达到增强的目的。
直方图均衡化，对图像进行非线性拉伸，重新分配图像的灰度值，使一定范围内图像的灰度值大致相等。这样，原来直方图中间的峰值部分对比度得到增强，而两侧的谷底部分对比度降低，输出图像的直方图是一个较为平坦的直方图。</div>
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
  name: 'histogramJhhCourse',
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
