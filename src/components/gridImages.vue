<template>
  <v-container fluid>
    <v-row class="mx-2">
      <v-col cols="3" v-for="(img, index) in images" :key="index" class="pa-1">
        <v-card class="white rounded-sm">
          <v-img :src="img" height="320px"></v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      images: [
        "https://lexgloballogistics.com/wp-content/uploads/2018/02/ed-1.jpg",
        "https://lexgloballogistics.com/wp-content/uploads/2018/02/Truck-2.jpg",
        "https://lexgloballogistics.com/wp-content/uploads/2018/02/logistic.jpg",
        "https://assets.website-files.com/5bd86c52b7abc5114b2ed43c/5bd8dbafef82dc4bd8245d41_nathan-fertig-249917-unsplash.jpg",
        "https://assets.website-files.com/5bd86c52b7abc5114b2ed43c/5bd8dbaf49a14257198e81cb_6.jpg",
        "https://assets.website-files.com/5bd86c52b7abc5114b2ed43c/5bd8dbafcf26d38b797ab7a8_julian-hochgesang-795082-unsplash.jpg",
        "https://assets.website-files.com/5bd8adf923983b6ef049c9fe/5bd8e3f6cf26d34b0b7ac10a_p-2.jpg",
        "https://assets.website-files.com/5bd8adf923983b6ef049c9fe/5bd8e31c49a14202638e8840_p-4.jpg",
      ],
    };
  },
};
</script>

<style></style>
