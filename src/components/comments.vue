<template>
  <v-container>
    <v-carousel hide-delimiters height="400" show-arrows-on-hover>
      <template v-for="(comment, i) in comments">
        <v-carousel-item :key="`comment${i}`">
          <v-row class="flex-nowrap mx-0 px-0">
            <v-col cols="12">
              <v-card
                height="400"
                class="rounded-sm mx-12 px-6 comments caption text-sm-body-1"
                color="transparent"
              >
                <v-avatar size="120" class="mb-8">
                  <v-img :src="comment.img"></v-img>
                </v-avatar>
                "{{ comment.comment }}"
              </v-card>
            </v-col>
          </v-row>
        </v-carousel-item>
      </template>
    </v-carousel>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      comments: [
        {
          img: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
          comment:
            "Comparing to other major players in the market I got customised packages and selective rooms from these people. Since I went with my family I was so concerned about the safety and other needs, but honestly it was a perfect choice to book cottages from here!",
        },
        {
          img: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
          comment:
            "market I got customised packages and selective rooms from these people. Since I went with my family I was so concerned about the safety and other needs, but honestly it was a perfect choice to book cottages from here!",
        },
        {
          img: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
          comment:
            "packages and selective rooms from these people. Since I went with my family I was so concerned about the safety and other needs, but honestly it was a perfect choice to book cottages from here!",
        },
      ],
    };
  },
};
</script>

<style scoped>
.comments {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
