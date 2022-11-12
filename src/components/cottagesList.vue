<template>
  <v-card
    max-width="100%"
    class="mx-auto py-6 secondary"
    style="margin-top: -48px"
    outlined
  >
    <v-sheet max-width="1200px" class="mx-auto px-6" color="transparent">
      <v-card-title
        class="justify-center display-1 font-weight-bold text--darken-3 text-center"
        >Book Your Cottages</v-card-title
      >
      <v-divider class="mx-4 mt-6 mb-8 primary"></v-divider>
      <v-row>
        <div class="cottageList mb-2" style="height: 2078px">
          <v-col cols="12" v-for="(cottage, index) in cottages" :key="index">
            <cottage-single :item="cottage"></cottage-single>
          </v-col>
        </div>
      </v-row>
    </v-sheet>
  </v-card>
</template>

<script>
import cottageSingle from "../components/cottageSingle.vue";
export default {
  components: {
    cottageSingle,
  },
  data() {
    return {
      cottages: [
        {
          name: "Kodai Cottage - 1",
          description:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          images: [
            "https://assets.website-files.com/5bd86c52b7abc5114b2ed43c/5bd8dbafef82dc4bd8245d41_nathan-fertig-249917-unsplash.jpg",
            "https://assets.website-files.com/5bd86c52b7abc5114b2ed43c/5bd8dbaf49a14257198e81cb_6.jpg",
            "https://assets.website-files.com/5bd86c52b7abc5114b2ed43c/5bd8dbafcf26d38b797ab7a8_julian-hochgesang-795082-unsplash.jpg",
            "https://assets.website-files.com/5bd8adf923983b6ef049c9fe/5bd8e3f6cf26d34b0b7ac10a_p-2.jpg",
            "https://assets.website-files.com/5bd8adf923983b6ef049c9fe/5bd8e31c49a14202638e8840_p-4.jpg",
          ],
        },
        {
          name: "Kodai Cottage - 2",
          description:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          images: [
            "https://assets.website-files.com/5bd86c52b7abc5114b2ed43c/5bd8dbafef82dc4bd8245d41_nathan-fertig-249917-unsplash.jpg",
            "https://assets.website-files.com/5bd86c52b7abc5114b2ed43c/5bd8dbaf49a14257198e81cb_6.jpg",
            "https://assets.website-files.com/5bd86c52b7abc5114b2ed43c/5bd8dbafcf26d38b797ab7a8_julian-hochgesang-795082-unsplash.jpg",
            "https://assets.website-files.com/5bd8adf923983b6ef049c9fe/5bd8e3f6cf26d34b0b7ac10a_p-2.jpg",
            "https://assets.website-files.com/5bd8adf923983b6ef049c9fe/5bd8e31c49a14202638e8840_p-4.jpg",
          ],
        },
        {
          name: "Kodai Cottage - 3",
          description:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          images: [
            "https://assets.website-files.com/5bd86c52b7abc5114b2ed43c/5bd8dbafef82dc4bd8245d41_nathan-fertig-249917-unsplash.jpg",
            "https://assets.website-files.com/5bd86c52b7abc5114b2ed43c/5bd8dbaf49a14257198e81cb_6.jpg",
            "https://assets.website-files.com/5bd86c52b7abc5114b2ed43c/5bd8dbafcf26d38b797ab7a8_julian-hochgesang-795082-unsplash.jpg",
            "https://assets.website-files.com/5bd8adf923983b6ef049c9fe/5bd8e3f6cf26d34b0b7ac10a_p-2.jpg",
            "https://assets.website-files.com/5bd8adf923983b6ef049c9fe/5bd8e31c49a14202638e8840_p-4.jpg",
          ],
        },
        {
          name: "Kodai Cottage - 4",
          description:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          images: [
            "https://assets.website-files.com/5bd86c52b7abc5114b2ed43c/5bd8dbafef82dc4bd8245d41_nathan-fertig-249917-unsplash.jpg",
            "https://assets.website-files.com/5bd86c52b7abc5114b2ed43c/5bd8dbaf49a14257198e81cb_6.jpg",
            "https://assets.website-files.com/5bd86c52b7abc5114b2ed43c/5bd8dbafcf26d38b797ab7a8_julian-hochgesang-795082-unsplash.jpg",
            "https://assets.website-files.com/5bd8adf923983b6ef049c9fe/5bd8e3f6cf26d34b0b7ac10a_p-2.jpg",
            "https://assets.website-files.com/5bd8adf923983b6ef049c9fe/5bd8e31c49a14202638e8840_p-4.jpg",
          ],
        },
        {
          name: "Kodai Cottage - 5",
          description:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          images: [
            "https://assets.website-files.com/5bd86c52b7abc5114b2ed43c/5bd8dbafef82dc4bd8245d41_nathan-fertig-249917-unsplash.jpg",
            "https://assets.website-files.com/5bd86c52b7abc5114b2ed43c/5bd8dbaf49a14257198e81cb_6.jpg",
            "https://assets.website-files.com/5bd86c52b7abc5114b2ed43c/5bd8dbafcf26d38b797ab7a8_julian-hochgesang-795082-unsplash.jpg",
            "https://assets.website-files.com/5bd8adf923983b6ef049c9fe/5bd8e3f6cf26d34b0b7ac10a_p-2.jpg",
            "https://assets.website-files.com/5bd8adf923983b6ef049c9fe/5bd8e31c49a14202638e8840_p-4.jpg",
          ],
        },
        {
          name: "Kodai Cottage - 6",
          description:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          images: [
            "https://assets.website-files.com/5bd86c52b7abc5114b2ed43c/5bd8dbafef82dc4bd8245d41_nathan-fertig-249917-unsplash.jpg",
            "https://assets.website-files.com/5bd86c52b7abc5114b2ed43c/5bd8dbaf49a14257198e81cb_6.jpg",
            "https://assets.website-files.com/5bd86c52b7abc5114b2ed43c/5bd8dbafcf26d38b797ab7a8_julian-hochgesang-795082-unsplash.jpg",
            "https://assets.website-files.com/5bd8adf923983b6ef049c9fe/5bd8e3f6cf26d34b0b7ac10a_p-2.jpg",
            "https://assets.website-files.com/5bd8adf923983b6ef049c9fe/5bd8e31c49a14202638e8840_p-4.jpg",
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.cottageList {
  overflow: auto;
  overflow-x: hidden;
}
</style>
