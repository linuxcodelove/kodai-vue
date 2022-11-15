<template>
  <v-carousel hide-delimiters interval="4000" :height="imageHeight" cycle>
    <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src">
      <v-container fill-height fluid pa-0 ma-0>
        <v-card class="pa-2 mx-auto" color="transparent" flat>
          <!-- <p class="display-3 font-weight-bold secondary--text">
            Make yourself at home
          </p>
          <p class="display-3 font-weight-bold text-center secondary--text">
            in our hotel
          </p> -->
        </v-card>
      </v-container>
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

<style></style>
