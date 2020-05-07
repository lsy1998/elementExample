<template>
  <div class="container">
    <el-row>
      <el-col :span="3">
        <div id="sideBar" style="height:400px;display:inline-block; background-color:white;width:100%;background-color:rgb(50, 50, 50);">
          <div style="background-color:rgb(37, 37, 37);border-top:1px solid rgb(128, 128, 128);">
            <div
              style="background-color:rgb(91, 91, 91);width:80px;height:32px;padding:10px 0 0 0;color:rgb(200, 200, 200)"
            >基本工具</div>
          </div>
          <div>
            <el-row
              style="background-color:rgb(50, 50, 50);border-top:1px solid rgb(128, 128, 128);"
            >
              <el-col :span="4">
                <div
                  style="width:90%;height:60px;display:inline-block;background-color:rgb(50, 50, 50);margin:2px 2px;border:1px solid rgb(37, 37, 37);border-radius:3px;"
                  @click="activeButton('Probe')"
                >
                  <div
                    class="icon icon-dodo-pin"
                    style="color:rgb(192, 192, 192);margin:10px 0 10px 0;"
                  ></div>
                  <label style="color:rgb(192, 192, 192);margin:10px 0 0 0;font-size:12px;">探针</label>
                </div>
              </el-col>

              <el-col :span="4">
                <div
                  style="width:90%;height:60px;display:inline-block;background-color:rgb(50, 50, 50);margin:2px 2px;border:1px solid rgb(37, 37, 37);border-radius:3px;"
                  @click="activeButton('CorrectionScissors')"
                >
                  <div
                    class="icon icon-dodo-fusion"
                    style="color:rgb(192, 192, 192);margin:10px 0 10px 0;"
                  ></div>
                  <label style="color:rgb(192, 192, 192);margin:10px 0 0 0;font-size:12px;">修改</label>
                </div>
              </el-col>
              <el-col :span="4">
                <div
                  style="width:90%;height:60px;display:inline-block;background-color:rgb(50, 50, 50);margin:2px 2px;border:1px solid rgb(37, 37, 37);border-radius:3px;"
                  @click="activeButton('ZoomMouseWheel')"
                >
                  <div
                    class="icon icon-dodo-zoom"
                    style="color:rgb(192, 192, 192);margin:10px 0 10px 0;"
                  ></div>
                  <label style="color:rgb(192, 192, 192);margin:10px 0 0 0;font-size:12px;">缩放</label>
                </div>
              </el-col>
              <el-col :span="4">
                <div
                  style="width:90%;height:60px;display:inline-block;background-color:rgb(50, 50, 50);margin:2px 2px;border:1px solid rgb(37, 37, 37);border-radius:3px;"
                  @click="activeButton('Rotate')"
                >
                  <div
                    class="icon icon-uniE031"
                    style="color:rgb(192, 192, 192);margin:10px 0 10px 0;"
                  ></div>
                  <label style="color:rgb(192, 192, 192);margin:10px 0 0 0;font-size:12px;">旋转</label>
                </div>
              </el-col>

              <el-col :span="4">
                <div
                  style="width:90%;height:60px;display:inline-block;background-color:rgb(50, 50, 50);margin:2px 2px;border:1px solid rgb(37, 37, 37);border-radius:3px;"
                  @click="activeButton('Pen')"
                >
                  <div
                    class="icon icon-dodo-move"
                    style="color:rgb(192, 192, 192);margin:10px 0 10px 0;"
                  ></div>
                  <label style="color:rgb(192, 192, 192);margin:10px 0 0 0;font-size:12px;">拖动</label>
                </div>
              </el-col>

              <el-col :span="4">
                <div
                  style="width:90%;height:60px;display:inline-block;background-color:rgb(50, 50, 50);margin:2px 2px;border:1px solid rgb(37, 37, 37);border-radius:3px;"
                  @click="activeButton('StackScrollMouseWheel')"
                >
                  <div
                    class="icon icon-uniE030"
                    style="color:rgb(192, 192, 192);margin:10px 0 10px 0;"
                  ></div>
                  <label style="color:rgb(192, 192, 192);margin:10px 0 0 0;font-size:12px;">滚轮</label>
                </div>
              </el-col>
            </el-row>
            <el-row
              style="background-color:rgb(50, 50, 50);border-top:1px solid rgb(128, 128, 128);"
            >
              <el-col :span="4">
                <div
                  style="width:90%;height:60px;display:inline-block;background-color:rgb(50, 50, 50);margin:2px 2px;border:1px solid rgb(37, 37, 37);border-radius:3px;"
                  @click="activeButton('Angle')"
                >
                  <div
                    class="icon icon-dodo-angle"
                    style="color:rgb(192, 192, 192);margin:10px 0 10px 0;"
                  ></div>
                  <label style="color:rgb(192, 192, 192);margin:10px 0 0 0;font-size:12px;">角度</label>
                </div>
              </el-col>

              <el-col :span="4">
                <div
                  style="width:90%;height:60px;display:inline-block;background-color:rgb(50, 50, 50);margin:2px 2px;border:1px solid rgb(37, 37, 37);border-radius:3px;"
                  @click="activeButton('ArrowAnnotate')"
                >
                  <div
                    class="icon icon-uniE093"
                    style="color:rgb(192, 192, 192);margin:10px 0 10px 0;"
                  ></div>
                  <label style="color:rgb(192, 192, 192);margin:10px 0 0 0;font-size:12px;">箭头</label>
                </div>
              </el-col>

              <el-col :span="4">
                <div
                  style="width:90%;height:60px;display:inline-block;background-color:rgb(50, 50, 50);margin:2px 2px;border:1px solid rgb(37, 37, 37);border-radius:3px;"
                  @click="activeButton('RectangleRoi')"
                >
                  <div
                    class="icon icon-dodo-rect-anno"
                    style="color:rgb(192, 192, 192);margin:10px 0 10px 0;"
                  ></div>
                  <label style="color:rgb(192, 192, 192);margin:10px 0 0 0;font-size:12px;">矩形</label>
                </div>
              </el-col>
              <el-col :span="4">
                <div
                  style="width:90%;height:60px;display:inline-block;background-color:rgb(50, 50, 50);margin:2px 2px;border:1px solid rgb(37, 37, 37);border-radius:3px;"
                  @click="activeButton('CircleScissors')"
                >
                  <div
                    class="icon icon-dodo-elliptic-anno"
                    style="color:rgb(192, 192, 192);margin:10px 0 10px 0;"
                  ></div>
                  <label style="color:rgb(192, 192, 192);margin:10px 0 0 0;font-size:12px;">圆形</label>
                </div>
              </el-col>
              <el-col :span="4">
                <div
                  style="width:90%;height:60px;display:inline-block;background-color:rgb(50, 50, 50);margin:2px 2px;border:1px solid rgb(37, 37, 37);border-radius:3px;"
                  @click="activeButton('FreehandRoi')"
                >
                  <div
                    class="icon icon-dodo-pen-draw"
                    style="color:rgb(192, 192, 192);margin:10px 0 10px 0;"
                  ></div>
                  <label style="color:rgb(192, 192, 192);margin:10px 0 0 0;font-size:12px;">圈画</label>
                </div>
              </el-col>

              <el-col :span="4">
                <div
                  style="width:90%;height:60px;display:inline-block;background-color:rgb(50, 50, 50);margin:2px 2px;border:1px solid rgb(37, 37, 37);border-radius:3px;"
                  @click="activeButton('Length')"
                >
                  <div
                    class="icon icon-dodo-linetool"
                    style="color:rgb(192, 192, 192);margin:10px 0 10px 0;"
                  ></div>
                  <label style="color:rgb(192, 192, 192);margin:10px 0 0 0;font-size:12px;">长度</label>
                </div>
              </el-col>
            </el-row>
            <el-row
              style="background-color:rgb(50, 50, 50);border-buttom:1px solid rgb(128, 128, 128);"
            >
              <el-col :span="6">
                <div
                  style="width:90%;height:60px;display:inline-block;background-color:rgb(50, 50, 50);margin:2px 2px;border:1px solid rgb(37, 37, 37);border-radius:3px;"
                  @click="activeButton('Bidirectional')"
                >
                  <div
                    class="icon icon-plus"
                    style="color:rgb(192, 192, 192);margin:10px 0 10px 0;"
                  ></div>
                  <label style="color:rgb(192, 192, 192);margin:10px 0 0 0;font-size:12px;">十字线</label>
                </div>
              </el-col>
              <el-col :span="6">
                <div
                  style="width:90%;height:60px;display:inline-block;background-color:rgb(50, 50, 50);margin:2px 2px;border:1px solid rgb(37, 37, 37);border-radius:3px;"
                  @click="activeButton('CobbAngle')"
                >
                  <div
                    class="icon icon-dodo-cobb"
                    style="color:rgb(192, 192, 192);margin:10px 0 10px 0;"
                  ></div>
                  <label style="color:rgb(192, 192, 192);margin:10px 0 0 0;font-size:12px;">柯布角</label>
                </div>
              </el-col>
              <el-col :span="6">
                <div
                  style="width:90%;height:60px;display:inline-block;background-color:rgb(50, 50, 50);margin:2px 2px;border:1px solid rgb(37, 37, 37);border-radius:3px;"
                  @click="activeButton('Eraser')"
                >
                  <div
                    class="icon icon-dodo-redo"
                    style="color:rgb(192, 192, 192);margin:10px 0 10px 0;"
                  ></div>
                  <label style="color:rgb(192, 192, 192);margin:10px 0 0 0;font-size:12px;">橡皮擦</label>
                </div>
              </el-col>
              <el-col :span="6">
                <div
                  style="width:90%;height:60px;display:inline-block;background-color:rgb(50, 50, 50);margin:2px 2px;border:1px solid rgb(37, 37, 37);border-radius:3px;"
                  @click="activeButton('Magnify')"
                >
                  <div
                    class="icon icon-dodo-angle"
                    style="color:rgb(192, 192, 192);margin:10px 0 10px 0;"
                  ></div>
                  <label style="color:rgb(192, 192, 192);margin:10px 0 0 0;font-size:12px;">放大镜</label>
                </div>
              </el-col>
            </el-row>
            <el-row
              style="background-color:rgb(50, 50, 50);border-top:1px solid rgb(128, 128, 128);"
            >
              <el-col :span="4">
                <div
                  style="width:90%;height:30px;display:inline-block;background-color:rgb(50, 50, 50);margin:2px 2px;border:1px solid rgb(37, 37, 37);border-radius:3px;"
                  @click="reduceSpeed"
                >
                  <div
                    class="icon icon-uniE069"
                    style="color:rgb(192, 192, 192);margin:10px 0 10px 0;"
                  ></div>
                </div>
              </el-col>
              <el-col :span="4">
                <div
                  style="width:90%;height:30px;display:inline-block;background-color:rgb(50, 50, 50);margin:2px 2px;border:1px solid rgb(37, 37, 37);border-radius:3px;"
                  @click="playDicom"
                >
                  <div
                    id="play"
                    class="icon icon-uniE072"
                    style="color:rgb(192, 192, 192);margin:10px 0 10px 0;"
                  ></div>
                </div>
              </el-col>
              <el-col :span="4">
                <div
                  style="width:90%;height:30px;display:inline-block;background-color:rgb(50, 50, 50);margin:2px 2px;border:1px solid rgb(37, 37, 37);border-radius:3px;"
                  @click="addSpeed"
                >
                  <div
                    class="icon icon-uniE077"
                    style="color:rgb(192, 192, 192);margin:10px 0 10px 0;"
                  ></div>
                </div>
              </el-col>
              <el-col :span="12">
                <div
                  style="width:90%;height:30px;display:inline-block;background-color:rgb(50, 50, 50);margin:2px 2px;border:1px solid rgb(37, 37, 37);border-radius:3px;"
                  @click="activeButton('Angle')"
                >
                  <div style="color:rgb(192, 192, 192);margin:3px 0 10px 0;display:inline-block;">倍速</div>
                  <p
                    style="display:inline-block;color:rgb(192, 192, 192);background-color:rgb(41, 41, 41);width:50%;margin:3px 0 0 0;height:20px;padding:4px 0 0 0;"
                  >{{2-speed}}</p>
                </div>
              </el-col>
            </el-row>
            <el-row
              style="background-color:rgb(50, 50, 50);border-top:1px solid rgb(128, 128, 128);"
            >
              <el-col :span="4">
                <div
                  style="width:90%;height:60px;display:inline-block;background-color:rgb(50, 50, 50);margin:2px 2px;border:1px solid rgb(37, 37, 37);border-radius:3px;"
                  @click="activeButton('Angle')"
                >
                  <div
                    class="icon icon-dodo-angle"
                    style="color:rgb(192, 192, 192);margin:10px 0 10px 0;"
                  ></div>
                  <label style="color:rgb(192, 192, 192);margin:10px 0 0 0;font-size:12px;">角度</label>
                </div>
              </el-col>

              <el-col :span="4">
                <div
                  style="width:90%;height:60px;display:inline-block;background-color:rgb(50, 50, 50);margin:2px 2px;border:1px solid rgb(37, 37, 37);border-radius:3px;"
                  @click="activeButton('Angle')"
                >
                  <div
                    class="icon icon-dodo-angle"
                    style="color:rgb(192, 192, 192);margin:10px 0 10px 0;"
                  ></div>
                  <label style="color:rgb(192, 192, 192);margin:10px 0 0 0;font-size:12px;">角度</label>
                </div>
              </el-col>

              <el-col :span="4">
                <div
                  style="width:90%;height:60px;display:inline-block;background-color:rgb(50, 50, 50);margin:2px 2px;border:1px solid rgb(37, 37, 37);border-radius:3px;"
                  @click="activeButton('Angle')"
                >
                  <div
                    class="icon icon-dodo-angle"
                    style="color:rgb(192, 192, 192);margin:10px 0 10px 0;"
                  ></div>
                  <label style="color:rgb(192, 192, 192);margin:10px 0 0 0;font-size:12px;">角度</label>
                </div>
              </el-col>

              <el-col :span="4">
                <div
                  style="width:90%;height:60px;display:inline-block;background-color:rgb(50, 50, 50);margin:2px 2px;border:1px solid rgb(37, 37, 37);border-radius:3px;"
                  @click="activeButton('Angle')"
                >
                  <div
                    class="icon icon-dodo-angle"
                    style="color:rgb(192, 192, 192);margin:10px 0 10px 0;"
                  ></div>
                  <label style="color:rgb(192, 192, 192);margin:10px 0 0 0;font-size:12px;">角度</label>
                </div>
              </el-col>

              <el-col :span="4">
                <div
                  style="width:90%;height:60px;display:inline-block;background-color:rgb(50, 50, 50);margin:2px 2px;border:1px solid rgb(37, 37, 37);border-radius:3px;"
                  @click="activeButton('Angle')"
                >
                  <div
                    class="icon icon-dodo-angle"
                    style="color:rgb(192, 192, 192);margin:10px 0 10px 0;"
                  ></div>
                  <label style="color:rgb(192, 192, 192);margin:10px 0 0 0;font-size:12px;">角度</label>
                </div>
              </el-col>

              <el-col :span="4">
                <div
                  style="width:90%;height:60px;display:inline-block;background-color:rgb(50, 50, 50);margin:2px 2px;border:1px solid rgb(37, 37, 37);border-radius:3px;"
                  @click="activeButton('Angle')"
                >
                  <div
                    class="icon icon-dodo-angle"
                    style="color:rgb(192, 192, 192);margin:10px 0 10px 0;"
                  ></div>
                  <label style="color:rgb(192, 192, 192);margin:10px 0 0 0;font-size:12px;">角度</label>
                </div>
              </el-col>
            </el-row>
            <el-row
              style="background-color:rgb(50, 50, 50);border-buttom:1px solid rgb(128, 128, 128);"
            >
              <el-col :span="4">
                <div
                  style="width:90%;height:60px;display:inline-block;background-color:rgb(50, 50, 50);margin:2px 2px;border:1px solid rgb(37, 37, 37);border-radius:3px;"
                  @click="activeButton('Angle')"
                >
                  <div
                    class="icon icon-dodo-angle"
                    style="color:rgb(192, 192, 192);margin:10px 0 10px 0;"
                  ></div>
                  <label style="color:rgb(192, 192, 192);margin:10px 0 0 0;font-size:12px;">角度</label>
                </div>
              </el-col>

              <el-col :span="4">
                <div
                  style="width:90%;height:60px;display:inline-block;background-color:rgb(50, 50, 50);margin:2px 2px;border:1px solid rgb(37, 37, 37);border-radius:3px;"
                  @click="activeButton('Angle')"
                >
                  <div
                    class="icon icon-dodo-angle"
                    style="color:rgb(192, 192, 192);margin:10px 0 10px 0;"
                  ></div>
                  <label style="color:rgb(192, 192, 192);margin:10px 0 0 0;font-size:12px;">角度</label>
                </div>
              </el-col>

              <el-col :span="4">
                <div
                  style="width:90%;height:60px;display:inline-block;background-color:rgb(50, 50, 50);margin:2px 2px;border:1px solid rgb(37, 37, 37);border-radius:3px;"
                  @click="activeButton('Angle')"
                >
                  <div
                    class="icon icon-dodo-angle"
                    style="color:rgb(192, 192, 192);margin:10px 0 10px 0;"
                  ></div>
                  <label style="color:rgb(192, 192, 192);margin:10px 0 0 0;font-size:12px;">角度</label>
                </div>
              </el-col>

              <el-col :span="4">
                <div
                  style="width:90%;height:60px;display:inline-block;background-color:rgb(50, 50, 50);margin:2px 2px;border:1px solid rgb(37, 37, 37);border-radius:3px;"
                  @click="activeButton('Angle')"
                >
                  <div
                    class="icon icon-dodo-angle"
                    style="color:rgb(192, 192, 192);margin:10px 0 10px 0;"
                  ></div>
                  <label style="color:rgb(192, 192, 192);margin:10px 0 0 0;font-size:12px;">角度</label>
                </div>
              </el-col>

              <el-col :span="4">
                <div
                  style="width:90%;height:60px;display:inline-block;background-color:rgb(50, 50, 50);margin:2px 2px;border:1px solid rgb(37, 37, 37);border-radius:3px;"
                  @click="activeButton('Angle')"
                >
                  <div
                    class="icon icon-dodo-angle"
                    style="color:rgb(192, 192, 192);margin:10px 0 10px 0;"
                  ></div>
                  <label style="color:rgb(192, 192, 192);margin:10px 0 0 0;font-size:12px;">角度</label>
                </div>
              </el-col>

              <el-col :span="4">
                <div
                  style="width:90%;height:60px;display:inline-block;background-color:rgb(50, 50, 50);margin:2px 2px;border:1px solid rgb(37, 37, 37);border-radius:3px;"
                  @click="activeButton('Angle')"
                >
                  <div
                    class="icon icon-dodo-angle"
                    style="color:rgb(192, 192, 192);margin:10px 0 10px 0;"
                  ></div>
                  <label style="color:rgb(192, 192, 192);margin:10px 0 0 0;font-size:12px;">角度</label>
                </div>
              </el-col>
            </el-row>
          </div>
