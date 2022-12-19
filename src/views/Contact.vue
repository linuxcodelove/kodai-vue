<template>
  <div>
    <loader v-if="!isLoaded"></loader>
    <banner img="contact" title="" subtitle=""></banner>
    <div class="accent" v-if="$vuetify.breakpoint.xs">
      <v-container>
        <div class="grey--text text--darken-3 my-4 mb-8 mb-md-8">
          <v-row>
            <v-col cols="12 px-12"
              >Treat yourself to an overnight stay somewhere special. It's your
              chance to discover Kodaikanal and all it has to offer. We provide
              various types of stays such as Individual cottages, Service
              apartments, Villa's, Home stays, Tent stays, Wood houses, Tree
              houses, Forest bungalows, Star category resorts and Hotel rooms.
              Please view our 100+ cottages and resorts to book your space.
            </v-col>
          </v-row>
        </div>
      </v-container>
    </div>

    <contact-form @close="snackbarMessage"></contact-form>
    <GmapMap :center="center" :zoom="12" style="width: 100%; height: 400px">
      <GmapMarker
        :position="center"
        label="Kodaikanal Trip Advisor"
      ></GmapMarker>
    </GmapMap>

    <custom-footer></custom-footer>
    <v-snackbar v-model="snackbar" timeout="2000" :color="color" top right>
      {{ message }}

      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="snackbar = false"> Close </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import banner from "../components/banner.vue";
import contactForm from "../components/contactForm.vue";
import customFooter from "../components/footer.vue";
import loader from "../components/loader.vue";

export default {
  components: {
    banner,
    contactForm,
    customFooter,
    loader,
  },
  data() {
    return {
      center: { lat: 10.239457, lng: 77.498056 },
      isLoaded: false,
      snackbar: false,
      message: "",
      color: "red",
    };
  },
  mounted() {
    setTimeout(() => {
      this.isLoaded = true;
    }, 2000);
  },
  methods: {
    snackbarMessage(msg, color) {
      this.message = msg || "Please fill up All Fields";
      this.color = color || "red";
      this.snackbar = true;
    },
  },
};
</script>

<style></style>
