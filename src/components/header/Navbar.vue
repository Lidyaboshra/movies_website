<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark">
      <router-link to="/movies_website/" class="navbar-brand">
        <img src="../../assets/logo.png" alt="logo" style="width: 100px" />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/movies_website/" class="nav-link"
              >Movies</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/actors" class="nav-link">Actors</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
<script>
export default {};
</script>
<style>
.navbar-dark .navbar-nav .nav-link {
  color: white !important;
}
</style>
