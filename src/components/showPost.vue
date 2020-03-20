
<template>
  <div style="width:60%;margin:10px auto;">
<h1 style="text-align: left; margin:20px;">{{title}}</h1>
<div style="margin:20px;">
    <mavon-editor v-html="post" :boxShadow='false' style="min-height: 600px"/>
</div>
  </div>
</template>

<script>
export default {
  name: 'showPost',
  data () {
    return {
      post: '',
      title: ''
    }
  },
  methods: {
    getPost () {
      this.$axios({
        method: 'post',
        url: 'http://localhost:8082/getPost',
        data: {
          userId: sessionStorage.userId
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
    // this.$axios({
    //   method: 'post',
    //   url: 'http://localhost:8082/getPost',
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

@import '../assets/iconfont/iconfont.css'

</style>
