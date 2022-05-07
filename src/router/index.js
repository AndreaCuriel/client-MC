import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    alias: "/missionCommanders",
    name: "missionCommanders",
    component: () => import("./../components/MissionCommanders"),
  },
  {
    path: "/addMissionCommander",
    name: "addMisisonCommander",
    component: () => import("./../components/AddMissionCommander"),
  },

  {
    path: "/missionCommanders/:id",
    name: "MissionCommander-details",
    component: () => import("./../components/IdMissionCommander.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
