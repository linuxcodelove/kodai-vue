<template>
  <v-container>
    <v-row class="px-8">
      <v-col xs="12" sm="6">
        <v-card class="primary pa-1 pa-sm-2">
          <v-img :height="imageHeight" :src="selectedImage"></v-img>
        </v-card>
      </v-col>
      <v-col xs="12" sm="6" class="leftbox px-12 pt-0 pb-4">
        <div class="d-flex justify-space-between">
          <h1
            class="text-left font-weight-medium mb-1 mb-sm-3 title text-sm-h5 text-xl-h3"
          >
            {{ item.name }}
          </h1>
          <v-btn v-if="edit" color="red" @click="deleteDialog = true" small icon
            ><v-icon>mdi-delete</v-icon></v-btn
          >
        </div>
        <div class="font-weight-light body-1 text-md-h6 text-xl-h5">
          <h5 class="font-weight-medium">{{ item.location }}</h5>
          <h5 class="font-weight-medium">No.of Rooms : {{ item.rooms }}</h5>
          <h5 class="font-weight-medium">
            Person Allowed : {{ item.persons_allowed }}
          </h5>
          <h5 class="font-weight-medium">Price : Rs.{{ item.price }}</h5>
          <!-- {{ item.description }} -->
        </div>
        <v-btn
          text
          outlined
          color="primary"
          class="mt-4 my-sm-8 py-6 py-sm-8"
          @click="save()"
          >{{ edit ? "Edit" : "Book Now" }}</v-btn
        >
      </v-col>
    </v-row>
    <v-row class="px-8">
      <v-col
        cols="3"
        v-for="(image, index) in listImages"
        :key="index"
        @click="makeSelectedImage(index)"
        class="pa-1 pa-sm-3"
      >
        <v-card class="primary pa-1">
          <v-img :height="subImageHeight" :src="image"></v-img>
        </v-card>
      </v-col>
    </v-row>
    <v-divider class="mt-8 mt-sm-12 mb-0 mb-sm-2 primary"></v-divider>
    <v-dialog v-model="deleteDialog" persistent max-width="400">
      <v-card style="border-radius: 8px" class="pa-4">
        <v-card-title class="d-flex justify-center">
          <h2 class="title">Are you sure want to delete?</h2>
        </v-card-title>
        <v-card-actions class="d-flex justify-center">
          <v-btn style="border-radius: 8px" @click="deleteCottage">Yes</v-btn>
          <v-btn
            color="grey"
            style="border-radius: 8px"
            @click="deleteDialog = false"
            >No</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {},
    },
    edit: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      selectedImage: "",
      listImages: [],
      deleteDialog: false,
    };
  },
  computed: {
    imageHeight() {
      if (this.$vuetify.breakpoint.xs) return "180";
      if (this.$vuetify.breakpoint.sm) return "260";
      if (this.$vuetify.breakpoint.md) return "300";
      return "400";
    },
    subImageHeight() {
      if (this.$vuetify.breakpoint.xs) return "60";
      if (this.$vuetify.breakpoint.md) return "140";
      return "160";
    },
  },

  created() {
    this.selectedImage = this.item.images[0];
    this.listImages = [...this.item.images].slice(1);
  },
  methods: {
    makeSelectedImage(index) {
      const img = this.selectedImage;
      this.selectedImage = this.listImages[index];
      this.listImages[index] = img;
    },
    save() {
      if (this.edit) {
        this.$emit("editItem", this.item);
      }
    },
    deleteCottage() {
      this.$emit("deleteItem", this.item.id);
    },
  },
};
</script>

<style scoped>
.leftbox {
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
}
</style>
