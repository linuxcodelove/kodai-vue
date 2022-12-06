<template>
  <div class="bg">
    <v-row class="white--text mx-6 py-4 text-center">
      <v-col :cols="columns">
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
                    <v-btn
                      text
                      color="primary"
                      @click="startDateDialog = false"
                    >
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
              @click="submitForm"
              >Submit</v-btn
            >
          </v-col>
        </v-form>
      </v-col>
      <v-col
        v-if="!$vuetify.breakpoint.xs"
        :cols="columns"
        class="desc text-left"
      >
        <v-container fluid>
          <div class="caption text-md-body-1">
            We specialize in providing the best cottages for group stays such as
            family holidays, anniversaries, group holidays, birthday party
            celebrations, college tours, school tours, and family gatherings.
            Our cottages are busy always during the summer season, Hence, you
            will have to book in advance. Cottages in Kodaikanal for group stays
            will be suitable accommodations for small group members and large
            group members. Many travelers have preferred coming to Kodaikanal to
            vacation in large groups, We offer the most comfortable cottages at
            Kodaikanal which will be suitable for both small and large groups.
            Group travelers can go for a mild walk inside the enclave, or travel
            externally into the quiet lanes and greenery hill roads. If you
            decide to have a Kodaikanal group vacation, you will get an
            unforgettable memorable experience. We are proud to share about
            family cottages at Kodaikanal which make sure you have the best
            accommodation experience with family members. We also handle
            hundreds of last-minute bookings, providing you the opportunity to
            find the group stay cottage within a few minutes. As a travel
            agency, we hope it helps you to find the best accommodation for a
            group stay.
          </div>
        </v-container>
      </v-col>
    </v-row>
  </div>
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
  computed: {
    columns() {
      if (this.$vuetify.breakpoint.xs) return 12;
      return 6;
    },
  },
  methods: {
    submitForm() {
      window.location = "mailto:nandhusmart456@gmail.com";
      // const url =
      //   "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=linuxcodelove@gmail.com";
      // const a = document.createElement("a");
      // a.href = url;
      // a.innerHTML = "Link";
      // document.body.appendChild(a);
      // a.click();
    },
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
.desc {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>
