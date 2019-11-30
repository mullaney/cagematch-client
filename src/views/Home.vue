<template>
  <div>
    <div v-if="loading">Loading</div>
    <div v-else>
      <h1>{{ title }}</h1>
      <div>
        <p>
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "home",
  computed: {
    ...mapGetters(["cagematch"]),
    title() {
      return this.cagematch.title;
    },
    description() {
      return this.cagematch.description;
    },
    id() {
      return this.cagematch.id;
    },
    loading() {
      return this.cagematch.loading;
    }
  }
};
</script>
