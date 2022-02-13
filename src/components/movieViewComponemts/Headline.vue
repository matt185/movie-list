<template>
  <div class="wrapper">
    <div class="content">
      <router-link to="/">
        <span>Home</span>
      </router-link>
      <span>|</span>
      <span>{{ title }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "headline",
  props: { title: String },
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 70px;
  background-color: $gray-800;
  color: white;
}
.content {
  display: flex;
  width: 100%;
  padding: 0 20px;

  span {
    font-size: 1.5;
    color: white;
    padding-right: 10px;

    @media screen and (max-width: 768px) {
      font-size: 1.2rem;
    }
  }
}
</style>