<template>
  <div>
    <loader v-if="!isLoaded"></loader>

    <banner img="about" subtitle=""></banner>
    <!-- <explore-shelter></explore-shelter>
    <people-and-stories></people-and-stories>
    <grid-images></grid-images> -->
    <what-we-do></what-we-do>
    <booking-form></booking-form>
    <custom-footer></custom-footer>
  </div>
</template>

<script>
import banner from "../components/banner.vue";
import customFooter from "../components/footer.vue";
import whatWeDo from "../components/whatWeDo.vue";
import bookingForm from "../components/bookingForm.vue";
import loader from "../components/loader.vue";

// import exploreShelter from "../components/exploreShelter.vue";
// import peopleAndStories from "../components/peopleAndStories.vue";
// import gridImages from "../components/gridImages.vue";
export default {
  components: {
    banner,
    customFooter,
    whatWeDo,
    bookingForm,
    loader,
    // exploreShelter,
    // peopleAndStories,
    // gridImages,
  },
  data() {
    return {
      isLoaded: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.isLoaded = true;
    }, 1000);
  },
};
</script>

<style></style>
