import VueRouter from "vue-router";
import Home from "./components/Home.vue";
import Movie from "./components/movies/Movie.vue";
import Actors from "./components/actors/Actors.vue";
import ActorDetail from "./components/actors/ActorDetails.vue";
const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/movies_website/",
      name: "home",
      component: Home,
    },
    {
      path: "/movie/:id",
      name: "movie",
      component: Movie,
    },
    {
      path: "/actors",
      name: "actors",
      component: Actors,
    },
    {
      path: "/actors/:id",
      name: "actorDetails",
      component: ActorDetail,
    },
  ],
});

export default router;
