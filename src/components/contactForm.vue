<template>
  <v-row class="my-4 mx-6 text-center d-flex justify-center">
    <v-form v-model="formValid">
      <v-col cols="12" class="my-0 py-0"><h2>Contact Us</h2></v-col>
      <v-col cols="12" class="my-0 py-0"><p class="title">Enquire</p></v-col>
      <v-col cols="12">
        <v-text-field
          v-model="form.name"
          label="Your Name"
          outlined
          hide-details
          color="accent"
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field
          v-model="form.email"
          label="Email"
          outlined
          hide-details
          color="accent"
        >
        </v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field
          v-model="form.phone"
          label="Phone"
          outlined
          type="number"
          hide-details
          color="accent"
        >
        </v-text-field>
      </v-col>
      <v-col cols="12">
        <v-textarea
          label="Your comments"
          outlined
          hide-details
          color="accent"
        ></v-textarea>
      </v-col>
      <v-col cols="12">
        <v-btn
          text
          outlined
          color="accent"
          style="border-color: accent"
          class="my-4"
          >Submit</v-btn
        >
      </v-col>
    </v-form>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      formValid: false,
      form: {},
    };
  },
};
</script>

<style></style>
