<template>
  <v-container fill-height fluid pa-0 ma-0>
    <v-card color="transparent" flat width="100%">
      <v-img
        :height="imageHeight"
        :src="require(`../assets/${img}.jpg`)"
        width="100%"
        class="d-flex align-center"
        dark
      >
        <div v-if="!$vuetify.breakpoint.xs">
          <v-form
            v-model="formValid"
            class="mx-1 mx-sm-16"
            style="opacity: 0.85"
          >
            <v-row class="mx-0 mx-sm-16 my-0 pa-0 white">
              <v-col cols="2" class="pa-0"
                ><v-text-field
                  v-model="form.name"
                  label="Name"
                  hide-details
                  solo
                  color="accent"
                  light
                  flat
                ></v-text-field
              ></v-col>
              <v-col cols="2" class="pa-0">
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
                      readonly
                      v-bind="attrs"
                      v-on="on"
                      hide-details
                      color="accent"
                      light
                      flat
                      solo
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
              <v-col cols="2" class="pa-0">
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
                      readonly
                      v-bind="attrs"
                      v-on="on"
                      hide-details
                      color="accent"
                      light
                      flat
                      solo
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
              <v-col cols="2" class="pa-0">
                <v-text-field
                  v-model="form.adults"
                  label="Adults"
                  type="number"
                  light
                  flat
                  solo
                  hide-details
                  color="accent"
                >
                </v-text-field>
              </v-col>
              <v-col cols="2" class="pa-0">
                <v-text-field
                  v-model="form.phone"
                  label="Phone"
                  light
                  flat
                  solo
                  type="number"
                  hide-details
                  color="accent"
                >
                </v-text-field>
              </v-col>
              <v-col cols="2" class="pa-0">
                <v-text-field
                  v-model="form.email"
                  label="Email"
                  light
                  flat
                  solo
                  hide-details
                  color="accent"
                >
                </v-text-field>
              </v-col>
            </v-row>
            <div class="d-flex justify-center my-2 my-sm-4">
              <v-btn class="py-2 px-2 py-sm-4 px-sm-5 primary" small
                >Book Now</v-btn
              >
            </div>
          </v-form>
        </div>
        <div v-if="$vuetify.breakpoint.xs" @click="dialog = true">
          <v-form
            v-model="formValid"
            class="mx-1 mx-sm-16"
            style="opacity: 0.85"
          >
            <v-row class="mx-0 mx-sm-16 my-0 pa-0 white">
              <v-col cols="3" class="pa-0"
                ><v-text-field
                  v-model="form.name"
                  label="Name"
                  hide-details
                  solo
                  color="accent"
                  light
                  flat
                ></v-text-field
              ></v-col>

              <v-col cols="3" class="pa-0">
                <v-text-field
                  v-model="form.adults"
                  label="Adults"
                  type="number"
                  light
                  flat
                  solo
                  hide-details
                  color="accent"
                >
                </v-text-field>
              </v-col>
              <v-col cols="3" class="pa-0">
                <v-text-field
                  v-model="form.phone"
                  label="Phone"
                  light
                  flat
                  solo
                  type="number"
                  hide-details
                  color="accent"
                >
                </v-text-field>
              </v-col>
              <v-col cols="3" class="pa-0">
                <v-text-field
                  v-model="form.email"
                  label="Email"
                  light
                  flat
                  solo
                  hide-details
                  color="accent"
                >
                </v-text-field>
              </v-col>
            </v-row>
            <div class="d-flex justify-center my-2 my-sm-4">
              <v-btn class="py-2 px-2 py-sm-4 px-sm-5 primary" small
                >Book Now</v-btn
              >
            </div>
          </v-form>
        </div>
        <!-- <h3 class="text-center subtitle text-sm-h5 text-md-h4">
          {{ title }}
        </h3>
        <h2
          class="text-center text-h6 text-sm-h4 text-md-h2 font-weight-bold my-4"
        >
          {{ subtitle }}
        </h2>
        <div
          v-if="!$vuetify.breakpoint.xs"
          class="text-center my-0 my-sm-4 px-16"
        >
          <h6 class="caption text-sm-h6 font-weight-regular">
            {{ description }}
          </h6>
          <h6 class="caption text-sm-h6 font-weight-regular">
            {{ subDesc }}
          </h6>
        </div> -->
        <!-- <div v-if="book" class="d-flex justify-center my-2 my-sm-4">
            <v-btn
              rounded
              class="py-4 px-4 py-sm-6 px-sm-8 primary"
              :small="$vuetify.breakpoint.xs"
              >Book Now</v-btn
            >
          </div> -->
        <!-- <div v-if="book" class="d-flex justify-center my-2 my-sm-4">
            <v-btn rounded class="py-4 px-4 py-sm-6 px-sm-8 primary"
              >Book Now</v-btn
            >
          </div> -->

        <!-- <h2 class="text-center text-h2 font-weight-bold">{{ title }}</h2>
          <h3 v-if="subtitle" class="text-center my-10">{{ subtitle }}</h3> -->
      </v-img>
    </v-card>
    <booking-dialog v-if="dialog" @close="dialog = false"></booking-dialog>
  </v-container>
</template>

<script>
import BookingDialog from "../components/bookingDialog.vue";

export default {
  props: {
    img: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    subtitle: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    subDesc: {
      type: String,
      default: "",
    },
    book: {
      type: Boolean,
      default: false,
    },
  },
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
      dialog: false,
    };
  },
  components: {
    BookingDialog,
  },
  computed: {
    imageHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "220";
        case "sm":
          return "400";
        case "md":
          return "500";
        case "lg":
          return "600";
        case "xl":
          return "800";
      }
      return "800";
    },
  },
};
</script>

<style></style>
