<template>
  <v-container fluid class="text-center py-16 secondary">
    <div class="mb-16 mt-8">
      <h2 class="display-2 font-weight-bold">Explore the Shelter</h2>
    </div>
    <v-container>
      <v-row class="mx-10">
        <v-col cols="4">
          <div>
            <h1
              class="display-4 mb-6 font-weight-medium grey--text text--darken-3"
            >
              1
            </h1>
            <h5 class="grey--text text--lighten-1">Far away from city life</h5>
          </div>
        </v-col>
        <v-col cols="4">
          <div>
            <h1
              class="display-4 mb-6 font-weight-medium grey--text text--darken-3"
            >
              2
            </h1>
            <h5 class="grey--text text--lighten-1">
              Go for a walk in the woods
            </h5>
          </div>
        </v-col>
        <v-col cols="4">
          <div>
            <h1
              class="display-4 mb-6 font-weight-medium grey--text text--darken-3"
            >
              3
            </h1>
            <h5 class="grey--text text--lighten-1">
              Add calm to your schedule
            </h5>
          </div>
        </v-col>
      </v-row>
      <v-slide-group v-model="model" class="transparent my-8" show-arrows>
        <v-slide-item v-for="img in images" :key="img">
          <v-card width="352" class="rounded-sm px-1">
            <v-img :src="img" height="440"></v-img>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-container>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      model: null,
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
