<template>
  <div>
    <router-link
      v-if="clickable"
      :to="{ name: 'MovieInfo', params: { movieId: movieId } }"
    >
      <img v-if="imageUrl" :src="imageUrl" alt="moviePoster" />
      <img v-else src="../assets/images/no_image.jpg" alt="moviePoster" />
    </router-link>
    <div v-else>
      <img v-if="imageUrl" :src="imageUrl" alt="moviePoster" />
      <img v-else src="../assets/images/no_image.jpg" alt="moviePoster" />
    </div>
  </div>
</template>

<script>
import { IMAGE_BASE_URL, POSTER_SIZE } from "../utils/constant";
export default {
  name: "movie-image",
  props: {
    imageLink: String,
    clickable: { type: Boolean, default: false, required: false },
    movieId: String,
  },
  computed: {
    imageUrl() {
      if (this.imageLink) {
        return IMAGE_BASE_URL + POSTER_SIZE + this.imageLink;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
img {
  width: 100%;
  max-width: 720px;
  transition: all 0.3s;
  object-fit: cover;
  border-radius: 20px;
  animation: animateThumb 0.5s;

  :hover {
    opacity: 0.8;
  }
}

@keyframes animateThumb {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
