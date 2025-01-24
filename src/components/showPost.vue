<template style="color:rgb(233, 236, 239); background-color:rgb(233, 236, 239)">
  <div style="background-color:rgb(233, 236, 239);margin:70px 0 0 0;">
    <el-row type="flex" justify="center">
      <el-col :span='4' style="color:rgb(233, 236, 239);position:relative;">
        <div class="action-stats">
          <div class="action-group">
            <div @click="showDrawer" class="action-icon el-icon-chat-line-round"></div>
            <span class="stat-count">{{ commentCount }}</span>
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
      <div class="comment-section">
        <div class="comment-input">
          <el-row type="flex" align="middle">
            <el-col :span='2'>
              <el-avatar shape="square" :src="this.$store.state.userInfo.headPicUrl"></el-avatar>
            </el-col>
            <el-col :span='18'>
              <el-input type="text" v-model="commentContent" placeholder="快来评论一下吧！"></el-input>
            </el-col>
            <el-col :span='4'>
              <el-button @click="addComment" type="primary" style="background-color:#029B62;border-color:#029B62;">发送</el-button>
            </el-col>
          </el-row>
        </div>

        <div id="commentDiv" class="comment-list test-1">
          <div v-if="comments && comments.length > 0">
            <div v-for="comment in comments" :key='comment.commentId' class="comment-item">
              <div class="comment-header">
                <el-avatar shape="square" :src="comment.headPic"></el-avatar>
                <div class="comment-user">
                  <div class="comment-username">{{comment.userName}}</div>
                  <div class="comment-date">{{comment.commentDate}}</div>
                </div>
              </div>

              <div class="comment-content">
                {{comment.commentContent}}
              </div>

              <div class="comment-actions">
                <div class="reply-button" @click="replyCommentDiv($event)">
                  <i class="el-icon-chat-line-round"></i>
                  <span>回复</span>
                </div>
              </div>

              <div class="reply-box" id="replyCommentBox" style="display:none;">
                <el-row type="flex" align="middle" :gutter="10">
                  <el-col :span='2'>
                    <el-avatar :size='25' shape="square" :src="headPic"></el-avatar>
                  </el-col>
                  <el-col :span='22'>
                    <input id='replyCommentContent' type="text" class="reply-input" :placeholder="'回复 @' + comment.userName">
                  </el-col>
                </el-row>
                <div class="reply-actions">
                  <button class="reply-button-cancel" @click="cancleReplyComment($event)">取消</button>
                  <button class="reply-button-submit" 
                    :data-beReplyedUserName='comment.userName'
                    :data-beReplyedUserId='comment.userId'
                    :data-commentId='comment.commentId'
                    @click="addReplyComment($event)">发布</button>
                </div>
              </div>

              <div v-if="comment.reply && comment.reply.length > 0" class="reply-list">
                <div v-for='re in comment.reply' :key='re' class="reply-item">
                  <div class="reply-header">
                    <el-avatar shape="square" :src="re.headPic" :size='25'></el-avatar>
                    <div class="reply-user">
                      <span class="reply-username">{{re.userName}}</span>
                      <span class="reply-to">@{{re.beReplyedUserName}}</span>
                    </div>
                    <div class="comment-date">{{re.date}}</div>
                  </div>
                  <div class="reply-content">
                    {{re.replyContent}}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-else class="empty-comment">
            <i class="el-icon-chat-dot-round"></i>
            <div>暂无评论，快来抢沙发吧！</div>
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
      headPic: this.$store.state.userInfo.headPicUrl,
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
  computed: {
    commentCount() {
      return this.comments ? this.comments.length : 0
    }
  },
  methods: {
    replyCommentDiv (event) {
      const el = event.currentTarget
      const commentItem = $(el).closest('.comment-item')
      const replyBox = commentItem.find('.reply-box')
      
      // 如果点击的是当前已打开的回复框，则关闭它
      if (replyBox.is(':visible')) {
        replyBox.hide()
        return
      }
      
      // 隐藏所有回复框
      $('.reply-box').hide()
      
      // 显示当前回复框
      replyBox.show()
    },
    addReplyComment (event) {
      const el = event.currentTarget
      const replyBox = $(el).closest('.reply-box')
      const replyContent = replyBox.find('.reply-input').val()
      
      if (!replyContent || !replyContent.trim()) {
        this.$message.warning('请输入回复内容')
        return
      }

      const commentId = $(el).attr('data-commentId')
      const beReplyedUserId = $(el).attr('data-beReplyedUserId')
      const beReplyedUserName = $(el).attr('data-beReplyedUserName')
      
      // 检查必需参数
      if (!commentId || !beReplyedUserId || !beReplyedUserName) {
        console.error('Missing required parameters:', { commentId, beReplyedUserId, beReplyedUserName })
        this.$message.error('回复失败：缺少必要参数')
        return
      }

      // 打印请求参数以便调试
      console.log('Reply parameters:', {
        commentId,
        replyCommentContent: replyContent,
        userId: sessionStorage.userId,
        userName: sessionStorage.userName,
        beReplyedUserId,
        beReplyedUserName,
        postId: this.$route.params.postId
      })
      
      this.$axios({
        url: 'https://graduation-project.lishangying.site/replyComment',
        method: 'post',
        data: {
          commentId: commentId,
          replyCommentContent: replyContent,
          userId: sessionStorage.userId,
          userName: sessionStorage.userName,
          beReplyedUserId: beReplyedUserId,
          beReplyedUserName: beReplyedUserName,
          postId: this.$route.params.postId
        }
      }).then((res) => {
        if (res.data.code === 200 && res.data.result === 1) {
          // 清空输入框并隐藏回复框
          replyBox.find('.reply-input').val('')
          replyBox.hide()
          this.getComment()
          this.$message.success('回复成功')
        } else {
          console.error('Reply failed:', res.data)
          this.$message.error(res.data.msg || '回复失败')
        }
      }).catch(error => {
        console.error('回复失败:', error)
        this.$message.error('回复失败，请稍后重试')
      })
    },
    cancleReplyComment (event) {
      const el = event.currentTarget
      const replyBox = $(el).closest('.reply-box')
      // 清空输入框并隐藏回复框
      replyBox.find('.reply-input').val('')
      replyBox.hide()
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
          this.comments = response.data.result || []  // 从 result 字段获取评论数组
          // 按时间倒序排序评论
          this.comments.sort((a, b) => new Date(b.commentDate) - new Date(a.commentDate))
        }
      }).catch(error => {
        console.error('获取评论失败:', error)
        this.comments = []
      })
    },
    addComment () {
      if (!this.commentContent.trim()) {
        this.$message.warning('请输入评论内容')
        return
      }
      
      this.$axios({
        method: 'post',
        url: 'https://graduation-project.lishangying.site/addComment',
        data: {
          postId: this.$route.params.postId,
          userId: sessionStorage.userId,
          replyContent: this.commentContent  // 修改参数名从 commentContent 到 replyContent
        }
      }).then((response) => {
        if (response.data.code === 200 && response.data.result === 1) {
          this.commentContent = ''
          this.getComment()
          this.$message.success('评论成功')
        } else {
          this.$message.error(response.data.msg || '评论失败')
        }
      }).catch(error => {
        console.error('添加评论失败:', error)
        this.$message.error('评论失败，请稍后重试')
      })
    },
    showDrawer () {
      this.drawer = true
      this.$nextTick(() => {
        // 设置评论区域的高度
        $('#commentDiv').height($(window).height() - 120)
        // 隐藏所有回复框
        $('[id="replyCommentBox"]').hide()
      })
    },
    handleClose (done) {
      // 关闭抽屉时隐藏所有回复框
      $('[id="replyCommentBox"]').hide()
      // 清空所有回复输入框
      $('#replyCommentContent').val('')
      done()
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
    
    // 设置用户头像
    this.headPic = this.$store.state.userInfo.headPicUrl

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

.comment-section {
  padding: 20px;
  height: calc(100vh - 120px);
  overflow-y: auto;
}

.comment-input {
  background: #fff;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,0.05);
  margin-bottom: 20px;
  position: sticky;
  top: 0;
  z-index: 1;
}

.comment-list {
  margin-top: 20px;
  text-align: left;
}

.comment-item {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 15px;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,0.05);
  transition: all 0.3s ease;
}

