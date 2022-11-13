<template>
  <!-- <v-container fluid class="text-center primary py-16">
    <div class="mb-4">
      <h2 class="display-2 font-weight-bold">What We Do?</h2>
      <span class="font-weight-medium white--text" style="opacity: 0">
        as a Kodaikanal Travel Planner</span
      >
    </div>

    <div
      class="font-weight-light mx-auto title mb-16"
      style="width: 720px; max-width: 720px"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </div>
  </v-container> -->
  <div class="accent">
    <v-container class="py-4">
      <v-row class="my-16">
        <v-col cols="6" class="mb-8">
          <v-card
            color="transparent"
            class="rounded-sm d-flex justify-end"
            flat
          >
            <v-img
              src="https://lexgloballogistics.com/wp-content/uploads/2018/02/ed-1.jpg"
              height="600px"
              max-width="440px"
            ></v-img>
          </v-card>
        </v-col>
        <v-col cols="6" class="mb-8">
          <v-card
            class="textright transparent px-8"
            height="540px"
            width="440px"
            flat
          >
            <div>
              <h2
                class="display-2 px-8 font-weight-bold grey--text text--darken-3"
              >
                What We Do?
              </h2>
              <span style="opacity: 0"> as a Kodaikanal Travel Planner</span>
            </div>
            <div
              class="px-8 subtitle-1 font-weight-regular grey--text text--darken-2"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.textright {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
