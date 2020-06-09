/* eslint-disable */
<template>
  <div style="">
    <el-row>
      <h2 style="color:rgb(2, 155, 98);float:left;margin:0px 0px 10px 40px">傅里叶变换实现医学图像配准:</h2>
      <div style="color:black;margin:10px 45px 20px 45px;text-align:left;text-indent:2em; clear:both">
        傅里叶-梅林变换 解决的问题是一张图片经过 旋转 缩放 平移，而且两张图片只需要有一部分相同部分，而且可以抵抗一定的噪声。</div>
      <div style="color:black;margin:10px 45px 20px 45px;text-align:left;text-indent:2em; clear:both">
        首先待配准的图片与原图片存在缩放量a,旋转量θ,平移量（x0,y0）</div>
        <img src="../../assets/image/fly1.png" alt="">
        <h3 style="text-align:left;margin: 0 0 0 45px;">基础准备</h3>
      <div style="color:black;margin:10px 45px 20px 45px;text-align:left;text-indent:2em; clear:both">
        1.相位相关技术:首先根据傅里叶变换的位移性质
存在一种叫位相相关技术的东西，可以来找平移量就是根据f(t)与f(t-t0)之间相差一个e−jωt0e−jωt0f(t)与f(t-t0)的相位谱就相差一个-t0,然后对e−jωt0e−jωt0进行傅里叶逆变换，我们就能在to处得到一个冲激函数（不知道的去查傅里叶变换表。。），从t0的位置就能判断出平移了多少,推广到二维就能求出平移量（x0,y0）。
</div>
      <div style="color:black;margin:10px 45px 20px 45px;text-align:left;text-indent:2em; clear:both">
        2.对数极坐标变换:这个坐标变换和熟悉的极坐标变换类似，就是f(x,y)变成g(r,Θ）,然后再对r取对数
根据这个变换，假如两个图片只存在旋转和缩放</div>
<img src="../../assets/image/fly2.png" alt="">
      <div style="color:black;margin:10px 45px 20px 45px;text-align:left;text-indent:2em; clear:both">
        这样旋转和缩放在对数极坐标下又变成平移关系了，然后用相位相关技术就能获得旋转和缩放量了</div>
        <h3 style="text-align:left;margin: 0 0 0 45px;">找出旋转缩放关系</h3>
      <!-- <div style="color:black;margin:20px 45px 20px 45px;text-align:left;text-indent:2em">
       融合应用 </div> -->
      <!-- <h3 style="text-align:left;margin:0 0 0 45px">融合规则：</h3> -->
      <div style="color:black;margin:20px 45px 20px 45px;text-align:left;text-indent:2em">
       因为对数极坐标变换只能解决只有旋转和缩放，而不包括平移的关系，所以我们在找出旋转缩放关系时先要剔除平移的因素，这时候使用的还是傅里叶变换的性质。
      </div>
      <div style="color:black;margin:20px 45px 20px 45px;text-align:left;text-indent:2em">
        1.找出旋转缩放关系：先用傅里叶变换剔除平移因子
      </div>
      <img src="../../assets/image/fly3.png" alt="">
      <div style="color:black;margin:20px 45px 20px 45px;text-align:left;text-indent:2em">
        我们发现两张图片进行傅里叶变换后，幅度谱里没有x0和y0了，只有缩放和平移因子了，这时候要做一个高通滤波，然后再做对数极坐标变换，相位相关技术就能找到缩放旋转因子。
      </div>
      <div style="color:black;margin:20px 45px 20px 45px;text-align:left;text-indent:2em">
       2.找出平移量:这个当然就很简单了，把旋转直接相位相关技术技术解决，找到平移量拼上去看看。 </div>
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
  name: 'FlyCourse',
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