.comment-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px 0 rgba(0,0,0,0.1);
}

.comment-header {
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
}

.comment-user {
  margin-left: 10px;
  flex: 1;
}

.comment-username {
  font-size: 14px;
  font-weight: 500;
  color: #303133;
}

.comment-date {
  font-size: 12px;
  color: #909399;
  margin-top: 4px;
}

.comment-content {
  font-size: 14px;
  color: #606266;
  line-height: 1.6;
  margin: 10px 0;
  padding: 10px;
  background: #f8f9fa;
  border-radius: 4px;
  text-align: left;
}

.comment-actions {
  display: flex;
  align-items: center;
  margin-top: 10px;
}

.reply-button {
  display: flex;
  align-items: center;
  padding: 4px 8px;
  border-radius: 4px;
  cursor: pointer;
  color: #606266;
  transition: all 0.3s ease;
}

.reply-button:hover {
  background: rgba(2, 155, 98, 0.1);
  color: #029B62;
}

.reply-button i {
  margin-right: 4px;
}

.reply-box {
  margin-top: 10px;
  padding: 10px;
  background: #f8f9fa;
  border-radius: 4px;
}

.reply-input {
  width: 100%;
  height: 32px;
  padding: 0 12px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  outline: none;
  transition: all 0.3s ease;
}

