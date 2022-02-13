<template>
  <div class="popular" v-bind:style="{ 'background-image': 'url(' + image + ')' }">
    <div class="content">
      <div class="text">
        <h1>{{ popularMovie.original_title }}</h1>
        <p>{{ popularMovie.overview }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { IMAGE_BASE_URL, BACKDROP_SIZE } from "../utils/constant";

export default {
  name: "top-image",
  computed: {
    popularMovie() {
      if (this.$store.state.movies != "") {
        return this.$store.state.movies.results[0];
      }
      return [];
    },
    image() {
      if (this.$store.state.movies != "") {
        return `${IMAGE_BASE_URL}${BACKDROP_SIZE}${this.popularMovie.backdrop_path}`;
      }
      return "";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
.popular {
  background-size: 100%, 100%;
  background-repeat: no-repeat;
  height: 600px;
  width: 100%;
  position: relative;
  animation: animateHeroImage 1s;
}
.content {
  padding: 20px;
  margin: 0 auto;
  height: 100%;
  width: 100%;
}
.text {
  z-index: 100;
  max-width: 700px;
  position: absolute;
  bottom: 40px;
  margin-right: 20px;
  min-height: 100px;
  color: white;
  text-align: start;

  @include text-shadow;
}
h1 {
  font-size: 2rem;
  @media screen and (max-width: 720px) {
    font-size: 1.2rem;
  }
}

p {
  font: size 1.2rem;

  @media screen and (max-width: 720) {
    font-size: 0.8rem;
  }
}

@keyframes animateHeroImage {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>

