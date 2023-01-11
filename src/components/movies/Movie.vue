<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container">
    <div class="mt-5 d-flex border-bottom border-secondary img-movie">
      <img :src="posterPath" alt="" class="mb-5 mt-1 mr-5" width="55%" />
      <div>
        <h2>{{ this.movie.title }}</h2>
        <div>
          <img class="rate mb-1 mr-2" src="../../assets/icon-star.svg" alt="" />
          <span class="text-white-50"
            >{{ Math.floor(this.movie.vote_average * 10) }}% |
            {{ this.movie.release_date }}

            <span v-for="(item, index) in movie.genres" :key="index">
              {{ item.name }}
              <span v-if="movie.genres.length - 1 != index">,</span>
            </span>
          </span>
        </div>

        <p class="mt-4 w-75">
          {{ this.movie.overview }}
        </p>
        <span class="font-weight-bold">Feature Cast</span>
        <div class="d-flex mt-4 flex-wrap">
          <div
            class="mr-5"
            v-for="(crew, index) in movie.credits.crew"
            :key="index"
          >
            <div v-if="index < 2">
              <h6>{{ crew.name }}</h6>
              <span class="text-white-50">{{ crew.job }}</span>
            </div>
          </div>
        </div>
        <div class="d-flex mt-4">
          <div class="mr-3">
            <a @click.prevent="openYoutubeModel">
              <button class="d-flex px-4 py-3 flex-wrap">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  class="mr-2 mt-1"
                  style="width: 20px"
                >
                  <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                  <path
                    d="M188.3 147.1C195.8 142.8 205.1 142.1 212.5 147.5L356.5 235.5C363.6 239.9 368 247.6 368 256C368 264.4 363.6 272.1 356.5 276.5L212.5 364.5C205.1 369 195.8 369.2 188.3 364.9C180.7 360.7 176 352.7 176 344V167.1C176 159.3 180.7 151.3 188.3 147.1V147.1zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"
                  />
                </svg>
                play trailer
              </button>
            </a>
          </div>
          <div class="d-flex">
            <button class="d-flex px-4 py-3 flex-wrap">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                class="mr-2 mt-1"
                style="width: 20px"
              >
                <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                <path
                  d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z"
                />
              </svg>
              Favourite
            </button>
          </div>
        </div>
      </div>
    </div>

    <div>
      <Cast :casts="movie.credits.cast" />
    </div>
    <div>
      <Images
        :images="movie.images.backdrops"
        v-on:on-image-click="showImageModel"
      />
    </div>
    <MediaModel
      v-model="modelOpen"
      :mediaUrl="mediaUrl"
      :isVideo="this.isVideo"
    />
  </div>
</template>
<script>
import Cast from "./Cast.vue";
import Images from "./Images.vue";
import MediaModel from "../models/MediaModel.vue";
export default {
  components: {
    Cast,
    Images,
    MediaModel,
  },
  data() {
    return {
      movie: {
        credits: {
          cast: {},
        },
        images: {
          backdrops: {},
        },
      },
      modelOpen: false,
      isVideo: false,
      mediaUrl: "",
    };
  },
  mounted() {
    this.fetchMovies(this.$route.params.id);
  },
  watch: {
    "$route.params.id": {
      hundler() {
        this.fetchMovies(this.$route.params.id);
      },
    },
  },
  methods: {
    async fetchMovies(movieID) {
      const response = await this.$http.get(
        "/movie/" +
          movieID +
          "?api_key=76cb53146c7de0d3dcad96393f25549d&append_to_response=credits,videos,images"
      );
      this.movie = response.data;
    },
    openYoutubeModel() {
      this.mediaUrl = this.youtubeVideo;
      this.modelOpen = true;
      this.isVideo = true;
    },
    openImageModel() {
      this.modelOpen = true;
      this.isVideo = false;
    },
    showImageModel(fullImage) {
      this.mediaUrl = fullImage;
      this.modelOpen = true;
      this.isVideo = false;
    },
  },
  computed: {
    posterPath() {
      return "https://image.tmdb.org/t/p/w500/" + this.movie.poster_path;
    },
    youtubeVideo() {
      if (!this.movie.videos) return;
      return (
        "https://www.youtube.com/embed/" + this.movie.videos.results[0].key
      );
    },
  },
};
</script>
<style>
button {
  background-color: #dd7920;
  border: none;
  font-weight: bold;
  transition: 0.3s;
}
button:hover {
  background-color: #ae5e17;
}
.img-movie > img {
  max-width: 400px;
  max-height: 500px;
}
@media (max-width: 777px) {
  .img-movie {
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
