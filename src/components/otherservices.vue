<template>
  <div class="pb-6">
    <v-container height="540px" class="primary my-8">
      <v-img :src="item.src" height="240px"></v-img>
      <div class="pa-4">
        <h2 class="font-weight-bold mb-3 grey--text text--darken-3">
          {{ item.title }}
        </h2>
        <div class="font-weight-medium subtitle-1 grey--text text--darken-3">
          {{ item.desc }}
        </div>
      </div>
    </v-container>
    <!-- <v-card class="pb-2" height="480px">
      <v-img height="180" :src="item.src"></v-img>
      <div class="py-4">
        <v-card-title class="subtitle-1 font-weight-bold">{{
          item.title
        }}</v-card-title>

        <v-divider class="mx-4"></v-divider>

        <v-card-text>
          {{ item.desc }}
        </v-card-text>
      </div>
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
  },
};
</script>

<style></style>
