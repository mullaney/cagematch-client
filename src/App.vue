<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/rankings">Rankings</router-link> |
      <router-link to="/scores">Scores</router-link> |
      <router-link to="/rules">Rules</router-link> |
      <router-link to="/records">Records</router-link> |
      <router-link to="/archives">Archives</router-link> |
      <a
        href="https://www.ucbtheatre.com/show/25"
        rel="noopener"
        target="_blank"
      >
        Tickets
      </a>
    </div>
    <router-view />
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["fetchCagematch"])
  },
  created() {
    this.fetchCagematch();
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
