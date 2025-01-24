<template style="color:rgb(233, 236, 239); background-color:rgb(233, 236, 239)">
  <div style="background-color:rgb(233, 236, 239);margin:70px 0 0 0;">
    <el-row type="flex" justify="center">
      <el-col :span='4' style="color:rgb(233, 236, 239);position:relative;">
        <div class="action-stats">
          <div class="action-group">
            <div @click="showDrawer" class="action-icon el-icon-chat-line-round"></div>
            <span class="stat-count">{{ comments.length }}</span>
          </div>
          <div class="action-group">
            <div @click="addSupport" id="support" data-support='false' class="action-icon el-icon-star-off"></div>
            <span class="stat-count">{{ supportCount }}</span>
          </div>
          <div class="action-group">
            <el-avatar :size="40" :src="userImg" class="user-avatar"></el-avatar>
            <span class="user-name">{{ userName }}</span>
          </div>
        </div>
      </el-col>
      <el-col :span='14' style="background-color:white;margin:20px 0;">
        <h1 style="text-align: left; margin:20px;padding:0 0 10px 0; border-bottom:2px solid #029B90;">{{title}}</h1>
        <div id="postDiv" style="overflow-y:scroll;" class="test-1">
          <div style="margin:20px;">
            <mavon-editor v-html="post" :boxShadow='false' />
          </div>
        </div>
      </el-col>
      <el-col :span='4' style="color:rgb(233, 236, 239);">happy</el-col>
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
               <el-avatar shape="square" :src="this.$store.state.userInfo.headPicUrl"></el-avatar>
            </el-col>
            <el-col :span='17'>
              <el-input type="text" size='140' v-model="commentContent" placeholder="快来评论一下吧！"></el-input>
            </el-col>
            <el-col :span='4'>
              <el-button @click="addComment" style="background-color:rgb(2, 155, 98); color:white;">发送</el-button>
            </el-col>
          </el-row>
          <div id="commentDiv" style="overflow-y:scroll; height:800px; margin:20px;" class="test-1">
            <div v-for="comment in comments" :key='comment.commentId' style="margin:10px 0 0 0">
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
                  {{comment.commentContent}}
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
                        {{re.replyContent}}
                      </el-col>
                    </el-row>
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
      headPic: '',
      squareUrl: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
      drawer: false,
      direction: 'rtl',
      commentContent: '',
      post: '',
      title: '',
      ReplyCommentContent: '',
      replyComment: false,
      comments: [],
      supportCount: 0,
      userImg: '',
      userName: ''
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
      var el = event.currentTarget
      this.$axios({
        url: 'https://graduation-project.lishangying.site/replyComment',
        method: 'post',
        data: {
          commentId: $(el).attr('data-replyId'),
          replyCommentContent: $(el).parent().prev().children('#replyCommentContent').val(),
          userId: sessionStorage.userId,
          userName: sessionStorage.userName,
          beReplyedUserId: $(el).attr('data-beReplyedUserId'),
          beReplyedUserName: $(el).attr('data-beReplyedUserName'),
          postId: this.$route.params.postId
        }
      }).then((res) => {
        if (res.data.result === 1) {
          $(el).parent().prev().children('#replyCommentContent').val('')
          $(el).parent().parent().hide()
          this.getComment()
        }
      })
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
          url: 'https://graduation-project.lishangying.site/cancleSupport',
          data: {
            postId: this.$route.params.postId,
            userId: sessionStorage.userId
          }
        }).then((response) => {
          if (response.data.code === 200 && response.data.result === 1) {
            $('#support').css('color', 'black')
            $('#support').attr('data-support', 'false')
            this.supportCount = Math.max(0, this.supportCount - 1)
          }
        })
      } else {
        this.$axios({
          method: 'post',
          url: 'https://graduation-project.lishangying.site/addSupport',
          data: {
            postId: this.$route.params.postId,
            userId: sessionStorage.userId
          }
        }).then((response) => {
          if (response.data.code === 200 && response.data.result === 1) {
            $('#support').css('color', 'red')
            $('#support').attr('data-support', 'true')
            this.supportCount++
          }
        })
      }
    },
    checkSupport () {
      if (!sessionStorage.userId) {
        return
      }
      this.$axios({
        method: 'post',
        url: 'https://graduation-project.lishangying.site/checkSupport',
        data: {
          postId: this.$route.params.postId,
          userId: sessionStorage.userId,
          type: 'post'  // 添加必要的参数
        }
      }).then((response) => {
        if (response.data.code === 200 && response.data.result === 1) {
          $('#support').css('color', 'red')
          $('#support').attr('data-support', 'true')
        }
      }).catch(error => {
        console.error('检查点赞状态失败:', error)
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
        url: 'https://graduation-project.lishangying.site/getComment',
        data: {
          postId: this.$route.params.postId
        }
      }).then((response) => {
        if (response.data.code === 200) {
          this.comments = response.data.comments
        }
      })
    },
    addComment () {
      this.$axios({
        method: 'post',
        url: 'https://graduation-project.lishangying.site/addComment',
        data: {
          postId: this.$route.params.postId,
          userId: sessionStorage.userId,
          commentContent: this.commentContent
        }
      }).then((response) => {
        if (response.data.code === 200 && response.data.result === 1) {
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
        url: 'https://graduation-project.lishangying.site/getPost',
        data: {
          postId: sessionStorage.postId
        }
      }).then((response) => {
        sessionStorage.post = response.data.post.postValue
        this.post = response.data.post.postValue
        this.title = response.data.post.postTitle
        this.supportCount = response.data.post.supportCount || 0
        this.userImg = response.data.post.userImg
        this.userName = response.data.post.userName
      })
    }
  },
  mounted () {
    // 从路由参数中获取帖子 ID
    const postId = this.$route.params.postId
    sessionStorage.postId = postId

    // 获取帖子内容
    this.$axios({
      method: 'post',
      url: 'https://graduation-project.lishangying.site/getPost',
      data: {
        postId: postId
      }
    }).then((response) => {
      if (response.data.code === 200) {
        this.post = response.data.post.postValue
        this.title = response.data.post.postTitle
        this.supportCount = response.data.post.supportCount || 0
        this.userImg = response.data.post.userImg || this.squareUrl
        this.userName = response.data.post.userName
        this.getComment()
        this.checkSupport()

        // 设置帖子内容区域的高度
        this.$nextTick(() => {
          $('#postDiv').height($(window).height() - $('#meun').height() - 100)
        })
      }
    })
  }
}
</script>

