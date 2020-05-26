/* eslint-disable */
<template>
  <div style="">
    <el-row>
      <h2 style="color:rgb(2, 155, 98);float:left;margin:0px 0px 10px 40px">Canny边缘检测:</h2>
      <div style="color:black;margin:10px 45px 20px 45px;text-align:left;text-indent:2em; clear:both">
        Canny边缘检测于1986年由JOHN CANNY首次在论文《A Computational Approach to Edge Detection》中提出，就此拉开了Canny边缘检测算法的序幕。</div>
      <div style="color:black;margin:20px 45px 20px 45px;text-align:left;text-indent:2em">
        Canny边缘检测是从不同视觉对象中提取有用的结构信息并大大减少要处理的数据量的一种技术，目前已广泛应用于各种计算机视觉系统。Canny发现，在不同视觉系统上对边缘检测的要求较为类似，因此，可以实现一种具有广泛应用意义的边缘检测技术。边缘检测的一般标准包括：
      </div>
      <div style="color:black;margin:10px 45px 0px 45px;text-align:left;text-indent:2em">
        1. 以低的错误率检测边缘，也即意味着需要尽可能准确的捕获图像中尽可能多的边缘。
      </div>
      <div style="color:black;margin:10px 45px 0px 45px;text-align:left;text-indent:2em">
        2. 检测到的边缘应精确定位在真实边缘的中心。
      </div>
      <div style="color:black;margin:10px 45px 0px 45px;text-align:left;text-indent:2em">
        3. 图像中给定的边缘应只被标记一次，并且在可能的情况下，图像的噪声不应产生假的边缘。
      </div>
      <div style="color:black;margin:20px 45px 20px 45px;text-align:left;text-indent:2em">
        为了满足这些要求，Canny使用了变分法。Canny检测器中的最优函数使用四个指数项的和来描述，它可以由高斯函数的一阶导数来近似。
      </div>
      <div style="color:black;margin:20px 45px 20px 45px;text-align:left;text-indent:2em">
        在目前常用的边缘检测方法中，Canny边缘检测算法是具有严格定义的，可以提供良好可靠检测的方法之一。由于它具有满足边缘检测的三个标准和实现过程简单的优势，成为边缘检测最流行的算法之一。
      </div>
      <div style="color:black;margin:20px 45px 20px 45px;text-align:left;text-indent:2em">
        Canny边缘检测算法可以分为以下5个步骤：
      </div>
      <div style="color:black;margin:10px 45px 0px 45px;text-align:left;text-indent:2em">
        1. 使用高斯滤波器，以平滑图像，滤除噪声。
      </div>
      <div style="color:black;margin:20px 45px 20px 45px;text-align:left;text-indent:4em">
        首先生成二维高斯分布矩阵：
      </div>
      <img src="https://images2017.cnblogs.com/blog/1055519/201712/1055519-20171209113727167-95281661.png" alt="">
      <div style="color:black;margin:20px 45px 20px 45px;text-align:left;text-indent:4em">
        然后与灰度图像进行卷积实现滤波：
      </div>
      <img src="https://images2017.cnblogs.com/blog/1055519/201712/1055519-20171209113805277-849122456.png" alt="">
      <div style="color:black;margin:10px 45px 0px 45px;text-align:left;text-indent:2em">
        2. 计算图像中每个像素点的梯度强度和方向。
      </div>
      <div style="color:black;margin:20px 45px 20px 45px;text-align:left;text-indent:2em">
        求变化率时，对于一元函数，即求导；对于二元函数，求偏导。 数字图像处理中，用一阶有限差分近似求取灰度值的梯度值(变化率)。
        (即：使差商(Δf/Δx)近似取代微商(∂f/∂x)。求灰度的变化率，分别取x和y方向上相邻像素做差，代替求取x和y 方向一阶偏导) 。
      </div>
      <img src="https://images2017.cnblogs.com/blog/1055519/201712/1055519-20171209114023527-901395595.png" alt="">
      <div style="color:black;margin:20px 45px 20px 45px;text-align:left;text-indent:2em">
        其中f为图像灰度值，P代表X方向梯度幅值，Q代表Y方向 梯度幅值，M是该点幅值，Θ是梯度方向，也就是角度。
        注：图像梯度方向与边缘方向互相垂直：
      </div>
      <img src="https://images2017.cnblogs.com/blog/1055519/201712/1055519-20171209114129355-1447164606.png" alt="">
      <div style="color:black;margin:10px 45px 0px 45px;text-align:left;text-indent:2em">
        3. 应用非极大值（Non-Maximum Suppression）抑制，以消除边缘检测带来的杂散响应。
      </div>
      <div style="color:black;margin:20px 45px 20px 45px;text-align:left;text-indent:2em">
        通俗意义上是指寻找像素点局部最大值。沿着梯度方向，比较它前面和后面的梯度值。在沿其方向上邻域的梯度幅值最大，则保留；否则，抑制。
      </div>
      <div style="color:black;margin:10px 45px 0px 45px;text-align:left;text-indent:2em">
        4. 应用双阈值（Double-Threshold）检测来确定真实的和潜在的边缘。
      </div>
      <div style="color:black;margin:10px 45px 0px 45px;text-align:left;text-indent:2em">
        5. 通过抑制孤立的弱边缘最终完成边缘检测。
      </div>
      <!-- <img src="https://img-blog.csdn.net/20171122101516338" alt=""> -->
      <div style="margin:0px 45px 0px 40px;">
        <pre id="code" class="line-numbers"><code class="language-python">
        import matplotlib.pyplot as plt
