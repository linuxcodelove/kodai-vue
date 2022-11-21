<template>
  <v-row class="white--text mx-6 my-4 text-center">
    <v-form v-model="formValid" class="mx-auto">
      <v-col cols="12" class="mt-0 mb-2 pb-0">
        <h2>Book Your Dates</h2>
      </v-col>
      <v-col cols="12" class="my-0 py-0"
        ><p>Drop us your message and we'll get back to you asap</p></v-col
      >
      <v-col cols="12" class="white--text"
        ><v-text-field
          v-model="form.name"
          label="Your Name"
          outlined
          hide-details
          color="accent"
        ></v-text-field
      ></v-col>
      <v-col cols="12">
        <v-row>
          <v-col cols="6">
            <v-dialog
              ref="dialogStartDate"
              v-model="startDateDialog"
              :return-value.sync="startDate"
              persistent
              width="290px"
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
                  color="accent"
                ></v-text-field>
              </template>
              <v-date-picker v-model="startDate" color="primary"
                ><v-spacer></v-spacer>
                <v-btn text color="primary" @click="startDateDialog = false">
                  Cancel
                </v-btn>
                <v-btn
                  text
                  color="primary"
                  @click="$refs.dialogStartDate.save(startDate)"
                >
                  OK
                </v-btn></v-date-picker
              >
            </v-dialog>
          </v-col>
          <v-col cols="6">
            <v-dialog
              ref="dialogEndDate"
              v-model="endDateDialog"
              :return-value.sync="endDate"
              persistent
              width="290px"
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
                  color="accent"
                ></v-text-field>
              </template>
              <v-date-picker v-model="endDate" color="primary"
                ><v-spacer></v-spacer>
                <v-btn text color="primary" @click="endDateDialog = false">
                  Cancel
                </v-btn>
                <v-btn
                  text
                  color="primary"
                  @click="$refs.dialogEndDate.save(endDate)"
                >
                  OK
                </v-btn></v-date-picker
              >
            </v-dialog>
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
              color="accent"
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
              color="accent"
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
          color="accent"
        >
        </v-text-field>
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
          style="border-color: white"
          class="mb-3"
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
      startDateMenu: false,
      endDateMenu: false,
      startDateDialog: false,
      endDateDialog: false,
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
/* input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
} */
</style>
