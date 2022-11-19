import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import VueResource from "vue-resource";

Vue.use(VueResource);
Vue.config.productionTip = false;

let baseUrl = "http://localhost:4000";
Vue.http.options.root = baseUrl;

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
