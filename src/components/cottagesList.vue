<template>
  <v-card max-width="100%" class="mx-auto py-0 py-sm-6 secondary" outlined>
    <v-sheet max-width="1200px" class="mx-auto px-6" color="transparent">
      <v-card-title
        class="justify-center headline text-sm-h4 text-xl-h2 font-weight-bold text--darken-3 text-center"
        >Book Your Cottages</v-card-title
      >
      <v-divider class="mx-4 mb-2 mb-sm-8 mt-0 mt-sm-6 primary"></v-divider>
      <v-row class="my-4 my-sm-0">
        <div class="cottageList mb-0" style="height: 2078px">
          <v-col
            cols="12"
            v-for="(cottage, index) in cottages"
            :key="index"
            class="py-0 py-sm-2"
          >
            <cottage-single
              :item="cottage"
              :edit="edit"
              @editItem="editItem"
            ></cottage-single>
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
  props: {
    edit: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      cottages: [
        {
          name: "Kodai Cottage - 1",
          location: "27/9E Lawsghat Road, Kodaikanal, 624 101",
          rooms: "3",
          personsAllowed: "6",
          price: "7000",
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
          location: "27/9E Lawsghat Road, Kodaikanal, 624 101",
          rooms: "3",
          personsAllowed: "6",
          price: "7000",
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
          location: "27/9E Lawsghat Road, Kodaikanal, 624 101",
          rooms: "3",
          personsAllowed: "6",
          price: "7000",
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
          location: "27/9E Lawsghat Road, Kodaikanal, 624 101",
          rooms: "3",
          personsAllowed: "6",
          price: "7000",
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
          location: "27/9E Lawsghat Road, Kodaikanal, 624 101",
          rooms: "3",
          personsAllowed: "6",
          price: "7000",
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
          location: "27/9E Lawsghat Road, Kodaikanal, 624 101",
          rooms: "3",
          personsAllowed: "6",
          price: "7000",
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
  methods: {
    editItem(item) {
      this.$emit("editItem", item);
    },
  },
};
</script>

<style scoped>
.cottageList {
  overflow: auto;
  overflow-x: hidden;
}
</style>
