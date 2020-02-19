<template>
    <div class="container" >
      <el-row>
      <el-col :span="3">
      <div style="height:700px;display:inline-block; background-color:white;">
 <el-collapse style="width:90%;margin:0 0 0 20px;height:100%;">
  <el-collapse-item   title="注释" name="1">
    <button>角度Angle</button>
    <button>箭头注释ArrowAnnotate</button>
    <button>双向的Bidirectional</button>
    <button>圆圈CircleRoi</button>
    <button>柯布角Cobb Angle</button>
    <button>椭圆感兴趣区EllipticalRoi</button>
    <button>橡皮擦Eraser</button>
    <button>自由泳FreehandRoi</button>
    <button>手摇雕刻家FreehandRoiSculptor</button>
    <button>文本标记TextMarker</button>
    <button>长度Length</button>
    <button>探查Probe</button>
    <button>矩形感兴趣区RectangleRoi</button>
  </el-collapse-item>
  <el-collapse-item   title="分割" name="2">
    <button>刷子工具BrushTool</button>
    <button>球形刷子工具SphericalBrushTool</button>
    <button>徒手裁剪FreehandScissors</button>
    <button>矩形裁剪RectangleScissors</button>
    <button>圆形裁剪CircleScissors</button>
    <button>矫正裁剪CorrectionScissors</button>
  </el-collapse-item>
  <el-collapse-item   title="阻力" name="3">
    <button>十字准线Crosshairs</button>
    <button>放大镜Magnify</button>
    <button>平底锅Pan</button>
    <button>旋转Rotate</button>
    <button>堆叠滚动StackScroll</button>
    <button>WWWC</button>
    <button>WWWCRegion</button>
    <button>缩放Rotate</button>
    <button>拖拉指针Drag Probe</button>
  </el-collapse-item>
  <el-collapse-item   title="多点触控/夹持（仅限触控）" name="4">
    <button>多点触控PanMultiTouch</button>
    <button>变焦夹点ZoomTouchPinch</button>
    <button>旋转触碰RotateTouch</button>
    <button>StackScroll多点触摸</button>
  </el-collapse-item>
  <el-collapse-item   title="鼠标滚轮" name="5">
   <button>堆栈滚动鼠标滚轮StackScrollMouseWheel</button>
   <button>变焦滚轮ZoomMouseWheel</button>
  </el-collapse-item>
  <el-collapse-item   title="双重抽头" name="6">
   <button>双击适应窗口DoubleTapFitToWindow</button>
  </el-collapse-item>
  <el-collapse-item   title="覆盖" name="7">
    <button>ScaleOverlay缩放覆盖</button>
    <button>Overlay覆盖</button>
  </el-collapse-item>
</el-collapse>
 <div class="enterURL">
        <input
          type="text"
          id="wadoURL"
          style="width: 35%;"
          placeholder="Enter WADO URL"
          value="http://localhost:8080/static/series-000001/image-000001.dcm"
        />
        <button type="button" id="downloadAndView">加载Dicom</button>
      </div>
      <div id="loadProgress" style="position:relative;left:-15%">Dicom加载:</div>
      </div>
      </el-col>
       <!-- <el-tooltip class="item" effect="dark" content="禁用滚动" placement="top-start">
         <div  @click="StackScrollMouseWheel=='disableButton'?disableButton():activeButton()" style="background-color:rgb(19, 130, 255);color:white;height:30px;width:30px; line-height:10px"> <i class="el-icon-orange" style="margin:6px;"></i></div>
    </el-tooltip>
 <el-tooltip class="item" effect="dark" content="禁用滚动" placement="top-start">
         <div  @click="StackScrollMouseWheel=='disableButton'?disableButton():activeButton()" style="background-color:rgb(19, 130, 255);color:white;height:30px;width:30px; line-height:10px"> <i class="el-icon-orange" style="margin:6px;"></i></div>
    </el-tooltip>
     <el-tooltip class="item" effect="dark" content="禁用滚动" placement="top-start">
         <div  @click="StackScrollMouseWheel=='disableButton'?disableButton():activeButton()" style="background-color:rgb(19, 130, 255);color:white;height:30px;width:30px; line-height:10px"> <i class="el-icon-orange" style="margin:6px;"></i></div>
    </el-tooltip> -->
    <el-col :span="21">
    <div style="display:inline-block;width:100%;height:900px;">
      <div
        style="width:100%; height:900px; position:relative; color:white; display:inline-block; border-style:solid; border-color:black;"
        οncοntextmenu="return false"
        class="disable-selection noIbar"
        unselectable="on"
        onselectstart="return false;"
        οnmοusedοwn="return false;"
      >
        <div id="dicomImage" style="width:100%;height:900px;top:0px;left:0px; position:absolute"></div>
      </div>
    </div>
    </el-col>
    </el-row>
    </div>
