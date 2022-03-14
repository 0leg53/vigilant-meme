import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../pages/Home.vue";
import HistoryPage from "../pages/History.vue";
import PageNotFound from "../pages/NotFound.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/history", component: HistoryPage },
  {
    path: "/:catchAll(.*)*",
    name: "PageNotFound",
    component: PageNotFound,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
