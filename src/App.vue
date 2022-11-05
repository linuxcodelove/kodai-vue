<template>
  <v-app>
    <v-carousel hide-delimiters cycle interval="4000" height="600">
      <v-app-bar app color="transparent" flat>
        <v-btn text>KODAIKANAL TRAVEL PLANNER</v-btn>
        <v-spacer></v-spacer>
        <v-btn text>Home</v-btn>
        <v-btn text>ROOMS</v-btn>
        <v-btn text>FOOD</v-btn>
        <v-btn text>ABOUT</v-btn>
        <v-btn text>CONTACT</v-btn>
        <v-spacer></v-spacer>
        <v-btn color="green">BOOK</v-btn>
      </v-app-bar>
      <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src">
        <v-container fill-height fluid pa-0 ma-0>
          <v-card class="pa-2 mx-auto" color="transparent" flat>
            <span class="text-h2 white--text" style="text-align: center"
              >Make yourself at home<br />in our hotel</span
            >
          </v-card>
        </v-container>
      </v-carousel-item>
    </v-carousel>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    items: [
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
      },
    ],
  }),
};
</script>
