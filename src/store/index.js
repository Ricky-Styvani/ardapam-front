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
    }
  },
  mutations: {
    user(state,payload){
      state.user.data = payload.user
      state.user.token = payload.token
      state.user.expired = payload.exp
    }
  },
  actions: {
    
  },
  modules: {
  }
})
