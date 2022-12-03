<template>
  <v-container fluid class="text-center primary py-6 py-sm-14">
    <div class="mb-0 mb-sm-4">
      <h2 v-if="subtitle" class="headline text-sm-h4 font-weight-bold">
        {{ title }}
      </h2>
      <h2 v-else class="headline text-sm-h4 font-weight-bold pb-4">
        {{ title }}
      </h2>

      <span class="font-weight-medium white--text caption" style="opacity: 0">
        {{ subtitle }}
      </span>
    </div>

    <!-- :style="{ maxWidth: { '720px': $vuetify.breakpoint.smAndUp } }" -->
    <div
      class="font-weight-light mx-auto subtitle text-sm-h6 mb-0 mb-sm-4"
      :class="{ width: $vuetify.breakpoint.smAndUp }"
    >
      {{ desc }}
    </div>
  </v-container>
  <!-- <div class="accent">
    <v-container class="pa-8 pa-sm-16">
      <v-row>
        <v-col xs="12" sm="6">
          <v-card
            color="transparent"
            class="rounded-sm mx-auto"
            flat
            :width="imageWidth"
          >
            <v-img
              src="https://lexgloballogistics.com/wp-content/uploads/2018/02/ed-1.jpg"
              :height="imageHeight"
            ></v-img>
          </v-card>
        </v-col>
        <v-col xs="12" sm="6">
          <v-card class="textright transparent px-8" :height="imageHeight" flat>
            <div>
              <h2
                class="title text-md-h4 text-lg-h3 px-8 py-4 font-weight-bold grey--text text--darken-3 my-0 text-center"
              >
                Who We Are?
              </h2>
              <span style="opacity: 0" class="caption">
                as a Kodaikanal Travel Planner</span
              >
            </div>
            <div
              class="px-8 subtitle-1 text-lg-h5 text-xl-h4 font-weight-regular grey--text text--darken-2 text-center"
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div> -->
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    subtitle: {
      type: String,
      default: "",
    },
    desc: {
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
          return "300";
        case "sm":
          return "400";
        case "md":
          return "500";
        case "lg":
          return "600";
        case "xl":
          return "720";
      }
      return "720";
    },
    imageWidth() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "200";
        case "sm":
          return "260";
        case "md":
          return "320";
        case "lg":
          return "400";
        case "xl":
          return "480";
      }
      return "320";
    },
  },
};
</script>

<style scoped>
.textright {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.width {
  width: 720px;
  max-width: 720px;
}
</style>
