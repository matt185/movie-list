<template>
  <div>
    <b-button
      v-if="this.$store.state.movies.page === this.$store.state.movies.total_pages"
      pill
      variant="outline-secondary"
      disabled
      >Load More</b-button
    >
    <b-button v-else pill variant="outline-secondary" @click="loadMore"
      >Load More
      </b-button>
  </div>
</template>

<script>
export default {
  methods: {
    loadMore() {
      this.$store.dispatch("loadMoreMovies");
    },
  },
};
</script>

<style lang="scss" scoped>
.btn:hover {
  color: white !important;
 
}
.btn-outline-secondary {
  color: $vue-gray;
  border-color: $vue-gray;
}
</style>
