/* eslint-disable */
<template>
  <div style="">
    <el-row>
      <h2 style="color:rgb(2, 155, 98);float:left;margin:0px 0px 10px 40px">区域生长算法:</h2>
      <div style="color:black;margin:10px 45px 0px 45px;text-align:left;text-indent:2em;clear:both">
        区域生长是一种串行区域分割的图像分割方法。区域生长是指从某个像素出发，按照一定的准则，逐步加入邻近像素，当满足一定的条件时，区域生长终止。区域生长的好坏决定于1.初始点（种子点）的选取。2.生长准则。3.终止条件。区域生长是从某个或者某些像素点出发，最后得到整个区域，进而实现目标的提取。
      </div>
      <div style="color:black;margin:10px 45px 0px 45px;text-align:left;text-indent:2em">
        区域生长的原理：<br>
        区域生长的基本思想是将具有相似性质的像素集合起来构成区域。具体先对每个需要分割的区域找一个种子像素作为生长起点，然后将种子像素和周围邻域中与种子像素有相同或相似性质的像素（根据某种事先确定的生长或相似准则来判定）合并到种子像素所在的区域中。将这些新像素当作新的种子继续上面的过程，直到没有满足条件的像素可被包括进来。这样一个区域就生长成了。
      </div>
      <div style="color:black;margin:10px 45px 0px 45px;text-align:left;text-indent:2em">
        区域生长实现的步骤如下：
      </div>
      <div style="color:black;margin:10px 45px 0px 45px;text-align:left;text-indent:2em">
        1. 对图像顺序扫描!找到第1个还没有归属的像素, 设该像素为(x0, y0);
      </div>
      <div style="color:black;margin:10px 45px 0px 45px;text-align:left;text-indent:2em">
        2. 以(x0, y0)为中心, 考虑(x0, y0)的4邻域像素(x, y)如果(x0, y0)满足生长准则, 将(x, y)与(x0, y0)合并(在同一区域内), 同时将(x, y)压入堆栈;
      </div>
      <div style="color:black;margin:10px 45px 0px 45px;text-align:left;text-indent:2em">
        3. 从堆栈中取出一个像素, 把它当作(x0, y0)返回到步骤2;
      </div>
      <div style="color:black;margin:10px 45px 0px 45px;text-align:left;text-indent:2em">
        4. 当堆栈为空时!返回到步骤1;
      </div>
      <div style="color:black;margin:10px 45px 0px 45px;text-align:left;text-indent:2em">
        5. 重复步骤1 - 4直到图像中的每个点都有归属时。生长结束。
      </div>
      <!-- <img src="https://img-blog.csdn.net/20171122101516338" alt=""> -->
      <div style="margin:0px 45px 0px 40px;">
        <pre id="code" class="line-numbers"><code class="language-python">
import numpy as np
import cv2

class Point(object):
    def __init__(self,x,y):
        self.x = x
        self.y = y

    def getX(self):
        return self.x
    def getY(self):
        return self.y

def getGrayDiff(img,currentPoint,tmpPoint):
    return abs(int(img[currentPoint.x,currentPoint.y]) - int(img[tmpPoint.x,tmpPoint.y]))

def selectConnects(p):
    if p != 0:
        connects = [Point(-1, -1), Point(0, -1), Point(1, -1), Point(1, 0), Point(1, 1), \
                    Point(0, 1), Point(-1, 1), Point(-1, 0)]
    else:
        connects = [ Point(0, -1),  Point(1, 0),Point(0, 1), Point(-1, 0)]
    return connects

def regionGrow(img,seeds,thresh,p = 1):
    height, weight = img.shape
    seedMark = np.zeros(img.shape)
    seedList = []
    for seed in seeds:
        seedList.append(seed)
    label = 1
    connects = selectConnects(p)
    while(len(seedList)>0):
        currentPoint = seedList.pop(0)

        seedMark[currentPoint.x,currentPoint.y] = label
        for i in range(8):
            tmpX = currentPoint.x + connects[i].x
            tmpY = currentPoint.y + connects[i].y
            if tmpX &lt; 0 or tmpY &lt; 0 or tmpX >= height or tmpY >= weight:
                continue
            grayDiff = getGrayDiff(img,currentPoint,Point(tmpX,tmpY))
            if grayDiff &lt; thresh and seedMark[tmpX,tmpY] == 0:
                seedMark[tmpX,tmpY] = label
                seedList.append(Point(tmpX,tmpY))
    return seedMark

img = cv2.imread('lean.png',0)
seeds = [Point(10,10),Point(82,150),Point(20,300)]
binaryImg = regionGrow(img,seeds,10)
cv2.imshow(' ',binaryImg)
cv2.waitKey(0)
————————————————
版权声明：本文为CSDN博主「咸鱼_不翻身」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/weixin_40419806/java/article/details/80971205
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
  name: 'regionGrowCourse',
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
