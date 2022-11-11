<template>
  <div>
    <carousel :items="items"></carousel>
    <cottages-list></cottages-list>
    <div class="white">
      <v-container>
        <div class="text-center mt-12 mb-16 black--text">
          <h2>Discover</h2>
          <h1 class="doubleline">NEW ROOMS</h1>
        </div>
        <div class="black--text my-8">
          <v-row>
            <v-col cols="6"
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </v-col>
            <v-col cols="6"
              >Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.</v-col
            >
          </v-row>
          <div class="text-center mt-16 mb-12">
            <v-btn
              text
              rounded
              class="primary caption px-10 py-6 black--text text-darken-2 font-weight-black"
              >More About Us</v-btn
            >
          </div>
        </div>
      </v-container>
    </div>
    <customfooter></customfooter>
  </div>
</template>

<script>
import carousel from "../components/carousel.vue";
import cottagesList from "../components/cottagesList.vue";
import customfooter from "../components/footer.vue";

export default {
  components: {
    carousel,
    cottagesList,
    customfooter,
  },
  data() {
    return {
      items: [
        {
          src: "https://lexgloballogistics.com/wp-content/uploads/2018/02/ed-1.jpg",
        },
        {
          src: "https://lexgloballogistics.com/wp-content/uploads/2018/02/Truck-2.jpg",
        },
        {
          src: "https://lexgloballogistics.com/wp-content/uploads/2018/02/logistic.jpg",
        },
      ],
    };
  },
};
</script>

<style>
.doubleline {
  text-decoration: underline;
}
</style>
