<template>
    <div class="layout">
        <router-view></router-view>
        <div class="nav">
            <van-tabbar v-model="active" @change = "tabChangeHandler">
                <van-tabbar-item name="/manager/home" icon="home-o">首页</van-tabbar-item>
                <van-tabbar-item name="/manager/my" icon="user-o">我的</van-tabbar-item>
            </van-tabbar>
        </div>
        
    </div>
    
</template>
<script>
import {mapState,mapActions} from 'vuex'
export default {
    data(){
        return {
            active:0
        }
    },
    created(){
        
    },
    computed:{
        ...mapState("my",["token"])
    },
    methods:{
        ...mapActions("my",["getUserInfo"]),
        tabChangeHandler(path){
            this.$router.push({path});
        }
    }
}
</script>
<style scoped>

</style>