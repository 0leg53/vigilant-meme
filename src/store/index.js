import { createStore, createLogger } from "vuex";

import state from "./state";

import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

const plugins = [];
if (process.env.NODE_ENV === "development") plugins.push(createLogger());

export const store = createStore({
  plugins: plugins,
  state() {
    return state;
  },
  getters,
  actions,
  mutations,
});
