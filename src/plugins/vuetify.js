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
        accent: "#F1F3FF",
        error: "#b71c1c",
        bg: "#272727",
      },
      dark: {
        primary: "#DA9F3F",
        secondary: "#101920",
        accent: "#F1F3FF",
        error: "#b71c1c",
        bg: "#272727",
      },
    },
  },
});

// #DA9F3F
// CACE91
// 101920
// F3EDD7
// FAEBEE
