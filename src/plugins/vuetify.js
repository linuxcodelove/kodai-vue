import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      light: {
        primary: "#DA9F3F",
        secondary: "#101920",
        accent: "#FFF",
        error: "#b71c1c",
      },
      dark: {
        primary: "#DA9F3F",
        secondary: "#101920",
        accent: "#8c9eff",
        error: "#b71c1c",
      },
    },
  },
});

// #DA9F3F
// CACE91
// 101920
