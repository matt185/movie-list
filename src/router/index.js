import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: "/movie-info/:movieId?",
    name: "MovieInfo",
    component: () =>
      import(/* webpackChunkName: "movie-info" */ "../views/MovieInfo.vue"),
    props(route) {
      console.log("route: ",  route);
      const props = {
        movieId: route.params.movieId,
      };
      return props;
    },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
