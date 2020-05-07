
<template style="color:rgb(233, 236, 239); background-color:rgb(233, 236, 239)">
  <div style="background-color:rgb(233, 236, 239)">
    <el-row>
      <el-col :span='6' style="color:rgb(233, 236, 239);">
        <div @click="showDrawer"
          style="background-color:white;color:black; height:40px; width:50px;font-size:30px;padding:10px 0 0 0;border-radius:30px;position:relative;left:215px;top:90px"
          class="el-icon-chat-line-round"></div>
        <div
          style="background-color:white;color:black; height:40px; width:50px;font-size:30px;padding:10px 0 0 0;border-radius:30px;position:relative;left:160px;top:20px"
          class="el-icon-star-off"></div>
        <!-- <div style="background-color:white;color:black; height:40px; width:50px;font-size:30px;padding:10px 0 0 0;border-radius:30px"></div> -->
      </el-col>
      <el-col :span='12' style="background-color:white;margin:20px 0 0 0">
        <h1 style="text-align: left; margin:20px; border-bottom:2px solid black;">{{title}}</h1>
        <div id="postDiv" style="overflow-y:scroll;" class="test-1">
          <div style="margin:20px;">
            <mavon-editor v-html="post" :boxShadow='false' />
          </div>
        </div>
      </el-col>
      <el-col :span='6' style="color:rgb(233, 236, 239);">happy</el-col>
    </el-row>
    <el-drawer :visible.sync="drawer" :direction="direction" :before-close="handleClose">
      <!-- <span>我来啦!</span> -->
      <div>
        <div>
          <el-row style="margin:0 20px">
            <el-col :span='18'>
              <el-input v-model="commentContent"></el-input>
            </el-col>
            <el-col :span='6'>
              <el-button style="background-color:rgb(2, 155, 98); color:white;">发送</el-button>
            </el-col>
          </el-row>
          <div id="commentDiv" style="overflow-y:scroll; height:800px; margin:20px;" class="test-1" >
            <div>
              <el-row>
                <el-col :span='3'>
                  <el-avatar shape="square" :size="size" :src="squareUrl"></el-avatar>
                </el-col>
                <el-col :span='21'>
                  <el-row>
                    <el-col :span='6' style="margin:10px 0 0 0; text-align:left;">
                      <div style="">李商隐</div>
                    </el-col>
                    <el-col :span='9' style="color:white">brave</el-col>
                    <el-col :span='9' style="margin:15px 0 0 0;">2020:02:02</el-col>
                  </el-row>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span='3' style="color:white">
                  <!-- <div style="color:">happy</div> -->
                  happy
                </el-col>
                <el-col :span='21' style="padding: 0 50px 0 0; text-align:left;">
                  庆历四年春，滕子京谪守巴陵郡。越明年，政通人和，百废具兴。乃重修岳阳楼，增其旧制，刻唐贤今人诗赋于其上。属予作文以记之。
