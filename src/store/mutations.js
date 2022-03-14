export default {
  setItems(state, items) {
    state.items = items;
    state.itemsToAdd = items;
  },
  addItem(state, id) {
    const item = state.itemsToAdd.find((item) => item.id === id);
    state.itemsToAdd = state.itemsToAdd.filter((item) => item.id !== id);
    state.itemsToRemove.push(item);

    state.historyOfAdds.push(`Item named "${item.title}" was added`);
  },
  removeItem(state, id) {
    const item = state.itemsToRemove.find((item) => item.id === id);
    state.itemsToRemove = state.itemsToRemove.filter((item) => item.id !== id);
    state.itemsToAdd.push(item);

    state.historyOfRemoves.push(`Item named "${item.title}" was removed`);
  },
};
