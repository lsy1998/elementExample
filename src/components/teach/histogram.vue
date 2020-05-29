
<template>
  <div style="width:800px;height:400px;background-color:red;">
 <highcharts :options="chartOptions"></highcharts>
  </div>
</template>

<script>
import {Chart} from 'highcharts-vue'
import Highcharts from 'highcharts'
import histogram from 'highcharts/modules/histogram-bellcurve'
import dicomParser from 'dicom-parser'
histogram(Highcharts)
// import Highcahrts from 'highcharts'
export default {
  name: 'histogram',
  components: {
    highcharts: Chart
  },
  data () {
    return {
      chartOptions: {
        chart: {
          type: 'histogram' // 指定图表的类型，默认是折线图（line）
        },
        title: {
          text: '我的第一个图表' // 标题
        },
        xAxis: [{
          title: { text: '灰度值' }
        }, {
          title: { text: '' },
          opposite: true
        }],
        yAxis: [{
          title: { text: 'p' }
        }, {
          title: { text: '' },
          opposite: true
        }],
        series: [{
          name: 'Histogram',
          // type: 'histogram',
          // xAxis: 1,
          // yAxis: 1,
          data: [3.5, 3, 3.2, 3.1, 3.6, 3.9, 3.4, 3.4, 2.9, 3.1, 3.7, 3.4, 3, 3, 4, 4.4, 3.9, 3.5, 3.8, 3.8, 3.4, 3.7, 3.6, 3.3, 3.4, 3, 3.4, 3.5, 3.4, 3.2, 3.1, 3.4, 4.1, 4.2, 3.1, 3.2, 3.5, 3.6, 3, 3.4, 3.5, 2.3, 3.2, 3.5, 3.8, 3, 3.8, 3.2, 3.7, 3.3, 3.2, 3.2, 3.1, 2.3, 2.8, 2.8, 3.3, 2.4, 2.9, 2.7, 2, 3, 2.2, 2.9, 2.9, 3.1, 3, 2.7, 2.2, 2.5, 3.2, 2.8, 2.5, 2.8, 2.9, 3, 2.8, 3, 2.9, 2.6, 2.4, 2.4, 2.7, 2.7, 3, 3.4, 3.1, 2.3, 3, 2.5, 2.6, 3, 2.6, 2.3, 2.7, 3, 2.9, 2.9, 2.5, 2.8, 3.3, 2.7, 3, 2.9, 3, 3, 2.5, 2.9, 2.5, 3.6, 3.2, 2.7, 3, 2.5, 2.8, 3.2, 3, 3.8, 2.6, 2.2, 3.2, 2.8, 2.8, 2.7, 3.3, 3.2, 2.8, 3, 2.8, 3, 2.8, 3.8, 2.8, 2.8, 2.6, 3, 3.4, 3.1, 3, 3.1, 3.1, 3.1, 2.7, 3.2, 3.3, 3, 2.5, 3, 3.4, 3]
          // baseSeries: 's1',
          // zIndex: -1
        }
        // , {
        //   name: 'Data',
        //   type: 'scatter',
        //   data: [3.5, 3, 3.2, 3.1, 3.6, 3.9, 3.4, 3.4, 2.9, 3.1, 3.7, 3.4, 3, 3, 4, 4.4, 3.9, 3.5, 3.8, 3.8, 3.4, 3.7, 3.6, 3.3, 3.4, 3, 3.4, 3.5, 3.4, 3.2, 3.1, 3.4, 4.1, 4.2, 3.1, 3.2, 3.5, 3.6, 3, 3.4, 3.5, 2.3, 3.2, 3.5, 3.8, 3, 3.8, 3.2, 3.7, 3.3, 3.2, 3.2, 3.1, 2.3, 2.8, 2.8, 3.3, 2.4, 2.9, 2.7, 2, 3, 2.2, 2.9, 2.9, 3.1, 3, 2.7, 2.2, 2.5, 3.2, 2.8, 2.5, 2.8, 2.9, 3, 2.8, 3, 2.9, 2.6, 2.4, 2.4, 2.7, 2.7, 3, 3.4, 3.1, 2.3, 3, 2.5, 2.6, 3, 2.6, 2.3, 2.7, 3, 2.9, 2.9, 2.5, 2.8, 3.3, 2.7, 3, 2.9, 3, 3, 2.5, 2.9, 2.5, 3.6, 3.2, 2.7, 3, 2.5, 2.8, 3.2, 3, 3.8, 2.6, 2.2, 3.2, 2.8, 2.8, 2.7, 3.3, 3.2, 2.8, 3, 2.8, 3, 2.8, 3.8, 2.8, 2.8, 2.6, 3, 3.4, 3.1, 3, 3.1, 3.1, 3.1, 2.7, 3.2, 3.3, 3, 2.5, 3, 3.4, 3],
        //   id: 's1',
        //   marker: {
        //     radius: 1.5
        //   }
        // }
        ]
        // series: [{ // 数据列
        //   name: '小明', // 数据列名
        //   data: [1, 0, 4] // 数据
        // }, {
        //   name: '小红',
        //   data: [5, 7, 3]
        // }]
      }
    }
  },
  methods: {
    init () {
    }
  },
  mounted () {
    this.init()

    if (window.FileReader) {
      var reader = new FileReader()
      reader.onload = function (file) {
        var arrayBuffer = reader.result
        // Here we have the file data as an ArrayBuffer.  dicomParser requires as input a
        // Uint8Array so we create that here
        var byteArray = new Uint8Array(arrayBuffer)
        var kb = byteArray.length / 1024
        var mb = kb / 1024
        var byteStr = mb > 1 ? mb.toFixed(3) + ' MB' : kb.toFixed(0) + ' KB'
        console.log(byteStr)
        var dataSet = dicomParser.parseDicom(byteArray/*, options */)
        var studyInstanceUid = dataSet.string('x0020000d')
        console.log(studyInstanceUid)
        var pixelDataElement = dataSet.elements.x7fe00010
        var pixelData = new Uint16Array(dataSet.byteArray.buffer, pixelDataElement.dataOffset, pixelDataElement.length)
        console.log(pixelData)
        // setTimeout(function () {
        // var dataSet
        // try {
        //   // var start = new Date().getTime()
        //   dataSet = dicomParser.parseDicom(byteArray)
        // } catch (err) {
        // }
        // }, 10)
      }
    // add your code here
    } else {
      alert('Not supported by your browser!')
    }
  }

}
</script>
