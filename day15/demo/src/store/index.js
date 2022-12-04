import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list:[]
  },
  getters: {
  },
  mutations: {
    add(state,val){
        state.list.push({...val})
    },
    pgone(state,obj){
      state.list[obj.index].name=obj.name
      state.list[obj.index].resource=obj.resource
      state.list[obj.index].time=obj.time
    }
  },
  actions: {
  },
  modules: {
  }
})
