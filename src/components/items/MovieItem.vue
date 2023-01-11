<template>
  <div class="col-xs-12 col-sm-6 col-md-3 mb-2">
    <router-link :to="`/movie/${movie.id}`">
      <img :src="posterPath" alt="" />
    </router-link>

    <h4>{{ movie.title }}</h4>
    <div class="d-flex">
      <img class="rate" src="../../assets/icon-star.svg" alt="" />

      <div>{{ movie.vote_average * 10 }}% | {{ movie.release_date }}<br /></div>
    </div>

    <span class="fs-6 text-white-50">
      <span v-for="(genra, index) in movie.genre_ids" :key="genra.id">
        {{ genraTypeName(genra, index) }}
      </span>
    </span>
  </div>
</template>
<script>
export default {
  props: {
    movie: {
      required: true,
    },
    genres: {
      required: true,
    },
  },
  computed: {
    posterPath() {
      return "https://image.tmdb.org/t/p/w500/" + this.movie.poster_path;
    },
  },
  methods: {
    genraTypeName(genraId, index) {
      for (const item of this.genres) {
        if (item.id == genraId) {
          if (this.movie.genre_ids.length - 1 == index) {
            return item.name;
          }
          return item.name + ",";
        }
      }
    },
  },
};
</script>
<style scoped>
img {
  transition: 0.3s;
  position: relative;
  width: 100%;
}
img:hover {
  opacity: 75%;
}
.rate {
  width: 15px;
  margin-right: 3px;
  height: 15px;
  position: relative;
  top: 4px;
}
</style>
