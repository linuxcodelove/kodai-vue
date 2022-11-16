<template>
  <div>
    <banner
      img="https://lexgloballogistics.com/wp-content/uploads/2018/02/ed-1.jpg"
      title="LET'S GET IN TOUCH"
      subtitle="+91-9840666992"
    ></banner>

    <contact-form></contact-form>

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
};
</script>

<style></style>
