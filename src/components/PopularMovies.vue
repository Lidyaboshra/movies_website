<template>
  <div>
    <h5
      class="mt-3 text-lg-start text-uppercase fs-2 mb-4"
      style="color: #dd7920"
    >
      Popular Movies
    </h5>
    <div>
      <div class="row">
        <MovieItem
          v-for="movie in movies"
          :key="movie.id"
          :movie="movie"
          :genres="genres"
        />
      </div>
    </div>
  </div>
</template>
<script>
import MovieItem from "./items/MovieItem.vue";
export default {
  components: { MovieItem },
  data() {
    return {
      movies: [],
      genres: [],
    };
  },
  async mounted() {
    this.fetchGenres();
    try {
      const response = await this.$http.get(
        "/movie/popular?api_key=76cb53146c7de0d3dcad96393f25549d"
      );
      this.movies = response.data.results;
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    async fetchGenres() {
      try {
        const response = await this.$http.get(
          "genre/movie/list?api_key=76cb53146c7de0d3dcad96393f25549d"
        );
        this.genres = response.data.genres;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
