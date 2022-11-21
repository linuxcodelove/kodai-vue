<template>
  <div>
    <v-card
      img="https://lexgloballogistics.com/wp-content/uploads/2018/02/ed-1.jpg"
      height="90vh"
      class="d-flex justify-center align-center"
    >
      <v-sheet width="480px" class="text-center px-8 py-6 ma-6">
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
    <v-snackbar v-model="snackbar" timeout="2000" :color="color" top right>
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="snackbar = false"> Close </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      snackbar: false,
      text: "",
      color: "",
    };
  },
  methods: {
    login() {
      if (!this.$refs.form.validate()) return;
      this.$http
        .post("api/sessions/login", this.form, {
          "content-type": "application/json",
        })
        .then((res) => {
          console.log(res);
          if (res.body.result == "success") {
            localStorage.setItem("token", res.body.token);
            this.text = "Logged in Successfully";
            this.color = "green";
            this.snackbar = true;
            this.$router.push("/admindashboard");
          } else {
            this.invalidDetails();
          }
        })
        .catch(() => {
          this.invalidDetails();
        });
    },
    invalidDetails() {
      this.text = "Invalid username or password";
      this.color = "red";
      this.snackbar = true;
    },
  },
};
</script>

<style></style>
