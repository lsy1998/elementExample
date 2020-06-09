/* eslint-disable */
<template>
  <div style="">
    <el-row>
      <h2 style="color:rgb(2, 155, 98);float:left;margin:0px 0px 10px 40px">RC算法实现医学图像三维重建:</h2>
      <div style="color:black;margin:10px 45px 20px 45px;text-align:left;text-indent:2em; clear:both">
        (1）体绘制：体绘制是将三维空间的离散数据直接转换为最后的立体，图像而不必生成中间几何图元(面绘制需要), 其中心思想是为每一个体素指定一个不透明度,并考虑每一个体素对光线的透射、发射和反射作用。</div>
      <div style="color:black;margin:10px 45px 20px 45px;text-align:left;text-indent:2em; clear:both">
       （2）体绘制达到的效果：体绘制的目标是在一副图片上展示空间体细节。举例而言，你面前有一间房子，房子中有家具、家电，站在房子外面只能看到外部形状(类似于面绘制的效果)，无法观察到房子的布局或者房子中的物体；假设房子和房子中的物体都是半透明的，这样你就可以同时查看到所有的细节。这就是体绘制所要达到的效果。
       </div>
      <div style="color:black;margin:10px 45px 20px 45px;text-align:left;text-indent:2em; clear:both">
        （3）体绘制常用的算法：光线投射算法（ Ray-casting ）、错切 - 变形算法（ Shear-warp ）、频域体绘制算法（ Frequency Domain ）和抛雪球算法（ Splatting ）。其中又以光线投射算法最为重要和通用。</div>
        <div style="color:black;margin:10px 45px 20px 45px;text-align:left;text-indent:2em; clear:both">
        (4）光线投射算法（ Ray-casting ）原理：从图像平面的每个像素都沿着视线方向发出一条射线，此射线穿过体数据集，按一定步长进行采样，由内插计算每个采样点的颜色值和不透明度，然后由前向后或由后向前逐点计算累计的颜色值和不透明度值，直至光线完全被吸收或穿过物体。该方法能很好地反映物质边界的变化，使用Phong模型，引入镜面反射、漫反射和环境反射能得到很好的光照效果，在医学上可将各组织器官的性质属性、形状特征及相互之间的层次关系表现出来，从而丰富了图像的信息。</div>
      <div style="color:black;margin:10px 45px 20px 45px;text-align:left;text-indent:2em; clear:both">
       （5）体绘制的原理和面绘制完全不相同。面绘制需要生成中间图元，而体绘制则是直接在原图上进行绘制，内容需求较面绘制小。每切换一个视角需要重新对所有的像素点进行颜色和透明度计算，需要时间比面绘制长。</div>
      <div style="color:black;margin:20px 45px 20px 45px;text-align:left;text-indent:2em">
        规则一：系数绝对值较大法:该融合规则适合高频成分比较丰富，亮度、对比度比较高的源图像，否则在融合图像中只保留一幅源图像的特征，其他的特征被覆盖。小波变换的实际作用是对信号解相关，并将信号的全部信息集中到一部分具有大幅值的小波系数中。这些大的小波系数含有的能量远比小系数含有的能量大，从而在信号的重构中，大的系数比小的系数更重要。
      </div>
      <div style="color:black;margin:20px 45px 20px 45px;text-align:left;text-indent:2em">
       （6）代码实现基于体绘制的 Ray-casting算法
      </div>
      <div style="margin:0px 45px 0px 40px;">
        <pre id="code" class="line-numbers"><code class="language-python">
# This example reads a volume dataset and displays it via volume rendering(体绘制).

import vtk
from vtk.util.misc import vtkGetDataRoot

# Create the renderer, the render window, and the interactor. The renderer
# draws into the render window, the interactor enables mouse- and
# keyboard-based interaction with the scene.
ren = vtk.vtkRenderer()
renWin = vtk.vtkRenderWindow()
renWin.AddRenderer(ren)
iren = vtk.vtkRenderWindowInteractor()
iren.SetRenderWindow(renWin)

# The following reader is used to read a series of 2D slices (images)
# that compose the volume. The slice dimensions are set, and the
# pixel spacing. The data Endianness must also be specified. The reader
# usese the FilePrefix in combination with the slice number to construct
# filenames using the format FilePrefix.%d. (In this case the FilePrefix
# is the root name of the file: quarter.)

# v16 = vtk.vtkVolume16Reader()
# v16.SetDataDimensions(64, 64)
# v16.SetImageRange(1, 93)
# v16.SetDataByteOrderToLittleEndian()
# v16.SetFilePrefix("D:/dicom_image/headsq/quarter")
# v16.SetDataSpacing(3.2, 3.2, 1.5)
v16 = vtk.vtkDICOMImageReader()
# v16.SetDirectoryName('D:/dicom_image/vtkDicomRender-master/sample')
v16.SetDirectoryName('D:/dicom_image/V')

# The volume will be displayed by ray-cast alpha compositing.
# A ray-cast mapper is needed to do the ray-casting, and a
# compositing function is needed to do the compositing along the ray.
volumeMapper = vtk.vtkGPUVolumeRayCastMapper()
volumeMapper.SetInputConnection(v16.GetOutputPort())
volumeMapper.SetBlendModeToComposite()

# The color transfer function maps voxel intensities to colors.
# It is modality-specific, and often anatomy-specific as well.
# The goal is to one color for flesh (between 500 and 1000)
# and another color for bone (1150 and over).
volumeColor = vtk.vtkColorTransferFunction()
volumeColor.AddRGBPoint(0,    0.0, 0.0, 0.0)
volumeColor.AddRGBPoint(500,  1.0, 0.5, 0.3)
volumeColor.AddRGBPoint(1000, 1.0, 0.5, 0.3)
volumeColor.AddRGBPoint(1150, 1.0, 1.0, 0.9)

# The opacity transfer function is used to control the opacity
# of different tissue types.
volumeScalarOpacity = vtk.vtkPiecewiseFunction()
volumeScalarOpacity.AddPoint(0,    0.00)
volumeScalarOpacity.AddPoint(500,  0.15)
volumeScalarOpacity.AddPoint(1000, 0.15)
volumeScalarOpacity.AddPoint(1150, 0.85)

# The gradient opacity function is used to decrease the opacity
# in the "flat" regions of the volume while maintaining the opacity
# at the boundaries between tissue types.  The gradient is measured
# as the amount by which the intensity changes over unit distance.
# For most medical data, the unit distance is 1mm.
volumeGradientOpacity = vtk.vtkPiecewiseFunction()
volumeGradientOpacity.AddPoint(0,   0.0)
volumeGradientOpacity.AddPoint(90,  0.5)
volumeGradientOpacity.AddPoint(100, 1.0)

# The VolumeProperty attaches the color and opacity functions to the
# volume, and sets other volume properties.  The interpolation should
# be set to linear to do a high-quality rendering.  The ShadeOn option
# turns on directional lighting, which will usually enhance the
# appearance of the volume and make it look more "3D".  However,
# the quality of the shading depends on how accurately the gradient
# of the volume can be calculated, and for noisy data the gradient
# estimation will be very poor.  The impact of the shading can be
# decreased by increasing the Ambient coefficient while decreasing
# the Diffuse and Specular coefficient.  To increase the impact
# of shading, decrease the Ambient and increase the Diffuse and Specular.
volumeProperty = vtk.vtkVolumeProperty()
volumeProperty.SetColor(volumeColor)
volumeProperty.SetScalarOpacity(volumeScalarOpacity)
# volumeProperty.SetGradientOpacity(volumeGradientOpacity)
volumeProperty.SetInterpolationTypeToLinear()
volumeProperty.ShadeOn()
volumeProperty.SetAmbient(0.9)
volumeProperty.SetDiffuse(0.9)
volumeProperty.SetSpecular(0.9)

# The vtkVolume is a vtkProp3D (like a vtkActor) and controls the position
# and orientation of the volume in world coordinates.
volume = vtk.vtkVolume()
volume.SetMapper(volumeMapper)
volume.SetProperty(volumeProperty)

# Finally, add the volume to the renderer
ren.AddViewProp(volume)

# Set up an initial view of the volume.  The focal point will be the
# center of the volume, and the camera position will be 400mm to the
# patient's left (which is our right).
camera = ren.GetActiveCamera()
c = volume.GetCenter()
camera.SetFocalPoint(c[0], c[1], c[2])
camera.SetPosition(c[0] + 400, c[1], c[2])
camera.SetViewUp(0, 0, -1)

# Increase the size of the render window
renWin.SetSize(640, 480)

# Interact with the data.
iren.Initialize()
renWin.Render()
iren.Start()
        </code></pre>
      </div>
      <div style="color:black;margin:20px 45px 20px 45px;text-align:left;text-indent:2em">实现效果如下：</div>
      <img src="../../assets/image/rc.png" alt="">
      <div style="color:black;margin:20px 45px 20px 45px;text-align:left;text-indent:2em">（7）体绘制的整个过程包括VTK数据量都与面绘制类似。同样可以通过调整actor的相应属性达到重建三维图形的不同效果，比如通过设置不透明度值来显示体数据内部的不同成分和细节，例如显示人体CT图像的不同器官和组织。</div>
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
  name: 'RCCourse',
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
