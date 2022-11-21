<GmapMap :center="center" :zoom="12" style="width: 100%; height: 400px" />
<template>
  <div>
    <banner
      img="https://lexgloballogistics.com/wp-content/uploads/2018/02/ed-1.jpg"
      title="LET'S GET IN TOUCH"
      subtitle="+91-9840666992"
    ></banner>

    <contact-form></contact-form>
    <GmapMap :center="center" :zoom="12" style="width: 100%; height: 400px">
      <GmapMarker :position="center"></GmapMarker>
    </GmapMap>

    <custom-footer></custom-footer>
  </div>
</template>

<script>
import banner from "../components/banner.vue";
import contactForm from "../components/contactForm.vue";
import customFooter from "../components/footer.vue";

export default {
  components: {
    banner,
    contactForm,
    customFooter,
  },
  data() {
    return {
      center: { lat: 10.23927, lng: 77.496164 },
    };
  },
};
</script>

<style></style>
