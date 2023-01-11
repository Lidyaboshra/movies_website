<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section class="container">
    <PopularMovies />
    <UpcomingMovies />
  </section>
</template>
<script>
import PopularMovies from "./PopularMovies.vue";
import UpcomingMovies from "./UpcomingMovies.vue";
export default {
  components: { PopularMovies, UpcomingMovies },
};
</script>
