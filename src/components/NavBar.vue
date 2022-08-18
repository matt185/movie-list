<template>
  <b-navbar class="header d-flex justify-content-center align-items-center" toggleable="lg" variant="info" fixed="top">
    <b-navbar-brand class="h-100 d-flex justify-content-center align-items-center" href="/">
        <img　class="mr-2 h-75" alt="Vue logo" src="../assets/images/tmdb_logo.svg">
        <h4 class="mb-0">Movie List</h4>
    </b-navbar-brand>
  </b-navbar>
</template>

<style lang="scss" scoped>
.bg-info {
  background-color: $gray-900 !important; 
  height: 40px;
}

.navbar-light .navbar-brand {
color: white;
}

.navbar-light .navbar-brand:hover, .navbar-light .navbar-brand:focus {
    color: $vue-green;
    text-decoration: none;
}

</style>