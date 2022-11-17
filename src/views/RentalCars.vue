<template>
  <div>
    <banner
      img="https://lexgloballogistics.com/wp-content/uploads/2018/02/ed-1.jpg"
      title="Rental Cars"
    ></banner>
    <who-we-are></who-we-are>
    <v-container fluid class="my-4 my-sm-8">
      <h2 class="text-center text-h5 text-sm-h4 text-xl-h3">
        Our Site Seeing Packages
      </h2>
      <v-row class="mt-2 mt-sm-6 mx-2">
        <v-col :cols="columns" v-for="pack in packages" :key="pack.title">
          <v-card class="secondary py-8 px-5">
            <h4 class="text-center text-h5" style="text-decoration: underline">
              {{ pack.title }}
            </h4>
            <div class="my-4 my-sm-6 mx-6 d-flex justify-center">
              <!-- <v-timeline dense dark>
                <v-timeline-item
                  v-for="place in pack.places"
                  :key="place"
                  class="caption font-weight-light"
                  small
                  >{{ place }}</v-timeline-item
                >
              </v-timeline> -->
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
          </v-card>
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
      packages: [
        {
          title: "Village Tour",
          places: [
            "Pine Tree Forest",
            "Palani Hill View",
            "Mahalakshmi Temple",
            "Poombarai village View",
            "3000 Years Old Temple",
            "Sheep Farm",
            "Rabbit Farm",
            "Mannamanur Lake",
            "Rose Garden",
            "Upper Lake View",
          ],
          price: {
            fourPeople: "Rs.3000 ",
            sevenPeople: "Rs.3500 ",
            tenPeople: "Rs.4500 ",
            aboveTen: "Enquire Us",
          },
        },
        {
          title: "Picnic Tour",
          places: [
            "Vattakanal Water Fall",
            "Lion Cave",
            "Mountain Beauty",
            "Dolphins Nose",
            "Echo Rock",
            "500 Years Old Tree",
            "Liril Water Fall",
          ],
          price: {
            fourPeople: "Rs.2500 ",
            sevenPeople: "Rs.2800 ",
            tenPeople: "Rs.3000 ",
            aboveTen: "Enquire Us",
          },
        },
        {
          title: "Valley Tour",
          places: [
            "Coakers Walk",
            "La Salette Church",
            "Moir Point",
            "Pine Tree Forest",
            "Guna Cave",
            "Pillar Rocks",
            "Green Valley View",
            "Pambar Falls",
            "Bryant Park",
            "Kodaikanal Lake",
            "500 Year Old Tree",
            "Upper Lake View",
            "Golf Course",
          ],
          price: {
            fourPeople: "Rs.2500 ",
            sevenPeople: "Rs.3000 ",
            tenPeople: "Rs.3500 ",
            aboveTen: "Enquire Us",
          },
        },
      ],
    };
  },
  computed: {
    columns() {
      if (this.$vuetify.breakpoint.xs || this.$vuetify.breakpoint.sm) return 12;
      return 4;
    },
  },
};
</script>

<style></style>
