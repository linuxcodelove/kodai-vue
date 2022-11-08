<template>
  <v-carousel hide-delimiters interval="4000" height="720" cycle>
    <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src">
      <v-container fill-height fluid pa-0 ma-0>
        <v-card class="pa-2 mx-auto" color="transparent" flat>
          <p class="text-h2 white--text">Make yourself at home</p>
          <p class="text-h2 white--text text-center">in our hotel</p>
        </v-card>
      </v-container>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style></style>
