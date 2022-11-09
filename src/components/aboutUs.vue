<template>
  <div
    class="orange pa-16 d-flex justify-center align-center"
    style="position: relative"
  >
    <div style="margin-left: 25%">
      <v-img
        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
        height="600px"
        width="480px"
      ></v-img>
    </div>
    <div style="position: absolute; margin-right: 25%">
      <v-card width="440px" height="440px" color="#ffbf00">
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
            in out hotel
          </div>
          <v-btn
            text
            class="my-4 white--text"
            width="100px"
            style="text-decoration: underline; border-bottom: 2px solid #fff"
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

<style></style>
