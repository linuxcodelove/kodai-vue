<template>
  <v-row class="white--text">
    <v-form v-model="formValid">
      <v-col cols="12" class="my-0 pb-0">
        <p class="title">Book Your Dates</p>
      </v-col>
      <v-col cols="12" class="my-0 py-0"
        ><p>Drop us your message and we'll get back to you asap.</p></v-col
      >
      <v-col cols="12" class="white--text"
        ><v-text-field
          v-model="form.name"
          label="Your Name"
          outlined
          hide-details
          dark
        ></v-text-field
      ></v-col>
      <v-col cols="12">
        <v-row>
          <v-col cols="6">
            <v-menu
              v-model="startDateMenu"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="startDate"
                  label="Start Date"
                  append-icon="mdi-calendar"
                  readonly
                  outlined
                  v-bind="attrs"
                  v-on="on"
                  hide-details
                  dark
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="startDate"
                @input="startDateMenu = false"
              ></v-date-picker>
            </v-menu>
          </v-col>
          <v-col cols="6">
            <v-menu
              v-model="endDateMenu"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="endDate"
                  label="End Date"
                  append-icon="mdi-calendar"
                  readonly
                  outlined
                  v-bind="attrs"
                  v-on="on"
                  hide-details
                  dark
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="endDate"
                @input="endDateMenu = false"
              ></v-date-picker>
            </v-menu>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12">
        <v-row>
          <v-col cols="6">
            <v-text-field
              v-model="form.adults"
              label="No. of Adults"
              type="number"
              outlined
              hide-details
              dark
            >
            </v-text-field>
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="form.children"
              label="No. of Children"
              type="number"
              outlined
              hide-details
              dark
            >
            </v-text-field>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12">
        <v-text-field
          v-model="form.phone"
          label="Phone"
          outlined
          type="number"
          hide-details
          dark
        >
        </v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field
          v-model="form.email"
          label="Email"
          outlined
          hide-details
          dark
        >
        </v-text-field>
      </v-col>
      <v-col cols="12">
        <v-textarea
          label="Your comments"
          outlined
          hide-details
          dark
        ></v-textarea>
      </v-col>
      <v-col cols="12">
        <v-btn text outlined dark style="border-color: white">Submit</v-btn>
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
      startDateMenu: false,
      endDateMenu: false,
      startDate: "",
      endDate: "",
    };
  },
};
</script>

<style scoped>
.v-text-field--outlined >>> fieldset {
  border-color: rgb(255, 255, 255);
}
.custom-placeholer-color input::placeholder {
  color: red !important;
  opacity: 1;
}

.custom-label-color .v-label {
  color: red;
  opacity: 1;
}

.custom-placeholer-color input,
.custom-label-color input {
  color: red !important;
}
</style>
