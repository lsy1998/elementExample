<template>
  <div class="container">
    <el-row style="height:30px; background-color:rgb(52, 52, 52)"></el-row>
    <el-row>
      <el-col :span="3" id="left">
        <div id="sideBar"
          style="height:400px;display:inline-block; background-color:white;width:100%;background-color:rgb(50, 50, 50);">
          <div style="background-color:rgb(37, 37, 37);border-top:1px solid rgb(128, 128, 128);">
            <div
              style="background-color:rgb(50,50,50);width:80px;height:32px;padding:10px 0 0 0;color:rgb(2, 155, 98)">
              基本工具</div>
          </div>
          <div>
            <el-row style="background-color:rgb(50, 50, 50);border-top:1px solid rgb(128, 128, 128);">
              <el-col :span="4">
                <div
                  style="width:90%;height:60px;display:inline-block;background-color:rgb(50, 50, 50);margin:2px 2px;border:1px solid rgb(37, 37, 37);border-radius:3px;"
                  @click="activeButton('Probe')">
                  <div class="icon icon-dodo-pin" style="color:rgb(192, 192, 192);margin:10px 0 10px 0;"></div>
                  <label style="color:rgb(192, 192, 192);margin:10px 0 0 0;font-size:12px;">探针</label>
                </div>
              </el-col>

              <el-col :span="4">
                <div
                  style="width:90%;height:60px;display:inline-block;background-color:rgb(50, 50, 50);margin:2px 2px;border:1px solid rgb(37, 37, 37);border-radius:3px;"
                  @click="activeButton('CorrectionScissors')">
                  <div class="icon icon-dodo-fusion" style="color:rgb(192, 192, 192);margin:10px 0 10px 0;"></div>
                  <label style="color:rgb(192, 192, 192);margin:10px 0 0 0;font-size:12px;">修改</label>
                </div>
              </el-col>
              <el-col :span="4">
                <div
                  style="width:90%;height:60px;display:inline-block;background-color:rgb(50, 50, 50);margin:2px 2px;border:1px solid rgb(37, 37, 37);border-radius:3px;"
                  @click="activeButton('ZoomMouseWheel')">
                  <div class="icon icon-dodo-zoom" style="color:rgb(192, 192, 192);margin:10px 0 10px 0;"></div>
                  <label style="color:rgb(192, 192, 192);margin:10px 0 0 0;font-size:12px;">缩放</label>
                </div>
              </el-col>
              <el-col :span="4">
                <div
                  style="width:90%;height:60px;display:inline-block;background-color:rgb(50, 50, 50);margin:2px 2px;border:1px solid rgb(37, 37, 37);border-radius:3px;"
                  @click="activeButton('Rotate')">
                  <div class="icon icon-uniE031" style="color:rgb(192, 192, 192);margin:10px 0 10px 0;"></div>
                  <label style="color:rgb(192, 192, 192);margin:10px 0 0 0;font-size:12px;">旋转</label>
                </div>
              </el-col>

              <el-col :span="4">
                <div
                  style="width:90%;height:60px;display:inline-block;background-color:rgb(50, 50, 50);margin:2px 2px;border:1px solid rgb(37, 37, 37);border-radius:3px;"
                  @click="activeButton('Pen')">
                  <div class="icon icon-dodo-move" style="color:rgb(192, 192, 192);margin:10px 0 10px 0;"></div>
                  <label style="color:rgb(192, 192, 192);margin:10px 0 0 0;font-size:12px;">拖动</label>
                </div>
              </el-col>

              <el-col :span="4">
                <div
                  style="width:90%;height:60px;display:inline-block;background-color:rgb(50, 50, 50);margin:2px 2px;border:1px solid rgb(37, 37, 37);border-radius:3px;"
                  @click="activeButton('StackScrollMouseWheel')">
                  <div class="icon icon-uniE030" style="color:rgb(192, 192, 192);margin:10px 0 10px 0;"></div>
                  <label style="color:rgb(192, 192, 192);margin:10px 0 0 0;font-size:12px;">滚轮</label>
                </div>
              </el-col>
            </el-row>
            <el-row style="background-color:rgb(50, 50, 50);border-top:1px solid rgb(128, 128, 128);">
              <el-col :span="4">
                <div
                  style="width:90%;height:60px;display:inline-block;background-color:rgb(50, 50, 50);margin:2px 2px;border:1px solid rgb(37, 37, 37);border-radius:3px;"
                  @click="activeButton('Angle')">
                  <div class="icon icon-dodo-angle" style="color:rgb(192, 192, 192);margin:10px 0 10px 0;"></div>
                  <label style="color:rgb(192, 192, 192);margin:10px 0 0 0;font-size:12px;">角度</label>
                </div>
              </el-col>

              <el-col :span="4">
                <div
                  style="width:90%;height:60px;display:inline-block;background-color:rgb(50, 50, 50);margin:2px 2px;border:1px solid rgb(37, 37, 37);border-radius:3px;"
                  @click="activeButton('ArrowAnnotate')">
                  <div class="icon icon-uniE093" style="color:rgb(192, 192, 192);margin:10px 0 10px 0;"></div>
                  <label style="color:rgb(192, 192, 192);margin:10px 0 0 0;font-size:12px;">箭头</label>
                </div>
              </el-col>

              <el-col :span="4">
                <div
                  style="width:90%;height:60px;display:inline-block;background-color:rgb(50, 50, 50);margin:2px 2px;border:1px solid rgb(37, 37, 37);border-radius:3px;"
                  @click="activeButton('RectangleRoi')">
                  <div class="icon icon-dodo-rect-anno" style="color:rgb(192, 192, 192);margin:10px 0 10px 0;"></div>
                  <label style="color:rgb(192, 192, 192);margin:10px 0 0 0;font-size:12px;">矩形</label>
                </div>
              </el-col>
              <el-col :span="4">
                <div
                  style="width:90%;height:60px;display:inline-block;background-color:rgb(50, 50, 50);margin:2px 2px;border:1px solid rgb(37, 37, 37);border-radius:3px;"
                  @click="activeButton('CircleScissors')">
                  <div class="icon icon-dodo-elliptic-anno" style="color:rgb(192, 192, 192);margin:10px 0 10px 0;">
                  </div>
                  <label style="color:rgb(192, 192, 192);margin:10px 0 0 0;font-size:12px;">圆形</label>
                </div>
              </el-col>
              <el-col :span="4">
                <div
                  style="width:90%;height:60px;display:inline-block;background-color:rgb(50, 50, 50);margin:2px 2px;border:1px solid rgb(37, 37, 37);border-radius:3px;"
                  @click="activeButton('FreehandRoi')">
                  <div class="icon icon-dodo-pen-draw" style="color:rgb(192, 192, 192);margin:10px 0 10px 0;"></div>
                  <label style="color:rgb(192, 192, 192);margin:10px 0 0 0;font-size:12px;">圈画</label>
                </div>
              </el-col>

              <el-col :span="4">
                <div
                  style="width:90%;height:60px;display:inline-block;background-color:rgb(50, 50, 50);margin:2px 2px;border:1px solid rgb(37, 37, 37);border-radius:3px;"
                  @click="activeButton('Length')">
                  <div class="icon icon-dodo-linetool" style="color:rgb(192, 192, 192);margin:10px 0 10px 0;"></div>
                  <label style="color:rgb(192, 192, 192);margin:10px 0 0 0;font-size:12px;">长度</label>
                </div>
              </el-col>
            </el-row>
            <el-row style="background-color:rgb(50, 50, 50);border-buttom:1px solid rgb(128, 128, 128);">
              <el-col :span="6">
                <div
                  style="width:90%;height:60px;display:inline-block;background-color:rgb(50, 50, 50);margin:2px 2px;border:1px solid rgb(37, 37, 37);border-radius:3px;"
                  @click="activeButton('Bidirectional')">
                  <div class="icon icon-plus" style="color:rgb(192, 192, 192);margin:10px 0 10px 0;"></div>
                  <label style="color:rgb(192, 192, 192);margin:10px 0 0 0;font-size:12px;">十字线</label>
                </div>
              </el-col>
              <el-col :span="6">
                <div
                  style="width:90%;height:60px;display:inline-block;background-color:rgb(50, 50, 50);margin:2px 2px;border:1px solid rgb(37, 37, 37);border-radius:3px;"
                  @click="activeButton('CobbAngle')">
                  <div class="icon icon-dodo-cobb" style="color:rgb(192, 192, 192);margin:10px 0 10px 0;"></div>
                  <label style="color:rgb(192, 192, 192);margin:10px 0 0 0;font-size:12px;">柯布角</label>
                </div>
              </el-col>
              <el-col :span="6">
                <div
                  style="width:90%;height:60px;display:inline-block;background-color:rgb(50, 50, 50);margin:2px 2px;border:1px solid rgb(37, 37, 37);border-radius:3px;"
                  @click="activeButton('Eraser')">
                  <div class="icon icon-dodo-redo" style="color:rgb(192, 192, 192);margin:10px 0 10px 0;"></div>
                  <label style="color:rgb(192, 192, 192);margin:10px 0 0 0;font-size:12px;">橡皮擦</label>
                </div>
              </el-col>
              <el-col :span="6">
                <div
                  style="width:90%;height:60px;display:inline-block;background-color:rgb(50, 50, 50);margin:2px 2px;border:1px solid rgb(37, 37, 37);border-radius:3px;"
                  @click="activeButton('Magnify')">
                  <div class="icon icon-dodo-angle" style="color:rgb(192, 192, 192);margin:10px 0 10px 0;"></div>
                  <label style="color:rgb(192, 192, 192);margin:10px 0 0 0;font-size:12px;">放大镜</label>
                </div>
              </el-col>
            </el-row>
            <el-row style="background-color:rgb(50, 50, 50);border-top:1px solid rgb(128, 128, 128);border-bottom:1px solid rgb(128, 128, 128);">
              <el-col :span="4">
                <div
                  style="width:90%;height:30px;display:inline-block;background-color:rgb(50, 50, 50);margin:2px 2px;border:1px solid rgb(37, 37, 37);border-radius:3px;"
                  @click="reduceSpeed">
                  <div class="icon icon-uniE069" style="color:rgb(192, 192, 192);margin:10px 0 10px 0;"></div>
                </div>
              </el-col>
              <el-col :span="4">
                <div
                  style="width:90%;height:30px;display:inline-block;background-color:rgb(50, 50, 50);margin:2px 2px;border:1px solid rgb(37, 37, 37);border-radius:3px;"
                  @click="playDicom">
                  <div id="play" class="icon icon-uniE072" style="color:rgb(192, 192, 192);margin:10px 0 10px 0;"></div>
                </div>
              </el-col>
              <el-col :span="4">
                <div
                  style="width:90%;height:30px;display:inline-block;background-color:rgb(50, 50, 50);margin:2px 2px;border:1px solid rgb(37, 37, 37);border-radius:3px;"
                  @click="addSpeed">
                  <div class="icon icon-uniE077" style="color:rgb(192, 192, 192);margin:10px 0 10px 0;"></div>
                </div>
              </el-col>
              <el-col :span="12">
                <div
                  style="width:90%;height:30px;display:inline-block;background-color:rgb(50, 50, 50);margin:2px 2px;border:1px solid rgb(37, 37, 37);border-radius:3px;"
                  @click="activeButton('Angle')">
                  <div style="color:rgb(192, 192, 192);margin:3px 0 10px 0;display:inline-block;font-size:14px;">倍速</div>
                  <p
                    style="display:inline-block;color:rgb(192, 192, 192);background-color:rgb(41, 41, 41);width:50%;margin:3px 0 0 0;height:20px;padding:4px 0 0 0;font-size:14px">
                    {{2-speed}}</p>
                </div>
              </el-col>
            </el-row>
            <el-row style="background-color:rgb(50, 50, 50);border-buttom:1px solid rgb(128, 128, 128);">
              <el-col :span="8">
                <div
                  style="width:90%;height:60px;display:inline-block;background-color:rgb(50, 50, 50);margin:2px 2px;border:1px solid rgb(37, 37, 37);border-radius:3px;"
                  @click="invertDicom">
                  <div class="el-icon-sort" style="color:rgb(192, 192, 192);margin:10px 0 10px 0;"></div><br>
                  <label style="color:rgb(192, 192, 192);margin:10px 0 0 0;font-size:12px;">颜色反转</label>
                </div>
              </el-col>
              <el-col :span="8">
                <div
                  style="width:90%;height:60px;display:inline-block;background-color:rgb(50, 50, 50);margin:2px 2px;border:1px solid rgb(37, 37, 37);border-radius:3px;"
                  @click="savaCanvas('CobbAngle')">
                  <div class="el-icon-camera-solid" style="color:rgb(192, 192, 192);margin:10px 0 10px 0;"></div><br>
                  <label style="color:rgb(192, 192, 192);margin:10px 0 0 0;font-size:12px;">保存图片</label>
                </div>
              </el-col>
              <el-col :span="8">
                <div
                  style="width:90%;height:60px;display:inline-block;background-color:rgb(50, 50, 50);margin:2px 2px;border:1px solid rgb(37, 37, 37);border-radius:3px;"
                  @click="jumpToVTK">
                  <div class="icon icon-dodo-redo" style="color:rgb(192, 192, 192);margin:10px 0 10px 0;"></div>
                  <label style="color:rgb(192, 192, 192);margin:10px 0 0 0;font-size:12px;">3维重建</label>
                </div>
              </el-col>
              <!-- <el-col :span="6">
                <div
                  style="width:90%;height:60px;display:inline-block;background-color:rgb(50, 50, 50);margin:2px 2px;border:1px solid rgb(37, 37, 37);border-radius:3px;"
                  @click="activeButton('Magnify')">
                  <div class="icon icon-dodo-angle" style="color:rgb(192, 192, 192);margin:10px 0 10px 0;"></div>
                  <label style="color:rgb(192, 192, 192);margin:10px 0 0 0;font-size:12px;">放大镜</label>
                </div>
              </el-col> -->
            </el-row>
            <el-row style="background-color:rgb(50, 50, 50);border-top:1px solid rgb(128, 128, 128);">
               <el-col :span='1' style="color:rgb(50,50,50)">brave</el-col>
              <el-col :span="6" >
                <el-row style="margin:3px 0 0 0;border-top:1px solid rgb(37, 37, 37);">
                  <el-col :span='14' style="padding:3px 0 0 0;font-size:12px;height:20px;background-color:rgb(50, 50, 50); color:rgb(192, 192, 192)">布局</el-col>
                  <el-col :span='10'>
                  <select style="padding:3px 0 0 0;font-size:12px;height:20px;background-color:rgb(50, 50, 50);border-radius:3px; color:rgb(192, 192, 192);width:90%" @change="layoutChange" id="layoutSelect">
                  <option value="0">1x1</option>
                  <option value="1">1x2</option>
                  <option value="2">2x2</option>
                </select>
                  </el-col>
                </el-row>
              </el-col>
              <el-col :span='2' style="color:rgb(50,50,50)">brave</el-col>
              <el-col :span="14" >
                <el-row
              style="background-color:rgb(50, 50, 50);padding:5px 0 5px 0;">
              <el-col :span='8'>
                <div style="color:rgb(192, 192, 192);font-size:12px;"> 伪彩色 </div>
              </el-col>
              <el-col :span='8'>
                <select id="colormaps" @change="colormapChanged" style="width:100%;background-color:rgb(50, 50, 50);border-radius:3px; color:rgb(192, 192, 192);">
                  <option value="">Select...</option>
                </select>
              </el-col>
              <el-col :span='8'>
                <button @click="resetViewport"
                  style="color:rgb(192, 192, 192);font-size:12px; background-color:rgb(50,50,50); padding:0 5px; border:1px solid gray">
                  重置 </button>
              </el-col>
            </el-row>
              </el-col>
            </el-row>
            <!-- <el-row
              style="background-color:rgb(50, 50, 50);border-top:1px solid rgb(128, 128, 128);padding:5px 0 5px 0;">
              <el-col :span='6'>
                <div style="color:rgb(192, 192, 192);font-size:12px;"> 伪彩色 </div>
              </el-col>
              <el-col :span='8'>
                <select id="colormaps" @change="colormapChanged" style="width:100%;background-color:rgb(50, 50, 50);border-radius:3px; color:rgb(192, 192, 192);">
                  <option value="">Select...</option>
                </select>
              </el-col>
              <el-col :span='6'>
                <button @click="resetViewport"
                  style="color:rgb(192, 192, 192);font-size:12px; background-color:rgb(50,50,50); padding:0 5px; border:1px solid gray">
                  重置 </button>
              </el-col>
            </el-row> -->
            <el-row style="background-color:rgb(50, 50, 50);border-top:1px solid rgb(128, 128, 128);padding:5px 0 0 0;">
              <el-col :span="24">
                <canvas id="colorbar" width="250px" height="20px"></canvas>
              </el-col>
            </el-row>
          </div>

          <div style="border-top:1px solid rgb(128, 128, 128);border-bottom:1px solid rgb(128, 128, 128);background-color:rgb(37, 37, 37)">
            <div style="background-color:rgb(50,50,50);width:80px;height:32px;padding:10px 0 0 0;color:rgb(2, 155, 98);">
              文件列表</div>
          </div>
          <div style="height:200px; overflow-y:scroll;" class="test-1">
