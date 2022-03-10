<template>
  <div id="app">
    <Nav :user="user" />
    <router-view :user="user"/>
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
  box-sizing: border-box;
}

body {
  overflow: hidden;
}
</style>
