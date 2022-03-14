<template>
  <div class="content">
    <h1>HomePage</h1>
    <input
      class="input"
      type="text"
      :value="filterValue"
      @input="(e) => onFilter(e.target.value)"
      placeholder="Filter items"
    />
    <div class="columns">
      <div class="column">
        <ul>
          <li
            v-for="item in filterValue ? filteredItemsToAdd : itemsToAdd"
            :key="item.id"
          >
            {{ item.title }}
            <button class="button is-small" @click="() => onAdd(item.id)">
              +
            </button>
          </li>
        </ul>
      </div>

      <div class="column">
        <ul>
          <li
            v-for="item in filterValue ? filteredItemsToRemove : itemsToRemove"
            :key="item.id"
          >
            {{ item.title }}
            <button class="button is-small" @click="() => onRemove(item.id)">
              -
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "HomePage",
  data() {
    return {
      filterValue: "",
      filteredItemsToAdd: [],
      filteredItemsToRemove: [],
    };
  },
  computed: {
    ...mapGetters(["itemsToAdd", "itemsToRemove"]),
  },
  methods: {
    ...mapActions(["addItem", "removeItem"]),
    onAdd(id) {
      this.addItem(id);

      // TODO: заменить, костыль
      this.onFilter(this.filterValue);
    },
    onRemove(id) {
      this.removeItem(id);

      // TODO: заменить, костыль
      this.onFilter(this.filterValue);
    },
    onFilter(value) {
      this.filterValue = value;
      this.filteredItemsToAdd = this.itemsToAdd.filter((item) =>
        item.title.includes(this.filterValue)
      );
      this.filteredItemsToRemove = this.itemsToRemove.filter((item) =>
        item.title.includes(this.filterValue)
      );
    },
  },
};
</script>

