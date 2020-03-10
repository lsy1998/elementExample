<template>
  <div class="container">
    <el-row>
      <el-col :span="3">
        <div style="height:400px;display:inline-block; background-color:white;width:100%;">
          <el-collapse style="width:90%;margin:0 0 0 20px;height:100%;">
            <el-collapse-item title="注释" name="1">
              <el-button class="icon icon-dodo-angle" @click="activeButton('Angle')"></el-button>
              <el-button class="icon icon-dodo-pin" @click="activeButton('ArrowAnnotate')"></el-button>
              <!-- <el-button class="icon icon-dodo-snap" @click="activeButton('Bidirectional')">双向的</el-button> -->
              <!-- <el-button class="icon icon-dodo-snap" @click="activeButton('CircleScissors')">圆圈</el-button> -->
              <el-button class="icon icon-dodo-cobb" @click="activeButton('CobbAngle')"></el-button>
              <el-button
                class="icon icon-dodo-elliptic-anno"
                @click="activeButton('EllipticalRoi')"
              ></el-button>
              <el-button class="icon icon-dodo-redo" @click="activeButton('Eraser')"></el-button>
              <el-button class="icon icon-dodo-pen-draw" @click="activeButton('FreehandRoi')"></el-button>
              <!-- <el-button class="icon icon-dodo-snap" @click="activeButton('FreehandScissors')">手摇雕刻家</el-button> -->
              <!-- <el-button class="icon icon-dodo-snap" @click="activeButton('TextMarker')">文本标记</el-button> -->
              <el-button class="icon icon-dodo-linetool" @click="activeButton('Length')"></el-button>
              <!-- <el-button class="icon icon-dodo-snap" @click="activeButton('Probe')">探查</el-button> -->
              <el-button class="icon icon-dodo-rect-anno" @click="activeButton('RectangleRoi')"></el-button>
            </el-collapse-item>
            <el-collapse-item title="分割" name="2">
              <el-button @click="activeButton('Brush')">刷子工具</el-button>
              <el-button @click="activeButton('SphericalBrushTool')">球形刷子工具</el-button>
              <el-button @click="activeButton('FreehandScissors')">徒手裁剪</el-button>
              <el-button @click="activeButton('RectangleScissors')">矩形裁剪</el-button>
              <el-button @click="activeButton('CircleScissors')">圆形裁剪</el-button>
              <el-button @click="activeButton('CorrectionScissors')">矫正裁剪</el-button>
            </el-collapse-item>
            <el-collapse-item title="阻力" name="3">
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
            <el-collapse-item title="多点触控/夹持（仅限触控）" name="4">
              <el-button @click="activeButton('PanMultiTouch')">多点触控</el-button>
              <el-button @click="activeButton('ZoomTouchPinch')">变焦夹点</el-button>
              <el-button @click="activeButton('RotateTouch')">旋转触碰</el-button>
              <el-button @click="activeButton('StackScroll')">多点触摸</el-button>
            </el-collapse-item>
            <el-collapse-item title="鼠标滚轮" name="5">
              <el-button @click="activeButton('StackScrollMouseWheel')">堆栈滚动鼠标滚轮</el-button>
              <el-button @click="activeButton('ZoomMouseWheel')">变焦滚轮</el-button>
            </el-collapse-item>
            <el-collapse-item title="双重抽头" name="6">
              <el-button @click="activeButton('DoubleTapFitToWindow')">双击适应窗口</el-button>
            </el-collapse-item>
            <el-collapse-item title="覆盖" name="7">
              <el-button @click="activeButton('ScaleOverlay')">缩放覆盖</el-button>
              <el-button @click="activeButton('Overlay')">覆盖</el-button>
            </el-collapse-item>
          </el-collapse>

          <div>
