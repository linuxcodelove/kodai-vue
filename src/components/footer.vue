<template>
  <div class="pa-12 secondary white--text">
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
        <v-col cols="4">
          <h2 class="mb-12">Contact info</h2>
          <p>327/9E Lawsghat Road, <br />Kodaikanal, 624 101</p>
          <p class="primary--text">service@kodaiguide.in</p>
          <p>+91-9840666992</p>
          <p>+91-9840666992</p>
          <div>
            <v-btn fab small class="mr-2"><v-icon>mdi-twitter</v-icon></v-btn>
            <v-btn fab small class="mr-2"><v-icon>mdi-facebook</v-icon></v-btn>
            <v-btn fab small class="mr-2"><v-icon>mdi-instagram</v-icon></v-btn>
          </div>
        </v-col>
        <v-col cols="4">
          <h2 class="mb-12">NAVIGATION</h2>
          <div class="subtitle">
            <p>Home</p>
            <p>Cottages</p>
            <p>Rental Cars</p>
            <p>Real Estate</p>
            <p>About</p>
            <p>Contact</p>
          </div>
        </v-col>
        <v-col cols="4">
          <h2 class="mb-12">INSTAGRAM</h2>
          <v-row>
            <v-col cols="4" v-for="(instaImage, i) in instaImages" :key="i">
              <v-img height="60" :src="instaImage"></v-img>
            </v-col>
          </v-row>
          <p class="caption mt-8">View More Photos</p>
          <v-btn text outlined color="primary" class="my-8 py-8" block
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
        "https://lexgloballogistics.com/wp-content/uploads/2018/02/ed-1.jpg",
        "https://lexgloballogistics.com/wp-content/uploads/2018/02/Truck-2.jpg",
        "https://lexgloballogistics.com/wp-content/uploads/2018/02/logistic.jpg",
        "https://lexgloballogistics.com/wp-content/uploads/2018/02/ed-1.jpg",
        "https://lexgloballogistics.com/wp-content/uploads/2018/02/Truck-2.jpg",
        "https://lexgloballogistics.com/wp-content/uploads/2018/02/logistic.jpg",
      ],
    };
  },
};
</script>

<style></style>
