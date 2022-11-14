<template>
  <v-container fill-height fluid pa-0 ma-0>
    <v-card class="mx-auto" color="transparent" flat height="720px">
      <v-img height="720px" :src="img" class="d-flex align-center">
        <div class="display-2 font-weight-bold">
          <h2 class="text-center">{{ title }}</h2>
          <h3 v-if="subtitle" class="text-center my-10">{{ subtitle }}</h3>
        </div>
      </v-img>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    subtitle: {
      type: String,
      default: "",
    },
  },
};
</script>

<style></style>