<el-row style="background-color:rgb(50, 50, 50);border-top:1px solid rgb(128, 128, 128);">
            <el-col :span="4">
              <div style="width:90%;height:60px;display:inline-block;background-color:rgb(50, 50, 50);margin:2px 2px;border:1px solid rgb(37, 37, 37);border-radius:3px;"  @click="activeButton('Angle')" >
                <div class="icon icon-dodo-angle" style="color:rgb(192, 192, 192);margin:10px 0 10px 0;"></div>
                <label style="color:rgb(192, 192, 192);margin:10px 0 0 0;font-size:12px;">角度</label>
              </div>
            </el-col>

            <el-col :span="4">
              <div style="width:90%;height:60px;display:inline-block;background-color:rgb(50, 50, 50);margin:2px 2px;border:1px solid rgb(37, 37, 37);border-radius:3px;"  @click="activeButton('Angle')" >
                <div class="icon icon-dodo-angle" style="color:rgb(192, 192, 192);margin:10px 0 10px 0;"></div>
                <label style="color:rgb(192, 192, 192);margin:10px 0 0 0;font-size:12px;">角度</label>
              </div>
            </el-col>

           <el-col :span="4">
              <div style="width:90%;height:60px;display:inline-block;background-color:rgb(50, 50, 50);margin:2px 2px;border:1px solid rgb(37, 37, 37);border-radius:3px;"  @click="activeButton('Angle')" >
                <div class="icon icon-dodo-angle" style="color:rgb(192, 192, 192);margin:10px 0 10px 0;"></div>
                <label style="color:rgb(192, 192, 192);margin:10px 0 0 0;font-size:12px;">角度</label>
              </div>
            </el-col>

           <el-col :span="4">
              <div style="width:90%;height:60px;display:inline-block;background-color:rgb(50, 50, 50);margin:2px 2px;border:1px solid rgb(37, 37, 37);border-radius:3px;"  @click="activeButton('Angle')" >
                <div class="icon icon-dodo-angle" style="color:rgb(192, 192, 192);margin:10px 0 10px 0;"></div>
                <label style="color:rgb(192, 192, 192);margin:10px 0 0 0;font-size:12px;">角度</label>
              </div>
            </el-col>

           <el-col :span="4">
              <div style="width:90%;height:60px;display:inline-block;background-color:rgb(50, 50, 50);margin:2px 2px;border:1px solid rgb(37, 37, 37);border-radius:3px;"  @click="activeButton('Angle')" >
                <div class="icon icon-dodo-angle" style="color:rgb(192, 192, 192);margin:10px 0 10px 0;"></div>
                <label style="color:rgb(192, 192, 192);margin:10px 0 0 0;font-size:12px;">角度</label>
              </div>
            </el-col>

            <el-col :span="4">
              <div style="width:90%;height:60px;display:inline-block;background-color:rgb(50, 50, 50);margin:2px 2px;border:1px solid rgb(37, 37, 37);border-radius:3px;"  @click="activeButton('Angle')" >
                <div class="icon icon-dodo-angle" style="color:rgb(192, 192, 192);margin:10px 0 10px 0;"></div>
                <label style="color:rgb(192, 192, 192);margin:10px 0 0 0;font-size:12px;">角度</label>
              </div>
            </el-col>
</el-row>
<el-row style="background-color:rgb(50, 50, 50);border-buttom:1px solid rgb(128, 128, 128);">
            <el-col :span="4">
              <div style="width:90%;height:60px;display:inline-block;background-color:rgb(50, 50, 50);margin:2px 2px;border:1px solid rgb(37, 37, 37);border-radius:3px;"  @click="activeButton('Angle')" >
                <div class="icon icon-dodo-angle" style="color:rgb(192, 192, 192);margin:10px 0 10px 0;"></div>
                <label style="color:rgb(192, 192, 192);margin:10px 0 0 0;font-size:12px;">角度</label>
              </div>
            </el-col>

            <el-col :span="4">
              <div style="width:90%;height:60px;display:inline-block;background-color:rgb(50, 50, 50);margin:2px 2px;border:1px solid rgb(37, 37, 37);border-radius:3px;"  @click="activeButton('Angle')" >
                <div class="icon icon-dodo-angle" style="color:rgb(192, 192, 192);margin:10px 0 10px 0;"></div>
                <label style="color:rgb(192, 192, 192);margin:10px 0 0 0;font-size:12px;">角度</label>
              </div>
            </el-col>

           <el-col :span="4">
              <div style="width:90%;height:60px;display:inline-block;background-color:rgb(50, 50, 50);margin:2px 2px;border:1px solid rgb(37, 37, 37);border-radius:3px;"  @click="activeButton('Angle')" >
                <div class="icon icon-dodo-angle" style="color:rgb(192, 192, 192);margin:10px 0 10px 0;"></div>
                <label style="color:rgb(192, 192, 192);margin:10px 0 0 0;font-size:12px;">角度</label>
              </div>
            </el-col>

           <el-col :span="4">
              <div style="width:90%;height:60px;display:inline-block;background-color:rgb(50, 50, 50);margin:2px 2px;border:1px solid rgb(37, 37, 37);border-radius:3px;"  @click="activeButton('Angle')" >
                <div class="icon icon-dodo-angle" style="color:rgb(192, 192, 192);margin:10px 0 10px 0;"></div>
                <label style="color:rgb(192, 192, 192);margin:10px 0 0 0;font-size:12px;">角度</label>
              </div>
            </el-col>

           <el-col :span="4">
              <div style="width:90%;height:60px;display:inline-block;background-color:rgb(50, 50, 50);margin:2px 2px;border:1px solid rgb(37, 37, 37);border-radius:3px;"  @click="activeButton('Angle')" >
                <div class="icon icon-dodo-angle" style="color:rgb(192, 192, 192);margin:10px 0 10px 0;"></div>
                <label style="color:rgb(192, 192, 192);margin:10px 0 0 0;font-size:12px;">角度</label>
              </div>
            </el-col>

            <el-col :span="4">
              <div style="width:90%;height:60px;display:inline-block;background-color:rgb(50, 50, 50);margin:2px 2px;border:1px solid rgb(37, 37, 37);border-radius:3px;"  @click="activeButton('Angle')" >
                <div class="icon icon-dodo-angle" style="color:rgb(192, 192, 192);margin:10px 0 10px 0;"></div>
                <label style="color:rgb(192, 192, 192);margin:10px 0 0 0;font-size:12px;">角度</label>
              </div>
            </el-col>
