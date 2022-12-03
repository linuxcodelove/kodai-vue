<template>
  <div>
    <banner
      img="https://lexgloballogistics.com/wp-content/uploads/2018/02/ed-1.jpg"
      title=""
      subtitle=""
      description=""
      :book="true"
    ></banner>
    <who-we-are
      title="Our Services"
      desc="We have exhaustive list of vehicles available for rent in kodaikanal. We arrange Inner City, Outer City, One way and Round trip travel services in and around kodaikanal. Our tour packages includes Stay arrangements, rental vehicles for site seeing, activities such as Trekking, Jeep Safari, Jungle Ride, Off Roading, Camp fire with music, Cycling, Boating and Horse riding. We offers various packages for Honey Moon Couples, Family Vacation, Group Stay and Solo Travelers. "
    ></who-we-are>
    <v-container fluid class="bg py-4 py-sm-8">
      <h2 class="text-center text-h5 text-sm-h4 text-xl-h3">
        Our Site Seeing Packages
      </h2>
      <v-row class="my-2 my-sm-6 mx-2">
        <v-col :cols="columns" v-for="img in images" :key="img">
          <v-card class="secondary">
            <v-img :src="img"></v-img>
          </v-card>
          <!-- <v-card class="secondary py-8 px-5">
            <h4 class="text-center text-h5" style="text-decoration: underline">
              {{ pack.title }}
            </h4>
            <div class="my-4 my-sm-6 mx-6 d-flex justify-center">
              <ul>
                <li
                  v-for="place in pack.places"
                  :key="place"
                  class="my-2 body font-weight-medium"
                >
                  {{ place }}
                </li>
              </ul>
            </div>
            <div>
              <p class="text-center">
                Upto 4 people: {{ pack.price.fourPeople }}
              </p>
              <p class="text-center">
                Upto 7 people: {{ pack.price.sevenPeople }}
              </p>
              <p class="text-center">
                Upto 10 people: {{ pack.price.tenPeople }}
              </p>
              <p class="text-center">
                Above 10 people: {{ pack.price.aboveTen }}
              </p>
            </div>
          </v-card> -->
        </v-col>
      </v-row>
    </v-container>
    <custom-footer></custom-footer>
  </div>
</template>

<script>
import banner from "../components/banner.vue";
import whoWeAre from "../components/whoWeAre.vue";
import customFooter from "../components/footer.vue";

export default {
  components: {
    banner,
    whoWeAre,
    customFooter,
  },
  data() {
    return {
      images: [
        "https://projectcottage.000webhostapp.com/packages/village.jpeg",
        "https://projectcottage.000webhostapp.com/packages/picnic.jpeg",
        "https://projectcottage.000webhostapp.com/packages/valley.jpeg",
      ],
    };
  },
  computed: {
    columns() {
      if (this.$vuetify.breakpoint.xs) return 12;
      return 4;
    },
  },
};
</script>

<style></style>
