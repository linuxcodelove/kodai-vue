<template>
  <div>
    <v-carousel
      hide-delimiters
      interval="4000"
      :height="imageHeight"
      show-arrows-on-hover
    >
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="require(`../assets/home/carousel/${item.src}.jpg`)"
        class="carouselform"
      >
        <v-container fill-height fluid>
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
                      <v-btn
                        text
                        color="primary"
                        @click="endDateDialog = false"
                      >
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
        </v-container>
        <!-- <v-container fill-height fluid pa-0 ma-0>
        <v-card class="pa-2 mx-auto" color="transparent" flat>
          <div>
            <h3 class="text-center subtitle text-sm-h5 text-md-h4">
              {{ title }}
            </h3>
            <h2
              class="text-center text-h6 text-sm-h4 text-md-h2 font-weight-bold my-0 my-sm-4"
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
            </div>
            <div class="d-flex justify-center my-2 my-sm-4">
              <v-btn
                rounded
                class="py-4 px-4 py-sm-6 px-sm-8 primary"
                :small="$vuetify.breakpoint.xs"
                >Book Now</v-btn
              >
            </div>
          </div>
        </v-card>
      </v-container> -->
      </v-carousel-item>
    </v-carousel>
    <booking-dialog v-if="dialog" @close="dialog = false"></booking-dialog>
  </div>
</template>

<script>
import BookingDialog from "../components/bookingDialog.vue";

export default {
  props: {
    items: {
      type: Array,
      default: () => [],
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

<style>
.word {
  font-family: "EBGaramond", Arial, Helvetica, sans-serif;
}
.carouselform {
  display: flex;
  /* flex-direction: row; */
  justify-content: center;
  align-items: center;
}
</style>
