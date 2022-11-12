<template>
  <div>
    <v-card height="540" width="306" class="primary mx-4 pa-3 rounded-sm">
      <v-img :src="item.src" height="240px"></v-img>
      <div class="pa-4">
        <p class="font-weight-bold mb-3 grey--text text--lighten-2 title">
          {{ item.title }}
        </p>
        <div class="font-weight-medium title-2 grey--text text--darken-3">
          {{ item.desc }}
        </div>
      </div>
    </v-card>

    <!-- <v-container height="540px" width="302px" class="primary my-8">
      <v-img :src="item.src" height="240px"></v-img>
      <div class="pa-4">
        <h2 class="font-weight-bold mb-3 grey--text text--darken-3">
          {{ item.title }}
        </h2>
        <div class="font-weight-medium subtitle-1 grey--text text--darken-3">
          {{ item.desc }}
        </div>
      </div>
    </v-container> -->
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
