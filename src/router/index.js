import {createRouter, createWebHistory} from "vue-router";
import HomeView from "../views/HomeView.vue"
import LoginView from "../views/Auth/LoginView.vue"
import RegisterView from "../views/Auth/RegisterView.vue"

const routes = [
    {
        path: "/",
        component: HomeView
    },
    {
      path: "/login",
      component: LoginView
    },
    {
      path: "/register",
      component: RegisterView
  }
];

const router = createRouter({
    routes,
    history: createWebHistory()
});

export default router;
