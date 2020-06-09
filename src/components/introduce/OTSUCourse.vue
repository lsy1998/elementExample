/* eslint-disable */
<template>
  <div style="">
    <el-row>
      <h2 style="color:rgb(2, 155, 98);float:left;margin:0px 0px 10px 40px">otsu大津阈值分割:</h2>
      <div style="color:black;margin:10px 45px 20px 45px;text-align:left;text-indent:2em; clear:both">
        在计算机视觉和图像处理中，大津法被用于自动获取图像的阈值，或者将灰度图像转换为二值化图像。该算法假设图像包含两个类别的像素（前景像素和背景像素），然后它计算一个最优的阈值用于分离前景和背景，使得前景和背景的类间方差最小。</div>
      <div style="color:black;margin:20px 45px 20px 45px;text-align:left;text-indent:2em">
       下面定义类间方差的计算公式：
假设我们使用阈值T将灰度图像分割为前景和背景
      </div>
      <div style="margin:0px 45px 0px 40px;">
        <pre id="code" class="line-numbers"><code class="language-python">
u：图像的平均灰度
w0：前景像素点占整幅图像大小的比例
u0：前景像素点的平均值
w1：背景像素点占整幅图像大小的比例
u0：背景像素点的平均值
g：类间方差

u = w0 * u0 + w1 * u1 (1)
g = w0*(u - u0)^2 + w1*(u - u1)^2 (2)
将(1)代入(2)得：
g = w0 * w1 * (u0 - u1)^2

        </code></pre>
      </div>
      <div style="color:black;margin:20px 45px 20px 45px;text-align:left;text-indent:2em">
        采用遍历的方法，遍历所有阈值，当g最大时，该阈值就是我们所求的认为最合适的阈值了。
偷偷告诉你，opencv有自带的使用大津法阈值化的方法，如下：
      </div>

      <!-- <img src="https://img-blog.csdn.net/20171122101516338" alt=""> -->
      <div style="margin:0px 45px 0px 40px;">
        <pre id="code" class="line-numbers"><code class="language-python">
cv2.threshold(img, th1, max_val, cv2.THRESH_OTSU)
        </code></pre>
      </div>
      <div style="color:black;margin:20px 45px 20px 45px;text-align:left;text-indent:2em">
         使用参数cv2.THRESH_OTSU后，前面的th1就无效了。<br>

以下是我自己写的Python版函数：
      </div>
      <div style="margin:0px 45px 0px 40px;">
        <pre id="code" class="line-numbers"><code class="language-python">
import numpy as np

def OTSU_enhance(img_gray, th_begin=0, th_end=256, th_step=1):
    assert img_gray.ndim == 2, "must input a gary_img"

    max_g = 0
    suitable_th = 0
    for threshold in xrange(th_begin, th_end, th_step):
        bin_img = img_gray > threshold
        bin_img_inv = img_gray &lg;= threshold
        fore_pix = np.sum(bin_img)
        back_pix = np.sum(bin_img_inv)
        if 0 == fore_pix:
            break
        if 0 == back_pix:
            continue

        w0 = float(fore_pix) / img_gray.size
        u0 = float(np.sum(img_gray * bin_img)) / fore_pix
        w1 = float(back_pix) / img_gray.size
        u1 = float(np.sum(img_gray * bin_img_inv)) / back_pix
        # intra-class variance
        g = w0 * w1 * (u0 - u1) * (u0 - u1)
        if g > max_g:
            max_g = g
            suitable_th = threshold
    return suitable_th
————————————————
版权声明：本文为CSDN博主「爬金字塔的人」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/u012771236/java/article/details/44975831
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
  name: 'OTSUCourse',
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
