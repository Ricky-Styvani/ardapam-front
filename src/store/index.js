import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    user: {
      data: null,
      token: null,
      expired: 0,
    },
    notif: {
      count: 0,
    },
    host: "http://127.0.0.1:8000",
  },
  mutations: {
    user(state, payload) {
      state.user.data = payload.user[0];
      state.user.token = payload.token;
      state.user.expired = payload.exp;
    },
    reset(state) {
      state.user.data = null;
      state.user.token = null;
      state.user.expired = 0;
    },
    notif(state, payload) {
      state.notif.count = payload;
    },
  },
  actions: {},
  modules: {},
});
