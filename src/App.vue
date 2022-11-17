<template>
  <v-app>
    <v-app-bar app color="primary" flat>
      <v-app-bar-nav-icon
        v-if="isSmallerDevice"
        @click="showDrawer = true"
      ></v-app-bar-nav-icon>
      <v-btn text
        ><strong class="font-weight-black text-h6">KODAIKANAL</strong> TRAVEL
        PLANNER</v-btn
      >
      <v-spacer></v-spacer>
      <v-toolbar-items v-if="!isSmallerDevice">
        <v-btn text @click="$router.push('/')">HOME</v-btn>
        <v-btn text @click="$router.push('/cottages')">COTTAGES</v-btn>
        <v-btn text @click="$router.push('/rentalcars')">RENTAL CARS</v-btn>
        <v-btn text>REAL ESTATE</v-btn>
        <v-btn text @click="$router.push('/about')">ABOUT</v-btn>
        <v-btn text @click="$router.push('/contact')">CONTACT</v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-navigation-drawer
      v-model="showDrawer"
      absolute
      temporary
      class="primary"
      dark
    >
      <v-list nav dense>
        <v-list-item-group>
          <v-list-item @click="$router.push('/')">
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>
          <v-list-item @click="$router.push('/cottages')">
            <v-list-item-title>Cottages</v-list-item-title>
          </v-list-item>
          <v-list-item @click="$router.push('/rentalcars')">
            <v-list-item-title>RENTAL CARS</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>REAL ESTATE</v-list-item-title>
          </v-list-item>
          <v-list-item @click="$router.push('/about')">
            <v-list-item-title>ABOUT</v-list-item-title>
          </v-list-item>
          <v-list-item @click="$router.push('/contact')">
            <v-list-item-title>CONTACT</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    showDrawer: false,
  }),
  computed: {
    isSmallerDevice() {
      return this.$vuetify.breakpoint.smAndDown;
    },
  },
};
</script>