.reply-input:focus {
  border-color: #029B62;
}

.reply-actions {
  display: flex;
  justify-content: flex-end;
  margin-top: 8px;
  gap: 8px;
}

.reply-button-submit,
.reply-button-cancel {
  padding: 6px 12px;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  background: white;
  cursor: pointer;
  transition: all 0.3s ease;
}

.reply-button-submit {
  color: white;
  background: #029B62;
  border-color: #029B62;
}

.reply-button-submit:hover {
  background: #026B42;
}

.reply-button-cancel:hover {
  background: #f5f7fa;
}

.reply-list {
  margin-top: 15px;
  margin-left: 40px;
  padding-top: 15px;
  border-top: 1px solid #ebeef5;
  text-align: left;
}

.reply-item {
  padding: 10px 0;
  text-align: left;
}

.reply-item:not(:last-child) {
  border-bottom: 1px solid #ebeef5;
}

.reply-header {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
}

.reply-user {
  display: flex;
  align-items: center;
  font-size: 12px;
}

.reply-username {
  color: #303133;
  font-weight: 500;
}

.reply-to {
  color: #029B62;
  margin: 0 4px;
}

.reply-content {
  margin: 8px 0 0 35px;
  font-size: 13px;
  color: #606266;
  line-height: 1.6;
  padding: 8px;
  background: #f8f9fa;
  border-radius: 4px;
  text-align: left;
}

.empty-comment {
  text-align: center;
  padding: 40px 0;
  color: #909399;
  font-size: 14px;
  background: #fff;
  border-radius: 8px;
  margin-top: 20px;
}

.empty-comment i {
  font-size: 24px;
  margin-bottom: 8px;
  color: #dcdfe6;
}

/* 修改滚动条样式 */
.comment-section::-webkit-scrollbar {
  width: 4px;
}

.comment-section::-webkit-scrollbar-thumb {
  background: #029B62;
  border-radius: 2px;
}

.comment-section::-webkit-scrollbar-track {
  background: #f5f7fa;
}
</style>
