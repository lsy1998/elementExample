<template>
    <div class="container" >
      <el-row>
      <el-col :span="3">
      <div style="height:700px;display:inline-block; background-color:white;">
 <el-collapse style="width:90%;margin:0 0 0 20px;height:100%;">
  <el-collapse-item   title="注释" name="1">
    <el-button @click="activeButton('Angle')" >角度</el-button>
    <el-button @click="activeButton('ArrowAnnotate')" >箭头注释</el-button>
    <el-button @click="activeButton('Bidirectional')">双向的</el-button>
    <el-button @click="activeButton('CircleScissors')">圆圈</el-button>
    <el-button @click="activeButton('CobbAngle')">柯布角</el-button>
    <el-button @click="activeButton('EllipticalRoi')">椭圆感兴趣区</el-button>
    <el-button @click="activeButton('Eraser')">橡皮擦</el-button>
    <el-button @click="activeButton('FreehandRoi')">自由泳</el-button>
    <el-button @click="activeButton('FreehandScissors')">手摇雕刻家</el-button>
    <el-button @click="activeButton('TextMarker')">文本标记</el-button>
    <el-button @click="activeButton('Length')">长度</el-button>
    <el-button @click="activeButton('Probe')">探查</el-button>
    <el-button @click="activeButton('RectangleRoi')">矩形感兴趣区</el-button>
  </el-collapse-item>
  <el-collapse-item   title="分割" name="2">
    <el-button @click="activeButton('Brush')">刷子工具</el-button>
    <el-button @click="activeButton('SphericalBrushTool')">球形刷子工具</el-button>
    <el-button @click="activeButton('FreehandScissors')">徒手裁剪</el-button>
    <el-button @click="activeButton('RectangleScissors')">矩形裁剪</el-button>
    <el-button @click="activeButton('CircleScissors')">圆形裁剪</el-button>
    <el-button @click="activeButton('CorrectionScissors')">矫正裁剪</el-button>
  </el-collapse-item>
  <el-collapse-item   title="阻力" name="3">
    <el-button @click="activeButton('Crosshairs')">十字准线</el-button>
    <el-button @click="activeButton('Magnify')">放大镜</el-button>
    <el-button @click="activeButton('Pan')">平底锅</el-button>
    <el-button @click="activeButton('Rotate')">旋转</el-button>
    <el-button @click="activeButton('StackScrollMouseWheel')">堆叠滚动</el-button>
    <el-button @click="activeButton('WWWC')">WWWC</el-button>
    <el-button @click="activeButton('WWWCRegion')">WWWCRegion</el-button>
    <el-button @click="activeButton('Rotate')">缩放</el-button>
    <el-button @click="activeButton('DragProbe')">拖拉指针</el-button>
  </el-collapse-item>
  <el-collapse-item   title="多点触控/夹持（仅限触控）" name="4">
    <el-button @click="activeButton('PanMultiTouch')">多点触控</el-button>
    <el-button @click="activeButton('ZoomTouchPinch')">变焦夹点</el-button>
    <el-button @click="activeButton('RotateTouch')">旋转触碰</el-button>
    <el-button @click="activeButton('StackScroll')">多点触摸</el-button>
  </el-collapse-item>
  <el-collapse-item   title="鼠标滚轮" name="5">
   <el-button @click="activeButton('StackScrollMouseWheel')">堆栈滚动鼠标滚轮</el-button>
   <el-button @click="activeButton('ZoomMouseWheel')">变焦滚轮</el-button>
  </el-collapse-item>
  <el-collapse-item   title="双重抽头" name="6">
   <el-button @click="activeButton('DoubleTapFitToWindow')">双击适应窗口</el-button>
  </el-collapse-item>
  <el-collapse-item   title="覆盖" name="7">
    <el-button @click="activeButton('ScaleOverlay')">缩放覆盖</el-button>
    <el-button @click="activeButton('Overlay')">覆盖</el-button>
  </el-collapse-item>
