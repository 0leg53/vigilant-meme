<script>
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";

export default {
  components: {
    RouterView,
    NavBar,
  },
  mounted() {
    this.$store.dispatch("getItems");
  },
};
</script>

<template>
  <div>
    <NavBar />

    <div class="container">
      <RouterView />
    </div>
  </div>
</template>

