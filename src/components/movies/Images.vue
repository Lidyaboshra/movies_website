<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="mt-4 border-bottom border-secondary">
    <h1 class="font-weight-bold mb-4">Images</h1>
    <div class="row">
      <div
        class="col-lg-3 col-sm-3 d-flex flex-column mb-4"
        v-for="(image, index) in images"
        :key="index"
      >
        <img :src="ProfileImage(image)" @click="openModel(image)" />
      </div>
    </div>
  </div>
</template>
<style>
img {
  cursor: pointer;
}
</style>
<script>
export default {
  props: {
    images: {
      required: true,
    },
  },
  methods: {
    ProfileImage(img) {
      if (img.file_path) {
        return "https://image.tmdb.org/t/p/w300/" + img.file_path;
      } else {
        return "https://via.placeholder.com/300x450";
      }
    },
    openModel(img) {
      let fullImage = "";
      if (img.file_path) {
        fullImage = "https://image.tmdb.org/t/p/original/" + img.file_path;
      } else {
        fullImage = "https://via.placeholder.com/300x450";
      }
      this.$emit("on-image-click", fullImage);
    },
  },
};
</script>
