<template>
  <div id="postDiv">
    <!-- 加载时显示骨架屏 -->
    <template v-if="loading">
      <post-skeleton v-for="i in 3" :key="i" />
    </template>
    <!-- 加载完成后显示帖子列表 -->
    <template v-else>
      <div v-for="post in processedPosts" @click="showPost($event)" :data-index="post.postId" :key="post.postId"
        style="margin:50px 0 0 0;font-size:14px;color:rgb(0, 154, 97);text-align:left;"
        :class="{ 'postHeight': post.postHeight, 'postHeight1': post.postHeight1 }">
        <el-row style="height:100%">
          <el-col :span="post.leftSpan" style="height:100%;">
            <div style="width:100%;margin:10px 0 0 0; height:90%" :class="{ 'postHeight': post.postHeight }">
              <h3 style="height:30px;float:left;margin:0; font-size:18px">
                {{ post.postTitle }}
              </h3>
              <p style="height:47%; clear:both; font-size:13px;margin:0;color:rgb(120, 120, 120);line-height:1.5rem"
                :class="{ 'postContentHeight': post.postContentHeight }">
                {{ post.postValue.substring(0, 100) }}
              </p>
              <div style="height:20%;display:inline-block; width:100%;margin:26px 0 0 0">
                <div class="el-icon-star-off"
                  style="font-size:20px;float:left;display:inline-block;color:rgb(2, 155, 98)">
                  {{ post.supportCount || 0 }}
                </div>
                <div style="font-size:14px;display:inline-block;margin:5px 0 0 15px;color:rgb(2, 155, 98);float:left;">
                  {{ post.postDate.replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '') }}
                </div>
                <el-avatar 
                  shape="square" 
                  :size="20" 
                  :src="post.userInfo && post.userInfo.userImg || defaultAvatar"
                  style="float:right;">
                </el-avatar>
              </div>
            </div>
          </el-col>
          <el-col :span="post.rightSpan" style="height:100%;">
            <div
              style="height:80%;margin:10px 0 20px 10px;background-color:rgb(2, 155, 98);border-radius:5px;color:rgb(2, 155, 98)">
              <img :src="post.postUrl" alt="" width="100%" height="100%" style="object-fit:cover;border-radius:5px;">
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
        const post = postData.post
        const user = postData.user
        const imgReg = /<img.*?(?:>|\/>)/gi
        const srcReg = /src=[\\'\\"]?([^\\'\\"]*)[\\'\\"]?/i
        const arr = post.postValue.match(imgReg)
        
        if (arr != null) {
          const src = arr[0].match(srcReg)
          return {
            ...post,
            userInfo: {
              userName: user.userName,
              userImg: user.userImg
            },
            postHeight: false,
            postHeight1: true,
            postContentHeight: false,
            leftSpan: 18,
            rightSpan: 6,
            postUrl: src ? src[1] : '',
            postValue: post.postValue.replace(/<[^>]+>/g, '').replace(/↵/g, '')
          }
        } else {
          return {
            ...post,
            userInfo: {
              userName: user.userName,
              userImg: user.userImg
            },
            postHeight: true,
            postHeight1: false,
            postContentHeight: true,
            leftSpan: 24,
            rightSpan: 0,
            postValue: post.postValue.replace(/<[^>]+>/g, '').replace(/↵/g, '')
          }
        }
      })
    }
  },
  methods: {
    showPost(event) {
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
  max-height: 30%;
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
</style>
