<template>
  <div class="wrapper">
    <img
      src="../assets/images/search-icon.svg"
      alt="magnify glass icon"
    />
    <b-form-input
      class="input"
      v-model="searched"
      type="text"
      placeholder="Search Movie"
      @input="search(searched)"
    ></b-form-input>
  </div>
</template>

<script>
export default {
  name: "search-bar",
  data: () => {
    return {
      searched: "",
    };
  },
  methods: {
    search(searched) { 
        this.$store.commit("setSearched",searched)
        if (!searched){
          this.$store.dispatch("movies");
        }else{
          this.$store.dispatch("movies", searched);
        }      
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  height: 50px;
  background-color: $gray-900;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 30px;
    margin-right: 1rem;
  }
  
  .input {
    width: 70%;
    height: 30px;
    border-radius: 20px;
  }
}
</style>