</el-row>
<el-row style="background-color:rgb(50, 50, 50);border-top:1px solid rgb(128, 128, 128);">
            <el-col :span="4">
              <div style="width:90%;height:40px;display:inline-block;background-color:rgb(50, 50, 50);margin:2px 2px;border:1px solid rgb(37, 37, 37);border-radius:3px;"  @click="reduceSpeed" >
                <div class="icon icon-uniE069" style="color:rgb(192, 192, 192);margin:10px 0 10px 0;"></div>
              </div>
            </el-col>
            <el-col :span="4">
              <div style="width:90%;height:40px;display:inline-block;background-color:rgb(50, 50, 50);margin:2px 2px;border:1px solid rgb(37, 37, 37);border-radius:3px;"  @click="playDicom" >
                <div id="play" class="icon icon-uniE072" style="color:rgb(192, 192, 192);margin:10px 0 10px 0;"></div>
              </div>
            </el-col>
            <el-col :span="4">
              <div style="width:90%;height:40px;display:inline-block;background-color:rgb(50, 50, 50);margin:2px 2px;border:1px solid rgb(37, 37, 37);border-radius:3px;"  @click="addSpeed" >
                <div class="icon icon-uniE077" style="color:rgb(192, 192, 192);margin:10px 0 10px 0;"></div>
              </div>
            </el-col>
            <el-col :span="12">
              <div style="width:90%;height:40px;display:inline-block;background-color:rgb(50, 50, 50);margin:2px 2px;border:1px solid rgb(37, 37, 37);border-radius:3px;"  @click="activeButton('Angle')" >
                <div style="color:rgb(192, 192, 192);margin:10px 0 10px 0;display:inline-block;margin:0 0px 0 0">倍速</div>
                <p style="display:inline-block;color:rgb(50, 50, 50);background-color:rgb(192, 192, 192);width:50%;">{{2-speed}}</p>
              </div>
            </el-col>
