/* eslint-disable */
<template>
  <div style="">
    <el-row>
        <h2 style="color:rgb(2, 155, 98);float:left;margin:0px 0px 10px 40px">双线性插值:</h2>
      <!-- <el-button style="background-color:rgb(2, 155, 98); color:white;float:right;margin:0 45px 0 0">下一个 <i class="el-icon-arrow-right"></i></el-button> -->
      <div style="color:black;margin:10px 45px 20px 45px;text-align:left;text-indent:2em;clear:both">
假设源图像大小为mxn，目标图像为axb。那么两幅图像的边长比分别为：m/a和n/b。注意，通常这个比例不是整数，编程存储的时候要用浮点型。目标图像的第（i,j）个像素点（i行j列）可以通过边长比对应回源图像。其对应坐标为（i*m/a,j*n/b）。显然，这个对应坐标一般来说不是整数，而非整数的坐标是无法在图像这种离散数据上使用的。双线性插值通过寻找距离这个对应坐标最近的四个像素点，来计算该点的值（灰度值或者RGB值）。
</div>
      <div style="color:black;margin:10px 45px 20px 45px;text-align:left;text-indent:2em">
若图像为灰度图像，那么（i，j）点的灰度值的数学计算模型是：

f(x,y)=b1+b2x+b3y+b4xy。其中b1,b2,b3,b4是相关的系数。关于其的计算过程如下如下：
</div>
      <div style="color:black;margin:10px 45px 20px 45px;text-align:left; text-indent:2em">
 如图，已知Q12，Q22，Q11，Q21，但是要插值的点为P点，这就要用双线性插值了，首先在x轴方向上，对R1和R2两个点进行插值，这个很简单，然后根据R1和R2对P点进行插值，这就是所谓的双线性插值。
</div>
<img src="http://images.cnitblog.com/blog/362399/201403/281607508919268.png" alt="">
      <div style="margin:0px 45px 0px 40px;">
        <pre id="code" class="line-numbers"><code class="language-python">
        def bilinear_interpolation(img, out_dim):
        src_h, src_w, channel = img.shape
        dst_h, dst_w = out_dim[1], out_dim[0]
        if src_h == dst_h and src_w == dst_w:
            return img.copy()
        dst_img = np.zeros((dst_h, dst_w, channel), dtype=np.uint8)
        scale_x, scale_y = float(src_w) / dst_w, float(src_h) / dst_h
        for i in range(channel):
            for dst_y in range(dst_h):
                for dst_x in range(dst_w):
                    src_x = (dst_x + 0.5) * scale_x - 0.5
                    src_y = (dst_y + 0.5) * scale_y - 0.5
                    src_x0 = int(floor(src_x))
                    src_x1 = min(src_x0 + 1, src_w - 1)
                    src_y0 = int(floor(src_y))
                    src_y1 = min(src_y0 + 1, src_h - 1)
                    if src_x0 != src_x1 and src_y1 != src_y0:
                        temp0 = ((src_x1 - src_x) * img[src_y0, src_x0, i] + (
                            src_x - src_x0) * img[src_y0, src_x1, i]) / (src_x1 - src_x0)
                        temp1 = (src_x1 - src_x) * img[src_y1, src_x0, i] + (
                            src_x - src_x0) * img[src_y1, src_x1, i] / (src_x1 - src_x0)
                        dst_img[dst_y, dst_x, i] = int(
                            (src_y1 - src_y) * temp0 + (src_y - src_y0) * temp1) / (src_y1 - src_y0)
        return dst_img</code></pre>
      </div>
      <el-button style="background-color:rgb(2, 155, 98); color:white;float:left;margin:0px 0px 0 40px">在线示例 <i class="el-icon-video-play"></i></el-button>
      <el-button style="background-color:rgb(2, 155, 98); color:white;float:right;margin:0 45px 0 0">下一个 <i class="el-icon-arrow-right"></i></el-button>
    </el-row>
  </div>
</template>

<script>
// import $ from 'jquery'
import prism from '../../../static/dist/prism.js'
export default {
  name: 'bilinearInterpolationCourse',
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
