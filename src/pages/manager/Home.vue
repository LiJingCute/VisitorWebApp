<template>
  <div class="home">
      <!-- <img src="./images/a.jpg" style="width: auto; height: auto;"> -->
   <!-- <img src="./images/a.jpg" class="back" id="Background"> -->
    <van-nav-bar fixed :title="'首页'" />
        <div class="guide-box">
          <div class="guide"  onclick="alert('成功')">
            <div class="guide">
              <div class="guide_label">一路灯光</div>
              <div class="guide_label">开</div>
              <!-- <img src="./images/deng.png" class="guide_icon" alt="" mode="aspectFit"> -->
            </div>
          </div>
           <div class="guide"  onclick="alert('成功')">
            <div class="guide">
              <div class="guide_label">二路灯光</div>
            </div>
           </div>
           <div class="guide"  onclick="alert('成功')">
            <div class="guide">
              <div class="guide_label">三路灯光</div>
            </div>
           </div>
      
           <div class="guide"  onclick="alert('成功')">
            <div class="guide">
              <div class="guide_label">开启门锁</div>
            </div>
           </div>
        
          <div class="guide"  onclick="alert('成功')">
            <div class="guide">
              <div class="guide_label">打开窗帘</div>
              <div class="guide_label">开</div>
              <!-- <img src="./images/deng.png" class="guide_icon" alt="" mode="aspectFit"> -->
            </div>
          </div>

          <div class="guide"  onclick="alert('成功')">
            <div class="guide">
              <div class="guide_label">关闭窗帘</div>
              <div class="guide_label">开</div>
            </div>
             <!-- <img src="./images/deng.png" class="guide_icon" alt="" mode="aspectFit"> -->
          </div>

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
      // backgroundDiv: { backgroundImage: 'url(' + require('./images/t.jpg') + ')'}
    }
  }
}
</script>
<style scoped>
.home {
  height: 100%;
  /* background: -webkit-linear-gradient(bottom,hsla(0,0%,59%,.15),hsla(0,0%,59%,0),white) no-repeat; */
}
/* .back{
  position: fixed;
  width: 100%;
  height: 100%;
  display: block;
  z-index: -100; 
} */
.guide-box {
  text-align: center;
  margin-top: 5em;
}
.guide {
  display: inline-block;
  width: 35vw;
  height: 33vw;
  background-color: rgba(148, 204, 238, 0.2);

  text-align: center;
  margin: 4vw;
  vertical-align: top;
}
.guide_label {
  display: block;
  margin-top: 20px;
  color: rgb(25, 115, 233);
  font-size: 28rpx;
}
/* .guide_icon {
  display: block;
  width: 74rpx;
  height: 74rpx;
  margin: 25px auto 0;
  color: #CFE4FF;
} */
</style>
  