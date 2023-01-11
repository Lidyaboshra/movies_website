<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="mt-4 border-bottom border-secondary">
    <h1 class="font-weight-bold mb-4">Cast</h1>
    <div class="row">
      <div
        class="col-lg-3 col-sm-4 d-flex flex-column"
        :key="index"
        v-for="(cast, index) in casts"
      >
        <img :src="castProfileImage(cast)" />
        <span class="mb-3">{{ cast.name }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    casts: {
      required: true,
    },
  },
  methods: {
    castProfileImage(cast) {
      if (cast.profile_path)
        return "https://image.tmdb.org/t/p/w300/" + cast.profile_path;
      return "https://via.placeholder.com/300x450";
    },
  },
};
</script>
