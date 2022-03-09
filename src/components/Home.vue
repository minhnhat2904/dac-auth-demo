<template>
  <div class="home">
    <div class="home__inner">Welcome</div>
  </div>
</template>

<script>
export default {
  name: "HomeComponent",
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');

.home {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: pink !important;
  height: 100vh;
}

.home__inner {
  width: 500px;
  height: 200px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  font-size: 38px;
  font-family: inherit;
}
</style>
