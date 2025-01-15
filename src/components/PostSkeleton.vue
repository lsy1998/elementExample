<template>
  <div class="post-skeleton">
    <el-row style="height:100%">
      <el-col :span="18" style="height:100%;">
        <div style="width:100%;margin:10px 0 0 0; height:90%">
          <!-- 标题 -->
          <div class="skeleton-item title"></div>
          <!-- 内容 -->
          <div class="skeleton-item content"></div>
          <!-- 底部信息 -->
          <div style="height:20%;display:inline-block; width:100%;margin:0 0 0 0">
            <div class="skeleton-item icon"></div>
            <div class="skeleton-item date"></div>
            <div class="skeleton-item avatar"></div>
          </div>
        </div>
      </el-col>
      <el-col :span="6" style="height:100%;">
        <div class="skeleton-item image"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'PostSkeleton'
}
</script>

<style scoped>
.post-skeleton {
  margin: 50px 0 0 0;
  background-color: #fff;
  height: 200px;
}

.skeleton-item {
  background: linear-gradient(90deg, #f2f2f2 25%, #e6e6e6 37%, #f2f2f2 63%);
  background-size: 400% 100%;
  animation: skeleton-loading 1.4s ease infinite;
  border-radius: 4px;
}

.title {
  width: 50%;
  height: 24px;
  margin-bottom: 15px;
}

.content {
  width: 100%;
  height: 47%;
  margin-bottom: 15px;
}

.icon {
  width: 20px;
  height: 20px;
  float: left;
  display: inline-block;
}

.date {
  width: 200px;
  height: 16px;
  margin: 5px 0 0 15px;
  float: left;
  display: inline-block;
}

.avatar {
  width: 20px;
  height: 20px;
  float: right;
}

.image {
  height: 80%;
  margin: 10px 0 20px 10px;
  border-radius: 5px;
}

@keyframes skeleton-loading {
  0% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
}
</style> 