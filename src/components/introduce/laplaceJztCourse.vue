/* eslint-disable */
<template>
  <div style="">
    <el-row>
      <h2 style="color:rgb(2, 155, 98);float:left;margin:0px 0px 10px 40px">金字塔分解法实现医学图像融合:</h2>
      <div style="color:black;margin:10px 45px 20px 45px;text-align:left;text-indent:2em; clear:both">
       高斯金字塔：用于下采样。高斯金字塔是最基本的图像塔。
原理：首先将原图像作为最底层图像G0（高斯金字塔的第0层），利用高斯核（5*5）对其进行卷积（高斯平滑），然后对卷积后的图像进行下采样（去除偶数行和列）得到上一层图像G1，将此图像作为输入，重复卷积和下采样操作得到更上一层图像，反复迭代多次，形成一个金字塔形的图像数据结构，即高斯金字塔。
由于上采样和下采样是非线性处理，是不可逆的有损处理，因此下采样后的图像想要还原回原来的尺寸的话会丢失很多信息，使图片变模糊。
</div>
<img src="../../assets/image/laplaceZjt1.png" alt="">
      <div style="color:black;margin:10px 45px 20px 45px;text-align:left;text-indent:2em; clear:both">
       拉普拉斯金字塔：用于重建图像，也就是预测残差，对图像进行最大程度的还原。
一幅小图像重建为一幅大图原理：用高斯金字塔的每一层图像减去其上一层图像上采样并高斯卷积之后的预测图像，得到一系列的差值图像即为 LP 分解图像。</div>
      <div style="color:black;margin:20px 45px 20px 45px;text-align:left;text-indent:2em">
        拉普拉斯金字塔实际上是通过计算图片先下采样再上采样后的结果和原图片的残差来保存缺失信息的，公式为：
      </div>
      <img src="../../assets/image/laplaceZjt2.png" alt="">
      <div style="color:black;margin:20px 45px 20px 45px;text-align:left;text-indent:2em">
         也就是说，拉普拉斯金字塔实际上是由上面的残差图片组成的金字塔，它为还原图片做准备。
求得每个图像的拉普拉斯金字塔后需要对相应层次的图像进行融合，最终还原图像。
拉普拉斯金字塔可以精确还原图片信息。
      </div>
      <div style="color:black;margin:20px 45px 20px 45px;text-align:left;text-indent:2em">
         图像拉普拉斯金字塔分解的目的是将源图像分别分解到不同的空间频带上，融合过程是在各空间频率层上分别进行的，这样就可以针对不同分解层的不同频带上的特征与细节，采用不同的融合算子以达到突出特定频带上特征与细节的目的。即有可能将来自不同图像的特征与细节融合在一起。
      </div>
      <!-- <img src="https://img-blog.csdn.net/20171122101516338" alt=""> -->
      <div style="margin:0px 45px 0px 40px;">
        <pre id="code" class="line-numbers"><code class="language-python">
import cv2
import numpy as np,sys
A = cv2.imread('F:/ninny.jpg')
B = cv2.imread('F:/nero.jpg')
# generate Gaussian pyramid for A
G = A.copy()
gpA = [G]
for i in range(6):
    G = cv2.pyrDown(G)
    gpA.append(G)
# generate Gaussian pyramid for B
G = B.copy()
gpB = [G]
for i in range(6):
    G = cv2.pyrDown(G)
    gpB.append(G)
# generate Laplacian Pyramid for A
lpA = [gpA[5]]
for i in range(5,0,-1):
    GE = cv2.pyrUp(gpA[i])
    L = cv2.subtract(gpA[i-1],GE)
    lpA.append(L)
# generate Laplacian Pyramid for B
lpB = [gpB[5]]
for i in range(5,0,-1):
    GE = cv2.pyrUp(gpB[i])
    L = cv2.subtract(gpB[i-1],GE)
    lpB.append(L)
# Now add left and right halves of images in each level
#numpy.hstack(tup)
#Take a sequence of arrays and stack them horizontally
#to make a single array.
LS = []
for la,lb in zip(lpA,lpB):
    rows,cols,dpt = la.shape

    ls = np.hstack((la[:,:cols//2], lb[:,cols//2:]))
    # ls = np.hstack((la[:, :cols // 4], lb[:, cols // 4: cols//2], la[:, cols//2:3 * cols//4], lb[:, 3*cols//4: ]))
    LS.append(ls)
# now reconstruct
ls_ = LS[0]
for i in range(1,6):
    ls_ = cv2.pyrUp(ls_)
    ls_ = cv2.add(ls_, LS[i])
# image with direct connecting each half
real = np.hstack((A[:,:cols//2],B[:,cols//2:]))
# real = np.hstack((A[:,:cols//4],B[:,cols//4: cols//2], A[:, cols//2: 3*cols//4], B[:, 3*cols//4: ]))
cv2.imwrite('F:/ninny_nero.jpg',ls_)
cv2.imwrite('F:/nini_chaochao.jpg',real)
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
  name: 'laplaceJztCourse',
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
