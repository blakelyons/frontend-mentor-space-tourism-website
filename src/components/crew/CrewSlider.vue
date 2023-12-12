<template>
    <v-col class="meet-your-crew__carousel" :cols="`${mdAndUp ? `6` : `12`}`" :class="!mdAndUp ? `text-center` : ``">
        <v-carousel
            :height="mdAndUp ? `400px` : `auto`"
            v-model="crewMemberModel"
            :delimiter-icon="mdiCircle"
            :hide-delimiter-background="true"
            :show-arrows="false"
        >
            <v-carousel-item
                class="meet-your-crew__carousel-slide meet-your-crew__carousel-slide--active"
                v-for="(crewMember, i) in crew"
                :key="i"
                :value="crewMember.id"
                selected-class="meet-your-crew__carousel-slide--active"
                content-class="meet-your-crew__carousel-slide-content"
            >
                <div class="crew-title">
                    <div class="eyebrow" v-text="crewMember.title" />
                    <h2 v-text="crewMember.name" />
                </div>
                <div class="crew-bio">
                    <p v-text="crewMember.bio" />
                </div>
            </v-carousel-item>
        </v-carousel>
    </v-col>
    <v-col class="crew-member-image-container" :cols="`${mdAndUp ? `6` : `12`}`" :class="!mdAndUp ? `text-center` : ``">
        <div class="crew-member-image">
            <template v-for="(crewMember, i) in crew" :key="i">
                <Transition :name="mdAndUp ? `fade` : ``">
                    <img :src="crewMember.image" :alt="crewMember.name" v-if="crewMemberModel === crewMember.id" />
                </Transition>
            </template>
        </div>
    </v-col>
</template>

<script setup>
import {ref} from "vue";
import {useDisplay} from "vuetify";
import {mdiCircle} from "@mdi/js";

const {mdAndUp} = useDisplay();

const crewMemberModel = ref(null);
const crew = ref([
    {
        id: 1,
        name: "Douglas Hurley",
        title: "Commander",
        bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
        image: "./src/assets/images//image-douglas-hurley.webp",
    },
    {
        id: 2,
        name: "Mark Shuttleworth",
        title: "Mission Specalist",
        bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
        image: "./src/assets/images//image-mark-shuttleworth.webp",
    },
    {
        id: 3,
        name: "Victor Glover",
        title: "Pilot",
        bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
        image: "./src/assets/images//image-victor-glover.webp",
    },
    {
        id: 4,
        name: "Anousheh Ansari",
        title: "Flight Engineer",
        bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
        image: "./src/assets/images//image-anousheh-ansari.webp",
    },
]);
</script>

<style scoped lang="scss">
@import "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,1,0";

.meet-your-crew {
    position: relative;
    overflow: hidden;

    .eyebrow {
        opacity: 0.5042;
        margin-bottom: 0;
        font-size: clamp(1rem, 4vw, 1.5rem);
    }

    h2 {
        font-size: 3.5rem;
        font-size: clamp(1.5em, 5vw, 3.5em);
        margin-top: 0;
        margin-bottom: 0.5em;
        line-height: 1;
    }

    .meet-your-crew__carousel {
        position: relative;
        height: auto;
        display: flex;
        justify-content: flex-start;
        align-items: center;

        @media screen and (max-width: 40em) {
            order: 2;
        }

        @media screen and (min-width: 40em) and (max-width: 60em) {
            margin-bottom: 2rem;
        }

        .v-carousel-item {
            position: relative;

            @media screen and (max-width: 40em) {
                padding-top: 3rem;
            }
        }

        .v-responsive__content {
            @media screen and (max-width: 40em) {
                margin-top: 2rem;
            }
        }

        .v-carousel__controls {
            justify-content: center;
            gap: 0.75rem;
            font-size: 0.65rem;
            line-height: var(--default-line-height);

            @media screen and (max-width: 40em) {
                top: 0.5rem;
            }

            @media screen and (min-width: 60em) {
                justify-content: flex-start;
                gap: 1rem;
                font-size: 1rem;
            }

            button,
            svg {
                transition: var(--default-transition);
            }

            button {
                color: var(--clr-white);
                opacity: 17.44%;
                transition: var(--default-transition);
                font-size: inherit;
                cursor: pointer;

                .v-btn__overlay {
                    display: none;
                }

                &.v-btn--active {
                    opacity: 1;
                }
            }

            .icon-circle {
                font-variation-settings: "FILL" 1, "wght" 400, "GRAD" 0, "opsz" 24;
                font-size: inherit;
            }
        }

        .meet-your-crew__carousel-slide-content {
            display: flex;
            flex-flow: column nowrap;
            justify-content: center;
            transition: var(--default-transition);
            margin-bottom: 4.5rem;

            @media screen and (min-width: 65em) {
                translate: 0 -20%;
            }
        }
    }

    .crew-bio {
        max-width: 90vw;
        margin: 0 auto;

        @media screen and (max-width: 65em) {
            max-width: 70vw;
        }

        @media screen and (min-width: 65em) {
            max-width: 45vw;
        }
    }

    .crew-member-image-container {
        position: relative;
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
        flex-grow: 0;
        min-height: 222px;
        margin-bottom: 0;
        border-bottom: 1px solid var(--clr-border-bottom);

        @media screen and (min-width: 60em) {
            min-height: 700px;
        }

        .crew-member-image {
            position: relative;
            display: flex;
            flex-flow: row nowrap;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;

            @media screen and (max-width: 40em) {
                margin-top: 2rem;
            }
        }

        .crew-member-image img {
            display: block;
            position: relative;
            bottom: 0;
            margin: 0 auto;

            @media screen and (max-width: 40em) {
                max-height: 14rem;
            }

            @media screen and (min-width: 40em) and (max-width: 60em) {
                max-height: 37rem;
            }

            @media screen and (min-width: 60em) {
                position: absolute;
            }
        }
    }
}
</style>
