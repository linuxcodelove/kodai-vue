<template>
  <div>
    <v-card
      img="https://lexgloballogistics.com/wp-content/uploads/2018/02/ed-1.jpg"
      height="90vh"
      class="d-flex justify-center align-center"
    >
      <v-sheet width="480px" class="text-center px-8 py-6">
        <v-form ref="form" class="form">
          <v-text-field
            v-model="form.username"
            placeholder="Username"
            required
            :rules="[() => !!form.username || 'username is required']"
          >
          </v-text-field>
          <v-text-field
            v-model="form.password"
            placeholder="Password"
            type="password"
            :rules="[() => !!form.password || 'password field is required']"
          >
          </v-text-field>
          <v-btn depressed class="primary login" @click="login">Login</v-btn>
        </v-form>
      </v-sheet>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {},
    };
  },
  methods: {
    login() {
      if (!this.$refs.form.validate()) return;
      console.log("logged in successfully");
      this.$router.push("/admindashboard");
    },
  },
};
</script>

<style></style>