</template>

<script>
import * as cornerstoneWADOImageLoader from '../../static/dist/cornerstoneWADOImageLoader.js'
import dicomParser from 'dicom-parser'
import cornerstone from 'cornerstone-core'
import cornerstoneMath from 'cornerstone-math'
import cornerstoneTools from 'cornerstone-tools'
import Hammer from 'hammerjs'
// 指定要注册加载程序的基石实例
cornerstoneWADOImageLoader.external.cornerstone = cornerstone
cornerstoneWADOImageLoader.external.dicomParser = dicomParser
cornerstoneTools.external.cornerstoneMath = cornerstoneMath
cornerstoneTools.external.cornerstone = cornerstone
cornerstoneTools.external.Hammer = Hammer

var config = {
  webWorkerPath: '/static/dist/cornerstoneWADOImageLoaderWebWorker.js',
  taskConfiguration: {
    decodeTask: {
      codecsPath: '/static/dist/cornerstoneWADOImageLoaderCodecs.js'
    }
  }
}
cornerstoneWADOImageLoader.webWorkerManager.initialize(config)

export default {
  name: 'demo',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      StackScrollMouseWheel: 'activeButton'
    }
  },
  methods: {
    loadAndViewImage (imageId) {
      const element = document.getElementById('dicomImage')
      cornerstoneTools.init()
      cornerstone.enable(element)
      cornerstoneTools.setToolActiveForElement(element, `StackScrollMouseWheelTool`)
      const imageIds = []
      for (var i = 1; i < 362; i++) {
        let str = i + ''
        imageIds.push(
          'wadouri:http://localhost:8080/static/series-000001/image-000' +
            str.padStart(3, '0') +
            '.dcm'
        )
      }
      // console.log(imageIds)
      const toolName = 'StackScrollMouseWheel'
      const stack = {
        currentImageIdIndex: 0,
        imageIds: imageIds
      }

      cornerstone.loadImage(imageIds[0]).then(
        function (image) {
          cornerstone.displayImage(element, image)
          cornerstoneTools.addStackStateManager(element, ['stack'])
          cornerstoneTools.addToolState(element, 'stack', stack)
        },
        function (err) {
          console.log(err)
        }
      )

      const apiTool = cornerstoneTools[`${toolName}Tool`]
      cornerstoneTools.addTool(apiTool)
      cornerstoneTools.setToolActive(toolName, { mouseButtonMask: 1 })
    },
    disableButton () {
      const _this = this
      alert('disable')
      const element = document.getElementById('dicomImage')
      console.log(element)
      cornerstoneTools[`setToolDisabled`]('StackScrollMouseWheel', {
        mouseButtonMask: 1
      })
      _this._data.StackScrollMouseWheel = 'activeButton'
    },
    activeButton () {
      const _this = this
      alert('active')
      const element = document.getElementById('dicomImage')
      console.log(element)
      cornerstoneTools[`setToolActive`]('StackScrollMouseWheel', {
        mouseButtonMask: 1
      })
      _this._data.StackScrollMouseWheel = 'disableButton'
    }
  },
  mounted () {
    const _this = this
    var element = document.getElementById('dicomImage')
    cornerstone.enable(element)
    document
      .getElementById('downloadAndView')
      .addEventListener('click', function (e) {
        alert(111)
        let url = document.getElementById('wadoURL').value
        url = 'wadouri:' + url
        _this.loadAndViewImage(url)
      })
    cornerstone.events.addEventListener(
      'cornerstoneimageloadprogress',
      function (event) {
        const eventData = event.detail
        const loadProgress = document.getElementById('loadProgress')
        loadProgress.textContent = `Dicom加载: ${eventData.percentComplete}%`
      }
    )
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
