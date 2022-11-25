<template>
  <v-card max-width="100%" class="mx-auto py-0 py-sm-6 secondary" outlined>
    <v-sheet max-width="1200px" class="mx-auto px-6" color="transparent">
      <v-card-title
        class="justify-center headline text-sm-h4 text-xl-h2 font-weight-bold text--darken-3 text-center"
        >Book Your Cottages</v-card-title
      >
      <v-divider class="mx-4 mb-2 mb-sm-8 mt-0 mt-sm-6 primary"></v-divider>
      <v-row class="my-4 my-sm-0">
        <div class="cottageList mb-0" style="max-height: 2078px">
          <v-col
            cols="12"
            v-for="(cottage, index) in cottages"
            :key="index"
            class="py-0 py-sm-2"
          >
            <cottage-single
              :item="cottage"
              :edit="edit"
              @editItem="editItem"
              @deleteItem="deleteItem"
            ></cottage-single>
          </v-col>
        </div>
      </v-row>
    </v-sheet>
  </v-card>
</template>

<script>
import cottageSingle from "../components/cottageSingle.vue";
export default {
  components: {
    cottageSingle,
  },
  props: {
    edit: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      cottages: [],
    };
  },
  methods: {
    editItem(item) {
      this.$emit("editItem", item);
    },

    deleteItem(id) {
      console.log(id);
      this.$http.delete(`api/cottages/${id}`).then(() => this.initialise());
    },
    initialise() {
      this.$http
        .get("https://projectcottage.000webhostapp.com/cottage.json", {
          "content-type": "application/json",
        })
        .then((res) => {
          this.cottages = res.body.cottages;
        });
    },
  },
  created() {
    this.initialise();
  },
};
</script>

<style scoped>
.cottageList {
  overflow: auto;
  overflow-x: hidden;
}
</style>
