<template>
  <div id="postDiv">
    <!-- 加载时显示骨架屏 test-->
    <template v-if="loading">
      <post-skeleton v-for="i in 3" :key="i" />
    </template>
    <!-- 加载完成后显示帖子列表 -->
    <template v-else>
      <div v-for="post in processedPosts" @click="showPost($event)" :data-index="post.postId" :key="post.postId"
        style="margin:20px 0 0 0;font-size:14px;color:rgb(0, 154, 97);text-align:left;">
        <el-row style="height:100%;background-color:#F6F6F6;padding: 0 10px 10px 10px;border-radius: 5px;display:flex;">
          <el-col :span="post.leftSpan" id="post-left" style="display:flex;flex-direction:column;justify-content:space-between;">
            <div style="margin:10px 0 0 0;">
              <h3 style="height:30px;float:left;margin:0; font-size:18px">
                {{ post.postTitle }}
              </h3>
              <p style="height:auto; max-height:100px; clear:both; font-size:13px;margin:0;color:rgb(120, 120, 120);line-height:1.5rem">
                {{ post.postValue.substring(0, 100) }}
              </p>
            </div>
            <div class="post-stats">
              <span class="like-count">
                <i class="el-icon-star-off"></i>
                <span class="count">{{ post.supportCount || 0 }}</span>
              </span>
              <span class="post-date">
                <i class="el-icon-time"></i>
                {{ post.postDate.replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '') }}
              </span>
              <el-dropdown trigger="click" @command="handleCommand">
                <span class="el-dropdown-link action-btn">
                  <i class="el-icon-more"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item :command="{type: 'edit', postId: post.postId}">
                    <i class="el-icon-edit"></i> 编辑
                  </el-dropdown-item>
                  <el-dropdown-item :command="{type: 'delete', postId: post.postId}">
                    <i class="el-icon-delete"></i> 删除
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
              <el-avatar
                shape="square"
                :size="20"
                :src="post.userInfo && post.userInfo.userImg || defaultAvatar"
                class="post-avatar">
              </el-avatar>
            </div>
          </el-col>
          <el-col :span="post.rightSpan" id="post-right" v-if="post.rightSpan > 0">
            <div class="image-container">
              <img :src="post.postUrl" alt="" style="width:100%;height:100%;object-fit:cover;border-radius:5px;">
            </div>
          </el-col>
        </el-row>
      </div>
    </template>
  </div>
</template>

<script>
import router from '../router'
import $ from 'jquery'
import PostSkeleton from './PostSkeleton.vue'

export default {
  name: 'myPost',
  components: {
    PostSkeleton
  },
  props: {
    posts: {
      type: Array,
      default: () => []
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      defaultAvatar: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png'
    }
  },
  computed: {
    processedPosts() {
      return this.posts.map(postData => {
        const post = postData.post || {}
        const user = postData.user || {}

        // 确保 postValue 存在
        const postValue = post.postValue || ''
        const imgReg = /<img.*?(?:>|\/>)/gi
        const srcReg = /src=[\\'\\"]?([^\\'\\"]*)[\\'\\"]?/i
        const arr = postValue.match(imgReg)

        const basePostData = {
          ...post,
          userInfo: {
            userName: user.userName || '',
            userImg: user.userImg || this.defaultAvatar
          },
          postValue: postValue.replace(/<[^>]+>/g, '').replace(/↵/g, '')
        }

        if (arr && arr.length > 0) {
          const src = arr[0].match(srcReg)
          return {
            ...basePostData,
            postHeight: false,
            postHeight1: true,
            postContentHeight: false,
            leftSpan: 18,
            rightSpan: 6,
            postUrl: src ? src[1] : ''
          }
        } else {
          return {
            ...basePostData,
            postHeight: true,
            postHeight1: false,
            postContentHeight: true,
            leftSpan: 24,
            rightSpan: 0
          }
        }
      })
    }
  },

  methods: {
    handleCommand(command) {
      if (command.type === 'delete') {
        this.$confirm('确认删除这篇帖子吗？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.deletePost(command.postId)
        }).catch(() => {})
      } else if (command.type === 'edit') {
        this.$axios({
          url: 'https://graduation-project.lishangying.site/getPost',
          method: 'post',
          data: {
            postId: command.postId
          }
        }).then(response => {
          if (response.data.code === 200) {
            const post = response.data.post
            sessionStorage.setItem('editPostTitle', post.postTitle)
            sessionStorage.setItem('editPostContent', post.postValue)
            sessionStorage.setItem('editPostId', post.postId)

            router.push({
              path: '/post',
              query: {
                postId: command.postId,
                mode: 'edit'
              }
            })
          } else {
            this.$message.error('获取帖子内容失败')
          }
        }).catch(() => {
          this.$message.error('获取帖子内容失败，请检查网络连接')
        })
      }
    },
    deletePost(postId) {
      this.$axios({
        url: 'https://graduation-project.lishangying.site/deletePost',
        method: 'post',
        data: {
          postId: postId,
          userId: sessionStorage.userId
        }
      }).then(response => {
        if (response.data.code === 200) {
          this.$message.success('删除成功')
          // 通知父组件重新加载帖子列表
          this.$emit('refresh-posts')
        } else {
          this.$message.error(response.data.msg || '删除失败')
        }
      }).catch(() => {
        this.$message.error('删除失败，请检查网络连接')
      })
    },
    showPost(event) {
      // 如果点击的是操作菜单，不进行跳转
      if (event.target.closest('.el-dropdown')) {
        return
      }
      const el = event.currentTarget
      sessionStorage.postId = $(el).attr('data-index')
      router.push({ path: '/showPost' })
    }
  }
}
</script>

