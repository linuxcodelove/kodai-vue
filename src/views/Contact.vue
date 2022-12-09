<template>
  <div>
    <banner img="contact" title="" subtitle=""></banner>
    <div class="accent">
      <v-container>
        <!-- <div class="mt-2 mt-md-4 mb-2 mb-md-6 black--text"></div> -->
        <div
          v-if="$vuetify.breakpoint.xs"
          class="black--text my-4 mb-8 mb-md-8"
        >
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
          <!-- <div class="text-center mt-6 mt-md-8 mb-6 mb-md-8">
            <v-btn
              text
              rounded
              class="primary caption px-10 py-6 black--text text--darken-2 font-weight-black"
              >More About Us</v-btn
            >
          </div> -->
        </div>
      </v-container>
    </div>

    <contact-form></contact-form>
    <GmapMap :center="center" :zoom="12" style="width: 100%; height: 400px">
      <GmapMarker
        :position="center"
        label="Kodaikanal Trip Advisor"
      ></GmapMarker>
    </GmapMap>

    <custom-footer></custom-footer>
  </div>
</template>

<script>
import banner from "../components/banner.vue";
import contactForm from "../components/contactForm.vue";
import customFooter from "../components/footer.vue";

export default {
  components: {
    banner,
    contactForm,
    customFooter,
  },
  data() {
    return {
      center: { lat: 10.239457, lng: 77.498056 },
    };
  },
};
</script>

<style></style>