<el-row v-for="(list, i) in dicomList" :key="list" style="border: 1px solid black">
            <el-row>
              <el-col :span='12' style="color:rgb(192, 192, 192);font-size:12px;margin:6px 0 0 0; ">{{list[4]}}</el-col>
              <el-col :span='8' style="color:rgb(192, 192, 192);font-size:12px;margin:4px 0 0 0; ">序列数：{{list[7]}}</el-col>
              <el-col :span='4'><el-button :data-filename='list[4]' @click="changeDicom($event)" :data-name='i' size="mini" style="font-size:14px;background-color:rgb(50, 50, 50); color:rgb(192, 192, 192);border:none" icon='el-icon-view'></el-button></el-col>
            </el-row>
          </el-row>
          </div>
          <el-row style="border-top:1px solid rgb(128, 128, 128); font-size:14px; color:rgb(192, 192, 192);">
            <div @click="toClub" style=";margin:10px 0 0 0;">前往<strong
                style="color:rgb(2, 155, 98);cursor:pointer">社区</strong>查看更多关于医学图像处理
            </div>
          </el-row>

          <!-- <div class="enterURL">
            <input type="text" id="wadoURL" style="width: 35%;" placeholder="Enter WADO URL" value="http://localhost:8080/static/series-000001/image-000001.dcm"/>
            <el-button type="button" id="downloadAndView">加载Dicom</el-button>
          </div>
          <div id="loadProgress" style="position:relative;left:-15%">Dicom加载:</div>-->
        </div>
      </el-col>

      <el-col :span="18" id="layoutBox">
        <div style="position:relative; display:inline-block; border: 1px solid rgb(50, 50, 50);float:left; width:100%" id="canvasDiv1">
          <!-- <div id="resizeKnob"
            style="position:absolute;right:-5px;bottom:-5px;width:20px;height:20px;background:red;cursor:se-resize">
          </div> -->
          <div @click="selectElement($event)" data-index='1' style="position: absolute;top:8px;left:5px;color:white; font-size:20px" class="el-icon-aim"></div>
          <div id="dicomImage1" style="width:100%;height:900px;background-color:black" oncontextmenu="return false" onmousedown="return false">
          </div>
        </div>
        <div  style="position:relative; display:inline-block; border: 1px solid rgb(50, 50, 50);" id="canvasDiv2" v-show="canvasDiv2Show">
          <!-- <div id="resizeKnob"  v-show="canvasDiv2Show"
            style="position:absolute;right:-5px;bottom:-5px;width:20px;height:20px;background:red;cursor:se-resize">
          </div> -->
          <div @click="selectElement($event)" data-index='2' style="position: absolute;top:8px;left:5px;color:white; font-size:20px" class="el-icon-aim"></div>
          <div id="dicomImage2" style="width:100%;height:900px;background-color:black" oncontextmenu="return false" onmousedown="return false">
          </div>
        </div>
        <div style="position:relative;  display:inline-block; border: 1px solid rgb(50, 50, 50); float:left;bottom:4px" id="canvasDiv3" v-show="canvasDiv3Show">
          <!-- <div id="resizeKnob" v-show="canvasDiv3Show"
            style="position:absolute;right:-5px;bottom:-5px;width:20px;height:20px;background:red;cursor:se-resize">
          </div> -->
          <div @click="selectElement($event)" data-index='3' style="position: absolute;top:8px;left:5px;color:white; font-size:20px" class="el-icon-aim"></div>
          <div id="dicomImage3" style="width:100%;height:900px;background-color:black" oncontextmenu="return false" onmousedown="return false">
          </div>
        </div>
        <div style="position:relative;  display:inline-block; border: 1px solid rgb(50, 50, 50);bottom:4px" id="canvasDiv4" v-show="canvasDiv4Show">
          <!-- <div id="resizeKnob" v-show="canvasDiv4Show"
            style="position:absolute;right:-5px;bottom:-5px;width:20px;height:20px;background:red;cursor:se-resize">
          </div> -->
          <div @click="selectElement($event)" data-index='4' style="position: absolute;top:8px;left:5px;color:white; font-size:20px" class="el-icon-aim"></div>
          <div id="dicomImage4" style="width:100%;height:900px;background-color:black" oncontextmenu="return false" onmousedown="return false">
          </div>
        </div>
      </el-col>
      <el-col :span="3" id="right">
        <div style="overflow-y:scroll;height:900px; background-color:rgb(37, 37, 37);" id="rightSideBar">
          <div style="background-color:rgb(37, 37, 37);border-bottom:1px solid rgb(128, 128, 128);">
            <div style="background-color:rgb(50,50,50);width:30%;height:32px;padding:10px 0 0 0;color:rgb(2, 155, 98);display:inline-block;float:left;border-top:1px solid rgb(128, 128, 128);">序列</div>
            <div style="background-color:rgb(91, 91, 91);width:30%;height:32px;padding:10px 0 0 0; color:rgb(200, 200, 200);display:inline-block;float:right;" id="showMeun" @click="showMeun">
              <i class="icon icon-uniE163" style="font-size:28px;color:rgb(200, 200, 200);"></i>
            </div>
          </div>
          <div v-show="showSerial1" style="margin:10px 0 0 0;clear:both;border-top:1px solid rgb(128, 128, 128);">
            <div style="color:rgb(192, 192, 192);margin:0 0 5px 0;">序列1</div>
            <div id="canvas1" style="background-color:black;width:90%;height:100px;margin:0 0 0 10px" @dblclick="canvasLoadDicom('1')"></div>
          </div>
          <div v-show="showSerial2" style="margin:10px 0 0 0;">
            <div style="color:rgb(192, 192, 192);margin:0 0 5px 0;">序列2</div>
            <div id="canvas2" style="background-color:black;width:90%;height:100px;margin:0 0 0 10px" @dblclick="canvasLoadDicom('2')"></div>
          </div>
          <div v-show="showSerial3" style="margin:10px 0 0 0;">
            <div style="color:rgb(192, 192, 192);margin:0 0 5px 0;">序列3</div>
            <div id="canvas3" style="background-color:black;width:90%;height:100px;margin:0 0 0 10px" @dblclick="canvasLoadDicom('3')"></div>
          </div>
          <div v-show="showSerial4" style="margin:10px 0 0 0;">
            <div style="color:rgb(192, 192, 192);margin:0 0 5px 0;">序列4</div>
            <div id="canvas4" style="background-color:black;width:90%;height:100px;margin:0 0 0 10px" @dblclick="canvasLoadDicom('4')"></div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import * as cornerstoneWADOImageLoader from '../../static/dist/cornerstoneWADOImageLoader.js'
