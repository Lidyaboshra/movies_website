<template>
  <div id="app">
    <div
      class="container d-flex justify-content-between align-items-center border-bottom border-secondary flex-wrap"
    >
      <navbar />
      <Search />
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "./components/header/Navbar.vue";
import Search from "./components/header/Searchbar.vue";
export default {
  name: "App",
  components: { Navbar, Search },
};
</script>

<style>
a,
a:hover {
  color: transparent;
  text-decoration: none;
}
</style>
