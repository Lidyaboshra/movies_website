<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="container">
    <h5
      class="mt-3 text-lg-start text-uppercase fs-2 mb-4"
      style="color: #dd7920"
    >
      Popular Actors
    </h5>
    <div class="row">
      <Actors v-for="(actor, index) in actors" :key="index" :actor="actor" />
    </div>

    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li class="page-item">
          <a class="page-link" href="#" @click.prevent="previous()">Previous</a>
        </li>

        <li class="page-item">
          <a class="page-link" href="#" @click.prevent="next()">Next</a>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
import Actors from "../items/ActorItem.vue";
let currentPage = 1;
export default {
  components: {
    Actors,
  },
  data() {
    return {
      actors: [],
      disabled: false,
    };
  },
  mounted() {
    this.fetchActors(currentPage);
  },
  methods: {
    async fetchActors(page) {
      try {
        const response = await this.$http.get(
          "/person/popular?api_key=76cb53146c7de0d3dcad96393f25549d&page=" +
            page
        );
        this.actors = response.data.results;
      } catch (error) {
        console.log(error);
      }
    },
    previous() {
      if (currentPage >= 2) {
        currentPage--;
      }
      console.log(currentPage);
      this.fetchActors(currentPage);
    },
    next() {
      currentPage++;
      this.fetchActors(currentPage);
    },
  },
};
</script>
