<template>
  <v-container>
    <v-row class="px-8">
      <v-col cols="6">
        <v-card class="primary pa-2">
          <v-img height="400px" :src="selectedImage"></v-img>
        </v-card>
      </v-col>
      <v-col cols="6" class="leftbox px-12">
        <h1 class="text-left font-weight-medium mb-3">{{ item.name }}</h1>
        <div class="font-weight-light title">
          {{ item.description }}
        </div>
        <v-btn text outlined color="primary" class="my-8 py-8">Book Now</v-btn>
      </v-col>
    </v-row>
    <v-row class="px-8">
      <v-col
        cols="3"
        v-for="(image, index) in listImages"
        :key="index"
        @click="makeSelectedImage(index)"
      >
        <v-card class="primary pa-1 card">
          <v-img height="140px" :src="image"></v-img>
        </v-card>
      </v-col>
    </v-row>
    <v-divider class="mt-12 primary"></v-divider>
  </v-container>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      selectedImage: "",
      listImages: [],
    };
  },
  created() {
    this.selectedImage = this.item.images[0];
    this.listImages = [...this.item.images].slice(1);
  },
  methods: {
    makeSelectedImage(index) {
      const img = this.selectedImage;
      this.selectedImage = this.listImages[index];
      this.listImages[index] = img;
    },
  },
};
</script>

<style scoped>
.leftbox {
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
}
</style>
