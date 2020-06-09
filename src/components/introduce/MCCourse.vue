/* eslint-disable */
<template>
  <div style="">
    <el-row>
      <h2 style="color:rgb(2, 155, 98);float:left;margin:0px 0px 10px 40px">RC算法实现医学图像三维重建:</h2>
      <div style="color:black;margin:10px 45px 20px 45px;text-align:left;text-indent:2em; clear:both">
       首先基于MC的一系列算法需要明确一个“体元（Cell）”的概念。体元是在三维图像中由相邻的八个体素点组成的正方体方格，MarchingCubes算法的Cube的语义也可以指这个体元。注意区别体元和体素，体元是8个体素构成的方格，而每个体素（除了边界上的之外）都为8个体元所共享。</div>
      <div style="color:black;margin:10px 45px 20px 45px;text-align:left;text-indent:2em; clear:both">
       （1）面绘制：面绘制是采用分割技术对一系列的二维图像进行轮廓识别、提取等操作，最终还原出被检测物体的三维模型，并以表面的方式显示出来。</div>
      <div style="color:black;margin:10px 45px 20px 45px;text-align:left;text-indent:2em; clear:both">
        （2）面绘制实现三维重建。使用的是经典的 Marching Cubes 算法，也叫移动立方体法。</div>
        <div style="color:black;margin:10px 45px 20px 45px;text-align:left;text-indent:2em; clear:both">
        （3）采用面绘制，VTK中的数据流如下：source->filter(MC算法或者vtkContourFilter)->mapper->actor->render->renderwindow->interactor。</div>
      <div style="color:black;margin:10px 45px 20px 45px;text-align:left;text-indent:2em; clear:both">
       （4）MC算法简介：

首先，假定原始数据是离散的三维空间规则数据场，(断层扫描仪CT及核磁共振仪MRI产生的图像均属于这一类型)，读取这些数据，可得出这些数据的三个维度。
其次，以体元为单位来寻找三维图像中内容部分与背景部分的边界，在体元抽取三角片来拟合这个边界。
再者，遍历所有的体元，找出其中的三角片最后集合起来组成图像中实点表面的三角网格（Mesh）。
最后，建立好了三角形网格模型，对该模型进行渲染。</div>
      <div style="color:black;margin:20px 45px 20px 45px;text-align:left;text-indent:2em">
        (5）VTK提供了两种提取等值面的类：vtkContourFilter滤波器和封装了MC(Marching Cubes)算法类vtkMarchingCubes。提取等值面之后的数据处理：通过vtkPolyDataNormals在等值面上产生法向量；通过vtkStripper在等值面上产生纹理或三角面片。</div>
      <div style="color:black;margin:20px 45px 20px 45px;text-align:left;text-indent:2em">
       （6）利用MC算法提取等值面的代码实现：
      </div>
      <div style="margin:0px 45px 0px 40px;">
        <pre id="code" class="line-numbers"><code class="language-python">
import vtk
# source->filter(MC算法)->mapper->actor->render->renderwindow->interactor

# 读取Dicom数据，对应source
v16 = vtk.vtkDICOMImageReader()
# v16.SetDirectoryName('D:/dicom_image/V')
v16.SetDirectoryName('D:/dicom_image/vtkDicomRender-master/sample')

# 利用封装好的MC算法抽取等值面，对应filter
marchingCubes = vtk.vtkMarchingCubes()
marchingCubes.SetInputConnection(v16.GetOutputPort())
marchingCubes.SetValue(0, 100)

# 剔除旧的或废除的数据单元，提高绘制速度，对应filter
Stripper = vtk.vtkStripper()
Stripper.SetInputConnection(marchingCubes.GetOutputPort())

# 建立映射，对应mapper
mapper = vtk.vtkPolyDataMapper()
# mapper.SetInputConnection(marchingCubes.GetOutputPort())
mapper.SetInputConnection(Stripper.GetOutputPort())

# 建立角色以及属性的设置，对应actor
actor = vtk.vtkActor()
actor.SetMapper(mapper)
# 角色的颜色设置
actor.GetProperty().SetDiffuseColor(1, .94, .25)
# 设置高光照明系数
actor.GetProperty().SetSpecular(.1)
# 设置高光能量
actor.GetProperty().SetSpecularPower(100)

# 定义舞台，也就是渲染器，对应render
renderer = vtk.vtkRenderer()

# 定义舞台上的相机，对应render
aCamera = vtk.vtkCamera()
aCamera.SetViewUp(0, 0, -1)
aCamera.SetPosition(0, 1, 0)
aCamera.SetFocalPoint(0, 0, 0)
aCamera.ComputeViewPlaneNormal()

# 定义整个剧院(应用窗口)，对应renderwindow
rewin = vtk.vtkRenderWindow()

# 定义与actor之间的交互，对应interactor
interactor = vtk.vtkRenderWindowInteractor()

# 将相机添加到舞台renderer
renderer.SetActiveCamera(aCamera)
aCamera.Dolly(1.5)

# 设置交互方式
style = vtk.vtkInteractorStyleTrackballCamera()
interactor.SetInteractorStyle(style)

# 将舞台添加到剧院中
rewin.AddRenderer(renderer)
interactor.SetRenderWindow(rewin)

# 将角色添加到舞台中
renderer.AddActor(actor)

# 将相机的焦点移动至中央，The camera will reposition itself to view the center point of the actors,
# and move along its initial view plane normal
renderer.ResetCamera()

interactor.Initialize()
interactor.Start()
        </code></pre>
      </div>
      <div style="color:black;margin:20px 45px 20px 45px;text-align:left;text-indent:2em">实现效果如下：</div>
      <img src="../../assets/image/MC.png" alt="">
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
  name: 'MCCourse',
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
