<template>
  <div class="secondary">
    <div class="d-flex justify-space-between text-h5 pa-6">
      Cottages List
      <v-btn class="primary" @click="dialog = true"
        ><v-icon>mdi-plus</v-icon>Add</v-btn
      >
    </div>
    <cottages-list
      v-if="refresh"
      :edit="edit"
      @editItem="editItem"
    ></cottages-list>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="text-h5">New Cottage</span>
        </v-card-title>
        <v-form ref="form">
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="form.name"
                    label="Name"
                    outlined
                    :rules="[() => !!form.name || 'This field is required']"
                    hide-details
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-textarea
                    v-model="form.location"
                    label="Address"
                    outlined
                    :rules="[() => !!form.location || 'This field is required']"
                    hide-details
                  ></v-textarea>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="form.rooms"
                    label="Room count"
                    type="number"
                    :rules="[() => !!form.rooms || 'This field is required']"
                    outlined
                    hide-details
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="form.persons_allowed"
                    label="Person Count"
                    type="number"
                    :rules="[
                      () => !!form.persons_allowed || 'This field is required',
                    ]"
                    outlined
                    hide-details
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="form.price"
                    label="Price"
                    type="number"
                    :rules="[() => !!form.price || 'This field is required']"
                    outlined
                    hide-details
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-file-input
                    v-model="images"
                    accept="image/*"
                    label="choose image"
                    prepend-icon="mdi-image"
                    required
                    small-chips
                    multiple
                    outlined
                    clearable
                    :rules="[() => !!images.length || 'Image is required']"
                  ></v-file-input>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary darken-1" text @click="cancel()">
              Close
            </v-btn>
            <v-btn color="primary darken-1" text @click="saveFormData()">
              Save
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import cottagesList from "../components/cottagesList.vue";

export default {
  components: {
    cottagesList,
  },
  data() {
    return {
      dialog: false,
      form: {},
      images: [],
      refresh: true,
      edit: true,
    };
  },
  methods: {
    saveFormData() {
      if (!this.$refs.form.validate()) {
        return;
      }
      const list = this.images.map((item) => {
        let fileReader = new FileReader();
        return new Promise((resolve) => {
          fileReader.addEventListener("load", (e) => {
            resolve(e.target.result);
          });
          fileReader.readAsDataURL(item);
        });
      });
      const payload = { ...this.form };
      this.refresh = false;
      Promise.all(list)
        .then((res) => {
          payload.images = res;
          if (payload.id) {
            return this.$http.put(`api/cottages/${payload.id}`, payload, {
              "content-type": "application/json",
            });
          }
          return this.$http.post("api/cottages", payload, {
            "content-type": "application/json",
          });
        })
        .then(() => {
          this.refresh = true;
          this.cancel();
        });
    },
    resetForm() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    cancel() {
      // this.resetForm();
      this.resetValidation();
      this.dialog = false;
      this.form = {};
      this.images = [];
    },
    editItem(item) {
      this.form = item;
      this.images = [];
      this.dialog = true;
    },
  },
};
</script>

<style></style>
