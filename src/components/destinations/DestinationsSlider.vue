<template>
    <v-container class="destinations">
        <v-row>
            <v-col :cols="mdAndUp ? 6 : 12">
                <div class="planets" id="planets">
                    <div :class="`planets__planet_image ${planetUpdated ? `planets__planet--active` : ``}`">
                        <img src="@/assets/images/destination/image-moon.webp" alt="Moon" v-if="tab == 'Moon'" />
                        <img src="@/assets/images/destination/image-mars.webp" alt="Mars" v-if="tab == 'Mars'" />
                        <img src="@/assets/images/destination/image-europa.webp" alt="Europa" v-if="tab == 'Europa'" />
                        <img src="@/assets/images/destination/image-titan.webp" alt="Titan" v-if="tab == 'Titan'" />
                    </div>
                </div>
            </v-col>
            <v-col :cols="mdAndUp ? 6 : 12" class="destinations__planet-info">
                <v-container>
                    <v-tabs
                        v-model="tab"
                        bg-color="transparent"
                        selected-class="destination--selected"
                        :align-tabs="tabsPosition"
                        :data-tab-position="tabsPosition"
                        class="destination-tabs"
                    >
                        <v-tab
                            :ripple="false"
                            class="destination-tab no-background-hover"
                            :value="planet.name"
                            variant="plain"
                            v-for="planet in destinations"
                            :key="planet.name"
                            @click="scrollToPlanets"
                        >
                            {{ planet.name }}
                        </v-tab>
                    </v-tabs>
                </v-container>

                <v-window v-model="tab">
                    <template v-for="planet in destinations" :key="planet.name">
                        <v-window-item :value="planet.name">
                            <v-container class="destinations__planet-details">
                                <h2 class="h1 destination-title">{{ planet.name }}</h2>
                                <p class="planet-description">
                                    {{ planet.description }}
                                </p>
                                <div class="planet-stats">
                                    <div class="avg-distance">
                                        <div class="eyebrow">Avg. Distance</div>
                                        <div class="planet-stat">
                                            <span class="planet-stat-num">{{ addCommas(planet.avg_distance) }}</span>
                                            <span class="planet-stat__suffix">{{ planet.measurement }}</span>
                                        </div>
                                    </div>
                                    <div class="est-travel-time">
                                        <div class="eyebrow">Est. Travel Time</div>
                                        <div class="planet-stat">
                                            <span class="planet-stat-num">{{ planet.est_travel_time }}</span>
                                        </div>
                                    </div>
                                </div>
                            </v-container>
                        </v-window-item>
                    </template>
                </v-window>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import {ref, watch, computed, onMounted} from "vue";
import {useDisplay} from "vuetify";
import Lenis from "@studio-freight/lenis";
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
    direction: "vertical",
    gestureDirection: "vertical",
    smooth: true,
    smoothTouch: false,
    touchMultiplier: 2,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

const {mdAndUp} = useDisplay();

const tab = ref(null);
const planetUpdated = ref(true);

