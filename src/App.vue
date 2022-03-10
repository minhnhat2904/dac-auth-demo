<template>
  <div id="app">
    <Nav />
    <router-view/>
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    Nav,
  },
  async created() {
    const response = await axios.get('/test/private');

    this.$store.dispatch('user', response.data);
  }
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  font-family: "Lobster", cursive;
  box-sizing: border-box;
}

body {
  overflow: hidden;
}
</style>
