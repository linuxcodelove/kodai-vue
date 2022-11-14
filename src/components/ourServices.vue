<template>
  <div>
    <v-card
      max-width="100%"
      class="mx-auto py-6 secondary"
      style="margin-top: -48px"
      outlined
    >
      <v-sheet max-width="1200px" class="mx-auto px-6" color="transparent">
        <v-card-title
          class="justify-center display-1 font-weight-bold text--darken-3 text-center"
          >Our Services</v-card-title
        >
        <v-divider class="mx-4 mt-6 mb-8 primary"></v-divider>
        <v-row>
          <v-col
            cols="12"
            v-for="(service, index) in services"
            :key="service.title"
            class="my-8"
          >
            <product :item="service" :index="index"></product>
          </v-col>
        </v-row>
        <div>
          <h1 class="text-center">Our Cottages</h1>
          <other-services :items="otherServices"></other-services>
        </div>
        <div>
          <h1 class="text-center">Our Projects</h1>
          <other-services :items="otherServices"></other-services>
        </div>
        <!-- <v-row>
          <v-col cols="4" v-for="os in otherServices" :key="os.title">
            <otherServices :item="os"></otherServices>
          </v-col>
        </v-row> -->
      </v-sheet>
    </v-card>
  </div>
</template>

<script>
import product from "../components/product.vue";
import otherServices from "../components/otherservices.vue";
export default {
  components: {
    product,
    otherServices,
  },
  data() {
    return {
      model: null,
      services: [
        {
          src: "https://lexgloballogistics.com/wp-content/uploads/2018/02/ed-1.jpg",
          title: "Resort & Cottage",
          desc: "Book budget and luxury hotels at best price. Whether you are a honeymooner, unmarried couples, solo traveler or with friends and family we provide wide range of services",
        },
        {
          src: "https://lexgloballogistics.com/wp-content/uploads/2018/02/Truck-2.jpg",
          title: "Rental Cars & Tour Packages",
          desc: "Catering is the most important part of any trip. To make you feel more comfortable, we provide you delicious cuisine by experts. We cater all varieties of food Such as Indian , Chinese etc.",
        },
        {
          src: "https://lexgloballogistics.com/wp-content/uploads/2018/02/logistic.jpg",
          title: "Investment Opportunities",
          desc: "We arrange a qualified staff to accompany and who can get access to the place, explain the importance of the place, support, and guide the participants through the entire visit.",
        },
      ],
      otherServices: [
        "https://lexgloballogistics.com/wp-content/uploads/2018/02/ed-1.jpg",
        "https://lexgloballogistics.com/wp-content/uploads/2018/02/Truck-2.jpg",
        "https://lexgloballogistics.com/wp-content/uploads/2018/02/logistic.jpg",
        "https://assets.website-files.com/5bd86c52b7abc5114b2ed43c/5bd8dbafef82dc4bd8245d41_nathan-fertig-249917-unsplash.jpg",
        "https://assets.website-files.com/5bd86c52b7abc5114b2ed43c/5bd8dbaf49a14257198e81cb_6.jpg",
        "https://assets.website-files.com/5bd86c52b7abc5114b2ed43c/5bd8dbafcf26d38b797ab7a8_julian-hochgesang-795082-unsplash.jpg",
        "https://assets.website-files.com/5bd8adf923983b6ef049c9fe/5bd8e3f6cf26d34b0b7ac10a_p-2.jpg",
        "https://assets.website-files.com/5bd8adf923983b6ef049c9fe/5bd8e31c49a14202638e8840_p-4.jpg",
        "https://assets.website-files.com/5bd86c52b7abc5114b2ed43c/5bd8dbaf49a14257198e81cb_6.jpg",
      ],
    };
  },
};
</script>

<style></style>
