<template>
  <div class="pt-6">
    <!-- <v-card height="540" width="306" class="primary mx-4 pa-3 rounded-sm">
      <v-img :src="item.src" height="240px"></v-img>
      <div class="pa-4">
        <p class="font-weight-bold mb-3 grey--text text--lighten-2 title">
          {{ item.title }}
        </p>
        <div class="font-weight-medium title-2 grey--text text--darken-3">
          {{ item.desc }}
        </div>
      </div>
    </v-card>

    <v-slide-group v-model="model" class="transparent">
      <v-slide-item v-for="(item, index) in items" :key="index">
        <v-card width="352" class="rounded-sm px-1">
          <v-img :src="item" height="440"></v-img>
        </v-card>
      </v-slide-item>
    </v-slide-group> -->

    <v-carousel
      cycle
      continuous
      hide-delimiters
      :show-arrows="false"
      interval="1000"
      class="pb-0 pb-sm-6"
      :height="imageHeight + 30"
      :reverse="reverse"
    >
      <template v-for="(item, index) in items">
        <v-carousel-item
          v-if="(index + 1) % columns === 1 || columns === 1"
          :key="index"
        >
          <v-row class="flex-nowrap mx-0 px-0">
            <template v-for="(n, i) in columns">
              <template v-if="+(index + i) < items.length">
                <v-col :key="i" cols="4" class="px-1">
                  <v-card
                    v-if="+(index + i) < items.length"
                    :height="imageHeight"
                    class="rounded-sm"
                  >
                    <v-img
                      :src="
                        require(`../assets/home/cottages/${
                          items[+index + i]
                        }.jpg`)
                      "
                      :height="imageHeight"
                    ></v-img>
                  </v-card>
                </v-col>
              </template>
            </template>
          </v-row>
        </v-carousel-item>
      </template>
    </v-carousel>
    <!-- <v-divider class="mx-4 mt-2 mb-4 my-sm-6 primary"></v-divider> -->
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => {},
    },
    reverse: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      model: 0,
    };
  },
  computed: {
    columns() {
      if (this.$vuetify.breakpoint.lgAndUp) {
        return 4;
      }

      if (this.$vuetify.breakpoint.md) {
        return 3;
      }

      if (this.$vuetify.breakpoint.sm) {
        return 3;
      }

      return 3;
    },
    imageHeight() {
      if (this.$vuetify.breakpoint.xs) {
        return 150;
      }

      if (this.$vuetify.breakpoint.sm) {
        return 240;
      }

      if (this.$vuetify.breakpoint.md) {
        return 300;
      }
      return 320;
    },
  },
  created() {
    // this.interval = setInterval(() => this.model++, 2000);
  },
};
</script>

<style></style>
