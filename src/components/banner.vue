<template>
  <v-container fill-height fluid pa-0 ma-0>
    <v-card color="transparent" flat width="100%">
      <v-img
        :height="imageHeight"
        :src="require(`../assets/${img}.jpg`)"
        width="100%"
        class="d-flex align-center"
        dark
      >
        <v-container fill-height fluid class="d-flex justify-center">
          <banner-form @snackbar="snackbar = true"></banner-form>
        </v-container>
      </v-img>
    </v-card>
    <v-snackbar v-model="snackbar" timeout="2000" color="red" top right>
      Please fill up all fields

      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="snackbar = false"> Close </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
import bannerForm from "../components/bannerForm.vue";

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
    return {
      cycle: true,
      snackbar: false,
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
};
</script>

<style></style>
