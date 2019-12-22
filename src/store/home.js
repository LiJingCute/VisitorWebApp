import {get} from '../../http/axios'

export default {
  namespaced:true,
  state: {
    l1:[]
  },
  mutations: {
    getLight1(state,l1){
        state.l1 = l1;
    }
  },
  actions: {
    async findWarnNum({commit}){
        let response = await get('/home/getLight1');
        commit('getLight1',response.data)
    }
  }
}