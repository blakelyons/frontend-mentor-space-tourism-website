<template>
    <v-app>
        <MainHeader :route="currentRoute" :pageTitle="interiorPageTitle" />

        <main id="view-container" :data-view="currentView === `` ? `home` : currentView">
            <InteriorHeader :pageTitle="interiorPageTitle" />
            <router-view :animatePageLoad="animatePageLoad" @update-background="updateBackground" :pageTitle="interiorPageTitle" />
        </main>

        <footer>
            <p><a href="https://blakelyons.com" target="_blank">blakelyons.com</a></p>
        </footer>

        <Transition name="fade">
            <div id="space-background" :class="`space-background ${spaceBackground}`" v-if="spaceBackground"></div>
        </Transition>
    </v-app>
</template>

<script setup>
import {ref, watch, computed} from "vue";
import {useRoute} from "vue-router";

// Components
import MainHeader from "@/layout/MainHeader.vue";
import InteriorHeader from "@/layout/InteriorHeader.vue";

const route = useRoute();
const currentRoute = ref(null);
const interiorPageTitle = ref(null);
const animatePageLoad = ref(true);
const currentView = ref(route.path.replace(/\//g, ""));

const spaceBackground = ref("space-background--home");

const updateBackground = (bg) => {
    switch (bg) {
        case "Moon":
        case "Mars":
        case "Europa":
        case "Titan":
            spaceBackground.value = "space-background--moon";
            break;
        case "crew":
            spaceBackground.value = "space-background--crew";
            break;
        default:
            spaceBackground.value = "space-background--earth";
            break;
    }
};

watch(
    route,
    () => {
        const routeObj = computed(() => route.name);
        currentRoute.value = routeObj.value;

        interiorPageTitle.value = null;

        if (currentRoute.value === "home") {
            spaceBackground.value = "space-background--earth";
        } else {
            interiorPageTitle.value = currentRoute.value;
        }
    },
    {immediate: false}
);

window.addEventListener("load", () => {
    const headerElement = document.querySelector(".main-header");
    const mainElement = document.getElementById("view-container");

    let headerHeight = headerElement.offsetHeight;
    let mainHeight = mainElement.offsetHeight;

    mainElement.style.height = `${mainHeight - headerHeight}px`;
});
</script>

<style scoped></style>
