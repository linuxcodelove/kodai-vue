<template>
  <div class="px-6 px-sm-12 pt-4 pt-sm-12 secondary white--text">
    <!-- <v-container>
      <v-row>
        <v-col cols="6">
          <p class="title">Email</p>
          <p>service@kodaiguide.in</p>
          <p class="title">Phone</p>
          <p>+91-9840666992</p>
          <p class="title">Address</p>
          <p>
            327/9E Lawsghat Road, <br />Kodaikanal<br />
            Pin-624 101
          </p>
        </v-col>
        <v-col cols="6">
          <booking-form></booking-form>
        </v-col>
      </v-row>
    </v-container> -->
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
            <v-btn fab small class="mr-1 mr-sm-2"
              ><v-icon>mdi-twitter</v-icon></v-btn
            >
            <v-btn fab small class="mr-1 mr-sm-2"
              ><v-icon>mdi-facebook</v-icon></v-btn
            >
            <v-btn fab small class="mr-1 mr-sm-2"
              ><v-icon>mdi-instagram</v-icon></v-btn
            >
          </div>
        </v-col>
        <v-col xs="6" sm="3" lg="4">
          <h2 class="mb-6 mb-md-12">NAVIGATION</h2>
          <div class="subtitle-2">
            <h4 class="mb-2 mb-sm-5">Home</h4>
            <h4 class="mb-2 mb-sm-5">Cottages</h4>
            <h4 class="mb-2 mb-sm-5">Rental Cars</h4>
            <h4 class="mb-2 mb-sm-5">Real Estate</h4>
            <h4 class="mb-2 mb-sm-5">About</h4>
            <h4 class="mb-2 mb-sm-5">Contact</h4>
          </div>
        </v-col>
        <v-col xs="12" sm="6" lg="4">
          <h2 class="mb-6 mb-md-12">INSTAGRAM</h2>
          <v-row>
            <v-col cols="4" v-for="(instaImage, i) in instaImages" :key="i">
              <v-img height="60" :src="instaImage"></v-img>
            </v-col>
          </v-row>
          <p class="caption mt-6 mt-sm-8">View More Photos</p>
          <v-btn text outlined color="primary" class="my-6 my-sm-8 py-8" block
            >Book Now</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
// import bookingForm from "./bookingForm.vue";

export default {
  // components: {
  //   bookingForm,
  // },
  data() {
    return {
      instaImages: [
        "https://assets.website-files.com/5bd86c52b7abc5114b2ed43c/5bd8dbafef82dc4bd8245d41_nathan-fertig-249917-unsplash.jpg",
        "https://assets.website-files.com/5bd86c52b7abc5114b2ed43c/5bd8dbaf49a14257198e81cb_6.jpg",
        "https://assets.website-files.com/5bd86c52b7abc5114b2ed43c/5bd8dbafcf26d38b797ab7a8_julian-hochgesang-795082-unsplash.jpg",
        "https://lexgloballogistics.com/wp-content/uploads/2018/02/ed-1.jpg",
        "https://assets.website-files.com/5bd8adf923983b6ef049c9fe/5bd8e3f6cf26d34b0b7ac10a_p-2.jpg",
        "https://assets.website-files.com/5bd8adf923983b6ef049c9fe/5bd8e31c49a14202638e8840_p-4.jpg",
      ],
    };
  },
};
</script>

<style></style>
