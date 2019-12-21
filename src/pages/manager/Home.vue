<template>
  <div class="home" :style="backgroundDiv">
      <img src="./images/a.jpg" style="width: auto; height: 40px;">
   
    <van-nav-bar fixed :title="'首页'" />
       <div class="button" >
 
    <van-button type="primary">一路灯光</van-button>
    <van-button type="primary">二路灯光</van-button>
    <van-button type="primary">三路灯光</van-button>
    <van-button type="primary">灯光全开</van-button>
    <van-button type="primary">灯光全关</van-button>
    <van-button type="danger">开启门锁</van-button>
    <van-button type="primary">开启空调</van-button>
    <van-button type="primary">打开窗帘</van-button>

    </div>

  </div>


</template>
<script>
import {mapState,mapActions,mapGetters} from 'vuex'
export default {
  created(){
    
  },
  computed:{
    
  },
  methods:{

  },
  data(){
    return{
      active:"",
      backgroundDiv: { backgroundImage: 'url(' + require('./images/a.jpg') + ')'}
    }
  }
}
</script>
<style scoped>
.home {
  padding-bottom: 60px;

}
</style>
  