<div @click="showDicomList">文件列表</div>
          <!-- <div class="enterURL">
            <input type="text" id="wadoURL" style="width: 35%;" placeholder="Enter WADO URL" value="http://localhost:8080/static/series-000001/image-000001.dcm"/>
            <el-button type="button" id="downloadAndView">加载Dicom</el-button>
          </div>
          <div id="loadProgress" style="position:relative;left:-15%">Dicom加载:</div>-->
        </div>
      </el-col>

      <el-col :span="18">
        <div style="position:relative;" id="canvasDiv">
          <div
            id="resizeKnob"
            style="position:absolute;right:-5px;bottom:-5px;width:20px;height:20px;background:red;cursor:se-resize"
          ></div>
          <div
            id="dicomImage"
            style="width:100%;height:900px"
            oncontextmenu="return false"
            onmousedown="return false"
          ></div>
        </div>
      </el-col>
      <el-col :span="3">
        <div
          style="overflow-y:scroll;height:900px; background-color:rgb(50, 50, 50);"
          id="rightSideBar"
        >
          <div style="background-color:rgb(37, 37, 37);border-bottom:1px solid rgb(128, 128, 128);">
            <div
              style="background-color:rgb(91, 91, 91);width:30%;height:32px;padding:10px 0 0 0;color:rgb(200, 200, 200);display:inline-block;float:left;"
            >序列</div>
            <div
              style="background-color:rgb(91, 91, 91);width:30%;height:32px;padding:10px 0 0 0; color:rgb(200, 200, 200);display:inline-block;float:right;"
              id="showMeun"
              @click="showMeun"
            >
             <router-link style=" text-decoration:none;" to="/personalPage"><i  class="icon icon-uniE163" style="font-size:28px;color:rgb(200, 200, 200);"></i></router-link>
            </div>
          </div>
          <div style="margin:10px 0 0 0;clear:both;border-top:1px solid rgb(128, 128, 128);">
            <div style="color:rgb(192, 192, 192);margin:0 0 5px 0;">序列1</div>
            <div
              id="canvas"
              style="background-color:black;width:90%;height:100px;margin:0 0 0 10px"
            ></div>
          </div>
          <div style="margin:10px 0 0 0;">
            <div style="color:rgb(192, 192, 192);margin:0 0 5px 0;">序列1</div>
            <div
              id="canvas"
              style="background-color:black;width:90%;height:100px;margin:0 0 0 10px"
            ></div>
          </div>
          <div style="margin:10px 0 0 0;">
            <div style="color:rgb(192, 192, 192);margin:0 0 5px 0;">序列1</div>
            <div
              id="canvas"
              style="background-color:black;width:90%;height:100px;margin:0 0 0 10px"
            ></div>
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
import $ from 'jquery'
import router from '../router'
// 指定要注册加载程序的基石实例
cornerstoneWADOImageLoader.external.cornerstone = cornerstone
cornerstoneWADOImageLoader.external.dicomParser = dicomParser
cornerstoneTools.external.cornerstoneMath = cornerstoneMath
cornerstoneTools.external.cornerstone = cornerstone
cornerstoneTools.external.Hammer = Hammer

