/* eslint-disable */
<template>
  <div style="">
    <el-row>
      <h2 style="color:rgb(2, 155, 98);float:left;margin:0px 0px 10px 40px">小波变换实现医学图像融合:</h2>
      <div style="color:black;margin:10px 45px 20px 45px;text-align:left;text-indent:2em; clear:both">
        小波变换的固有特性使其在图像处理中有如下优点：完善的重构能力，保证信号在分解过程中没有信息损失和冗余信息；把图像分解成平均图像和细节图像的组合，分别代表了图像的不同结构，因此容易提取原始图像的结构信息和细节信息；小波分析提供了与人类视觉系统方向相吻合的选择性图像。
      </div>
      <div style="color:black;margin:10px 45px 20px 45px;text-align:left;text-indent:2em; clear:both">
        离散小波变换(Discrete Wavelet Transform,
        DWT)。DWT的函数基由一个称为母小波或分析小波的单一函数通过膨胀和平移获得。因而，DWT同时具有时域和频域分析能力，与一般的金字塔分解相比，DWT图像分解具有以下优势：</div>
      <div style="color:black;margin:10px 45px 20px 45px;text-align:left;text-indent:2em; clear:both">
        1）具有方向性，在提取图像低频信息的同时，还可获得了水平、垂直和对角三个方向的高频信息；</div>
      <div style="color:black;margin:10px 45px 20px 45px;text-align:left;text-indent:2em; clear:both">
        2）通过合理的选择母小波，可使DWT在压缩噪声的同时更有效的提取纹理、边缘等显著信息；</div>
      <div style="color:black;margin:10px 45px 20px 45px;text-align:left;text-indent:2em; clear:both">
        3）金字塔分解各尺度之间具有信息的相关性，而DWT在不同尺度上具有更高的独立性。</div>
      <!-- <div style="color:black;margin:20px 45px 20px 45px;text-align:left;text-indent:2em">
       融合应用 </div> -->
      <h3 style="text-align:left;margin:0 0 0 45px">融合规则：</h3>
      <div style="color:black;margin:20px 45px 20px 45px;text-align:left;text-indent:2em">
        规则一：系数绝对值较大法:该融合规则适合高频成分比较丰富，亮度、对比度比较高的源图像，否则在融合图像中只保留一幅源图像的特征，其他的特征被覆盖。小波变换的实际作用是对信号解相关，并将信号的全部信息集中到一部分具有大幅值的小波系数中。这些大的小波系数含有的能量远比小系数含有的能量大，从而在信号的重构中，大的系数比小的系数更重要。
      </div>
      <div style="color:black;margin:20px 45px 20px 45px;text-align:left;text-indent:2em">
        规则二：加权平均法:权重系数可调，适用范围广，可消除部分噪声，源图像信息损失较少，但会造成图像对比度的下降，需要增强图像灰度。
      </div>
      <div style="color:black;margin:20px 45px 20px 45px;text-align:left;text-indent:2em">
        规则三：局部方差准则:设A(x,y)和B(x,y)分别为高频子图像数据值，F(x,y)为相应高频子图像融合值，将A(x,y)和B(x,y)分成若干个M×N子块图像。对每个子块图像进行数值分布统计，计算其方差。确定A和B图像每个子块图像加权系数K1和K2。如果A图像子块方差大于B图像子块方差,则K1≥K2，否则K1&lt;K2。确定每个子块图像的数据融合数值为：F(i,j)=K1A(i,j)+K2B(i,j)。
      </div>
      <h3 style="text-align:left;margin:0 0 0 45px">融合应用</h3>
      <div style="color:black;margin:20px 45px 20px 45px;text-align:left;text-indent:2em">
        若对二维图像进行N层的小波分解,最终将有(3N+1)个高低频带，其中包含3N个高频带和一个低频带。图像融合的基本步骤如下。 </div>
      <div style="color:black;margin:20px 45px 20px 45px;text-align:left;text-indent:2em">
        1）对每一源图像分别进行小波分解，建立图像的小波金字塔分解。</div>
      <div style="color:black;margin:20px 45px 20px 45px;text-align:left;text-indent:2em">
        2）对各分解层分别进行融合处理，采用不同的融合算子对各分解层的不同频率分量进行融合处理，最终得到融合后的小波金字塔。低频：加权平均，高频：绝对值取大。
      </div>
      <div style="color:black;margin:20px 45px 20px 45px;text-align:left;text-indent:2em">
        3）对融合后所得的小波金字塔进行小波逆变换，所得到的重构图像即为融合后的图像。
      </div>
      <div style="margin:0px 45px 0px 40px;">
        <pre id="code" class="line-numbers"><code class="language-python">
import numpy as np
import cv2 as cv

def fangcha(img):
    row=img.shape[0]
    col=img.shape[1]
    varImg=np.zeros([row,col])
    for i in range(row):#求取求方差范围
        for j in range(col):
            if i-5>0:
                up=i-5
            else:
               up=0
            if i+5&lt;row:
                down=i+5
            else:
                down=row
            if j-5>0:
                left=j-5
            else:
                left=0
            if j+5&lt;col:
                right=j+5
            else:
                right=col
            window=img[up:down,left:right]
            mean,var=cv.meanStdDev(window)#调用OpenCV函数求取均值和方差
            varImg[i,j]=var
    return varImg

def qiuquan(img1,img2):
    row=img1.shape[0]
    col=img1.shape[1]
    array1=fangcha(img1)#调用求方差函数
    array2=fangcha(img2)
    for i in range(row):#求权
        for j in range(col):
            weight1=array1[i,j]/(array1[i,j]+array2[i,j])
            weight2=array2[i,j]/(array1[i,j]+array2[i,j])
            array1[i,j]=weight1
            array2[i,j]=weight2
    return array1,array2

def ronghe(img1,img2):
    cc = img1.copy()
    b,g,r=cv.split(img1)#分通道处理
    b1,g1,r1=cv.split(img2)
    weight1,weight2=qiuquan(b,b1)#调用求权重函数
    weight11,weight22=qiuquan(g,g1)
    weight111,weight222=qiuquan(r,r1)
    new_img=img1*1
    row=new_img.shape[0]
    col=new_img.shape[1]
    b2,g2,r2 = cv.split(cc)
    for i in range(row):#图像融合
        for j in range(col):
            b2[i,j]=(weight1[i,j]*b[i,j]+weight2[i,j]*b1[i,j]).astype(int)
            g2[i,j]=(weight11[i,j]*g[i,j]+weight22[i,j]*g1[i,j]).astype(int)
            r2[i,j]=(weight111[i,j]*r[i,j]+weight222[i,j]*r1[i,j]).astype(int)
    new_img=cv.merge([b2,g2,r2])#通道合并
    return new_img

img1=cv.imread("D:/s1.jpg")
img2=cv.imread("D:/s2.jpg")
img3=ronghe(img1,img2)
cv.imshow("img1",img1)
cv.imshow("img2",img2)
cv.imshow("img3",img3)
cv.waitKey(0)
cv.destroyAllWindows()

        </code></pre>
      </div>
      <el-button style="background-color:rgb(2, 155, 98); color:white;float:left;margin:0px 0px 0 40px">在线示例
        <i class="el-icon-video-play"></i></el-button>
      <el-button style="background-color:rgb(2, 155, 98); color:white;float:right;margin:0 45px 0 0">下一个 <i
          class="el-icon-arrow-right"></i></el-button>
    </el-row>
  </div>
</template>

<script>
// import $ from 'jquery'
import prism from '../../../static/dist/prism.js'
export default {
  name: 'smallWaveCourse',
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