import numpy as np
import math

img = plt.imread('G:\\360downloads\\lps.png')

sigma1 = sigma2 = 1
sum = 0

gaussian = np.zeros([5, 5])
for i in range(5):
    for j in range(5):
        gaussian[i,j] = math.exp(-1/2 * (np.square(i-3)/np.square(sigma1) + (np.square(j-3)/np.square(sigma2)))) / (2*math.pi*sigma1*sigma2)
        sum = sum + gaussian[i, j]

gaussian = gaussian/sum
# print(gaussian)

def rgb2gray(rgb):
    return np.dot(rgb[...,:3], [0.299, 0.587, 0.114])

# step1.高斯滤波
gray = rgb2gray(img)
W, H = gray.shape
new_gray = np.zeros([W-5, H-5])
for i in range(W-5):
    for j in range(H-5):
        new_gray[i,j] = np.sum(gray[i:i+5,j:j+5]*gaussian)   # 与高斯矩阵卷积实现滤波

# plt.imshow(new_gray, cmap="gray")

# step2.增强 通过求梯度幅值
W1, H1 = new_gray.shape
dx = np.zeros([W1-1, H1-1])
dy = np.zeros([W1-1, H1-1])
d = np.zeros([W1-1, H1-1])
for i in range(W1-1):
    for j in range(H1-1):
        dx[i,j] = new_gray[i, j+1] - new_gray[i, j]
        dy[i,j] = new_gray[i+1, j] - new_gray[i, j]
        d[i, j] = np.sqrt(np.square(dx[i,j]) + np.square(dy[i,j]))   # 图像梯度幅值作为图像强度值

# plt.imshow(d, cmap="gray")

# setp3.非极大值抑制 NMS
W2, H2 = d.shape
NMS = np.copy(d)
NMS[0,:] = NMS[W2-1,:] = NMS[:,0] = NMS[:, H2-1] = 0
for i in range(1, W2-1):
    for j in range(1, H2-1):

        if d[i, j] == 0:
            NMS[i, j] = 0
        else:
            gradX = dx[i, j]
            gradY = dy[i, j]
            gradTemp = d[i, j]

            # 如果Y方向幅度值较大
            if np.abs(gradY) > np.abs(gradX):
                weight = np.abs(gradX) / np.abs(gradY)
                grad2 = d[i-1, j]
                grad4 = d[i+1, j]
                # 如果x,y方向梯度符号相同
                if gradX * gradY > 0:
                    grad1 = d[i-1, j-1]
                    grad3 = d[i+1, j+1]
                # 如果x,y方向梯度符号相反
                else:
                    grad1 = d[i-1, j+1]
                    grad3 = d[i+1, j-1]

            # 如果X方向幅度值较大
            else:
                weight = np.abs(gradY) / np.abs(gradX)
                grad2 = d[i, j-1]
                grad4 = d[i, j+1]
                # 如果x,y方向梯度符号相同
                if gradX * gradY > 0:
                    grad1 = d[i+1, j-1]
                    grad3 = d[i-1, j+1]
                # 如果x,y方向梯度符号相反
                else:
                    grad1 = d[i-1, j-1]
                    grad3 = d[i+1, j+1]

            gradTemp1 = weight * grad1 + (1-weight) * grad2
            gradTemp2 = weight * grad3 + (1-weight) * grad4
            if gradTemp >= gradTemp1 and gradTemp >= gradTemp2:
                NMS[i, j] = gradTemp
            else:
                NMS[i, j] = 0

# plt.imshow(NMS, cmap = "gray")

# step4. 双阈值算法检测、连接边缘
W3, H3 = NMS.shape
DT = np.zeros([W3, H3])
# 定义高低阈值
TL = 0.2 * np.max(NMS)
TH = 0.3 * np.max(NMS)
for i in range(1, W3-1):
    for j in range(1, H3-1):
        if (NMS[i, j] &lt; TL):
            DT[i, j] = 0
        elif (NMS[i, j] > TH):
            DT[i, j] = 1
        elif ((NMS[i-1, j-1:j+1] &lt; TH).any() or (NMS[i+1, j-1:j+1]).any()
              or (NMS[i, [j-1, j+1]] &lt; TH).any()):
            DT[i, j] = 1

plt.imshow(DT, cmap = "gray")
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
  name: 'cannyCourse',
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
