
<template style="color:rgb(233, 236, 239); background-color:rgb(233, 236, 239)">
  <div style="background-color:rgb(233, 236, 239)">
    <el-row>
      <el-col :span='6' style="color:rgb(233, 236, 239);">
        <div @click="showDrawer"
          style="background-color:white;color:black; height:40px; width:50px;font-size:30px;padding:10px 0 0 0;border-radius:30px;position:relative;left:215px;top:90px"
          class="el-icon-chat-line-round"></div>
        <div @click="addSupport" id="support" data-support='false'
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
          <el-row style="margin:0 20px;position:relative;left:13px;">
            <!-- <el-col :span='4'>
              <el-avatar shape="square" :src="comment.headPic"></el-avatar>
            </el-col> -->
            <el-col :span='2' style="margin:0 10px 0 0">
               <el-avatar shape="square" :src="this.$store.state.headPicUrl"></el-avatar>
            </el-col>
            <el-col :span='17'>
              <el-input type="text" size='140' v-model="commentContent" placeholder="快来评论一下吧！"></el-input>
            </el-col>
            <el-col :span='4'>
              <el-button @click="addComment" style="background-color:rgb(2, 155, 98); color:white;">发送</el-button>
            </el-col>
          </el-row>
          <div id="commentDiv" style="overflow-y:scroll; height:800px; margin:20px;" class="test-1">
            <div v-for="comment in comments" :key='comment' style="margin:10px 0 0 0">
              <el-row>
                <el-col :span='3'>
                  <el-avatar shape="square" :src="comment.headPic"></el-avatar>
                </el-col>
                <el-col :span='21'>
                  <el-row>
                    <el-col :span='6' style="margin:10px 0 0 0; text-align:left; font-size:14px;">
                      <div style="">{{comment.userName}}</div>
                    </el-col>
                    <el-col :span='9' style="color:white">brave</el-col>
                    <el-col :span='9' style="margin:15px 0 0 0; font-size:14px;"></el-col>
                  </el-row>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span='3' style="color:white">
                  <!-- <div style="color:">happy</div> -->
                  happy
                </el-col>
                <el-col :span='21'
                  style="padding: 0 50px 0 0; text-align:left; background-color:rgb(248, 249, 250); padding: 10px 10px;font-size:14px;">
                  {{comment.replyContent}}
                </el-col>
                <el-row>
                  <el-col :span='3' style="color:white">brave</el-col>
                  <el-col :span='21'>
                    <el-row style="margin:10px 0 10px 0">
                    <el-col :span='3'>
                      <div @click="replyCommentDiv($event)">
                        <div class="el-icon-chat-line-round" style="font-size:16px;display:inline-block"></div>
                        <div style="display:inline-block;font-size:12px">回复</div>
                      </div>
                    </el-col>
                    <el-col :span='15' style="color:white">brave</el-col>
                    <el-col :span='6' style="font-size:12px;padding:5px 0 0 0;">{{comment.replyDate}}</el-col>
                  </el-row>
                  <el-row id="replyCommentBox" style="margin:10px 0 0 0" v-show="replyComment">
                    <el-col :span='2'>
                      <el-avatar :size='25' shape="square" :src="headPic"></el-avatar>
                    </el-col>
                    <el-col :span='16'>
                      <input id='replyCommentContent' type="text" style="width:90%;height:25px;border:1px solid rgb(220, 223, 230);margin:2px 0 0 0;border-radius:3px;outline:none;padding: 0 10px 0 10px">
                    </el-col>
                    <el-col :span='3' style="margin:3px 0 0 0;">
                      <button :data-beReplyedUserName='comment.userName' :data-beReplyedUserId='comment.userId' :data-replyId='comment.replyId' style="height:25px;border-radius:3px;outline:none;border:1px solid rgb(220, 223, 230);background-color:white; width:50px;" @click="addReplyComment($event)">发布</button>
                    </el-col>
                    <el-col :span='2' style="margin:3px 0 0 0;">
                      <button @click="cancleReplyComment($event)" style="height:25px;border-radius:3px;outline:none;border:1px solid rgb(220, 223, 230);background-color:white; width:50px;">取消</button>
                    </el-col>
                  </el-row>
                  </el-col>
                </el-row>
              </el-row>
              <el-row v-for='re in comment.reply' :key='re' style="margin:10px 0 0 0;">
                    <el-col :span='3' style="color:white">fsfsfsf</el-col>
                    <el-col :span='21' style="margin:0px 0 0 0;border-top:1px solid rgb(220, 223, 230); padding: 5px 0 0 0;">
                      <el-row>
                      <el-col :span='2'>
                        <el-avatar shape="square" :src="re.headPic" :size='25'></el-avatar>
                      </el-col>
                      <el-col :span='21'>
                        <el-row>
                          <el-col :span='6' style="margin:5px 0 0 0; text-align:left; font-size:12px;">
                            <div style="">{{re.userName}} <strong style="color:rgb(2, 155, 98);font-size:12px;">@</strong><strong style="color:rgb(2, 155, 98);font-size:12px;margin:5px 0 0 2px;">{{re.beReplyedUserId}}</strong>
                            </div>
                          </el-col>
                          <el-col :span='12' style="color:white">brave</el-col>
                          <el-col :span='6' style="margin:10px 0 0 0; font-size:12px;position:relative; left:14px;">{{re.date}}</el-col>
                        </el-row>
                      </el-col>
                    </el-row>
                    <el-row>
                      <el-col :span='24'
                        style="padding: 0 50px 0 0; text-align:left; background-color:rgb(248, 249, 250); padding: 10px 10px;font-size:14px;">
                        {{re.replyCommentContent}}
                      </el-col>
                    </el-row>
                    </el-col>
                  </el-row>
            </div>
            <!-- <div style="margin:10px 0 0 0">
              <el-row>
                <el-col :span='3'>
                  <el-avatar shape="square" :src="squareUrl"></el-avatar>
                </el-col>
                <el-col :span='21'>
                  <el-row>
                    <el-col :span='6' style="margin:10px 0 0 0; text-align:left; font-size:14px;">
                      <div style="">李商隐</div>
                    </el-col>
                    <el-col :span='9' style="color:white">brave</el-col>
                    <el-col :span='9' style="margin:15px 0 0 0; font-size:14px;"></el-col>
                  </el-row>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span='3' style="color:white"> -->
                  <!-- <div style="color:">happy</div> -->
                  <!-- happy
                </el-col>
                <el-col :span='21'
                  style="padding: 0 50px 0 0; text-align:left; background-color:rgb(248, 249, 250); padding: 10px 10px;font-size:14px;">
                  我看行我看行我看行我看行我看行我看行我看行我看行我看行我看行我看行我看行我看行我看行我看行我看行我看行我看行我看行我看行我看行我看行我看行我看行
                </el-col>
              </el-row>
              <el-row>
                <el-col :span='3' style="color:white">lsy</el-col>
                <el-col :span='21'>
                  <el-row>
                    <el-col :span='3'>
                      <div @click="replyCommentDiv($event)">
                        <div class="el-icon-chat-line-round" style="font-size:16px;display:inline-block"></div>
                        <div style="display:inline-block;font-size:14px">回复</div>
                      </div>
                    </el-col>
                    <el-col :span='17' style="color:white">brave</el-col>
                    <el-col :span='4' style="font-size:12px;padding:5px 0 0 0;">2020:02:02</el-col>
                  </el-row>
                  <el-row style="margin:10px 0 0 0" v-show="replyComment">
                    <el-col :span='3'>
                      <el-avatar></el-avatar>
                    </el-col>
                    <el-col :span='13'>
                      <el-input type="text" v-model="ReplyCommentContent"></el-input>
                    </el-col>
                    <el-col :span='4'>
                      <el-button :data-beReplyedUserName='comment.userName' :data-beReplyedUserId='comment.userId' data-replyId='2' @click="addReplyComment($event)">发布</el-button>
                    </el-col>
                    <el-col :span='4'>
                      <el-button @click="cancleReplyComment">取消</el-button>
                    </el-col>
                  </el-row> -->
                  <!-- <el-row style="margin:10px">
                    <el-row>
                      <el-col :span='2'>
                        <el-avatar shape="square" :src="squareUrl" :size='25'></el-avatar>
                      </el-col>
                      <el-col :span='21'>
                        <el-row>
                          <el-col :span='6' style="margin:5px 0 0 0; text-align:left; font-size:12px;">
                            <div style="">李商隐</div>
                          </el-col>
                          <el-col :span='9' style="color:white">brave</el-col>
                          <el-col :span='9' style="margin:15px 0 0 0; font-size:14px;"></el-col>
                        </el-row>
                      </el-col>
                    </el-row>
                    <el-row>
                      <el-col :span='24'
                        style="padding: 0 50px 0 0; text-align:left; background-color:rgb(248, 249, 250); padding: 10px 10px;font-size:14px;">
                        我看行我看行我看行我看行我看行我看行我看行我看行我看行我看行我看行我看行我看行我看行我看行我看行我看行我看行我看行我看行我看行我看行我看行我看行
                      </el-col>
                    </el-row>
                  </el-row> -->
                <!-- </el-col>
              </el-row>
            </div> -->
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
      headPic: '',
      squareUrl: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
      drawer: false,
      direction: 'rtl',
      commentContent: '',
      post: '',
      title: '',
      ReplyCommentContent: '',
      replyComment: false,
      comments: []
    }
  },
  methods: {
    replyCommentDiv (event) {
      // alert(111)
      var el = event.currentTarget
      // $()
      $(el).parent().parent().next().show()
      // this.replyComment = true
    },
    addReplyComment (event) {
      // alert(111)
      var el = event.currentTarget
      console.log($(el).attr('data-replyId'))
      console.log(this.ReplyCommentContent)
      this.$axios({
        url: 'http://47.115.131.98:888/replyComment',
        method: 'post',
        data: {
          commentId: $(el).attr('data-replyId'),
          replyCommentContent: $(el).parent().prev().children('#replyCommentContent').val(),
          userId: sessionStorage.userId,
          userName: sessionStorage.userName,
          beReplyedUserId: $(el).attr('data-beReplyedUserId'),
          beReplyedUserName: $(el).attr('data-beReplyedUserName'),
          postId: sessionStorage.postId
        }
      }).then((res) => {
        console.log(res)
        if (res.data.result === 1) {
          $(el).parent().prev().children('#replyCommentContent').val('')
          $(el).parent().parent().hide()
          this.getComment()
        }
      })

      // this.replyComment = false
    },
    cancleReplyComment (event) {
      // alert(111)
      var el = event.currentTarget
      $(el).parent().parent().hide()
    },
    addSupport () {
      if ($('#support').attr('data-support') === 'true') {
        this.$axios({
          method: 'post',
          url: 'http://47.115.131.98:888/cancleSupport',
          data: {
            postId: sessionStorage.postId,
            userId: sessionStorage.userId
            // replyContent: this.commentContent
          }
        }).then((response) => {
          console.log(response.data)
          if (response.data.code === 200 && response.data.result === 1) {
            $('#support').css('color', 'black')
            $('#support').attr('data-support', 'false')
          }
        })
      } else {
        this.$axios({
          method: 'post',
          url: 'http://47.115.131.98:888/addSupport',
          data: {
            postId: sessionStorage.postId,
            userId: sessionStorage.userId
            // replyContent: this.commentContent
          }
        }).then((response) => {
          console.log(response.data)
          if (response.data.code === 200 && response.data.result === 1) {
            $('#support').css('color', 'red')
            $('#support').attr('data-support', 'true')
          }
        })
      }
    },
    checkSupport () {
      this.$axios({
        method: 'post',
        url: 'http://47.115.131.98:888/checkSupport',
        data: {
          postId: sessionStorage.postId,
          userId: sessionStorage.userId
          // replyContent: this.commentContent
        }
      }).then((response) => {
        console.log(response.data)
        if (response.data.code === 200 && response.data.result === 1) {
          $('#support').css('color', 'red')
          $('#support').attr('data-support', 'true')
          // this.commentContent = ''
          // this.getComment()
        }
      })
    },
    GMTToStr (time) {
      let date = new Date(time)
      let Str = date.getFullYear() + '-' +
        (date.getMonth() + 1) + '-' +
        date.getDate() + ' ' +
        (date.getHours() - 8) + ':' +
        date.getMinutes() + ':' +
        date.getSeconds()
      return Str
    },
    getComment () {
      this.$axios({
        method: 'post',
        url: 'http://47.115.131.98:888/getComment',
        data: {
          postId: sessionStorage.postId
          // userId: sessionStorage.userId,
          // replyContent: this.commentContent
        }
      }).then((response) => {
        console.log(response.data.result)
        if (response.data.code === 200) {
          // var replys = this.comments
          for (var i = 0; i < response.data.result.length; i++) {
            for (var z = 0; z < response.data.result[i].reply.length; z++) {
              response.data.result[i].reply[z].date = this.GMTToStr(response.data.result[i].reply[z].date)
            }
            response.data.result[i].replyDate = this.GMTToStr(response.data.result[i].replyDate)
            console.log(response.data.result[i].replyDate)
          }
          var temp = []
          // alert(temp.length)
          for (var j = response.data.result.length - 1; j >= 0; j--) {
            temp.push(response.data.result[j])
            // response.data.result[response.data.result.length - i].replyDate = this.GMTToStr(response.data.result[i].replyDate)
            // console.log(response.data.result[i].replyDate)
          }
          // console.log(temp)
          this.comments = temp
        }
      })
    },
    addComment () {
      this.$axios({
        method: 'post',
        url: 'http://47.115.131.98:888/addComment',
        data: {
          postId: sessionStorage.postId,
          userId: sessionStorage.userId,
          replyContent: this.commentContent
        }
      }).then((response) => {
        console.log(response.data)
        if (response.data.code === 200) {
          this.commentContent = ''
          this.getComment()
        }
      })
    },
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
    this.$axios({
      method: 'post',
      url: 'http://47.115.131.98:39002/getUserInfo',
      data: {
        userId: sessionStorage.userId
      }
    }).then((response) => {
      sessionStorage.userName = response.data.userInfo[0].userName
    })
    this.headPic = sessionStorage.headPicUrl
    this.checkSupport()
    this.getPost()
    $('#postDiv').height($(window).height() - $('#meun').height() - 100)
    this.getComment()
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