<style scoped>
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
  background: #029B62;
}

.test-1::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background: #ededed;
}

.action-stats {
  position: fixed;
  right: 20px;
  top: 100px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.action-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
}

.stat-count {
  color: #606266;
  font-size: 14px;
  font-weight: 500;
  background-color: rgba(2, 155, 98, 0.1);
  padding: 2px 8px;
  border-radius: 10px;
  min-width: 20px;
  text-align: center;
  transition: all 0.3s ease;
}

.action-group:hover .stat-count {
  background-color: rgba(2, 155, 98, 0.2);
  transform: scale(1.1);
}

.action-icon {
  background-color: white;
  color: black;
  height: 40px;
  width: 40px;
  font-size: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.action-icon:hover {
  transform: scale(1.1);
  background-color: rgba(2, 155, 98, 0.1);
}

/* 点赞激活状态 */
#support[data-support='true'] {
  color: red;
}

#support[data-support='true'] + .stat-count {
  color: red;
  background-color: rgba(245, 108, 108, 0.1);
}

#support[data-support='true'] + .stat-count:hover {
  background-color: rgba(245, 108, 108, 0.2);
}

.user-avatar {
  margin-top: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.user-avatar:hover {
  transform: scale(1.1);
}

.user-name {
  color: #606266;
  font-size: 14px;
  margin-top: 5px;
}
</style>
