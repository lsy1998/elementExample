<template>
  <div class="hello">
    <div class="container">
      <el-button
        style="margin:30px 0 0 5px;width:300px; background-color:rgb(19, 130, 2142);border:none;color:white;"
      >激活</el-button>
       <el-tooltip class="item" effect="dark" content="禁用滚动" placement="top-start">
     <el-button
        style="margin:30px 0 0 5px;width:300px; background-color:rgb(19, 130, 2142);border:none;color:white;"
        @click="disableButton"
      >禁用</el-button>
    </el-tooltip>

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
      <div
        style="width:512px; height:512px; position:relative; color:white; display:inline-block; border-style:solid; border-color:black;"
        οncοntextmenu="return false"
        class="disable-selection noIbar"
        unselectable="on"
        onselectstart="return false;"
        οnmοusedοwn="return false;"
      >
        <div id="dicomImage" style="width:512px;height:512px;top:0px;left:0px; position:absolute"></div>
      </div>
    </div>
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
      msg: 'Welcome to Your Vue.js App'
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
      console.log(imageIds)
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
      alert('hhh')
      const element = document.getElementById('dicomImage')
      console.log(element)
      cornerstoneTools[`setToolDisabled`]('StackScrollMouseWheel', {
        mouseButtonMask: 1
      })
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
