<template>
  <div>
    <carousel :items="items"></carousel>
    <v-container fluid class="text-center my-16">
      <div class="mb-8">
        <h2 class="display-2 font-weight-bold">What We Do?</h2>
        <span class="font-weight-medium white--text">
          as a Kodaikanal Travel Planner</span
        >
      </div>

      <div
        class="font-weight-light mx-auto title mb-16"
        style="width: 720px; max-width: 720px"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>
    </v-container>
    <v-card
      max-width="95%"
      class="mx-auto py-6 grey lighten-3"
      light
      elevation="24"
      style="margin-top: -48px"
      outlined
    >
      <v-sheet max-width="800px" class="mx-auto" color="transparent">
        <v-card-title
          class="justify-center display-1 font-weight-bold grey--text text--darken-3 text-center"
          >Our Services</v-card-title
        >
        <!-- <v-divider class="mx-4"></v-divider> -->
        <v-row class="pt-8">
          <v-col
            cols="12"
            v-for="service in services"
            :key="service.title"
            class="my-3"
          >
            <product :item="service"></product>
          </v-col>
        </v-row>
        <v-row class="pb-8">
          <v-col cols="4" v-for="os in otherServices" :key="os.title">
            <otherServices :item="os"></otherServices>
          </v-col>
        </v-row>
      </v-sheet>
    </v-card>
    <v-container fluid class="text-center my-8">
      <div class="mb-8">
        <h2 class="display-2 font-weight-bold">About us</h2>
      </div>

      <div
        class="font-weight-light mx-auto title mb-16"
        style="width: 720px; max-width: 720px"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>
    </v-container>
  </div>
</template>

<script>
import product from "../components/product.vue";
import otherServices from "../components/otherservices.vue";
import carousel from "../components/carousel.vue";
export default {
  name: "Home",
  components: {
    product,
    otherServices,
    carousel,
  },
  data() {
    return {
      items: [
        {
          src: "https://lexgloballogistics.com/wp-content/uploads/2018/02/ed-1.jpg",
        },
        {
          src: "https://lexgloballogistics.com/wp-content/uploads/2018/02/Airplane.jpg",
        },
        {
          src: "https://lexgloballogistics.com/wp-content/uploads/2018/02/Truck-2.jpg",
        },
        {
          src: "https://lexgloballogistics.com/wp-content/uploads/2018/02/logistic.jpg",
        },
      ],
      services: [
        {
          src: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
          title: "Resort & Cottage",
          desc: "Book budget and luxury hotels at best price. Whether you are a honeymooner, unmarried couples, solo traveler or with friends and family we provide wide range of services",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
          title: "Rental Cars & Tour Packages",
          desc: "Catering is the most important part of any trip. To make you feel more comfortable, we provide you delicious cuisine by experts. We cater all varieties of food Such as Indian , Chinese etc.",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
          title: "Investment Opportunities",
          desc: "We arrange a qualified staff to accompany and who can get access to the place, explain the importance of the place, support, and guide the participants through the entire visit.",
        },
      ],
      otherServices: [
        {
          src: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
          title: "Cabs & Hiring Cars",
          size: "small",
          desc: "Avoid hassles of Self-drive with our rental cars .We provide our guests with reliable and premium Intercity and Local car rental services.Hire Trusted and professional acting drivers for local and outstation travels.",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
          title: "Organic Groceries",
          size: "small",
          desc: "To make your trip easier we delivers you with large variety of organic products like dairy products, breads, fruits, vegetables, fresh meat, sea foods, grocery, baby foods , herbal oils & spices, snacks, etc at your door step.",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/cards/cooking.png",
          title: "Home made Chocolates",
          size: "small",
          desc: "If you wish to shop for kodai special homemade chocolates then this is the right place you can buy all variety of finely handcrafted, quality chocolates packed attractively to suit your occasion are available at reasonable price.",
        },
      ],
    };
  },
};
</script>
