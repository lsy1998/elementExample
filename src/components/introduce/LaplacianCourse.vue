/* eslint-disable */
<template>
  <div style="">
    <el-row>
      <h2 style="color:rgb(2, 155, 98);float:left;margin:0px 0px 10px 40px">拉普拉斯边缘检测:</h2>
      <div style="color:black;margin:10px 45px 20px 45px;text-align:left;text-indent:2em; clear:both">
        拉普拉斯算子一种二阶边缘检测算子，它是一个线性的、移不变算子。是对二维函数进行运算的二阶导数算子，对一个连续函数f (x, y)它在图像中的位置(x, y),拉普拉斯值定义为：</div>
        <img src="../../assets/image/laplace1.png" alt="">
      <div style="color:black;margin:20px 45px 20px 45px;text-align:left;text-indent:2em">
        Laplacian算子利用二阶导数信息，具有各向同性，即与坐标轴方向无关，坐标轴旋转后梯度结果不变。使得图像经过二阶微分后，在边缘处产生一个陡峭的零交叉点，根据这个对零交叉点判断边缘。其4邻域系统和8邻域系统的Laplacian算子的模板分别如图所示。
      </div>
      <img src="../../assets/image/laplace2.png" alt="">
      <div style="color:black;margin:20px 45px 20px 45px;text-align:left;text-indent:2em">
         通常使用的拉普拉斯算子3×3模板如图所示：
      </div>
      <img src="../../assets/image/laplace3.png" alt="">
      <div style="color:black;margin:20px 45px 20px 45px;text-align:left;text-indent:2em">
        Laplacian算子对噪声比较敏感，Laplacian算子有一个缺点是它对图像中的某些边缘产生双重响应。所以图像一般先经过平滑处理，通常把Laplacian算子和平滑算子结合起来生成一个新的模板。
      </div>

      <!-- <img src="https://img-blog.csdn.net/20171122101516338" alt=""> -->
      <div style="margin:0px 45px 0px 40px;">
        <pre id="code" class="line-numbers"><code class="language-python">

I=imread('lena.bmp');
I=im2double(I);
%figure;
%imshow(I);title('org img');

[height width R]=size(I);
for i=2:height-1
    for j=2:width-1
       L(i,j)=4*I(i,j)-I(i-1,j)-I(i+1,j)-I(i,j-1)-I(i,j+1);

    end
end
%figure;
%imshow(L,[]);

%G(i,j)=0.3*L(i,j)+0.7*I(i,j);
%figure;
%imshow(G,[]);

for i=1:height-1
    for j=1:width-1
        if (L(i,j)&lt;0.2)
            L(i,j)=1;
        else L(i,j)=0;
        end
    end
end
figure;
imshow(L,[]);

————————————————
版权声明：本文为CSDN博主「指尖热度」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/sunboyiris/java/article/details/21557579
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
  name: 'LaplacianCourse',
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
