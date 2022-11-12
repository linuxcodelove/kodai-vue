<template>
  <div>
    <banner
      img="https://lexgloballogistics.com/wp-content/uploads/2018/02/ed-1.jpg"
      title="About Us"
    ></banner>
    <explore-shelter></explore-shelter>
    <people-and-stories></people-and-stories>
    <grid-images></grid-images>
    <custom-footer></custom-footer>
  </div>
</template>

<script>
import banner from "../components/banner.vue";
import exploreShelter from "../components/exploreShelter.vue";
import peopleAndStories from "../components/peopleAndStories.vue";
import gridImages from "../components/gridImages.vue";
import customFooter from "../components/footer.vue";
export default {
  components: {
    banner,
    exploreShelter,
    peopleAndStories,
    gridImages,
    customFooter,
  },
  data() {
    return {};
  },
};
</script>

<style></style>
