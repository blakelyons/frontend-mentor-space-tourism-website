import {createRouter, createWebHistory} from "vue-router";
import HomeView from "../views/HomeView.vue";
import DestinationView from "../views/DestinationView.vue";
import CrewView from "../views/CrewView.vue";
import TechnologyView from "../views/TechnologyView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
            meta: {transition: "slide-right"},
        },
        {
            path: "/pick-your-destination",
            name: "<span class='page-number'>01</span> Pick Your Destination",
            component: DestinationView,
        },
        {
            path: "/meet-your-crew",
            name: "<span class='page-number'>02</span> Meet Your Crew",
            component: CrewView,
        },
        {
            path: "/space-launch-101",
            name: "<span class='page-number'>03</span> Space Launch 101",
            component: TechnologyView,
        },
    ],
});

export default router;