</el-row>
<el-row style="background-color:rgb(50, 50, 50);border-top:1px solid rgb(128, 128, 128);">
            <el-col :span="4">
              <div style="width:90%;height:60px;display:inline-block;background-color:rgb(50, 50, 50);margin:2px 2px;border:1px solid rgb(37, 37, 37);border-radius:3px;"  @click="activeButton('Angle')" >
                <div class="icon icon-dodo-angle" style="color:rgb(192, 192, 192);margin:10px 0 10px 0;"></div>
                <label style="color:rgb(192, 192, 192);margin:10px 0 0 0;font-size:12px;">角度</label>
              </div>
            </el-col>

            <el-col :span="4">
              <div style="width:90%;height:60px;display:inline-block;background-color:rgb(50, 50, 50);margin:2px 2px;border:1px solid rgb(37, 37, 37);border-radius:3px;"  @click="activeButton('Angle')" >
                <div class="icon icon-dodo-angle" style="color:rgb(192, 192, 192);margin:10px 0 10px 0;"></div>
                <label style="color:rgb(192, 192, 192);margin:10px 0 0 0;font-size:12px;">角度</label>
              </div>
            </el-col>

           <el-col :span="4">
              <div style="width:90%;height:60px;display:inline-block;background-color:rgb(50, 50, 50);margin:2px 2px;border:1px solid rgb(37, 37, 37);border-radius:3px;"  @click="activeButton('Angle')" >
                <div class="icon icon-dodo-angle" style="color:rgb(192, 192, 192);margin:10px 0 10px 0;"></div>
                <label style="color:rgb(192, 192, 192);margin:10px 0 0 0;font-size:12px;">角度</label>
              </div>
            </el-col>

           <el-col :span="4">
              <div style="width:90%;height:60px;display:inline-block;background-color:rgb(50, 50, 50);margin:2px 2px;border:1px solid rgb(37, 37, 37);border-radius:3px;"  @click="activeButton('Angle')" >
                <div class="icon icon-dodo-angle" style="color:rgb(192, 192, 192);margin:10px 0 10px 0;"></div>
                <label style="color:rgb(192, 192, 192);margin:10px 0 0 0;font-size:12px;">角度</label>
              </div>
            </el-col>

           <el-col :span="4">
              <div style="width:90%;height:60px;display:inline-block;background-color:rgb(50, 50, 50);margin:2px 2px;border:1px solid rgb(37, 37, 37);border-radius:3px;"  @click="activeButton('Angle')" >
                <div class="icon icon-dodo-angle" style="color:rgb(192, 192, 192);margin:10px 0 10px 0;"></div>
                <label style="color:rgb(192, 192, 192);margin:10px 0 0 0;font-size:12px;">角度</label>
              </div>
            </el-col>

            <el-col :span="4">
              <div style="width:90%;height:60px;display:inline-block;background-color:rgb(50, 50, 50);margin:2px 2px;border:1px solid rgb(37, 37, 37);border-radius:3px;"  @click="activeButton('Angle')" >
                <div class="icon icon-dodo-angle" style="color:rgb(192, 192, 192);margin:10px 0 10px 0;"></div>
                <label style="color:rgb(192, 192, 192);margin:10px 0 0 0;font-size:12px;">角度</label>
              </div>
            </el-col>
</el-row>
<el-row style="background-color:rgb(50, 50, 50);border-buttom:1px solid rgb(128, 128, 128);">
            <el-col :span="4">
              <div style="width:90%;height:60px;display:inline-block;background-color:rgb(50, 50, 50);margin:2px 2px;border:1px solid rgb(37, 37, 37);border-radius:3px;"  @click="activeButton('Angle')" >
                <div class="icon icon-dodo-angle" style="color:rgb(192, 192, 192);margin:10px 0 10px 0;"></div>
                <label style="color:rgb(192, 192, 192);margin:10px 0 0 0;font-size:12px;">角度</label>
              </div>
            </el-col>

            <el-col :span="4">
              <div style="width:90%;height:60px;display:inline-block;background-color:rgb(50, 50, 50);margin:2px 2px;border:1px solid rgb(37, 37, 37);border-radius:3px;"  @click="activeButton('Angle')" >
                <div class="icon icon-dodo-angle" style="color:rgb(192, 192, 192);margin:10px 0 10px 0;"></div>
                <label style="color:rgb(192, 192, 192);margin:10px 0 0 0;font-size:12px;">角度</label>
              </div>
            </el-col>

           <el-col :span="4">
              <div style="width:90%;height:60px;display:inline-block;background-color:rgb(50, 50, 50);margin:2px 2px;border:1px solid rgb(37, 37, 37);border-radius:3px;"  @click="activeButton('Angle')" >
                <div class="icon icon-dodo-angle" style="color:rgb(192, 192, 192);margin:10px 0 10px 0;"></div>
                <label style="color:rgb(192, 192, 192);margin:10px 0 0 0;font-size:12px;">角度</label>
              </div>
            </el-col>

           <el-col :span="4">
              <div style="width:90%;height:60px;display:inline-block;background-color:rgb(50, 50, 50);margin:2px 2px;border:1px solid rgb(37, 37, 37);border-radius:3px;"  @click="activeButton('Angle')" >
                <div class="icon icon-dodo-angle" style="color:rgb(192, 192, 192);margin:10px 0 10px 0;"></div>
                <label style="color:rgb(192, 192, 192);margin:10px 0 0 0;font-size:12px;">角度</label>
              </div>
            </el-col>

           <el-col :span="4">
              <div style="width:90%;height:60px;display:inline-block;background-color:rgb(50, 50, 50);margin:2px 2px;border:1px solid rgb(37, 37, 37);border-radius:3px;"  @click="activeButton('Angle')" >
                <div class="icon icon-dodo-angle" style="color:rgb(192, 192, 192);margin:10px 0 10px 0;"></div>
                <label style="color:rgb(192, 192, 192);margin:10px 0 0 0;font-size:12px;">角度</label>
              </div>
            </el-col>

            <el-col :span="4">
              <div style="width:90%;height:60px;display:inline-block;background-color:rgb(50, 50, 50);margin:2px 2px;border:1px solid rgb(37, 37, 37);border-radius:3px;"  @click="activeButton('Angle')" >
                <div class="icon icon-dodo-angle" style="color:rgb(192, 192, 192);margin:10px 0 10px 0;"></div>
                <label style="color:rgb(192, 192, 192);margin:10px 0 0 0;font-size:12px;">角度</label>
              </div>
            </el-col>