予观夫巴陵胜状，在洞庭一湖。衔远山，吞长江，浩浩汤汤，横无际涯；朝晖夕阴，气象万千。此则岳阳楼之大观也，前人之述备矣。然则北通巫峡，南极潇湘，迁客骚人，多会于此，览物之情，得无异乎？
                </el-col>
              </el-row>
            </div>
            <div>
              <el-row>
                <el-col :span='3'>
                  <el-avatar shape="square" :size="size" :src="squareUrl"></el-avatar>
                </el-col>
                <el-col :span='21'>
                  <el-row>
                    <el-col :span='6' style="margin:10px 0 0 0; text-align:left;">
                      <div style="">李商隐</div>
                    </el-col>
                    <el-col :span='9' style="color:white">brave</el-col>
                    <el-col :span='9' style="margin:15px 0 0 0;">2020:02:02</el-col>
                  </el-row>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span='3' style="color:white">
                  <!-- <div style="color:">happy</div> -->
                  happy
                </el-col>
                <el-col :span='21' style="padding: 0 50px 0 0; text-align:left;">
                  庆历四年春，滕子京谪守巴陵郡。越明年，政通人和，百废具兴。乃重修岳阳楼，增其旧制，刻唐贤今人诗赋于其上。属予作文以记之。

                  予观夫巴陵胜状，在洞庭一湖。衔远山，吞长江，浩浩汤汤，横无际涯；朝晖夕阴，气象万千。此则岳阳楼之大观也，前人之述备矣。然则北通巫峡，南极潇湘，迁客骚人，多会于此，览物之情，得无异乎？
                </el-col>
              </el-row>
            </div>
            <div>
              <el-row>
                <el-col :span='3'>
                  <el-avatar shape="square" :size="size" :src="squareUrl"></el-avatar>
                </el-col>
                <el-col :span='21'>
                  <el-row>
                    <el-col :span='6' style="margin:10px 0 0 0; text-align:left;">
                      <div style="">李商隐</div>
                    </el-col>
                    <el-col :span='9' style="color:white">brave</el-col>
                    <el-col :span='9' style="margin:15px 0 0 0;">2020:02:02</el-col>
                  </el-row>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span='3' style="color:white">
                  <!-- <div style="color:">happy</div> -->
                  happy
                </el-col>
                <el-col :span='21' style="padding: 0 50px 0 0; text-align:left;">
                  庆历四年春，滕子京谪守巴陵郡。越明年，政通人和，百废具兴。乃重修岳阳楼，增其旧制，刻唐贤今人诗赋于其上。属予作文以记之。

                  予观夫巴陵胜状，在洞庭一湖。衔远山，吞长江，浩浩汤汤，横无际涯；朝晖夕阴，气象万千。此则岳阳楼之大观也，前人之述备矣。然则北通巫峡，南极潇湘，迁客骚人，多会于此，览物之情，得无异乎？
                </el-col>
              </el-row>
            </div>
            <div>
              <el-row>
                <el-col :span='3'>
                  <el-avatar shape="square" :size="size" :src="squareUrl"></el-avatar>
                </el-col>
                <el-col :span='21'>
                  <el-row>
                    <el-col :span='6' style="margin:10px 0 0 0; text-align:left;">
                      <div style="">李商隐</div>
                    </el-col>
                    <el-col :span='9' style="color:white">brave</el-col>
                    <el-col :span='9' style="margin:15px 0 0 0;">2020:02:02</el-col>
                  </el-row>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span='3' style="color:white">
                  <!-- <div style="color:">happy</div> -->
                  happy
                </el-col>
                <el-col :span='21' style="padding: 0 50px 0 0; text-align:left;">
                  庆历四年春，滕子京谪守巴陵郡。越明年，政通人和，百废具兴。乃重修岳阳楼，增其旧制，刻唐贤今人诗赋于其上。属予作文以记之。

                  予观夫巴陵胜状，在洞庭一湖。衔远山，吞长江，浩浩汤汤，横无际涯；朝晖夕阴，气象万千。此则岳阳楼之大观也，前人之述备矣。然则北通巫峡，南极潇湘，迁客骚人，多会于此，览物之情，得无异乎？
                </el-col>
              </el-row>
            </div>
            <div>
              <el-row>
                <el-col :span='3'>
                  <el-avatar shape="square" :size="size" :src="squareUrl"></el-avatar>
                </el-col>
                <el-col :span='21'>
                  <el-row>
                    <el-col :span='6' style="margin:10px 0 0 0; text-align:left;">
                      <div style="">李商隐</div>
                    </el-col>
                    <el-col :span='9' style="color:white">brave</el-col>
                    <el-col :span='9' style="margin:15px 0 0 0;">2020:02:02</el-col>
                  </el-row>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span='3' style="color:white">
                  <!-- <div style="color:">happy</div> -->
                  happy
                </el-col>
                <el-col :span='21' style="padding: 0 50px 0 0; text-align:left;">
                  庆历四年春，滕子京谪守巴陵郡。越明年，政通人和，百废具兴。乃重修岳阳楼，增其旧制，刻唐贤今人诗赋于其上。属予作文以记之。

                  予观夫巴陵胜状，在洞庭一湖。衔远山，吞长江，浩浩汤汤，横无际涯；朝晖夕阴，气象万千。此则岳阳楼之大观也，前人之述备矣。然则北通巫峡，南极潇湘，迁客骚人，多会于此，览物之情，得无异乎？
                </el-col>
              </el-row>
            </div>
            <div>
              <el-row>
                <el-col :span='3'>
                  <el-avatar shape="square" :size="size" :src="squareUrl"></el-avatar>
                </el-col>
                <el-col :span='21'>
                  <el-row>
                    <el-col :span='6' style="margin:10px 0 0 0; text-align:left;">
                      <div style="">李商隐</div>
                    </el-col>
                    <el-col :span='9' style="color:white">brave</el-col>
                    <el-col :span='9' style="margin:15px 0 0 0;">2020:02:02</el-col>
                  </el-row>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span='3' style="color:white">
                  <!-- <div style="color:">happy</div> -->
                  happy
                </el-col>
                <el-col :span='21' style="padding: 0 50px 0 0; text-align:left;">
                  庆历四年春，滕子京谪守巴陵郡。越明年，政通人和，百废具兴。乃重修岳阳楼，增其旧制，刻唐贤今人诗赋于其上。属予作文以记之。

                  予观夫巴陵胜状，在洞庭一湖。衔远山，吞长江，浩浩汤汤，横无际涯；朝晖夕阴，气象万千。此则岳阳楼之大观也，前人之述备矣。然则北通巫峡，南极潇湘，迁客骚人，多会于此，览物之情，得无异乎？
                </el-col>
              </el-row>
            </div>
            <div>
              <el-row>
                <el-col :span='3'>
                  <el-avatar shape="square" :size="size" :src="squareUrl"></el-avatar>
                </el-col>
                <el-col :span='21'>
                  <el-row>
                    <el-col :span='6' style="margin:10px 0 0 0; text-align:left;">
                      <div style="">李商隐</div>
                    </el-col>
                    <el-col :span='9' style="color:white">brave</el-col>
                    <el-col :span='9' style="margin:15px 0 0 0;">2020:02:02</el-col>
                  </el-row>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span='3' style="color:white">
                  <!-- <div style="color:">happy</div> -->
                  happy
                </el-col>
                <el-col :span='21' style="padding: 0 50px 0 0; text-align:left;">
                  庆历四年春，滕子京谪守巴陵郡。越明年，政通人和，百废具兴。乃重修岳阳楼，增其旧制，刻唐贤今人诗赋于其上。属予作文以记之。

                  予观夫巴陵胜状，在洞庭一湖。衔远山，吞长江，浩浩汤汤，横无际涯；朝晖夕阴，气象万千。此则岳阳楼之大观也，前人之述备矣。然则北通巫峡，南极潇湘，迁客骚人，多会于此，览物之情，得无异乎？
                </el-col>
              </el-row>
            </div>
            <div>
              <el-row>
                <el-col :span='3'>
                  <el-avatar shape="square" :size="size" :src="squareUrl"></el-avatar>
                </el-col>
                <el-col :span='21'>
                  <el-row>
                    <el-col :span='6' style="margin:10px 0 0 0; text-align:left;">
                      <div style="">李商隐</div>
                    </el-col>
                    <el-col :span='9' style="color:white">brave</el-col>
                    <el-col :span='9' style="margin:15px 0 0 0;">2020:02:02</el-col>
                  </el-row>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span='3' style="color:white">
                  <!-- <div style="color:">happy</div> -->
                  happy
                </el-col>
                <el-col :span='21' style="padding: 0 50px 0 0; text-align:left;">
                  庆历四年春，滕子京谪守巴陵郡。越明年，政通人和，百废具兴。乃重修岳阳楼，增其旧制，刻唐贤今人诗赋于其上。属予作文以记之。

                  予观夫巴陵胜状，在洞庭一湖。衔远山，吞长江，浩浩汤汤，横无际涯；朝晖夕阴，气象万千。此则岳阳楼之大观也，前人之述备矣。然则北通巫峡，南极潇湘，迁客骚人，多会于此，览物之情，得无异乎？
                </el-col>
              </el-row>
            </div>
          </div>
        </div>
      </div>

    </el-drawer>
  </div>

