import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
// import Login from "../views/Login.vue";
// import AdminDashboard from "../views/AdminDashboard.vue";
import Cottages from "../views/Cottages.vue";
import Contact from "../views/Contact.vue";
import RentalCars from "../views/RentalCars.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  // {
  //   path: "/login",
  //   name: "login",
  //   component: Login,
  // },
  // {
  //   path: "/admindashboard",
  //   name: "adminDashboard",
  //   component: AdminDashboard,
  //   meta: {
  //     loginAuth: true,
  //   },
  //   beforeEnter: (to, from, next) => {
  //     const authenticatedUser = localStorage.getItem("token");
  //     if (authenticatedUser) {
  //       next();
  //       return;
  //     }
  //     next("/login");
  //     return;
  //   },
  // },
  {
    path: "/cottages",
    name: "cottages",
    component: Cottages,
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact,
  },
  {
    path: "/rentalcars",
    name: "rentalcars",
    component: RentalCars,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    if (!savedPosition) return { x: 0, y: 0 };
  },
});

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

export default router;
