<template>
  <div class="px-6 px-sm-12 pt-4 pt-sm-12 secondary white--text">
    <v-container>
      <v-row>
        <v-col xs="6" sm="3" lg="4">
          <h2 class="mb-6 mb-md-12">CONTACT</h2>
          <h4 class="subtitle-2 mb-2 mb-sm-5" style="line-height: 1.4">
            327/9E Lawsghat Road, <br />Kodaikanal, 624 101
          </h4>
          <h4 class="primary--text subtitle-2 mb-2 mb-sm-5">
            service@kodaiguide.in
          </h4>
          <h4 class="subtitle-2 mb-2 mb-sm-5">+91-9840666992</h4>
          <h4 class="subtitle-2 mb-2 mb-sm-5">+91-9840666992</h4>
          <div class="mt-2 mt-sm-8">
            <v-btn fab small class="mr-1 mr-sm-2" @click="openTwitter"
              ><v-icon>mdi-twitter</v-icon></v-btn
            >
            <v-btn fab small class="mr-1 mr-sm-2" @click="openFb"
              ><v-icon>mdi-facebook</v-icon></v-btn
            >
            <v-btn fab small class="mr-1 mr-sm-2" @click="goToIG"
              ><v-icon>mdi-instagram</v-icon></v-btn
            >
          </div>
        </v-col>
        <v-col xs="6" sm="3" lg="4">
          <h2 class="mb-6 mb-md-12">NAVIGATION</h2>
          <div class="subtitle-2">
            <h4 class="mb-2 mb-sm-5" @click="$router.push('/')">Home</h4>
            <h4 class="mb-2 mb-sm-5" @click="$router.push('/cottages')">
              Cottages
            </h4>
            <h4 class="mb-2 mb-sm-5" @click="$router.push('/rentalcars')">
              Rental Cars
            </h4>
            <h4 class="mb-2 mb-sm-5">Real Estate</h4>
            <h4 class="mb-2 mb-sm-5" @click="$router.push('/about')">About</h4>
            <h4 class="mb-2 mb-sm-5" @click="$router.push('/contact')">
              Contact
            </h4>
            <h4 class="mb-2 mb-sm-5" @click="$router.push('/faq')">FAQ</h4>
          </div>
        </v-col>
        <v-col xs="12" sm="6" lg="4">
          <h2 class="mb-6 mb-md-12">INSTAGRAM</h2>
          <v-row>
            <v-col cols="4" v-for="(instaImage, i) in instaImages" :key="i">
              <v-img
                height="60"
                :src="require(`../assets/footer/${instaImage}.jpg`)"
              ></v-img>
            </v-col>
          </v-row>
          <p class="caption mt-6 mt-sm-8" @click="goToIG">View More Photos</p>
          <v-btn
            text
            outlined
            color="primary"
            class="my-6 my-sm-8 py-8"
            block
            @click="dialog = true"
            >Book Now</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
    <booking-dialog v-if="dialog" @close="dialog = false"></booking-dialog>
  </div>
</template>

<script>
import BookingDialog from "../components/bookingDialog.vue";

export default {
  components: {
    BookingDialog,
  },
  data() {
    return {
      instaImages: ["1", "2", "3", "4", "5", "6"],
      // instaUrl: "https://instagram.com/muthumk05?utm_medium=copy_link",
      instaUrl: "https://www.instagram.com/kodaikanal_tripadvisor/",
      dialog: false,
    };
  },
  methods: {
    goToIG() {
      // var link = document.createElement("a");
      // link.href = this.instaUrl;
      // document.body.appendChild(link);
      // link.click();
      window.open(this.instaUrl);
    },
    openFb() {
      window.open("https://www.facebook.com/profile.php?id=100063902779362");
    },
    openTwitter() {
      window.open("https://twitter.com/KodaikanalTrip");
    },
  },
};
</script>

<style></style>
