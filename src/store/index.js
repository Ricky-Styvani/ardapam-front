import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'
Vue.use(Vuex)
//note
//state = nyimpen data (biasane bentuk array/object)
//mutations = gae ubah data ndek state
//actions = anngep ae controller
//modules = gaero, gaguna koyok e
//getters = mirip koyok computed e vue
export default new Vuex.Store({
  state: {
    user:{
      data:null,
      token: null,
      expired:0
    },
    notif:{
      count:0
    }
  },
  mutations: {
    user(state,payload){
      state.user.data = payload.user[0]
      state.user.token = payload.token
      state.user.expired = payload.exp
    },
    reset(state){
      state.user.data = null
      state.user.token = null
      state.user.expired = 0
    },
    notif(state,payload){
      state.notif.count = payload
    }
  },
  actions: {
    
  },
  modules: {
  }
})
