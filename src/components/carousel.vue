<template>
  <div>
    <v-carousel
      continuous
      hide-delimiters
      interval="4000"
      :height="imageHeight"
      show-arrows-on-hover
    >
      <!-- :cycle="cycle" -->
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="require(`../assets/home/carousel/${item.src}.jpg`)"
        @mouseover="cycle = false"
        @mouseleave="cycle = true"
        class="carouselform"
      >
        <v-container fill-height fluid class="d-flex justify-center">
          <banner-form @snackbar="snackbarMessage"></banner-form>
        </v-container>
      </v-carousel-item>
    </v-carousel>
    <v-snackbar v-model="snackbar" timeout="2000" :color="color" top right>
      {{ message }}

      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="snackbar = false"> Close </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import bannerForm from "../components/bannerForm.vue";
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
    return {
      cycle: true,
      snackbar: false,
      message: "",
      color: "red",
    };
  },
  components: {
    bannerForm,
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
  methods: {
    cycleValue(val) {
      this.cycle = val;
    },
    hello() {
      console.log("hello");
    },
    snackbarMessage(msg, color) {
      this.snackbar = true;
      this.message = msg || "Please fill up All Fields";
      this.color = color || "red";
    },
  },
};
</script>

<style scoped>
.word {
  font-family: "EBGaramond", Arial, Helvetica, sans-serif;
}
.carouselform {
  display: flex;
  /* flex-direction: row; */
  justify-content: center;
  align-items: center;
}

::v-deep .v-snack__wrapper {
  min-width: 0px;
}
</style>
