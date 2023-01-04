<template>
  <v-app>
    <v-app-bar app color="secondary" elevation="24">
      <v-app-bar-nav-icon
        v-if="isSmallerDevice"
        @click="showDrawer = true"
      ></v-app-bar-nav-icon>
      <div class="px-4 font-weight-medium red--text">
        <!-- <v-avatar size="30" class="mr-2 mb-1">
          <v-img :src="require('./assets/kodailogo.jpg')"></v-img>
        </v-avatar> -->
        <strong class="font-weight-black text-h6 white--text"
          >KODAIKANAL</strong
        >
        TRIPADVISOR
      </div>
      <v-spacer></v-spacer>
      <v-toolbar-items v-if="!isSmallerDevice">
        <v-btn text @click="$router.push('/').catch((err) => {})">HOME</v-btn>
        <v-btn text @click="$router.push('/cottages')">COTTAGES</v-btn>
        <v-btn text @click="$router.push('/rentalcars')">RENTAL CARS</v-btn>
        <v-btn text @click="$router.push('/')">REAL ESTATE</v-btn>
        <v-btn text @click="$router.push('/about')">ABOUT</v-btn>
        <v-btn text @click="$router.push('/contact')">CONTACT</v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-navigation-drawer v-model="showDrawer" class="primary" dark fixed>
      <v-list nav dense>
        <v-list-item-group>
          <v-list-item @click="$router.push('/')">
            <v-list-item-title class="grey--text text--darken-2"
              >HOME</v-list-item-title
            >
          </v-list-item>
          <v-list-item @click="$router.push('/cottages')">
            <v-list-item-title class="grey--text text--darken-2"
              >COTTAGES</v-list-item-title
            >
          </v-list-item>
          <v-list-item @click="$router.push('/rentalcars')">
            <v-list-item-title class="grey--text text--darken-2"
              >RENTAL CARS</v-list-item-title
            >
          </v-list-item>
          <v-list-item @click="$router.push('/')">
            <v-list-item-title class="grey--text text--darken-2"
              >REAL ESTATE</v-list-item-title
            >
          </v-list-item>
          <v-list-item @click="$router.push('/about')">
            <v-list-item-title class="grey--text text--darken-2"
              >ABOUT</v-list-item-title
            >
          </v-list-item>
          <v-list-item @click="$router.push('/contact')">
            <v-list-item-title class="grey--text text--darken-2"
              >CONTACT</v-list-item-title
            >
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <chat-with-us></chat-with-us>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import chatWithUs from "./components/chatWithUs.vue";
import { mapMutations } from "vuex";
// import { metaInfo } from "vue-meta";
export default {
  name: "App",
  // metaInfo: {
  //   title: "Kodaikanal TripAdvisor",
  //   titleTemplate: "%s - Book Cottages and Resorts in Kodaikanal",
  //   meta: [
  //     {
  //       name: "description",
  //       content:
  //         "We Guarantee you our best packages for holiday tours &amp; travels in Kodaikanal. Our team spends its major focus on giving safe &amp; secure trips. Our expert trip makers guide you by giving complete information on the trip and live guidance.",
  //     },
  //     {
  //       name: "keywords",
  //       content:
  //         "best cottages in kodaikanal , 3 bedroom cottages in kodaikanal, 2 bedroom cottages in kodaikanal, family cottages in kodaikanal, independent cottages in kodaikanal, Villas in kodaikanal, wooden cottages in kodaikanal, cottages in kodaikanal for couples, Resorts in Kodaikanal, Hotel Rooms in Kodaikanal, Cheap cottages in kodaikanal, low budget cottages in Kodaikanal, Wood house in Kodaikanal, Cottages in vattakanal, cottages with view in kodaikanal.",
  //     },
  //     {
  //       name: "robots",
  //       content: "index, follow",
  //     },
  //     {
  //       httpEquiv: "Content-Type",
  //       content: "text/html; charset=utf-8",
  //     },
  //     {
  //       name: "language",
  //       content: "English",
  //     },
  //     {
  //       property: "og:title",
  //       content:
  //         "Kodaikanl TripAdvisor - Book Cottages and Resorts in Kodaikanal",
  //     },
  //     {
  //       property: "og:site_name",
  //       content: "Kodaikanal TripAdvisor",
  //     },
  //     {
  //       property: "og:url",
  //       content: "https://www.kodaiguide.in",
  //     },
  //     {
  //       property: "og:description",
  //       content:
  //         "We Guarantee you with our best packages for holiday tours &amp; travels in Kodaikanal. Our team spends its major focus on giving safe &amp; secure trips. Our expert trip makers guide you by giving complete information on the trip and live guidance",
  //     },
  //     {
  //       property: "og:type",
  //       content: "website",
  //     },
  //     {
  //       property: "og:image",
  //       content:
  //         "https://lh3.googleusercontent.com/p/AF1QipPvk0vxEj3ekof7kFl5hukJ2VFbugyMDAsgB8bF=s680-w680-h510",
  //     },
  //     {
  //       name: "twitter:card",
  //       content: "summary",
  //     },
  //     {
  //       name: "twitter:site",
  //       content: "@Kodaikanal TripAdvisor",
  //     },
  //     {
  //       name: "twitter:title",
  //       content:
  //         "Kodaikanl TripAdvisor - Book Cottages and Resorts in Kodaikanal",
  //     },
  //     {
  //       name: "twitter:description",
  //       content:
  //         "We Guarantee you our best packages for holiday tours &amp; travels in Kodaikanal. Our team spends its major focus on giving safe &amp; secure trips. Our expert trip makers guide you by giving complete",
  //     },
  //     {
  //       name: "twitter:image",
  //       content:
  //         "https://lh3.googleusercontent.com/p/AF1QipPvk0vxEj3ekof7kFl5hukJ2VFbugyMDAsgB8bF=s680-w680-h510",
  //     },
  //   ],
  //   link: [
  //     {
  //       rel: "canonical",
  //       href: "https://www.kodaiguide.in/",
  //     },
  //   ],
  // },
  components: {
    chatWithUs,
  },
  data: () => ({
    showDrawer: false,
  }),
  computed: {
    isSmallerDevice() {
      return this.$vuetify.breakpoint.smAndDown;
    },
  },
  methods: {
    ...mapMutations(["updateMobile"]),
  },
  mounted() {
    this.updateMobile(this.$vuetify.breakpoint.xs);
  },
};
</script>
<style>
@font-face {
  font-family: "EBGaramond";
  src: local("EBGaramond"),
    url(./fonts/EBGaramond-Regular.ttf) format("truetype");
}
</style>
