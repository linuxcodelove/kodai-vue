<template>
  <div>
    <v-dialog v-model="dialog" persistent max-width="600">
      <v-card style="border-radius: 8px" class="pa-4">
        <v-form ref="form" v-model="formValid" class="mx-auto">
          <v-row class="white--text mx-6 text-center">
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
                :dense="isMobile"
                color="accent"
                :rules="[() => !!form.name || 'Name is required']"
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
                        :dense="isMobile"
                        color="accent"
                        :rules="[() => !!startDate || 'Start Date is required']"
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
                        :dense="isMobile"
                        color="accent"
                        :rules="[() => !!endDate || 'End Date is required']"
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
                    :dense="isMobile"
                    color="accent"
                    :rules="[() => !!form.adults || 'Adults is required']"
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
                    :dense="isMobile"
                    color="accent"
                    :rules="[() => !!form.children || 'Children is required']"
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
                :dense="isMobile"
                color="accent"
                :rules="[() => !!form.phone || 'Phone is required']"
              >
              </v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="form.email"
                label="Email"
                outlined
                hide-details
                :dense="isMobile"
                color="accent"
                :rules="[() => !!form.email || 'Email is required']"
              >
              </v-text-field>
            </v-col>
            <v-col cols="12">
              <v-textarea
                v-model="form.comments"
                label="Your comments"
                outlined
                hide-details
                :dense="isMobile"
                color="accent"
              ></v-textarea>
            </v-col>
          </v-row>
          <v-card-actions class="d-flex justify-center">
            <v-btn
              style="border-radius: 8px"
              @click="save"
              :disabled="!formValid"
              >Submit</v-btn
            >
            <v-btn style="border-radius: 8px" @click="$emit('close')"
              >Cancel</v-btn
            >
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      form: {},
      formValid: false,
      startDateMenu: false,
      endDateMenu: false,
      startDateDialog: false,
      endDateDialog: false,
      startDate: "",
      endDate: "",
      dialog: true,
    };
  },
  computed: {
    isMobile() {
      if (this.$vuetify.breakpoint.xs) return true;
      return false;
    },
  },
  methods: {
    save() {
      if (!this.$refs.form.validate()) {
        return;
      }
      const payload = {
        ...this.form,
        start_date: this.startDate,
        end_date: this.endDate,
      };
      localStorage.setItem("user", JSON.stringify(payload));
      this.form = {};
      this.$emit(
        "close",
        "Your message has been submitted!. We will get back you asap!"
      );
      setTimeout(() => {
        location.reload();
      }, 500);
    },
  },
};
</script>

<style></style>
