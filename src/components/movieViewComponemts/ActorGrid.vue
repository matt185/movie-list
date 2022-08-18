<template>
  <div class="wrapper">
    <h1>Actors</h1>
    <div class="grid">
        <Actor v-for="(actor,i) in this.actors" :key="i" :imageUrl=" actor.profile_path" :name="actor.name" :character="actor.character"/>
    </div>
  </div>
</template>

<script>
import Actor from "./ActorImage.vue";
export default {
  name: "grid",
  components: { Actor },
  props:{actors:Array},
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