import dicomParser from 'dicom-parser'
// import cornerstone from 'cornerstone-core'
import cornerstone from '../../static/dist/cornerstone'
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
  name: 'viewer',
  data () {
    return {
      result: '',
      dicomList: '',
      serial1: [],
      serial2: [],
      serial3: [],
      serial4: [],
      length1: 1,
      length2: 1,
      showSerial1: true,
      showSerial2: false,
      showSerial3: false,
      showSerial4: false,
      canvasDiv4Show: false,
      canvasDiv3Show: false,
      canvasDiv2Show: false,
      speed: 1,
      time: 0,
      play: true,
      imageIds: [],
      imageIds1: [],
      imageIds2: [],
      imageIds3: [],
      element: {},
      currentVTK: '',
      currentElement: '',
      currentCanvas: '',
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
      },
      strWindowFeatures: 'width=800,height=800,menubar=yes,location=yes,resizable=yes,scrollbars=true,status=true',
      baseUrl: window.location.origin
    }
  },
  methods: {
    canvasLoadDicom (value) {
      if (this.currentElement === null || this.currentElement === '' || this.currentElement === undefined) {
        alert('请先选中画布！')
      } else {
        if (value === '1') {
          this.loadDicom(this.currentElement, this.serial1)
        }
        if (value === '2') {
          this.loadDicom(this.currentElement, this.serial2)
        }
        if (value === '3') {
          this.loadDicom(this.currentElement, this.serial3)
        }
        if (value === '4') {
          this.loadDicom(this.currentElement, this.serial4)
        }
      }
    },
    jumpToVTK () {
      window.open('../static/index.html', '3D', this.strWindowFeatures)
    },
    savaCanvas () {
      if (sessionStorage.currentCanvas === '' || sessionStorage.currentCanvas === 'undefined' || sessionStorage.currentCanvas === undefined) {
        alert('请先选中画布！')
      } else {
        var MIME_TYPE = 'image/png'
        var canvasPic = document.getElementById(`${sessionStorage.currentCanvas}`).getElementsByTagName('canvas')
        //console.log(canvasPic)
        var imgURL = canvasPic[0].toDataURL(MIME_TYPE)
        var dlLink = document.createElement('a')
        dlLink.download = '画布.png'
        dlLink.href = imgURL
        dlLink.dataset.downloadurl = [MIME_TYPE, dlLink.download, dlLink.href].join(':')
        document.body.appendChild(dlLink)
        dlLink.click()
        document.body.removeChild(dlLink)
      }
    },
    selectElement (e) {
      switch ($(e.currentTarget).attr('data-index')) {
        case '1':
          // //console.log(1)
          this.currentElement = document.getElementById('dicomImage1')
          sessionStorage.currentCanvas = 'dicomImage1'
          // sessionStorage.currentCanvas = document.getElementById('canvas1')
          break
        case '2':
          this.currentElement = document.getElementById('dicomImage2')
          sessionStorage.currentCanvas = 'dicomImage2'
          break
        case '3':
          this.currentElement = document.getElementById('dicomImage3')
          sessionStorage.currentCanvas = 'dicomImage3'
          break
        case '4':
          this.currentElement = document.getElementById('dicomImage4')
          sessionStorage.currentCanvas = 'dicomImage4'
          break
        default:
          break
      }
      var el = e.currentTarget
      // this.currentElement = el
      //console.log(this.currentElement)
      // //console.log($(el).next())
      $(el).parent().css('border', '1px solid rgb(245, 166, 35)')
      $(el).parent().siblings().css('border', '1px solid rgb(50, 50, 50)')
    },
    loadSerial () {
      let element = document.getElementById('canvas1')
      let element1 = document.getElementById('canvas2')
      let element2 = document.getElementById('canvas3')
      let element3 = document.getElementById('canvas4')
      cornerstone.enable(element)
      cornerstone.enable(element1)
      cornerstone.enable(element2)
      cornerstone.enable(element3)
      // alert(this.length1)
      switch (this.length1) {
        case 1:
          cornerstone.enable(element)
          this.loadDicom(element, this.serial1)
          break
        case 2:
          this.loadDicom(element, this.serial1)
          this.loadDicom(element1, this.serial2)
          this.showSerial2 = true
          break
        case 3:
          this.loadDicom(element, this.serial1)
          this.loadDicom(element1, this.serial2)
          this.loadDicom(element2, this.serial3)
          this.showSerial2 = true
          this.showSerial3 = true
          break
        case 4:
          this.loadDicom(element, this.serial1)
          this.loadDicom(element1, this.serial2)
          this.loadDicom(element2, this.serial3)
          this.loadDicom(element3, this.serial4)
          this.showSerial2 = true
          this.showSerial3 = true
          this.showSerial4 = true
          break
        default:
          break
      }
    },
    layoutChange () {
      var value1 = document.getElementById('layoutSelect').value

      var height = $(window).height()
      var width = $(window).width() - $('#right').width() - $('#left').width()

      let element = document.getElementById('dicomImage1')
      let element1 = document.getElementById('dicomImage2')
      let element2 = document.getElementById('dicomImage3')
      let element3 = document.getElementById('dicomImage4')

      // cornerstone.enable(element)
      // cornerstone.enable(element1)
      // cornerstone.enable(element2)
      // cornerstone.enable(element3)

      // let image = ''
      // let image1 = ''
      // let image2 = ''
      // let image3 = ''
      //console.log(value1)
      switch (value1) {
        case '0':
          // this.showDicomList()

          this.canvasDiv2Show = false
          this.canvasDiv3Show = false
          this.canvasDiv4Show = false

          element.style.width = width + 'px'
          element.style.height = height + 'px'
          $('#canvasDiv1').height(height)
          $('#canvasDiv1').width(width)
          element1.style.width = width + 'px'
          element1.style.height = height + 'px'
          $('#canvasDiv2').height(height)
          $('#canvasDiv2').width(width)

          this.loadDicom(element, this.serial1)

          // image = cornerstone.getImage(element)

          // image.rowPixelSpacing = 2
          // image.columnPixelSpacing = 2

          cornerstone.resize(element)
          break
        case '1':
          // this.showDicomList()

          //console.log('1x2')

          this.canvasDiv3Show = false
          this.canvasDiv4Show = false

          element.style.width = width / 2 - 2 + 'px'
          element.style.height = height + 'px'
          $('#canvasDiv1').height(height)
          $('#canvasDiv1').width(width / 2 - 2)
          element1.style.width = width / 2 - 2 + 'px'
          element1.style.height = height + 'px'
          $('#canvasDiv2').height(height)
          $('#canvasDiv2').width(width / 2 - 2)

          this.canvasDiv2Show = true
          // this.canvasDiv2Show = true
          // this.loadDicom(element1, this.serial2)
          // cornerstone.resize(element)
          // cornerstone.resize(element1)
          // image = cornerstone.getImage(element)
          // image1 = cornerstone.getImage(element1)

          // image.rowPixelSpacing = 2
          // image.columnPixelSpacing = 2
          // image1.rowPixelSpacing = 2
          // image1.columnPixelSpacing = 2
          if (this.serial1.length > 0) {
            cornerstone.enable(element)
            this.loadDicom(element, this.serial1)
          }
          if (this.serial2.length > 0) {
            cornerstone.enable(element1)
            this.loadDicom(element1, this.serial2)
          }
          cornerstone.resize(element)
          cornerstone.resize(element1)
          break
        case '2':
          element.style.width = width / 2 - 2 + 'px'
          element.style.height = height / 2 - 2 + 'px'
          $('#canvasDiv1').height(height / 2 - 2)
          $('#canvasDiv1').width(width / 2 - 2)

          element1.style.width = width / 2 - 2 + 'px'
          element1.style.height = height / 2 - 2 + 'px'
          $('#canvasDiv2').height(height / 2 - 2)
          $('#canvasDiv2').width(width / 2 - 2)

          element2.style.width = width / 2 - 2 + 'px'
          element2.style.height = height / 2 - 2 + 'px'
          $('#canvasDiv3').height(height / 2 - 2)
          $('#canvasDiv3').width(width / 2 - 2)

          element3.style.width = width / 2 - 2 + 'px'
          element3.style.height = height / 2 - 2 + 'px'
          $('#canvasDiv4').height(height / 2 - 2)
          $('#canvasDiv4').width(width / 2 - 2)

          this.canvasDiv2Show = true
          this.canvasDiv3Show = true
          this.canvasDiv4Show = true

          if (this.serial1.length > 0) {
            cornerstone.enable(element)
            this.loadDicom(element, this.serial1)
          }
          if (this.serial2.length > 0) {
            cornerstone.enable(element1)
            this.loadDicom(element1, this.serial2)
          }
          if (this.serial3.length > 0) {
            cornerstone.enable(element2)
            this.loadDicom(element2, this.serial3)
          }
          if (this.serial4.length > 0) {
            cornerstone.enable(element3)
            this.loadDicom(element3, this.serial4)
          }

          cornerstone.resize(element)
          cornerstone.resize(element1)
          cornerstone.resize(element2)
          cornerstone.resize(element3)
          break
        default:
      }
    },
    resetViewport () {
      var element = document.getElementById('dicomImage1')
      let viewport = cornerstone.getViewport(element)
      // //console.log(viewport)
      var colormap = cornerstone.colors.getColormap('gray')
      viewport.colormap = colormap
      cornerstone.setViewport(element, viewport)
    },
    updateColorbar (colormap) {
      const lookupTable = colormap.createLookupTable()
      const canvas = document.getElementById('colorbar')
      const ctx = canvas.getContext('2d')
      const height = canvas.height
      const width = canvas.width
      const colorbar = ctx.createImageData(width, height)

      lookupTable.setTableRange(0, width)

      // Update the colorbar pixel by pixel
      for (let col = 0; col < width; col++) {
        const color = lookupTable.mapValue(col)

        for (let row = 0; row < height; row++) {
          const pixel = (col + row * width) * 4
          colorbar.data[pixel] = color[0]
          colorbar.data[pixel + 1] = color[1]
          colorbar.data[pixel + 2] = color[2]
          colorbar.data[pixel + 3] = color[3]
        }
      }

      ctx.putImageData(colorbar, 0, 0)
    },
    getCustomLookupTable (minPixelValue, maxPixelValue) {
      const colormap = cornerstone.colors.getColormap('myCustomColorMap')
      colormap.setNumberOfColors(6)

      colormap.insertColor(0, [188, 252, 201, 255]) // Banana
      colormap.insertColor(1, [245, 222, 179, 255]) // Wheat
      colormap.insertColor(2, [255, 125, 64, 255]) // Flesh
      colormap.insertColor(3, [135, 38, 87, 255]) // Raspberry
      colormap.insertColor(4, [227, 206, 87, 255]) // Mint
      colormap.insertColor(5, [51, 160, 201, 255]) // Peacock

      return colormap
    },
    colormapChanged () {
      // var element = document.getElementById('dicomImage')
      let viewport = cornerstone.getViewport(this.element)
      if (typeof (viewport.colormap) === 'undefined') {
        // //console.log('')
        // alert('undefined')
      } else {
        //console.log(viewport)
        //console.log(viewport.colormap)
      }

      const colormapId = document.getElementById('colormaps').value
      let colormap = ''
      if (colormapId === '') {
        //console.log(1)
        return
      } else if (colormapId === 'custom') {
        colormap = this.getCustomLookupTable()
        //console.log(2)
      } else {
        //console.log(3)
        colormap = cornerstone.colors.getColormap(colormapId)
      }
      // var viewport1 = viewport
      viewport.colormap = colormap
      //console.log(viewport)
      //console.log(viewport.colormap)
      //console.log(viewport.colormap.getId())

      cornerstone.setViewport(this.element, viewport)
      cornerstone.updateImage(this.element, true)
      this.updateColorbar(colormap)
    },
    fillColormapsList () {
      const dropdown = document.getElementById('colormaps')
      const colormapsList = cornerstone.colors.getColormapsList()

      const addOption = function (id, name, disabled) {
        const option = document.createElement('OPTION')
        option.value = id
        option.textContent = name
        option.disabled = !!disabled
        dropdown.append(option)
      }

      colormapsList.forEach(function (colormapItem) {
        addOption(colormapItem.id, colormapItem.name)
      })

      // Horizontal Line
      addOption('', '──────────', true)

      addOption('custom', 'Custom')
    },
    invertDicom () {
      // var element = document.getElementById('dicomImage1')
      //console.log(this.currentElement)
      var element = this.currentElement
      cornerstone.enable(element)
      let viewport = cornerstone.getViewport(element)
      //console.log(viewport)
      viewport.invert = !viewport.invert
      cornerstone.setViewport(element, viewport)
    },
    changeDicom (event) {
      let i = 0
      let j = 0
      let k = 0
      let l = 0
      let el1 = document.getElementById('dicomImage1')
      let el2 = document.getElementById('dicomImage2')
      let el3 = document.getElementById('dicomImage3')
      let el4 = document.getElementById('dicomImage4')
      var el = event.currentTarget
      var filename = $(el).attr('data-filename')
      sessionStorage.currentVTK = parseInt($(el).attr('data-name')) + 1
      alert(sessionStorage.currentVTK)
      $(el).css('background-color', 'black')
      $(el).parent().parent().parent().css('background-color', 'black')
      $(el).parent().parent().parent().siblings().css('background-color', 'rgb(50,50,50)')
      $(el).parent().parent().parent().siblings().children().children().children().css('background-color', 'rgb(50,50,50)')
      //console.log(filename)

      this.$axios({
        url: 'http://47.115.131.98:888/getLIDC',
        method: 'post',
        data: {
          name: filename
        }
      }).then((res) => {
        //console.log(res.data.result)
        // //console.log(res.data)
        this.length1 = res.data.result.length
        for (i = 0; i < res.data.result.length - 1; i++) {
          for (j = 0; j < res.data.result.length - i - 1; j++) {
            if (res.data.result[j] < res.data.result[j + 1]) {
              var temp = res.data.result[j]
              res.data.result[j] = res.data.result[j + 1]
              res.data.result[j + 1] = temp
            }
          }
        }
        switch (res.data.result.length) {
          case 1:
            this.serial1 = []
            //console.log(1)
            // this.serial1 = res.data.result[0]
            for (i = 0; i < res.data.result[0].length; i++) {
              if (res.data.result[0][i][0].indexOf('xml') >= 0) {
                //console.log(res.data.result[0][i][0])
              } else {
                this.serial1.push(res.data.result[0][i][0])
              }
            }
            this.loadDicom(el1, this.serial1)
            // this.loadDicom(el2, [])
            // this.loadDicom(el3, [])
            // this.loadDicom(el4, [])
            //console.log(this.serial1)
            break
          case 2:
            //console.log(2)

            this.serial1 = []
            this.serial2 = []

            for (j = 0; j < res.data.result[0].length; j++) {
              if (res.data.result[0][j][0].indexOf('xml') >= 0) {
                //console.log(res.data.result[0][j][0])
              } else {
                this.serial1.push(res.data.result[0][j][0])
              }
            }
            for (k = 0; k < res.data.result[1].length; k++) {
              if (res.data.result[1][k][0].indexOf('xml') >= 0) {
                //console.log(res.data.result[1][k][0])
              } else {
                this.serial2.push(res.data.result[1][k][0])
              }
            }
            this.loadDicom(el1, this.serial1)
            this.loadDicom(el2, this.serial2)
            // this.loadDicom(el3, [])
            // this.loadDicom(el4, [])
            //console.log(this.serial1)
            //console.log(this.serial2)
            break
          case 3:
            //console.log(3)

            this.serial1 = []
            this.serial2 = []
            this.serial3 = []

            for (i = 0; i < res.data.result[0].length; i++) {
              if (res.data.result[0][i][0].indexOf('xml') >= 0) {
                //console.log(res.data.result[0][i][0])
              } else {
                this.serial1.push(res.data.result[0][i][0])
              }
            }
            for (j = 0; j < res.data.result[1].length; j++) {
              if (res.data.result[1][j][0].indexOf('xml') >= 0) {
                //console.log(res.data.result[1][j][0])
              } else {
                this.serial2.push(res.data.result[1][j][0])
              }
            }
            for (k = 0; k < res.data.result[2].length; k++) {
              if (res.data.result[2][k][0].indexOf('xml') >= 0) {
                //console.log(res.data.result[2][k][0])
              } else {
                this.serial3.push(res.data.result[2][k][0])
              }
            }
            this.loadDicom(el1, this.serial1)
            this.loadDicom(el2, this.serial2)
            this.loadDicom(el3, this.serial3)
            // this.loadDicom(el4, [])
            //console.log(this.serial1)
            //console.log(this.serial2)
            //console.log(this.serial3)
            break
          case 4:
            //console.log(4)

            this.serial1 = []
            this.serial2 = []
            this.serial3 = []
            this.serial4 = []

            for (i = 0; i < res.data.result[0].length; i++) {
              if (res.data.result[0][i][0].indexOf('xml') >= 0) {
                //console.log(res.data.result[0][i][0])
              } else {
                this.serial1.push(res.data.result[0][i][0])
              }
            }
            for (j = 0; j < res.data.result[0].length; j++) {
              if (res.data.result[0][j][0].indexOf('xml') >= 0) {
                //console.log(res.data.result[0][j][0])
              } else {
                this.serial2.push(res.data.result[0][j][0])
              }
            }
            for (k = 0; k < res.data.result[1].length; k++) {
              if (res.data.result[1][k][0].indexOf('xml') >= 0) {
                //console.log(res.data.result[1][k][0])
              } else {
                this.serial3.push(res.data.result[1][k][0])
              }
            }
            for (l = 0; l < res.data.result[1].length; l++) {
              if (res.data.result[1][l][0].indexOf('xml') >= 0) {
                //console.log(res.data.result[1][l][0])
              } else {
                this.serial3.push(res.data.result[1][l][0])
              }
            }
            this.loadDicom(el1, this.serial1)
            this.loadDicom(el2, this.serial2)
            this.loadDicom(el3, this.serial3)
            this.loadDicom(el4, this.serial4)
            //console.log(this.serial1)
            //console.log(this.serial2)
            //console.log(this.serial3)
            //console.log(this.serial4)
            break
          default:
            break
        }
        this.loadSerial()
      })
    },
    toClub () {
      router.push({ path: '/newClub' })
    },
    showMeun () {
      router.go(-1)
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
      // const element = document.getElementById('dicomImage1')
      const element = this.currentElement
      $('#app').css('background-color', 'blue;')
      cornerstone.enable(element)
      if (_this._data.play) {
        $('#play').removeClass('icon-uniE072')
        $('#play').addClass('icon-uniE073')
        _this._data.play = !_this._data.play
        play()
      } else {
        $('#play').removeClass('icon-uniE073')
        $('#play').addClass('icon-uniE072')
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
              cornerstone.displayImage(element, image)
            },
            function (err) {
              //console.log(err)
            }
          )
        _this._data.time = setTimeout(play, 100 * _this._data.speed)
        //console.log(_this._data.speed)
      }
      /* eslint-disable */
      // setTimeout(play, 100)
      /* eslint-disable */
    },

    resize (newRect) {
      //console.log(newRect);
      var i = document.getElementById("dicomImage1").childNodes;
      i[9].style.height = newRect.height + "px";
      i[9].style.width = newRect.width + "px";
    },

    handleOpen (key, keyPath) {
      //console.log(key, keyPath);
    },

    handleClose (key, keyPath) {
      //console.log(key, keyPath);
    },

    activeButton (toolName) {
      const _this = this;
      //console.log(_this._data.tools.ArrowAnnotate);
      const tool = cornerstoneTools[`${toolName}Tool`];
      cornerstoneTools.addTool(tool);
      cornerstoneTools.setToolActive(toolName, { mouseButtonMask: 1 });
      alert(`active${toolName}`);
      const element = this.currentElement
      //console.log(element);
      cornerstoneTools[`setToolActive`](toolName, {
        mouseButtonMask: 1
      });
      for (let tool in _this._data.tools) {
        //console.log(tool + "---" + _this._data.tools[tool]);
        if (tool === toolName) {
          _this._data.tools[tool] = "disableButton";
        }
      }
    },
    loadDicom (element, imageIds) {
      var _this = this
    //   cornerstone.enable(element);
      cornerstoneTools.init();
      cornerstone.enable(element);
      cornerstoneTools.setToolActiveForElement(
        element,
        `StackScrollMouseWheelTool`
      );
      // for (var i = 1; i < 362; i++) {
      //   let str = i + "";
      //   imageIds.push(
      //     "wadouri:http://localhost:8080/static/series-000001/image-000" +
      //     str.padStart(3, "0") +
      //     ".dcm"
      //   );
      // }
      const toolName = "StackScrollMouseWheel";
      const stack = {
        currentImageIdIndex: 0,
        imageIds: imageIds
      };
      cornerstone.loadImage(imageIds[_this._data.crruentDicom]).then(
        function (image) {
          cornerstone.displayImage(element, image);
          cornerstone.resize(element);
          cornerstone.resize(element);
          cornerstoneTools.addStackStateManager(element, ["stack"]);
          cornerstoneTools.addToolState(element, "stack", stack);
        },
        function (err) {
          //console.log(err);
        }
      );
      const apiTool = cornerstoneTools[`${toolName}Tool`];
      cornerstoneTools.addTool(apiTool);
      cornerstoneTools.setToolActive(toolName, { mouseButtonMask: 1 });
      cornerstone.resize(element);
      cornerstone.resize(element);
    },

    loadDicom1 (element, imageIds) {
      var _this = this
    //   cornerstone.enable(element);
      cornerstoneTools.init();
      cornerstone.enable(element);
      cornerstoneTools.setToolActiveForElement(
        element,
        `StackScrollMouseWheelTool`
      );
      for (var i = 1; i < 362; i++) {
        let str = i + "";
        imageIds.push(
          `wadouri:${_this.baseUrl}/static/sample/000${str.padStart(3, "0")}.dcm`
        );
      }
      const toolName = "StackScrollMouseWheel";
      const stack = {
        currentImageIdIndex: 0,
        imageIds: imageIds
      };
      cornerstone.loadImage(imageIds[_this._data.crruentDicom]).then(
        function (image) {
          cornerstone.displayImage(element, image);
          cornerstoneTools.addStackStateManager(element, ["stack"]);
          cornerstoneTools.addToolState(element, "stack", stack);
        },
        function (err) {
          //console.log(err);
        }
      );
      const apiTool = cornerstoneTools[`${toolName}Tool`];
      cornerstoneTools.addTool(apiTool);
      cornerstoneTools.setToolActive(toolName, { mouseButtonMask: 1 });
    }
  },
  mounted () {
    const _this = this;
    sessionStorage.currentVTK = 'test.vtk'
    this.element = document.getElementById("dicomImage1");
    var element1 = document.getElementById("canvas1");
    $("#sideBar").height($(window).height());
    $("#rightSideBar").height($(window).height());
    $("#dicomImage1").height($(window).height());
    $("#canvasDiv").height($(window).height());
    var element = _this._data.element;
    cornerstone.enable(element);
    cornerstone.enable(element1);
    this.fillColormapsList()
    cornerstoneTools.init();
    cornerstone.enable(element);
    cornerstoneTools.setToolActiveForElement(
      element,
      `StackScrollMouseWheelTool`
    );
    const imageIds = []
    for (var i = 1; i < 236; i++) {
      let str = i + "";
      _this._data.imageIds.push(
         `wadouri:${_this.baseUrl}/static/sample/000${str.padStart(3, "0")}.dcm`
      );
    }
    this.serial1 = _this._data.imageIds
    // //console.log(imageIds)
    const toolName = "StackScrollMouseWheel";
    const stack = {
      currentImageIdIndex: 0,
      imageIds: _this._data.imageIds
    };
    cornerstone.loadImage(_this._data.imageIds[_this._data.crruentDicom]).then(
      function (image) {
        cornerstone.displayImage(element, image);
        cornerstone.displayImage(element1, image);
        cornerstoneTools.addStackStateManager(element, ["stack"]);
        cornerstoneTools.addToolState(element, "stack", stack);
      },
      function (err) {
        //console.log(err);
      }
    );

    const apiTool = cornerstoneTools[`${toolName}Tool`];
    cornerstoneTools.addTool(apiTool);
    cornerstoneTools.setToolActive(toolName, { mouseButtonMask: 1 });

this.$axios({
  url: 'http://47.115.131.98:888/getLIDCList',
  method: 'get',
}).then((res) => {
  //console.log(res.data.result)
  this.dicomList = res.data.result
})
    // function doResize (width, height) {
    //   if (width < 100) {
    //     width = 100;
    //   }
    //   if (height < 100) {
    //     height = 100;
    //   }

    //   element.style.width = width + "px";
    //   element.style.height = height + "px";
    //   cornerstone.resize(element);
    // }

    // var child = document.getElementById("dicomImage1").childNodes;
    // child[9].style.height = $(window).height();
    // document
    //   .getElementById("resizeKnob")
    //   .addEventListener("mousedown", function (e) {
    //     const initWidth = element.clientWidth;
    //     const initHeight = element.clientHeight;
    //     const startX = e.clientX;
    //     const startY = e.clientY;
    //     function dragResize (e) {
    //       // alert(222)
    //       const x = e.clientX - startX;
    //       const y = e.clientY - startY;
    //       const w = initWidth + x;
    //       const h = initHeight + y;
    //       doResize(w, h);
    //     }
    //     document.addEventListener("mousemove", dragResize);
    //     document.addEventListener("mouseup", function (e) {
    //       // alert(111)
    //       /* eslint-disable */
    //       document.removeEventListener("mouseup", this);
    //       /* eslint-enable */
    //       document.removeEventListener('mousemove', dragResize)
    //     })
    //   })
  }
}
</script>

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
.bg {
  border: 1px solid black;
}
.test-1::-webkit-scrollbar {
  width: 2px;
  height: 1px;
}
.test-1::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: rgb(50.50.50);
}
.test-1::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background: rgb(50.50.50);
}
</style>
