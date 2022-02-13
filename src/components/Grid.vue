<template>
  <div class="wrapper">
    <h1 v-if="!this.$store.getters.searched">Popular Movie</h1>
    <h1 v-else>Searched Movie</h1>
    <div class="grid">
      <MovieImage
        v-for="(movie, i) in movies"
        :key="i"
        :movieId="String(movie.id)"
        :imageLink="movie.poster_path"
        :clickable="true"
      />
    </div>
  </div>
</template>

<script>
import MovieImage from "./MovieImage.vue";
export default {
  name: "grid",
  components: { MovieImage },
  computed: {
    movies() {
      if (this.$store.getters.movies.results) {
        if (this.$store.getters.newPageData !==""){
              this.$store.commit("addMovies")
              this.$store.commit("resetNewPageData")
          }
        return this.$store.getters.movies.results;
      }
      return [];
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  max-width: 100%;
  margin: 0 auto;
  margin-bottom: 3rem;
  padding: 0 20px;

  h1 {
    color: $gray-800;

    @media screen and (max-width: 768px) {
      font-size: 1.9rem;
    }
  }
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 2rem;
}
</style>
