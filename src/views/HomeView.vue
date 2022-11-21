<template>
  <div>
    <carousel
      :items="items"
      title="welcome to"
      subtitle="KODAIKANAL TRAVEL PLANNER"
      description="The Palace is not safe when the"
      subDesc="Cottage is not happy"
    ></carousel>
    <who-we-are></who-we-are>
    <our-services></our-services>
    <aboutUs></aboutUs>
    <customfooter></customfooter>
    <chat-with-us></chat-with-us>
  </div>
</template>

<script>
import carousel from "../components/carousel.vue";
import aboutUs from "../components/aboutUs.vue";
import whoWeAre from "../components/whoWeAre.vue";
import ourServices from "../components/ourServices.vue";
import customfooter from "../components/footer.vue";
import chatWithUs from "../components/chatWithUs.vue";
export default {
  name: "Home",
  components: {
    carousel,
    aboutUs,
    whoWeAre,
    ourServices,
    customfooter,
    chatWithUs,
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
