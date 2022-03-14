<template>
  <div class="content">
    <h1>HistoryPage</h1>
    <div class="container">
      <div class="columns">
        <div class="column">
          <h2>History of adds</h2>
          <ul>
            <li v-for="(item, index) in historyOfAdds" :key="index">
              {{ item }}
            </li>
          </ul>
        </div>
        <div class="column">
          <h2>History of removals</h2>

          <ul>
            <li v-for="(item, index) in historyOfRemoves" :key="index">
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "HistoryPage",
  computed: {
    ...mapGetters(["historyOfAdds", "historyOfRemoves"]),
  },
};
</script>