export default {
  name: 'newDemo',
  data () {
    return {
      speed: 1,
      time: 0,
      play: true,
      imageIds: [],
      element: {},
      crruentDicom: 0,
      drawer: true,
      direction: 'rtl',
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
    showDicomList () {
      router.push({path: '/dicomList'})
    },
    showMeun () {
      $('#meun').show()
    },
    addSpeed () {
      var _this = this
      if (_this._data.speed <= 0) {
        alert('请停止')
      } else {
        _this._data.speed -= 0.25
      }
    },
    reduceSpeed () {
      var _this = this
      if (_this._data.speed >= 1.75) {
        alert('请停止')
      } else {
        _this._data.speed += 0.25
      }
    },
    playDicom () {
      const _this = this
      const element = document.getElementById('dicomImage')
      $('#app').css('background-color', 'blue;')
      cornerstone.enable(element)
      if (_this._data.play) {
        $('#play').removeClass('icon-uniE072')
        $('#play').addClass('icon-uniE073')

        // alert(_this._data.play)
        _this._data.play = !_this._data.play
        play()
      } else {
        $('#play').removeClass('icon-uniE073')
        $('#play').addClass('icon-uniE072')
        // alert(_this._data.play)
        // alert(_this._data.time)
        clearTimeout(_this._data.time)
        _this._data.play = !_this._data.play
      }

      function play () {
        _this._data.crruentDicom++
        if (_this._data.crruentDicom === 361) {
          _this._data.crruentDicom = 0
        }
        cornerstone
          .loadImage(_this._data.imageIds[_this._data.crruentDicom])
          .then(
            function (image) {
              // alert('开始播放')
              // console.log(_this._data.imageIds[_this._data.crruentDicom])
              cornerstone.displayImage(element, image)
              // console.log(image)
              // _this._data.crruentDicom++
              // console.log(_this._data.crruentDicom)
              // cornerstoneTools.addStackStateManager(element, ['stack'])
              // cornerstoneTools.addToolState(element, 'stack', stack)
            },
            function (err) {
              console.log(err)
            }
          )
        _this._data.time = setTimeout(play, 100 * _this._data.speed)
        console.log(_this._data.speed)
      }
      /* eslint-disable */
      // setTimeout(play, 100)
      /* eslint-disable */
    },
    resize(newRect) {
      console.log(newRect);
      var i = document.getElementById("dicomImage").childNodes;
      i[9].style.height = newRect.height + "px";
      i[9].style.width = newRect.width + "px";
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },

    activeButton(toolName) {
      const _this = this;
      console.log(_this._data.tools.ArrowAnnotate);
      const tool = cornerstoneTools[`${toolName}Tool`];
      cornerstoneTools.addTool(tool);
      cornerstoneTools.setToolActive(toolName, { mouseButtonMask: 1 });
      alert(`active${toolName}`);
      const element = document.getElementById("dicomImage");
      console.log(element);
      cornerstoneTools[`setToolActive`](toolName, {
        mouseButtonMask: 1
      });
      for (let tool in _this._data.tools) {
        console.log(tool + "---" + _this._data.tools[tool]);
        if (tool === toolName) {
          _this._data.tools[tool] = "disableButton";
        }
      }
    }
  },
  mounted() {
    // $('#meun').hide()
    const _this = this;
    _this._data.element = document.getElementById("dicomImage");
    $("#sideBar").height($(window).height());
    $("#rightSideBar").height($(window).height());
    $("#dicomImage").height($(window).height());
    $("#canvasDiv").height($(window).height());
    var element = _this._data.element;
    cornerstone.enable(element);
    // document
    //   .getElementById('downloadAndView')
    //   .addEventListener('click', function (e) {
    //     alert(111)
    //     let url = document.getElementById('wadoURL').value
    //     url = 'wadouri:' + url
    //     _this.loadAndViewImage(url)
    //   })
    // cornerstone.events.addEventListener(
    //   'cornerstoneimageloadprogress',
    //   function (event) {
    //     const eventData = event.detail
    //     const loadProgress = document.getElementById('loadProgress')
    //     loadProgress.textContent = `Dicom加载: ${eventData.percentComplete}%`
    //   }
    // )
    cornerstoneTools.init();
    cornerstone.enable(element);
    cornerstoneTools.setToolActiveForElement(
      element,
      `StackScrollMouseWheelTool`
    );
    // const imageIds = []
    for (var i = 1; i < 362; i++) {
      let str = i + "";
      _this._data.imageIds.push(
        "wadouri:http://localhost:8080/static/series-000001/image-000" +
          str.padStart(3, "0") +
          ".dcm"
      );
    }
    // console.log(imageIds)
    const toolName = "StackScrollMouseWheel";
    const stack = {
      currentImageIdIndex: 0,
      imageIds: _this._data.imageIds
    };
    cornerstone.loadImage(_this._data.imageIds[_this._data.crruentDicom]).then(
      function(image) {
        cornerstone.displayImage(element, image);
        cornerstoneTools.addStackStateManager(element, ["stack"]);
        cornerstoneTools.addToolState(element, "stack", stack);
      },
      function(err) {
        console.log(err);
      }
    );

    const apiTool = cornerstoneTools[`${toolName}Tool`];
    cornerstoneTools.addTool(apiTool);
    cornerstoneTools.setToolActive(toolName, { mouseButtonMask: 1 });

    function doResize(width, height) {
      if (width < 100) {
        width = 100;
      }
      if (height < 100) {
        height = 100;
      }

      element.style.width = width + "px";
      element.style.height = height + "px";
      cornerstone.resize(element);
    }

    // function getRandomFloat (min, max) {
    //   return Math.random() * (max - min) + min
    // }
    var child = document.getElementById("dicomImage").childNodes;
    child[9].style.height = $(window).height();
    document
      .getElementById("resizeKnob")
      .addEventListener("mousedown", function(e) {
        const initWidth = element.clientWidth;
        const initHeight = element.clientHeight;
        const startX = e.clientX;
        const startY = e.clientY;
        function dragResize(e) {
          // alert(222)
          const x = e.clientX - startX;
          const y = e.clientY - startY;
          const w = initWidth + x;
          const h = initHeight + y;
          doResize(w, h);
        }
        document.addEventListener("mousemove", dragResize);
        document.addEventListener("mouseup", function(e) {
          // alert(111)
          /* eslint-disable */
          document.removeEventListener("mouseup", this);
          /* eslint-enable */
          document.removeEventListener('mousemove', dragResize)
        })
      })
    // var child = document.getElementById('dicomImage').childNodes
    // $('#dicomImage').height($(window).height())
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
