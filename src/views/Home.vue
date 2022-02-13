<template>
  <div class="home">
    <HomeImage v-if="!this.$store.getters.searched"/>
    <SearchBar/>
    <Grid/>
    <Button/>
  </div>
</template>

<script>
import HomeImage from "@/components/HomeImage.vue";
import Grid from "@/components/Grid"
import SearchBar from "@/components/SearchBar"
import Button from "@/components/Button"
export default {
  name: "Home",
  components: {
    HomeImage,
    Grid,
    SearchBar,
    Button
  },
};
</script>