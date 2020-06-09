/* eslint-disable */
<template>
  <div style="">
    <el-row>
      <h2 style="color:rgb(2, 155, 98);float:left;margin:0px 0px 10px 40px">直方图规定化:</h2>
      <div style="color:black;margin:10px 45px 0px 45px;text-align:left;text-indent:2em;clear:both">
       直方图规定化，也叫做直方图匹配，用于将图像变换为某一特定的灰度分布，也就是其目的的灰度直方图是已知的。这其实和均衡化很类似，均衡化后的灰度直方图也是已知的，是一个均匀分布的直方图；而规定化后的直方图可以随意的指定，也就是在执行规定化操作时，首先要知道变换后的灰度直方图，这样才能确定变换函数。规定化操作能够有目的的增强某个灰度区间，相比于，均衡化操作，规定化多了一个输入，但是其变换后的结果也更灵活。
</div>
      <div style="color:black;margin:10px 45px 0px 45px;text-align:left;text-indent:2em">
       在理解了均衡化过程后，直方图的规定化也较为简单。可以利用均衡化后的直方图作为一个中间过程，然后求取规定化的变换函数。具体步骤如下：</div>
       <div style="color:black;margin:10px 45px 0px 45px;text-align:left;text-indent:2em">
        1. 对原始图像进行均衡化操作，则:
      </div>
      <img src="../../assets/image/gdh1.png" alt="">
       <div style="color:black;margin:10px 45px 0px 45px;text-align:left;text-indent:2em">
        2. 对规定化的直方图进行均衡化操作，则:
      </div>
      <img src="../../assets/image/gdh2.png" alt="">
       <div style="color:black;margin:10px 45px 0px 45px;text-align:left;text-indent:2em">
        3. 由于是对同一图像的均衡化操作，所以有sk=vm。
      </div>
       <div style="color:black;margin:10px 45px 0px 45px;text-align:left;text-indent:2em">
        4. 规定化操作的目的就是找到原始图像的像素sk到规定化后图像像素的zk之间的一个映射。有了上一步的等式后，可以得到sk=G(zk)，因此要想找到sk想对应的zk只需要在z进行迭代，找到使式子G(zm)−sk的绝对值最小即可
      </div>
       <div style="color:black;margin:10px 45px 0px 45px;text-align:left;text-indent:2em">
        5. 上述描述只是理论的推导过程，在实际的计算过程中，不需要做两次的均衡化操作，具体的推导过程如下：
      </div>
      <img src="../../assets/image/gdh3.png" alt="">
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
  name: 'histogramGdhCourse',
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
