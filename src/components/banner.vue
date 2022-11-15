<template>
  <v-container fill-height fluid pa-0 ma-0>
    <v-card class="mx-auto" color="transparent" flat>
      <v-img :height="imageHeight" :src="img" class="d-flex align-center">
        <!-- <div class="display-2 font-weight-bold">
          <h2 class="text-center">{{ title }}</h2>
          <h3 v-if="subtitle" class="text-center my-10">{{ subtitle }}</h3>
        </div> -->
      </v-img>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    subtitle: {
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

<style></style>
