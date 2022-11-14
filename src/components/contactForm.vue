<template>
  <div style="width: 600px" class="mx-auto my-8">
    <v-form v-model="formValid">
      <h1 class="my-4">Contact Us</h1>
      <p class="title">Enquire</p>

      <v-text-field
        v-model="form.name"
        label="Your Name"
        outlined
        hide-details
        dark
        class="my-4"
      ></v-text-field>

      <v-text-field
        v-model="form.email"
        label="Email"
        outlined
        hide-details
        dark
        class="my-4"
      >
      </v-text-field>

      <v-text-field
        v-model="form.phone"
        label="Phone"
        outlined
        type="number"
        hide-details
        dark
        class="my-4"
      >
      </v-text-field>

      <v-textarea
        label="Your comments"
        outlined
        hide-details
        dark
        class="my-4"
      ></v-textarea>

      <v-btn text outlined dark style="border-color: white" class="my-4"
        >Submit</v-btn
      >
    </v-form>
  </div>
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