</el-row>
          </div>

          <!-- <div class="enterURL">
            <input type="text" id="wadoURL" style="width: 35%;" placeholder="Enter WADO URL" value="http://localhost:8080/static/series-000001/image-000001.dcm"/>
            <el-button type="button" id="downloadAndView">加载Dicom</el-button>
          </div>
          <div id="loadProgress" style="position:relative;left:-15%">Dicom加载:</div> -->

        </div>
      </el-col>

      <el-col :span="18">
        <div style="position:relative;width:100%">
          <div id="resizeKnob" style="position:absolute;right:-5px;bottom:-5px;width:20px;height:20px;background:red;cursor:se-resize"></div>
          <div id="dicomImage" style="width:100%;height:900px" oncontextmenu="return false" onmousedown="return false"></div>
        </div>
      </el-col>
<el-col :span="3">
        <div style="overflow-y:scroll;height:900px;">
          <div style="margin:10px 0 0 0;">
            <div>序列1</div>
            <div id="canvas" style="background-color:blue;width:90%;height:100px;margin:0 0 0 10px"></div>
          </div>
          <div style="margin:10px 0 0 0;">
            <div>序列1</div>
            <div id="canvas" style="background-color:blue;width:90%;height:100px;margin:0 0 0 10px"></div>
          </div>
          <div style="margin:10px 0 0 0;">
            <div>序列1</div>
            <div id="canvas" style="background-color:blue;width:90%;height:100px;margin:0 0 0 10px"></div>
          </div>
           <div style="margin:10px 0 0 0;">
            <div>序列1</div>
            <div id="canvas" style="background-color:blue;width:90%;height:100px;margin:0 0 0 10px"></div>
          </div>
          <div style="margin:10px 0 0 0;">
            <div>序列1</div>
            <div id="canvas" style="background-color:blue;width:90%;height:100px;margin:0 0 0 10px"></div>
          </div>
          <div style="margin:10px 0 0 0;">
            <div>序列1</div>
            <div id="canvas" style="background-color:blue;width:90%;height:100px;margin:0 0 0 10px"></div>
          </div>
           <div style="margin:10px 0 0 0;">
            <div>序列1</div>
            <div id="canvas" style="background-color:blue;width:90%;height:100px;margin:0 0 0 10px"></div>
          </div>
          <div style="margin:10px 0 0 0;">
            <div>序列1</div>
            <div id="canvas" style="background-color:blue;width:90%;height:100px;margin:0 0 0 10px"></div>
          </div>
          <div style="margin:10px 0 0 0;">
            <div>序列1</div>
            <div id="canvas" style="background-color:blue;width:90%;height:100px;margin:0 0 0 10px"></div>
          </div>
           <div style="margin:10px 0 0 0;">
            <div>序列1</div>
            <div id="canvas" style="background-color:blue;width:90%;height:100px;margin:0 0 0 10px"></div>
          </div>
          <div style="margin:10px 0 0 0;">
            <div>序列1</div>
            <div id="canvas" style="background-color:blue;width:90%;height:100px;margin:0 0 0 10px"></div>
          </div>
          <div style="margin:10px 0 0 0;">
            <div>序列1</div>
            <div id="canvas" style="background-color:blue;width:90%;height:100px;margin:0 0 0 10px"></div>
          </div>
           <div style="margin:10px 0 0 0;">
            <div>序列1</div>
            <div id="canvas" style="background-color:blue;width:90%;height:100px;margin:0 0 0 10px"></div>
          </div>
          <div style="margin:10px 0 0 0;">
            <div>序列1</div>
            <div id="canvas" style="background-color:blue;width:90%;height:100px;margin:0 0 0 10px"></div>
          </div>
          <div style="margin:10px 0 0 0;">
            <div>序列1</div>
            <div id="canvas" style="background-color:blue;width:90%;height:100px;margin:0 0 0 10px"></div>
          </div>
           <div style="margin:10px 0 0 0;">
            <div>序列1</div>
            <div id="canvas" style="background-color:blue;width:90%;height:100px;margin:0 0 0 10px"></div>
          </div>
          <div style="margin:10px 0 0 0;">
            <div>序列1</div>
            <div id="canvas" style="background-color:blue;width:90%;height:100px;margin:0 0 0 10px"></div>
          </div>
          <div style="margin:10px 0 0 0;">
            <div>序列1</div>
            <div id="canvas" style="background-color:blue;width:90%;height:100px;margin:0 0 0 10px"></div>
          </div>
           <div style="margin:10px 0 0 0;">
            <div>序列1</div>
            <div id="canvas" style="background-color:blue;width:90%;height:100px;margin:0 0 0 10px"></div>
          </div>
          <div style="margin:10px 0 0 0;">
            <div>序列1</div>
            <div id="canvas" style="background-color:blue;width:90%;height:100px;margin:0 0 0 10px"></div>
          </div>
          <div style="margin:10px 0 0 0;">
            <div>序列1</div>
            <div id="canvas" style="background-color:blue;width:90%;height:100px;margin:0 0 0 10px"></div>
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
        cornerstone.loadImage(_this._data.imageIds[_this._data.crruentDicom]).then(
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
    resize (newRect) {
      console.log(newRect)
      var i = document.getElementById('dicomImage').childNodes
      i[9].style.height = newRect.height + 'px'
      i[9].style.width = newRect.width + 'px'
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },

    activeButton (toolName) {
      const _this = this
      console.log(_this._data.tools.ArrowAnnotate)
      const tool = cornerstoneTools[`${toolName}Tool`]
      cornerstoneTools.addTool(tool)
      cornerstoneTools.setToolActive(toolName, { mouseButtonMask: 1 })
      alert(`active${toolName}`)
      const element = document.getElementById('dicomImage')
      console.log(element)
      cornerstoneTools[`setToolActive`](toolName, {
        mouseButtonMask: 1
      })
      for (let tool in _this._data.tools) {
        console.log(tool + '---' + _this._data.tools[tool])
        if (tool === toolName) {
          _this._data.tools[tool] = 'disableButton'
        }
      }
    }
  },
  mounted () {
    const _this = this
    _this._data.element = document.getElementById('dicomImage')
    var element = _this._data.element
    cornerstone.enable(element)
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
    cornerstoneTools.init()
    cornerstone.enable(element)
    cornerstoneTools.setToolActiveForElement(
      element,
      `StackScrollMouseWheelTool`
    )
    // const imageIds = []
    for (var i = 1; i < 362; i++) {
      let str = i + ''
      _this._data.imageIds.push(
        'wadouri:http://localhost:8081/static/series-000001/image-000' +
          str.padStart(3, '0') +
          '.dcm'
      )
    }
    // console.log(imageIds)
    const toolName = 'StackScrollMouseWheel'
    const stack = {
      currentImageIdIndex: 0,
      imageIds: _this._data.imageIds
    }

    cornerstone.loadImage(_this._data.imageIds[_this._data.crruentDicom]).then(
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

    function doResize (width, height) {
      if (width < 100) {
        width = 100
      }
      if (height < 100) {
        height = 100
      }

      element.style.width = width + 'px'
      element.style.height = height + 'px'
      cornerstone.resize(element)
    }

    // function getRandomFloat (min, max) {
    //   return Math.random() * (max - min) + min
    // }

    document
      .getElementById('resizeKnob')
      .addEventListener('mousedown', function (e) {
        const initWidth = element.clientWidth
        const initHeight = element.clientHeight
        const startX = e.clientX
        const startY = e.clientY
        function dragResize (e) {
          // alert(222)
          const x = e.clientX - startX
          const y = e.clientY - startY
          const w = initWidth + x
          const h = initHeight + y
          doResize(w, h)
        }
        document.addEventListener('mousemove', dragResize)
        document.addEventListener('mouseup', function (e) {
          // alert(111)
          /* eslint-disable */
          document.removeEventListener("mouseup", this);
          /* eslint-enable */
          document.removeEventListener('mousemove', dragResize)
        })
      })
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
