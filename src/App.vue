<template>
  <v-app>
    <v-app-bar app color="primary" flat>
      <v-btn text
        ><strong class="font-weight-black text-h6">KODAIKANAL</strong> TRAVEL
        PLANNER</v-btn
      >
      <v-spacer></v-spacer>
      <v-btn text @click="$router.push('/')">Home</v-btn>
      <v-btn text @click="$router.push('/cottages')">Cottages</v-btn>
      <v-btn text>RENTAL CARS</v-btn>
      <v-btn text>REAL ESTATE</v-btn>
      <v-btn text @click="$router.push('/about')">ABOUT</v-btn>
      <v-btn text>CONTACT</v-btn>
      <!-- <v-spacer></v-spacer>
      <v-btn color="green">BOOK</v-btn> -->
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({}),
};
</script>