</el-collapse>
 <div class="enterURL">
        <input
          type="text"
          id="wadoURL"
          style="width: 35%;"
          placeholder="Enter WADO URL"
          value="https://graduation-project.lishangying.site/dicomPic/1/000001.dcm"
        />
        <el-button type="button" id="downloadAndView">加载Dicom</el-button>
      </div>
      <div id="loadProgress" style="position:relative;left:-15%">Dicom加载:</div>
      </div>
      </el-col>
       <el-tooltip class="item" effect="dark" content="禁用滚动" placement="top-start">
         <div  @click="StackScrollMouseWheel=='disableButton'?disableButton('StackScrollMouseWheel'):activeButton('StackScrollMouseWheel')" style="background-color:rgb(19, 130, 255);color:white;height:30px;width:30px; line-height:10px"> <i class="el-icon-orange" style="margin:6px;"></i></div>
    </el-tooltip>
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
      tools: {
        StackScrollMouseWheel: 'activeButton',
        ArrowAnnotate: 'activeButton',
        Angle: 'activeButton',
        Bidirectional: 'activeButton',
        CircleScissors: 'activeButton',
        CobbAngle: 'activeButton',
        EllipticalRoi: 'activeButton',
        Eraser: 'activeButton',
        FreehandRoi: 'activeButton',
        FreehandScissors: 'activeButton',
        Length: 'activeButton',
        TextMarker: 'activeButton',
        Probe: 'activeButton',
        RectangleRoi: 'activeButton',
        Brush: 'activeButton'
      }

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
          'wadouri:https://graduation-project.lishangying.site/dicomPic/1/000' +
            str.padStart(3, '0') +
            '.dcm'
        )
      }
      // //console.log(imageIds)
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
          //console.log(err)
        }
      )

      const apiTool = cornerstoneTools[`${toolName}Tool`]
      cornerstoneTools.addTool(apiTool)
      cornerstoneTools.setToolActive(toolName, { mouseButtonMask: 1 })
    },
    // disableButton (toolName) {
    //   const _this = this
    //   for (let tool in _this._data.tools) {
    //     //console.log(tool + '---' + _this._data.tools[tool])
    //     if (tool === toolName) {
    //       _this._data.tools[tool] = 'activeButton'
    //     }
    //   }
    //   alert(`disable${toolName}`)
    //   const element = document.getElementById('dicomImage')
    //   //console.log(element)
    //   cornerstoneTools[`setToolDisabled`](toolName, {
    //     mouseButtonMask: 1
    //   })
    //   // _this._data.toolName = 'activeButton'
    // },
    activeButton (toolName) {
      const _this = this
      //console.log(_this._data.tools.ArrowAnnotate)
      const tool = cornerstoneTools[`${toolName}Tool`]
      cornerstoneTools.addTool(tool)
      cornerstoneTools.setToolActive(toolName, { mouseButtonMask: 1 })
      alert(`active${toolName}`)
      const element = document.getElementById('dicomImage')
      //console.log(element)
      cornerstoneTools[`setToolActive`](toolName, {
        mouseButtonMask: 1
      })
      for (let tool in _this._data.tools) {
        //console.log(tool + '---' + _this._data.tools[tool])
        if (tool === toolName) {
          _this._data.tools[tool] = 'disableButton'
        }
      }
    }
    // activeArrowAnnotate () {
    //   const element = document.getElementById('dicomImage')
    //   //console.log(element)
    //   cornerstoneTools[`setToolDisabled`]('StackScrollMouseWheel', {
    //     mouseButtonMask: 1
    //   })
    //   const ArrowAnnotate = cornerstoneTools[`ArrowAnnotateTool`]
    //   cornerstoneTools.addTool(ArrowAnnotate)
    //   cornerstoneTools.setToolActive('ArrowAnnotate', { mouseButtonMask: 1 })
    // }
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