<style scoped>
@import "../assets/iconfont/iconfont.css";

.postContentHeight {
  max-height: 100px;
  margin-bottom: 20px;
}

.postHeight {
  height: 130px;
}

.postHeight1 {
  height: 200px;
}

/* 移除卡片hover效果，保持原样式 */
[data-index] {
  background-color: #fff;
}

.post-stats {
  display: flex;
  align-items: center;
  gap: 12px;
  color: rgb(2, 155, 98);
  font-size: 14px;
  padding: 26px 0 0 0;
  /* margin-bottom: 20px; */
}

.like-count, .post-date, .action-btn {
  display: flex;
  align-items: center;
  gap: 5px;
  transition: all 0.3s ease;
  padding: 4px 8px;
  border-radius: 15px;
  background-color: rgba(2, 155, 98, 0.1);
  cursor: pointer;
}

.like-count:hover, .post-date:hover, .action-btn:hover {
  background-color: rgba(2, 155, 98, 0.2);
  transform: scale(1.05);
}

.like-count i, .post-date i, .action-btn i {
  font-size: 15px;
  color: rgb(2, 155, 98);
}

.like-count .count {
  font-weight: 500;
  font-size: 14px;
}

.post-date {
  font-size: 13px;
  opacity: 0.9;
}

.action-btn {
  width: auto;
  height: auto;
  padding: 4px 8px;
}

.action-btn:hover {
  transform: scale(1.05);
}

.el-dropdown {
  margin-left: auto;
  position: relative;
}

.el-dropdown-menu {
  border: none;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  min-width: 120px;
}

.el-dropdown-menu__item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  font-size: 14px;
  color: #606266;
  line-height: 1.5;
}

.el-dropdown-menu__item i {
  font-size: 16px;
  margin-right: 4px;
}

.el-dropdown-menu__item:hover {
  background-color: rgba(2, 155, 98, 0.1);
  color: rgb(2, 155, 98);
}

/* 删除选项特殊样式 */
.el-dropdown-menu__item:last-child {
  color: #f56c6c;
  border-top: 1px solid #ebeef5;
}

.el-dropdown-menu__item:last-child i {
  color: #f56c6c;
}

.el-dropdown-menu__item:last-child:hover {
  background-color: rgba(245, 108, 108, 0.1);
  color: #f56c6c;
}

.post-avatar {
  /* margin-left: 0px; */
  transition: transform 0.3s ease;
}

.post-avatar:hover {
  transform: scale(1.1);
}

.image-container {
  position: relative;
  width: 100%;
  aspect-ratio: 1/1;
  background-color: rgb(2, 155, 98);
  border-radius: 5px;
  overflow: hidden;
  margin: 10px 0 0 20px;
}

.image-container img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

#post-left {
  min-height: calc(100% - 20px);
}

#post-right {
  display: flex;
  align-items: flex-start;
}
</style>
