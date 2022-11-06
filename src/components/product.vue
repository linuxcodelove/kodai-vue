<template>
  <div>
    <v-card>
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
