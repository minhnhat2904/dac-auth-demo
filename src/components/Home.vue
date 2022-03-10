<template>
  <div class="home">
    <div class="home__inner" v-if="user">
      Welcome, {{ user.first_name}} {{ user.last_name }}
    </div>
    <div class="home__inner" v-if="!user">
      You are not login
    </div>
    <div></div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: "HomeComponent",
  props: ['user'],
  computed: {
    ...mapGetters(['user'])
  }
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
