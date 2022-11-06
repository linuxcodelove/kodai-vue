<template>
  <div>
    <v-card class="pb-2" height="480px">
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
    </v-card>
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
