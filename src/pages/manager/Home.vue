<template>
  <div class="home">
      <!-- <img src="./images/a.jpg" style="width: auto; height: auto;"> -->
   <!-- <img src="./images/a.jpg" class="back" id="Background"> -->
    <van-nav-bar fixed :title="'首页'" />
        <div class="guide-box">
          <div class="guide">
            <div class="guide">
              <div class="guide_label">一路灯光</div>
              <div class="guide_label" v-if="one" @click="openOneLight">开</div>
              <div class="guide_label" v-else="one" @click="closeOneLight">关</div>
            </div>
          </div>
           <div class="guide">
            <div class="guide">
              <div class="guide_label">二路灯光</div>
              <div class="guide_label" v-if="two" @click="openTwoLight">开</div>
              <div class="guide_label" v-else="two" @click="closeTwoLight">关</div>
            </div>
           </div>
           <div class="guide">
            <div class="guide">
              <div class="guide_label">三路灯光</div>
              <div class="guide_label" v-if="three" @click="openThreeLight">开</div>
              <div class="guide_label" v-else="three" @click="closeThreeLight">关</div>
            </div>
           </div>
      
           <div class="guide">
            <div class="guide">
              <div class="guide_label">开启门锁</div>
               <div class="guide_label" v-if="door" @click="openDoors">开</div>
               <div class="guide_label" v-else="door" @click="openDoors">关</div>
            </div>
           </div>
        
          <div class="guide">
            <div class="guide">
              <div class="guide_label">空调控制</div>
              <div class="guide_label" v-if="flag"  @click="openKT">开</div>
              <div class="guide_label" v-else="flag"  @click="closeKT">关</div>
            </div>
          </div>

          <div class="guide">
            <div class="guide">
              <div class="guide_label">窗帘控制</div>
              <div class="guide_label" v-if="chuangLian" @click="openCL">开</div>
              <div class="guide_label" v-else="chuangLian" @click="closeCL">关</div>
            </div>
          </div>

        </div>
  </div>


</template>
<script>
import {mapState,mapActions,mapGetters} from 'vuex'
export default {
  data(){
    return{
      active:"",
      flag:false,
      door:false,
      chuangLian:false,
      one:false,
      two:false,
      three:false,
    }
  },
  created(){
    setTimeout(()=>{
      this.layout()
    },200000)
  },
  computed:{
    
  },
  methods:{
    ...mapActions('home',['openKongtiao','closeKongtiao','openOne','closeOne','openTwo','closeTwo','openThree','closeThree']),
    ...mapActions('home',['openDoor','openChuangLian','closeChuangLian',]),
    layout(){
      this.$router.push({path:'/'})
    },
    openKT(){
      this.flag=!this.flag
      // console.log("aaaaaaaaaa")
      this.openKongtiao(this.flag);
    },
    closeKT(){
      this.flag=!this.flag
      // console.log("aaaaaaaaaa")
      this.closeKongtiao(this.flag);
    },
    openDoors(){
      this.door=!this.door
      this.openDoor(this.door);
    },
    openCL(){
      this.chuangLian=!this.chuangLian
      this.openChuangLian(this.chuangLian);
    },
    closeCL(){
      this.chuangLian=!this.chuangLian
      this.closeChuangLian(this.chuangLian);
    },
    openOneLight(){
      this.one=!this.one;
      this.openOne(this.one);
    },
    closeOneLight(){
      this.one=!this.one;
      this.closeOne(this.one);
    },
    openTwoLight(){
      this.two=!this.two;
      this.openTwo(this.two);
    },
    closeTwoLight(){
      this.two=!this.two;
      this.closeTwo(this.two);
    },
    openThreeLight(){
      this.three=!this.three;
      this.openThree(this.three);
    },
    closeThreeLight(){
      this.three=!this.three;
      this.closeThree(this.three);
    },

  },
  
}
</script>
<style scoped>
.home {
  /* height: 100%; */
  /* background: -webkit-linear-gradient(bottom,hsla(0,0%,59%,.15),hsla(0,0%,59%,0),white) no-repeat; */
}

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
  color: rgb(12, 77, 162);
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
  