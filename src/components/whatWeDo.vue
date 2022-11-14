<template>
  <div>
    <v-container>
      <v-row class="my-12">
        <v-col cols="6">
          <div class="mx-16">
            <h3 class="mb-4">
              Planning an exciting trip? We are here to help you!!!!!
            </h3>
            <h4 class="display-1 my-6">What we Do?</h4>
            <p class="title font-weight-light">
              Kodaikanal welcomes you warmly with cool embrace and aromatic
              fragrance. The beautiful mountain landscapes will leave you with a
              sense of peace and satisfaction. Boat rides surrounded by
              beautiful trees are sure a treat for your senses. The climate in
              here is serene all year round. Kodaikanal hills have an
              indescribable magical charm which makes it an ideal place for
              everyone.
            </p>
            <p class="title font-weight-light">
              We Guarantee you with our best packages for holiday tours &
              travels in kodaikanal. Our team spends their major focus on giving
              safe & secured trips. Our expert trip makers guide you by giving
              the complete information on the trip and live guidance.
            </p>
            <div class="mt-8">
              <v-btn fab small class="mr-4"><v-icon>mdi-twitter</v-icon></v-btn>
              <v-btn fab small class="mr-4"
                ><v-icon>mdi-facebook</v-icon></v-btn
              >
              <v-btn fab small class="mr-4"
                ><v-icon>mdi-instagram</v-icon></v-btn
              >
            </div>
          </div>
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
