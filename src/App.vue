
<template>
  <div id="app">
    <div class="content">
         <router-view/>
    </div>
     <van-tabbar v-model="active" route>
       <van-tabbar-item replace to="/" name="home" icon="star-o">首页</van-tabbar-item>
       <van-tabbar-item replace to="/my" name="my" icon="user-o">我的</van-tabbar-item>

      </van-tabbar>
  </div>
</template>
<script>
export default {
  data(){
    return{
      active:""
    }
  }
}
</script>
<style scoped>

</style>