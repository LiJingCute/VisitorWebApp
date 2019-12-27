import {get} from '../http/axios'

export default {
  namespaced:true,
  state: {
  
  },
  mutations: {
  
  },
  actions: {
    async openKongtiao(context,data){
      if(data){
        alert("开")
      }else{
        alert("关")
      }
      // let response =await get('/OpenOrClose/openAirConditioner',{model:{}})
      let response =await get('/OpenOrClose/openAirConditioner')
      return response;
    },
    async closeKongtiao(context,data){
      if(data){
        alert("开")
      }else{
        alert("关")
      }
      let response =await get('/OpenOrClose/closeAirConditioner')
      return response;
    },
    async openDoor(context,data){
      if(data){
        alert("开")
      }else{
        alert("关")
      }
      let response =await get('/OpenDoor/opendoor')
      return response;
    },
    
    async openChuangLian(context,data){
      if(data){
        alert("开")
      }else{
        alert("关")
      }
      let response =await get('/OpenOrCloseCurtain/openCurtain')

      return response;
    },
    async closeChuangLian(context,data){
      if(data){
        alert("开")
      }else{
        alert("关")
      }
      let response =await get('/OpenOrCloseCurtain/closeCurtain')
      return response;
    },
    async openOne(context,data){
      if(data){
        alert("开")
      }else{
        alert("关")
      }
      let response =await get('/OpenOrCloseLight/openonelight')

      return response;
    },
    async closeOne(context,data){
      if(data){
        alert("开")
      }else{
        alert("关")
      }
      let response =await get('/OpenOrCloseLight/closeonelight')
      return response;
    },
    async openTwo(context,data){
      if(data){
        alert("开")
      }else{
        alert("关")
      }
      let response =await get('/OpenOrCloseLight/opentwolight')

      return response;
    },
    async closeTwo(context,data){
      if(data){
        alert("开")
      }else{
        alert("关")
      }
      let response =await get('/OpenOrCloseLight/closetwolight')
      return response;
    },
    async openThree(context,data){
      if(data){
        alert("开")
      }else{
        alert("关")
      }
      let response =await get('/OpenOrCloseLight/openthreelight')

      return response;
    },
    async closeThree(context,data){
      if(data){
        alert("开")
      }else{
        alert("关")
      }
      let response =await get('/OpenOrCloseLight/closethreelight')
      return response;
    },
  }
}