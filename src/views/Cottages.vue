<template>
  <div>
    <carousel
      :items="items"
      title="welcome to"
      subtitle="KODAIKANAL TRAVEL PLANNER"
      description="The Palace is not safe when the"
      subDesc="Cottage is not happy"
    ></carousel>
    <cottages-list></cottages-list>
    <div class="accent">
      <v-container>
        <div class="text-center mt-2 mt-md-4 mb-2 mb-md-6 black--text">
          <h2>Discover</h2>
          <h1 class="doubleline">NEW ROOMS</h1>
        </div>
        <div class="black--text my-4">
          <v-row>
            <v-col cols="12 px-12 text-center"
              >Treat yourself to an overnight stay somewhere special. It’s your
              chance to discover Kodaikanal and all it has to offer. We provide
              various types of stays such as Individual cottages, Service
              apartments, Villa’s, Home stays, Tent stays, Wood houses, Tree
              houses, Forest bungalows, Star category resorts and Hotel rooms.
              Please view our 100+ cottages and resorts to book your space.
            </v-col>
          </v-row>
          <div class="text-center mt-6 mt-md-8 mb-6 mb-md-8">
            <v-btn
              text
              rounded
              class="primary caption px-10 py-6 black--text text--darken-2 font-weight-black"
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
          src: "banner1",
        },
        {
          src: "banner2",
        },
        {
          src: "banner3",
        },
        {
          src: "banner4",
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
