import { createRouter, createWebHistory } from "vue-router";

// Pages
import MainPage from "@/pages/main.vue";
import LearningPage from "@/pages/learning.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: MainPage,
  },

  {
    path: "/learning",
    name: "learning",
    component: LearningPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
