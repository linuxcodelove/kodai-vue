<template>
  <div
    class="accent pa-16 d-flex justify-center align-center"
    style="position: relative"
  >
    <div style="margin-left: 25%">
      <v-img
        src="https://lexgloballogistics.com/wp-content/uploads/2018/02/Truck-2.jpg"
        height="600px"
        width="480px"
      ></v-img>
    </div>
    <div style="position: absolute; margin-right: 25%">
      <v-card width="440px" height="440px" color="secondary">
        <div class="pa-16 aboutleft">
          <h2
            class="display-1 font-weight-regular mb-3 grey--text text--darken-3"
          >
            ABOUT US
          </h2>
          <div
            class="font-weight-light display-2 white--text text--lighten-2 py-3"
            style="line-height: 1.2"
          >
            Make yourself at home <br />
            in our hotel
          </div>
          <v-btn
            text
            class="my-4 white--text"
            width="100px"
            style="border-bottom: 2px solid #fff; border-radius: 0px"
            >Learn more</v-btn
          >
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.aboutleft {
  display: flex;
  justify-content: center;
  /* align-items: center; */
  flex-direction: column;
}
</style>
