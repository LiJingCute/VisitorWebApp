import {get,post,post_array} from '../http/axios'
import Vue from 'vue';
// import {setToken,getToken,removeToken} from '../utils/auth'
import { Toast } from 'vant';
import {setToken} from '../utils/index'
Vue.use(Toast);

export default {
   namespaced:true,
   state:{
       userinfo:{

       }
   },
   mutations:{
        refreshUserInfo(state,userinfo){
            state.userinfo = userinfo
        },
   },   
   getters:{

   },
   actions:{
    // async waiterLogin({commit},params){
    //     //   1.登录
    //     let response = await post("/visitorLogin/loginlist",params);
    // },
    // 登录，获取token
    async waiterLogin(context,params){
        let res = await post('/visitorLogin/loginlist',params);
        console.log(JSON.parse(res.request.response))
        var obj=JSON.parse(res.request.response);
        console.log(obj.id)
        
        // 设置token到本地存储
        context.dispatch('userInfo',obj.id)
        setToken(obj.id)
    },
     // 根据令牌token换取登录信息
     async userInfo(context,id){
         console.log(id)
        let res = await get('/visitorLogin/findById?id='+id);
        console.log(res,"登录后")
        context.commit('refreshUserInfo',JSON.parse(res.request.response))
        return res.request.response;
    },
        
   }
}