</template>

<script>
import $ from 'jquery'
export default {
  name: 'showPost',
  data () {
    return {
      squareUrl: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
      drawer: false,
      direction: 'rtl',
      commentContent: '',
      post: '',
      title: ''
    }
  },
  methods: {
    showDrawer () {
      this.drawer = true
      // $('#postDiv').height($(window).height() - $('#meun').height() - 100)
    },
    handleClose (done) {
      // this.$confirm('确认关闭？')
      //   .then(_ => {
      done()
      //   })
      //   .catch(_ => {})
    },
    getPost () {
      this.$axios({
        method: 'post',
        url: 'http://47.115.131.98:39002/getPost',
        data: {
          postId: sessionStorage.postId
        }
      }).then((response) => {
        console.log(response.data)
        sessionStorage.post = response.data.post[0].postValue
        this.post = response.data.post[0].postValue
        this.title = response.data.post[0].postTitle
      })
      //   return sessionStorage.post
    }
  },
  mounted () {
    this.getPost()
    $('#postDiv').height($(window).height() - $('#meun').height() - 100)
    // $('#commentDiv').height($(window).height() - $('#meun').height() - 900)
    // this.$axios({
    //   method: 'post',
    //   url: 'http://47.115.131.98:39002/getPost',
    //   data: {
    //     userId: sessionStorage.userId
    //   }
    // }).then(function (response) {
    //   console.log(response.data)
    //   this.post = response.data.post[0].postValue
    //   // sessionStorage.userId = response.data.userId
    //   // router.push({ path: '/personalPage' })
    //   // console.log(sessionStorage.userId)
    // })
  }
}
</script>

<style scoped>
/* @import "../assets/iconfont/iconfont.css"; */
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
  background: rgb(143, 142, 252);
}
.test-1::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background: #ededed;
}
</style>
