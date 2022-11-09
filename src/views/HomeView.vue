<template>
  <div>
    <carousel :items="items"></carousel>
    <what-we-do></what-we-do>
    <our-services></our-services>
    <aboutUs></aboutUs>
    <contact-us></contact-us>
  </div>
</template>

<script>
import carousel from "../components/carousel.vue";
import aboutUs from "../components/aboutUs.vue";
import whatWeDo from "../components/whatWeDo.vue";
import ourServices from "../components/ourServices.vue";
import contactUs from "../components/contactUs.vue";
export default {
  name: "Home",
  components: {
    carousel,
    aboutUs,
    whatWeDo,
    ourServices,
    contactUs,
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
