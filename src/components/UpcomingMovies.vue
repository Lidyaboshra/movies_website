<template>
  <div>
    <div id="example">
      <h5 class="mt-5 text-uppercase" style="color: #dd7920">
        UPCOMING VIDEOS
      </h5>
      <carousel-3d
        :controls-visible="true"
        :clickable="false"
        :key="upcomingMovies.length"
        :listData="upcomingMovies"
        :height="500"
      >
        <slide v-for="(slide, i) in upcomingMovies" :index="i" :key="i">
          <figure>
            <img
              :src="'https://image.tmdb.org/t/p/w500/' + slide.poster_path"
            />
            <figcaption>
              <router-link :to="`/movie/${slide.id}`">
                {{ slide.title }}
              </router-link>
            </figcaption>
          </figure>
        </slide>
      </carousel-3d>
    </div>
  </div>
</template>
<script>
import { Carousel3d, Slide } from "vue-carousel-3d";
export default {
  components: { Carousel3d, Slide },
  data() {
    return {
      upcomingMovies: [],
    };
  },
  mounted() {
    this.fetchUpcomingMovies();
  },
  methods: {
    async fetchUpcomingMovies() {
      try {
        const response = await this.$http.get(
          "https://api.themoviedb.org/3/movie/upcoming?api_key=76cb53146c7de0d3dcad96393f25549d"
        );
        this.upcomingMovies = response.data.results;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
<style scoped>
.carousel-3d-container figure {
  margin: 0;
}

.carousel-3d-container figcaption {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  bottom: 0;
  position: absolute;
  bottom: 0;
  padding: 15px;
  font-size: 12px;
  min-width: 100%;
  box-sizing: border-box;
}
a,
a:hover {
  color: #fff !important;
  text-decoration: none !important;
  background-color: transparent;
}
</style>
