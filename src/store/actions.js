import { fetchItems } from "../api";

export default {
  getItems({ commit }) {
    fetchItems().then((data) => {
      commit("setItems", data);
    });
  },
  addItem({ commit }, id) {
    commit("addItem", id);
  },
  removeItem({ commit }, id) {
    commit("removeItem", id);
  },
};
