<template>
  <div class="d-flex flex-column col-lg-4 col-md-6">
    <router-link :to="`/actors/${this.actor.id}`">
      <img :src="profilePath" width="100%" class="mb-2" />
    </router-link>

    <div>
      <span>{{ actor.name }}</span>
      <p class="text-white-50">
        {{ knownFor() }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    actor: {
      required: true,
    },
  },
  data() {
    return {};
  },
  computed: {
    profilePath() {
      return "https://image.tmdb.org/t/p/w300/" + this.actor.profile_path;
    },
  },
  methods: {
    knownFor() {
      let knownStr = "";
      for (let i; i < this.actor.known_for.length - 1; i++) {
        knownStr += this.actor.known_for[i];
      }
      return knownStr;
    },
  },
};
</script>
