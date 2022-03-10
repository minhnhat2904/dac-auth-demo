<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light py-3">
      <div class="container">
        <router-link to="/" class="navbar-brand d-flex align-items-center">
          <i class="fa fa-snowflake-o fa-lg text-primary mr-2"></i
          ><strong>DAC - JAVA02</strong></router-link
        >
        <button
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          class="navbar-toggler"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div id="navbarSupportedContent" class="collapse navbar-collapse">
          <ul class="navbar-nav ml-auto" v-if="!user">
            <li class="nav-item active">
              <router-link to="/login" class="nav-link font-italic"> Login </router-link>
            </li>
            <li class="nav-item active">
              <router-link to="/register" class="nav-link font-italic"> Register </router-link>
            </li>
          </ul>
          <ul class="navbar-nav ml-auto" v-if="user">
            <li class="nav-item active">
              <a href="javascript:void(0)" @click="handleClick" class="nav-link font-italic"> Logout </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name : 'NavComponent',

  methods: {
    handleClick() {
      localStorage.removeItem('token');
      this.$store.dispatch('user', null);
      this.$router.push('/');
    }
  },
  computed: {
    ...mapGetters(['user'])
  }
}
</script>

<style>

</style>