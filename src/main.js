import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import AOS from "aos";
import "aos/dist/aos.css";
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyDRl5G4F_-d_uHkNzLG4Kq8pAS9DwZeb4o",
    libraries: "places",
  },
});
import vuetify from "./plugins/vuetify";
import VueResource from "vue-resource";

Vue.use(VueResource);

Vue.config.productionTip = false;
// Vue.http.headers.common["Access-Control-Allow-Origin"] = "*";

// let baseUrl = "http://localhost:4000";
// let baseUrl = "http://";
// Vue.http.options.root = baseUrl;

new Vue({
  router,
  vuetify,
  store,
  render: (h) => h(App),
  // mounted() {
  //   AOS.init();
  // },
}).$mount("#app");
