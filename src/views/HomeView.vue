<template>
  <div>
    <carousel :items="items"></carousel>
    <what-we-do></what-we-do>
    <our-services></our-services>
    <aboutUs></aboutUs>
    <customfooter></customfooter>
  </div>
</template>

<script>
import carousel from "../components/carousel.vue";
import aboutUs from "../components/aboutUs.vue";
import whatWeDo from "../components/whatWeDo.vue";
import ourServices from "../components/ourServices.vue";
import customfooter from "../components/footer.vue";
export default {
  name: "Home",
  components: {
    carousel,
    aboutUs,
    whatWeDo,
    ourServices,
    customfooter,
  },
  data() {
    return {
      items: [
        {
          src: "https://lexgloballogistics.com/wp-content/uploads/2018/02/ed-1.jpg",
        },
        {
          src: "https://lexgloballogistics.com/wp-content/uploads/2018/02/Truck-2.jpg",
        },
        {
          src: "https://lexgloballogistics.com/wp-content/uploads/2018/02/logistic.jpg",
        },
      ],
    };
  },
};
</script>
<style></style>
