<template>
  <div id="app">
    <Nav />
    <router-view/>
    <Login />
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";

export default {
  name: "App",
  components: {
    Nav,
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  font-family: "Lobster", cursive;
}
body {
  font-family: "Lobster", cursive;
  overflow: hidden;
}
</style>
