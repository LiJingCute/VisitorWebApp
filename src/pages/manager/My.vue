<template>
  <div id="my">
    <van-nav-bar fixed :title="'个人中心'" />
    <!-- {{userinfo}} -->
      <div class="content">
          <div class="photo">
            <div class="photo_wrapper">
              <!-- <img src="../../assets/images/home_23.png" alt=""> -->
            </div>
            <div style="text-align:center;line-height:3em">{{userinfo.visitorName}}</div>
            <!-- <div style="text-align:center;line-height:3em">{{userinfo.name}}</div> -->
          </div>
          <div class="line">
            预约人:{{userinfo.userName}}
          </div>
          <div class="line">
            预约人手机号：{{userinfo.userPhone}}
          </div>
          <div class="line" @click="goBack">
            退出
          </div>
      </div>
  </div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
export default {
  data(){
    return {
      
    }
  },
  computed:{
    // ...mapState('login',['info']),
    ...mapState('my',['userinfo'])
  },
  created(){
  },
  methods:{
    ...mapActions('my',['waiterLogin',]),
    goBack(){
      this.$router.push({path:'/'})
    }
  }
}
</script>
<style scoped>
#my .content {
  padding-top: 46px;
}
.photo {
  padding-top: 2em;
}
.photo .photo_wrapper{
  margin: 0 auto;
  width: 10em;
  height: 10em;
  border-radius: 50%;
  box-sizing: border-box;
  border:1px solid #eedded;
  overflow:hidden;
  padding: 1em;

}
.photo img {
 width: 100%;
}
.line {
  line-height: 4em;
  border-bottom: 1px solid #ededed;
  padding-left: 4em;
}
</style>