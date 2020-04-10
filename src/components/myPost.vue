
<template>
  <div v-show="showAddInfo" style="width:90%;height:400px;padding:30px;background-color:rgb(217, 237, 247);margin:50px 0 0 0">
  </div>
</template>

<script>
// import router from '../router'
import axios from 'axios'
// import $ from 'jquery'
export default {
  name: 'myPost',
  data () {
    return {
      userGender: '',
      userSchool: '',
      userCompany: '',
      userJob: '',
      userPage: '',
      showAddInfo: ''
    }
  },
  methods: {
    hideAddInfoDiv () {
      var _this = this
      _this.$emit('showM', true)
    },
    addInfo () {
      var _this = this
      // if (_this._data.userGender) {

      // } else {

      // }
      axios({
        method: 'post',
        url: 'http://localhost:8082/addUserInfo',
        data: {
          userGender: 1,
          userSchool: _this._data.userSchool,
          userCompany: _this._data.userCompany,
          userJob: _this._data.userJob,
          userPage: _this._data.userPage,
          userId: sessionStorage.userId
        }
      }).then(function (response) {
        console.log(response.data)
        // sessionStorage.userId = response.data.userId
        // router.push({ path: '/personalPage' })
        // console.log(sessionStorage.userId)
      })
    }
  },
  mounted () {
    // $('el-select').css('float', 'left')
  }
}
</script>

<style scoped>
@import "../assets/iconfont/iconfont.css";
</style>
