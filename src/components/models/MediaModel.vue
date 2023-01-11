<template>
  <div class="modal" tabindex="-1" v-if="value">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title"></h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            @click="close"
          ></button>
        </div>
        <img :src="mediaUrl" v-if="!isVideo" />
        <div class="modal-body">
          <iframe
            width="100%"
            height="315"
            :src="mediaUrl"
            allow="autoplay"
            v-if="isVideo"
          >
          </iframe>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      required: true,
    },
    mediaUrl: {
      required: true,
    },
    isVideo: {
      required: true,
    },
  },
  methods: {
    close() {
      this.$emit("input", !this.value);
    },
  },
};
</script>
<style>
.modal {
  display: block !important;
}
.modal-content {
  background-color: #444b5b !important;
}
</style>
