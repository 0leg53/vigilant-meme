<template>
  <div class="container">
    <a
      role="button"
      :class="['navbar-burger', { 'is-active': isOpened }]"
      @click="toggleNavBar"
      data-target="navMenu"
      aria-label="menu"
      aria-expanded="false"
    >
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>

    <div id="navMenu" :class="['navbar-menu', { 'is-active': isOpened }]">
      <RouterLink class="navbar-item" to="/">Go to Home</RouterLink>
      <RouterLink class="navbar-item" to="/history">Go to History</RouterLink>
    </div>
  </div>
</template>



<script>
import { RouterLink } from "vue-router";
export default {
  name: "NavBar",
  data() {
    return {
      isOpened: false,
    };
  },
  methods: {
    toggleNavBar() {
      this.isOpened = !this.isOpened;
    },
  },
  components: {
    RouterLink,
  },
};
</script>

<style>
</style>