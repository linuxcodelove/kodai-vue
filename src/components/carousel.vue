<template>
  <v-carousel hide-delimiters interval="4000" :height="imageHeight" cycle>
    <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src">
      <!-- <v-container fill-height fluid pa-0 ma-0>
        <v-card class="pa-2 mx-auto" color="transparent" flat>
          <div>
            <h3 class="text-center subtitle text-sm-h5 text-md-h4">
              {{ title }}
            </h3>
            <h2
              class="text-center text-h6 text-sm-h4 text-md-h2 font-weight-bold my-0 my-sm-4"
            >
              {{ subtitle }}
            </h2>
            <div
              v-if="!$vuetify.breakpoint.xs"
              class="text-center my-0 my-sm-4 px-16"
            >
              <h6 class="caption text-sm-h6 font-weight-regular">
                {{ description }}
              </h6>
              <h6 class="caption text-sm-h6 font-weight-regular">
                {{ subDesc }}
              </h6>
            </div>
            <div class="d-flex justify-center my-2 my-sm-4">
              <v-btn
                rounded
                class="py-4 px-4 py-sm-6 px-sm-8 primary"
                :small="$vuetify.breakpoint.xs"
                >Book Now</v-btn
              >
            </div>
          </div>
        </v-card>
      </v-container> -->
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    title: {
      type: String,
      default: "",
    },
    subtitle: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    subDesc: {
      type: String,
      default: "",
    },
  },
  data() {
    return {};
  },
  computed: {
    imageHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "220";
        case "sm":
          return "400";
        case "md":
          return "500";
        case "lg":
          return "600";
        case "xl":
          return "800";
      }
      return "800";
    },
  },
};
</script>

<style>
.word {
  font-family: "EBGaramond", Arial, Helvetica, sans-serif;
}
</style>
