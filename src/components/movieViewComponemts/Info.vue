<template>
  <div
    class="wrapper"
    v-bind:style="{ 'background-image': 'url(' + image + ')' }"
  >
    <div class="content">
      <MovieImage class="img" :imageLink="imageLink" />
      <div class="text">
        <h1>{{ title }}</h1>
        <h3>PLOT</h3>
        <p>{{ overview }}</p>
        <div class="rating-directors">
          <div class="rating">
            <h3>Rating</h3>
            <div class="score">{{ vote_average }}</div>
          </div>
          <div class="director">
            <h3 v-if="this.directorsList.length === 1">Director</h3>
            <h3 v-else>Directors</h3>
            <div v-for="(director, i) in this.directorsList" :key="i">
              <p>{{ director.name }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { IMAGE_BASE_URL, BACKDROP_SIZE } from "../../utils/constant";
import MovieImage from "../MovieImage.vue";
export default {
  name: "info",
  props: {
    imageLink: String,
    title: String,
    vote_average: Number,
    overview: String,
    directorsList: Array,
  },
  components: { MovieImage },
  computed: {
    image() {
      if (this.$store.state.movies != "") {
        return `${IMAGE_BASE_URL}${BACKDROP_SIZE}${this.imageLink}`;
      }
      return "";
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
background-size: 100%, 100%;
  background-repeat: no-repeat;
  height: 600px;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

@keyframes animateHeroImage {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.content {
  display: flex;
width: 80%;
  height: 90%;
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 20px;
  flex-direction: row;
  align-items: center;
  padding-left:5px ;
  @media screen and (max-width: 768px) {
    display: block;
    max-height: none;
  }
}

.text {
  width: 100%;
  padding: 20px 40px;
  color: white;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  .rating-directors {
    display: flex;
    justify-content: flex-start;
  }
  .rating {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .score {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    background: #fff;
    color: #000;
    font-weight: 800;
    border-radius: 50%;
    margin: 0;
  }

  .director {
    margin: 0 0 0 40px;

    p {
      margin: 0;
    }
  }

  h1 {
    @media screen and (max-width: 768px) {
      font-size: 1.8rem;
    }
  }
}
</style>