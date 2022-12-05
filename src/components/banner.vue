<template>
  <v-container fill-height fluid pa-0 ma-0>
    <v-card color="transparent" flat>
      <v-img
        :height="imageHeight"
        :src="require(`../assets/${img}.jpg`)"
        width="100%"
        class="d-flex align-center"
        dark
      >
        <div>
          <h3 class="text-center subtitle text-sm-h5 text-md-h4">
            {{ title }}
          </h3>
          <h2
            class="text-center text-h6 text-sm-h4 text-md-h2 font-weight-bold my-4"
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
          <!-- <div v-if="book" class="d-flex justify-center my-2 my-sm-4">
            <v-btn
              rounded
              class="py-4 px-4 py-sm-6 px-sm-8 primary"
              :small="$vuetify.breakpoint.xs"
              >Book Now</v-btn
            >
          </div> -->
          <!-- <div v-if="book" class="d-flex justify-center my-2 my-sm-4">
            <v-btn rounded class="py-4 px-4 py-sm-6 px-sm-8 primary"
              >Book Now</v-btn
            >
          </div> -->

          <!-- <h2 class="text-center text-h2 font-weight-bold">{{ title }}</h2>
          <h3 v-if="subtitle" class="text-center my-10">{{ subtitle }}</h3> -->
        </div>
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
    description: {
      type: String,
      default: "",
    },
    subDesc: {
      type: String,
      default: "",
    },
    book: {
      type: Boolean,
      default: false,
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
