import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    mobile: false,
  },
  mutations: {
    updateMobile(state, payload) {
      state.mobile = payload;
    },
  },
  // actions: {
  //   isMobile(context, payload) {
  //     console.log(this.$vuetify.breakpoint.xs);
  //     context.commit("UPDATE_MOBILE", payload);
  //   },
  // },
});