const addCommas = computed(() => (number) => {
    // A function that formats the number with commas
    if (typeof number === "number" || typeof number === "string") {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return number;
});

const tabsPosition = ref("center");
const positionTabs = () => {
    if (window.innerWidth < 1024) {
        tabsPosition.value = "center";
    } else {
        tabsPosition.value = "left";
    }
    window.addEventListener("resize", () => {
        if (window.innerWidth < 1024) {
            tabsPosition.value = "center";
        } else {
            tabsPosition.value = "left";
        }
    });
};

const swapPlanetImage = () => {
    planetUpdated.value = false;
    setTimeout(() => {
        planetUpdated.value = true;
    }, 100);
};

// Scroll to #planets
const scrollToPlanets = () => {
    lenis.scrollTo("#planets");
};

const destinations = ref([
    {
        name: "Moon",
        description:
            "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        avg_distance: "384400",
        measurement: "KM",
        est_travel_time: "3 Days",
    },
    {
        name: "Mars",
        description:
            "Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!",
        avg_distance: "225",
        measurement: "MIL. KM",
        est_travel_time: "9 Months",
    },
    {
        name: "Europa",
        description:
            "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
        avg_distance: "628",
        measurement: "MIL. KM",
        est_travel_time: "3 Years ",
    },
    {
        name: "Titan",
        description:
            "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
        avg_distance: "1.6",
        measurement: "BIL. KM",
        est_travel_time: "7 Years",
    },
]);

const emit = defineEmits(["updateBackground"]);

watch(
    tab,
    () => {
        emit("updateBackground", tab.value);
        swapPlanetImage();
    },
    {immediate: true}
);

onMounted(() => {
    positionTabs();
});
</script>

<style scoped lang="scss">
.destinations {
    margin-top: 0;
    transition: var(--default-transition);

    .destination-info {
        @media screen and (min-width: 65em) {
            padding-right: 6rem;
        }
    }

    .destination-title {
        font-size: clamp(3.5rem, 7vw, 7em);
        line-height: normal;
        margin-bottom: 0.5rem;
    }
}

.no-background-hover::before {
    background: none !important;
    background-color: none !important;
}

.destination-tab.v-tab.v-tab {
    transition: var(--default-transition);
    opacity: 1;
    color: var(--clr-moon-blue);

    @media screen and (max-width: 40em) {
        min-width: 25%;
    }

    &:active,
    &:hover,
    &:focus {
        color: var(--clr-white);
        &.v-btn--variant-text .v-btn__overlay {
            background: none !important;
            background-color: none !important;
        }
    }

    &.v-btn--variant-text .v-btn__overlay {
        background: none !important;
    }

    &.destination--selected {
        color: var(--clr-white);
        opacity: 1;
    }
}

.v-btn__overlay {
    background: none !important;
}

@media screen and (min-width: 40em) and (max-width: 60em) {
    .destination-tabs {
        margin: 2rem 0;
    }
}

.destinations__planet-info {
    padding: 0 2rem 2rem 2rem;

    @media screen and (max-width: 1024px) {
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 0;
    }

    @media screen and (min-width: 40em) {
        padding: 0 4rem 4rem 4rem 4rem;
    }
}

.destinations__planet-details {
    .planet-description {
        max-width: 26rem;
    }
    .planet-stats {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        margin-top: 1rem;
        padding-top: 1rem;
        border-top: 1px solid var(--clr-border-bottom);

        @media screen and (min-width: 40em) {
            margin-top: 2rem;
            padding-top: 2rem;
            grid-template-rows: 1fr 1fr;
            grid-template-columns: 1fr 1fr;
        }

        .eyebrow {
            font-size: clamp(1rem, 1.5vw, 1.5rem);

            @media screen and (max-width: 40em) {
                margin-bottom: 0;
            }
        }

        .planet-stat {
            font-size: clamp(1.5rem, 2vw, 28px);
            font-family: var(--ff-heading);
            color: var(--clr-white);

            @media screen and (max-width: 40em) {
                margin-bottom: 1rem;
            }

            .planet-stat-num {
                padding-right: 0.25rem;
                text-transform: uppercase;
            }
        }
    }
}

.planets {
    display: block;
    position: relative;
    transition: var(--default-transition);
    padding-top: 4rem;

    @media screen and (max-width: 60em) {
        padding-top: 0;
    }

    .planets__planet_image {
        max-width: 75vw;
        margin: 0 auto;
        position: relative;

        @media screen and (max-width: 65em) {
            display: flex;
            justify-content: center;

            max-width: 35vw;
        }

        &.planets__planet--active {
            img {
                opacity: 1;
            }
        }

        img {
            transition: all 0.3s ease-in-out;

            transform-origin: top;
            opacity: 0;
        }
    }
}
</style>
