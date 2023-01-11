<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="d-flex flex-wrap position-relative">
    <input
      type="text"
      placeholder="Search.. "
      class="rounded-pill py-1 px-4"
      style="margin: 7px"
      @input="debounceSearch"
      @keyup.enter="exitFromSearch"
      v-model="searchTerm"
    />
    <div class="position-absolute" style="top: 15px; left: 15px; width: 15px">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
        <path
          d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"
        />
      </svg>
    </div>
    <div
      class="search-result position-absolute mt-5 ml-2 pt-1 px-2"
      style="z-index: 99; width: 80%"
    >
      <ul v-if="searchResult.length != 0" style="background-color: #444b5b">
        <li
          class="border-bottom border-secondary py-1"
          v-for="(movie, index) in searchResult"
          :key="index"
        >
          <router-link
            :to="`/movie/${movie.id}`"
            @click.native="searchResult = false"
          >
            <img :src="posterPath(movie)" alt="" width="40px" class="mr-2" />
            <span>{{ movie.original_title }}</span>
          </router-link>
        </li>
      </ul>
      <ul
        v-if="noResult && searchResult"
        style="background-color: #444b5b"
        class="p-2"
      >
        <li>No Found Result Of "{{ searchTerm }}"</li>
      </ul>
    </div>

    <div>
      <AccountDropDown />
    </div>
  </div>
</template>
<script>
import AccountDropDown from "./AccountDropDown.vue";
export default {
  components: { AccountDropDown },
  data() {
    return {
      searchResult: [],
      noResult: false,
      searchTerm: "",
    };
  },
  mounted() {
    this.KeyboardEvent();
  },
  methods: {
    debounceSearch(event) {
      clearTimeout(this.debounce);
      this.debounce = setTimeout(() => {
        this.fetchSearch(event.target.value);
      }, 600);
    },
    async fetchSearch(term) {
      try {
        const response = await this.$http.get(
          "https://api.themoviedb.org/3/search/movie?api_key=76cb53146c7de0d3dcad96393f25549d&query=" +
            term
        );
        this.searchResult = response.data.results;
        this.noResult = response.data.results ? true : false;
        console.log(this.searchResult);
      } catch (error) {
        console.log(error);
      }
    },
    posterPath(movie) {
      if (movie.poster_path) {
        return "https://image.tmdb.org/t/p/w500/" + movie.poster_path;
      } else {
        return "https://via.placeholder.com/40x60";
      }
    },
    KeyboardEvent() {
      window.addEventListener("keydown", (e) => {
        if (e.key == "Escape") {
          this.searchResult = false;
          this.noResult = false;
        }
      });
    },
  },
};
</script>
<style scoped>
input:focus {
  outline: none;
}
ul {
  padding: 0;
}
ul li {
  list-style-type: none;
  cursor: pointer;
}
a,
a:hover {
  color: #fff !important;
  text-decoration: none !important;
  background-color: transparent;
}
</style>
