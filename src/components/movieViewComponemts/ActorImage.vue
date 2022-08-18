<template>
  <div class="wrapper">
    <img v-if="image" :src="image" alt="" />
    <img v-else src="../../assets/images/no_image.jpg" alt="moviePoster" />
    <h3>{{ name }}</h3>
    <p>{{ character }}</p>
  </div>
</template>

<script>
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../utils/constant";
export default {
  props: { imageUrl: String, name: String, character: String },
  computed: {
    image() {
      if (this.imageUrl) {
        return IMAGE_BASE_URL + POSTER_SIZE + this.imageUrl;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  color: white;
  background: $gray-900;
  border-radius: 20px;
  padding: 5px;
  text-align: center;

  h3 {
    margin: 10px 0 0 0;
  }

  p {
    margin: 5px 0;
  }
}

img {
  display: block;
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 15px;
  margin-top: 8px;
}
</style>
