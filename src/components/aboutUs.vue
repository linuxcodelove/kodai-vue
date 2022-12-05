<template>
  <div
    class="accent pa-16 my-2 my-sm-0 d-flex justify-center align-center"
    style="position: relative"
  >
    <div v-if="$vuetify.breakpoint.smAndUp" :style="{ marginLeft: sideMargin }">
      <v-img
        :src="require('../assets/home/aboutus.jpg')"
        height="600px"
        width="480px"
      ></v-img>
    </div>
    <div :style="{ marginRight: sideMargin, position: position }">
      <!-- data-aos="fade-up"
      data-aos-duration="800" -->
      <v-card :width="imageWidth" :height="imageHeight" color="secondary">
        <div class="pa-10 pa-sm-16 aboutleft">
          <h2
            class="text-h6 text-sm-h4 font-weight-regular mb-3 grey--text text--darken-3"
          >
            ABOUT US
          </h2>
          <div
            class="font-weight-light text-h5 text-sm-h3 white--text text--lighten-2 py-3"
            style="line-height: 1.2"
          >
            Make yourself at home <br />
            in our hotel
          </div>
          <v-btn
            text
            class="my-4 white--text"
            width="100px"
            style="border-bottom: 2px solid #fff; border-radius: 0px"
            @click="$router.push('/about')"
            >Learn more</v-btn
          >
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    position() {
      if (this.$vuetify.breakpoint.xs) return "static";
      return "absolute";
    },
    sideMargin() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "0%";
        case "sm":
          return "30%";
        case "md":
          return "35%";
        case "lg":
          return "25%";
        case "xl":
          return "15%";
      }
      return "25%";
    },
    imageHeight() {
      if (this.$vuetify.breakpoint.xs) return "300";
      return "440";
    },
    imageWidth() {
      if (this.$vuetify.breakpoint.xs) return "300";
      return "440";
    },
  },
};
</script>

<style scoped>
.aboutleft {
  display: flex;
  justify-content: center;
  /* align-items: center; */
  flex-direction: column;
}
</style>
