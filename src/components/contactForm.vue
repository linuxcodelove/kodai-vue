<template>
  <v-row class="my-4 mx-6 text-center">
    <v-form v-model="formValid" class="mx-auto">
      <v-col cols="12" class="my-2 py-0"><h2>Contact Us</h2></v-col>
      <v-col cols="12" class="my-2 py-0"
        ><p>Drop us your message and we'll get back to you asap</p></v-col
      >
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
          class="my-2"
          @click="sendMail"
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
  methods: {
    sendMail() {
      window.open(
        `mailto:linuxcodelove@gmail.com?subject=subject&body=${this.form}`
      );
    },
  },
};
</script>

<style></style>
