<template>
  <div>
    <carousel
      :items="items"
      title="welcome to"
      subtitle="KODAIKANAL TRAVEL PLANNER"
      description="The Palace is not safe when the"
      subDesc="Cottage is not happy"
    ></carousel>
    <who-we-are
      title="What We Do?"
      subtitle="as a Kodaikanal Travel Planner"
      desc="Kodaikanal is the city of authenticity where real fun and adventure are at
      the door step. As a Kodaikanal Tripadvisor we offer tourism and investment
      related services regarding travel arrangements, stay, food, live guidance
      in assisting to visit top site seeing spots in kodaikanal. We also provide
      investment and construction related services in kodaikanal to make your
      dreams come with unimaginable returns."
    ></who-we-are>
    <our-services></our-services>
    <!-- <aboutUs></aboutUs> -->
    <comments></comments>
    <customfooter></customfooter>
  </div>
</template>

<script>
import carousel from "../components/carousel.vue";
// import aboutUs from "../components/aboutUs.vue";
import whoWeAre from "../components/whoWeAre.vue";
import ourServices from "../components/ourServices.vue";
import customfooter from "../components/footer.vue";
import comments from "../components/comments.vue";

export default {
  name: "Home",
  components: {
    carousel,
    // aboutUs,
    whoWeAre,
    ourServices,
    customfooter,
    comments,
  },
  data() {
    return {
      items: [
        {
          src: "banner1",
        },
        {
          src: "banner2",
        },
        {
          src: "banner3",
        },
        {
          src: "banner4",
        },
      ],
    };
  },
};
</script>
<style scoped></style>
