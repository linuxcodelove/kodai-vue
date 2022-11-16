<template>
  <div>
    <banner
      img="https://lexgloballogistics.com/wp-content/uploads/2018/02/ed-1.jpg"
      title="Rental Cars"
    ></banner>
    <who-we-are></who-we-are>
    <v-container fluid class="my-12">
      <h2 class="text-center text-h3">Our Site Seeing Packages</h2>
      <v-row class="my-6">
        <v-col cols="4">
          <h4 class="text-center text-h5" style="text-decoration: underline">
            Village Tour
          </h4>
          <div class="d-flex justify-center my-6">
            <ul>
              <li class="my-2">Pine Tree Forest</li>
              <li class="my-2">Palani Hill View</li>
              <li class="my-2">Mahalakshmi Temple</li>
              <li class="my-2">Poombarai village View</li>
              <li class="my-2">3000 Years Old Temple</li>
              <li class="my-2">Sheep Farm</li>
              <li class="my-2">Rabbit Farm</li>
              <li class="my-2">Mannamanur Lake</li>
              <li class="my-2">Rose Garden</li>
              <li class="my-2">Upper Lake View</li>
            </ul>
          </div>
          <p class="text-center">Upto 4 people: Rs. 3000</p>
          <p class="text-center">Upto 7 people: Rs. 3500</p>
          <p class="text-center">Upto 10 people: Rs. 4500</p>
          <p class="text-center">Above 10 people: Enquire Us</p>
        </v-col>
        <v-divider vertical></v-divider>
        <v-col cols="4">
          <h4 class="text-center text-h5" style="text-decoration: underline">
            Picnic Tour
          </h4>
          <div class="d-flex justify-center my-6">
            <ul>
              <li class="my-2">Vattakanal Water Fall</li>
              <li class="my-2">Lion Cave</li>
              <li class="my-2">Mountain Beauty</li>
              <li class="my-2">Dolphins Nose</li>
              <li class="my-2">Echo Rock</li>
              <li class="my-2">500 Years Old Tree</li>
              <li class="my-2">Liril Water Fall</li>
            </ul>
          </div>
          <p class="text-center">Upto 4 people: Rs. 2500</p>
          <p class="text-center">Upto 7 people: Rs. 2800</p>
          <p class="text-center">Upto 10 people: Rs. 3000</p>
          <p class="text-center">Above 10 people: Enquire Us</p>
        </v-col>
        <v-divider vertical></v-divider>
        <v-col cols="4">
          <h4 class="text-center text-h5" style="text-decoration: underline">
            Valley Tour
          </h4>
          <div class="d-flex justify-center my-6">
            <ul>
              <li class="my-2">Coakers Walk</li>
              <li class="my-2">La Salette Church</li>
              <li class="my-2">Moir Point</li>
              <li class="my-2">Pine Tree Forest</li>
              <li class="my-2">Guna Cave</li>
              <li class="my-2">Pillar Rocks</li>
              <li class="my-2">Green Valley View</li>
              <li class="my-2">Pambar Falls</li>
              <li class="my-2">Bryant Park</li>
              <li class="my-2">Kodaikanal Lake</li>
              <li class="my-2">500 Year Old Tree</li>
              <li class="my-2">Upper Lake View</li>
              <li class="my-2">Golf Course</li>
            </ul>
          </div>
          <p class="text-center">Upto 4 people: Rs. 2500</p>
          <p class="text-center">Upto 7 people: Rs. 3000</p>
          <p class="text-center">Upto 10 people: Rs. 3500</p>
          <p class="text-center">Above 10 people: Enquire Us</p>
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
    return {};
  },
};
</script>

<style></style>
