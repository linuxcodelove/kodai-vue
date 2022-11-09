<template>
  <div class="pa-12 secondary white--text">
    <v-container>
      <v-row>
        <v-col cols="6">
          <p class="title">Email</p>
          <p>service@kodaiguide.in</p>
          <p class="title">Phone</p>
          <p>+91-9840666992</p>
          <p class="title">Address</p>
          <p>
            327/9E Lawsghat Road, <br />Kodaikanal<br />
            Pin-624 101
          </p>
        </v-col>
        <v-col cols="6">
          <booking-form></booking-form>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import bookingForm from "../components/bookingForm.vue";

export default {
  components: {
    bookingForm,
  },
};
</script>

<style></style>
