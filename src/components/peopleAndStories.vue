<template>
  <v-container fluid class="py-8">
    <v-row class="ma-8">
      <v-col cols="4">
        <div class="mx-auto">
          <h5 class="my-4">PEOPLE AND STORIES</h5>
          <h3 class="my-4 display-1">The Choice of Shelter</h3>
          <p class="my-8">
            Broker ipsum dolor sit amet, consectetuer luxury elit. Carrara
            marble commodo ligula eget dolor cum sociis cozy penatibus et magnis
          </p>
        </div>
      </v-col>
      <v-col cols="8">
        <v-row class="mx-8">
          <v-col cols="6" v-for="item in sayings" :key="item.text">
            <v-card class="white rounded-sm pa-2 my-1" height="360px">
              <v-img :src="item.img" height="200px"></v-img>
              <h3 class="my-10 mx-5 grey--text text--darken-2 text-center">
                "{{ item.text }}"
              </h3>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      sayings: [
        {
          img: "https://lexgloballogistics.com/wp-content/uploads/2018/02/ed-1.jpg",
          text: "To get out of the city with all the necessities and nothing more",
        },
        {
          img: "https://lexgloballogistics.com/wp-content/uploads/2018/02/Truck-2.jpg",
          text: "The nature interact as a piece of furniture with such a prominent place",
        },
        {
          img: "https://lexgloballogistics.com/wp-content/uploads/2018/02/logistic.jpg",
          text: "A unique space to unload and recharge even with your childs",
        },
        {
          img: "https://assets.website-files.com/5bd86c52b7abc5114b2ed43c/5bd8dbafef82dc4bd8245d41_nathan-fertig-249917-unsplash.jpg",
          text: "A place with nature omnipresent and the landscape purposely framed",
        },
      ],
    };
  },
};
</script>

<style></style>
