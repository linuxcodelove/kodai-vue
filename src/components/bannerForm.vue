<template>
  <div>
    <div v-if="!$vuetify.breakpoint.xs && !this.userData">
      <v-form ref="form" v-model="formValid" class="mx-1 mx-sm-16">
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
              :rules="[() => !!form.name || 'Name is required']"
            ></v-text-field>
          </v-col>

          <v-col cols="2" class="pa-0">
            <v-text-field
              v-model="startDate"
              label="Start Date"
              readonly
              hide-details
              color="accent"
              light
              flat
              solo
              :rules="[() => !!startDate || 'Start Date is required']"
              @click="(startDateDialog = true), $emit('nocycle')"
            ></v-text-field>
          </v-col>
          <v-col cols="2" class="pa-0">
            <v-text-field
              v-model="endDate"
              label="End Date"
              readonly
              hide-details
              color="accent"
              light
              flat
              solo
              :rules="[() => !!endDate || 'End Date is required']"
              @click="(endDateDialog = true), $emit('nocycle')"
            ></v-text-field>
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
              :rules="[() => !!form.adults || 'Adults is required']"
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
              :rules="[() => !!form.phone || 'Phone is required']"
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
              :rules="[() => !!form.email || 'Email is required']"
            >
            </v-text-field>
          </v-col>
        </v-row>
        <div class="d-flex justify-center my-2 my-sm-4">
          <v-btn
            class="py-2 px-2 py-sm-4 px-sm-5 primary greycol--text text--darken-2 font-weight-bold"
            small
            @click="save"
            >Book Now</v-btn
          >
        </div>
      </v-form>
    </div>
    <!-- <div v-if="$vuetify.breakpoint.xs && !this.userData" @click="dialog = true">
      <v-form ref="form" v-model="formValid" class="mx-1 mx-sm-16">
        <v-row class="mx-0 mx-sm-16 my-0 pa-0 white">
          <v-col cols="3" class="pa-0">
            <v-text-field
              label="Start Date"
              readonly
              hide-details
              color="accent"
              light
              flat
              solo
            ></v-text-field>
          </v-col>
          <v-col cols="3" class="pa-0">
            <v-text-field
              label="End Date"
              readonly
              hide-details
              color="accent"
              light
              flat
              solo
            ></v-text-field>
          </v-col>
          <v-col cols="3" class="pa-0">
            <v-text-field
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
          <v-btn
            class="py-2 px-2 py-sm-4 px-sm-5 primary greycol--text text--darken-2 font-weight-bold"
            small
            >Book Now</v-btn
          >
        </div>
      </v-form>
    </div> -->
    <!-- <div v-if="showMobileForm">
      <v-card
        class="mx-auto"
        width="300"
        color="secondary"
        style="opacity: 0.8"
      >
        <v-card-title
          class="caption font-weight-regular justify-space-between py-4"
        >
          <span>Enter Details</span>
          <v-avatar
            color="primary lighten-2"
            class="caption white--text"
            size="18"
            v-text="step"
          ></v-avatar>
        </v-card-title>
        <v-window v-model="step">
          <v-window-item :value="1" class="px-2">
            <v-text-field
              class="ma-1"
              v-model="form.name"
              label="Name"
              hide-details
              color="accent"
              outlined
              dense
            ></v-text-field>
            <v-row class="ma-0 pa-0">
              <v-col cols="6" class="pa-0">
                <v-text-field
                  class="ma-1"
                  v-model="startDate"
                  label="Start Date"
                  readonly
                  hide-details
                  color="accent"
                  outlined
                  dense
                  @click="(startDateDialog = true), $emit('nocycle')"
                ></v-text-field>
              </v-col>

              <v-col cols="6" class="pa-0">
                <v-text-field
                  class="ma-1"
                  v-model="endDate"
                  label="End Date"
                  readonly
                  hide-details
                  color="accent"
                  outlined
                  dense
                  @click="(endDateDialog = true), $emit('nocycle')"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-window-item>
          <v-window-item :value="2" class="px-2">
            <v-row class="ma-0 pa-0">
              <v-col cols="6" class="pa-0">
                <v-text-field
                  class="ma-1"
                  v-model="form.phone"
                  label="Phone"
                  hide-details
                  color="accent"
                  outlined
                  dense
                  type="number"
                ></v-text-field>
              </v-col>
              <v-col cols="6" class="pa-0">
                <v-text-field
                  class="ma-1"
                  v-model="form.adults"
                  label="No. of adults"
                  hide-details
                  color="accent"
                  outlined
                  dense
                  type="number"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-text-field
              class="ma-1"
              v-model="form.email"
              label="Email"
              hide-details
              color="accent"
              outlined
              dense
            ></v-text-field>
          </v-window-item>
        </v-window>
        <v-divider class="mx-4"></v-divider>

        <v-card-actions>
          <v-btn
            text
            @click="step === 1 ? (showMobileForm = false) : step--"
            x-small
          >
            {{ step === 1 ? "close" : "back" }}
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            depressed
            x-small
            @click="step === 2 ? saveMobileForm() : step++"
          >
            {{ step === 2 ? "save" : "next" }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </div> -->
    <booking-dialog v-if="dialog" @close="saveData"></booking-dialog>
    <v-dialog
      ref="dialogStartDate"
      v-model="startDateDialog"
      persistent
      width="290px"
    >
      <v-date-picker
        v-model="startDate"
        color="primary"
        :return-value.sync="startDate"
        ><v-spacer></v-spacer>
        <v-btn
          text
          color="primary"
          @click="(startDateDialog = false), $emit('cycle')"
        >
          Cancel
        </v-btn>
        <v-btn
          text
          color="primary"
          @click="$refs.dialogStartDate.save(endDate), $emit('cycle')"
        >
          OK
        </v-btn></v-date-picker
      >
    </v-dialog>
    <v-dialog
      ref="dialogEndDate"
      v-model="endDateDialog"
      persistent
      width="290px"
    >
      <v-date-picker
        v-model="endDate"
        color="primary"
        :return-value.sync="endDate"
        ><v-spacer></v-spacer>
        <v-btn
          text
          color="primary"
          @click="(endDateDialog = false), $emit('cycle')"
        >
          Cancel
        </v-btn>
        <v-btn
          text
          color="primary"
          @click="$refs.dialogEndDate.save(endDate), $emit('cycle')"
        >
          OK
        </v-btn></v-date-picker
      >
    </v-dialog>
  </div>
</template>

<script>
import BookingDialog from "../components/bookingDialog.vue";

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
      dialog: false,
      step: 1,
      // showMobileForm: false,
    };
  },
  components: {
    BookingDialog,
  },
  computed: {
    userData() {
      return JSON.parse(localStorage.getItem("user"));
    },
  },
  methods: {
    save() {
      if (!this.formValid) {
        this.$emit("snackbar");

        return;
      }
      const payload = {
        ...this.form,
        startDate: this.startDate,
        endDate: this.endDate,
      };
      localStorage.setItem("user", JSON.stringify(payload));
      this.$emit(
        "snackbar",
        "Your Request has been sent. We will reach you asap!",
        "green"
      );
      setTimeout(() => {
        location.reload();
      }, 500);
    },
    saveData(msg) {
      this.dialog = false;
      this.$emit("snackbar", msg, "green");
    },
    // saveMobileForm() {
    //   if (
    //     !this.form.name ||
    //     !this.startDate ||
    //     !this.endDate ||
    //     !this.form.adults ||
    //     !this.form.phone ||
    //     !this.form.email
    //   ) {
    //     this.$emit("snackbar");

    //     return;
    //   }
    //   const payload = {
    //     ...this.form,
    //     startDate: this.startDate,
    //     endDate: this.endDate,
    //   };
    //   localStorage.setItem("user", JSON.stringify(payload));
    //   // this.showMobileForm = false;
    //   this.$emit(
    //     "snackbar",
    //     "Your Request has been sent. We will reach you asap!",
    //     "green"
    //   );
    //   setTimeout(() => {
    //     location.reload();
    //   }, 500);
    // },
  },
};
</script>

<style scoped>
::v-deep input::-webkit-outer-spin-button,
::v-deep input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
