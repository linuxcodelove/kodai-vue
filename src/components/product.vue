<template>
  <div>
    <v-row v-if="index % 2 == 0" class="px-8">
      <v-col cols="6" class="leftbox px-12">
        <h1 class="text-left font-weight-medium mb-3 grey--text">
          {{ item.title }}
        </h1>
        <div class="font-weight-light title">
          {{ item.desc }}
        </div>
      </v-col>
      <v-col cols="6">
        <v-container class="orange">
          <v-img :src="item.src"></v-img>
        </v-container>
      </v-col>
      <v-divider class="mx-4 mt-6 orange"></v-divider>
    </v-row>
    <v-row v-else class="px-8">
      <v-col cols="6">
        <v-container class="orange">
          <v-img :src="item.src"></v-img>
        </v-container>
      </v-col>
      <v-col cols="6" class="leftbox px-12">
        <h1 class="text-left font-weight-medium mb-3 grey--text">
          {{ item.title }}
        </h1>
        <div class="font-weight-light title">
          {{ item.desc }}
        </div>
      </v-col>

      <v-divider class="mx-4 mt-6 orange"></v-divider>
    </v-row>
    <!-- <v-card>
      <v-row>
        <v-col cols="4" class="py-0"
          ><v-img height="250" width="250" :src="item.src" dark></v-img
        ></v-col>
        <v-col cols="8" class="py-8">
          <v-card-title>{{ item.title }}</v-card-title>

          <v-divider class="mx-4"></v-divider>

          <v-card-text class="font-weight-light title-2">
            {{ item.desc }}
          </v-card-text>
        </v-col>
      </v-row>
    </v-card> -->
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {},
    },
    index: {
      type: Number,
      default: 0,
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
