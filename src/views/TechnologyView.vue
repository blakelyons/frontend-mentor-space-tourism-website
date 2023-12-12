<template>
    <v-container :class="`technology-container ${lgAndUp ? `technology-container--desktop` : `technology-container--mobile`}`">
        <v-row justify="space-between" align-content="start" class="main-content" :no-gutters="!lgAndUp">
            <v-col cols="12" class="technology-container__header" v-if="!lgAndUp">
                <TechnologySlideImage :slides="slides" :slideIndex="slideIndex" position="top" />
            </v-col>
            <v-col :cols="lgAndUp ? 8 : 12" align-self="start">
                <TechnologySliderNavAndText :slides="slides" :slideIndex="slideIndex" @update-slide-index="updateSlideIndex" />
            </v-col>
            <v-col cols="1" v-if="lgAndUp"> &nbsp; </v-col>
            <v-col :cols="lgAndUp ? 3 : 12" class="technology-slideshow__container" v-if="lgAndUp">
                <TechnologySlideImage :slides="slides" :slideIndex="slideIndex" position="bottom" />
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import {ref, onMounted} from "vue";
import {useDisplay} from "vuetify";
import TechnologySliderNavAndText from "@/components/technology/TechnologySliderNavAndText.vue";
import TechnologySlideImage from "../components/technology/TechnologySlideImage.vue";

const mounted = ref(false);
const {lgAndUp} = useDisplay();

const slideIndex = ref(1);

const slides = [
    {
        index: 1,
        title: "Launch Vehicle",
        text: `A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!`,
        image_portrait: "src/assets/images//image-launch-vehicle-portrait.jpg",
        image_landscape: "src/assets/images//image-launch-vehicle-landscape.jpg",
    },
    {
        index: 2,
        title: "Spaceport",
        text: `A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.`,
        image_portrait: "src/assets/images//image-spaceport-portrait.jpg",
        image_landscape: "src/assets/images//image-spaceport-landscape.jpg",
    },
    {
        index: 3,
        title: "Space Capsule",
        text: `A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.`,
        image_portrait: "src/assets/images//image-space-capsule-portrait.jpg",
        image_landscape: "src/assets/images//image-space-capsule-landscape.jpg",
    },
];

const updateSlideIndex = (index) => {
    slideIndex.value = index;
};

onMounted(() => {
    mounted.value = true;
});
</script>

<style scoped lang="scss">
.technology-container {
    .technology-container__header {
        margin-top: 2rem;
        margin-bottom: 2rem !important;
        padding-inline: 0 !important;
        width: calc(100% + 2rem) !important;
        margin-left: -1rem !important;
        margin-right: -1rem !important;
    }
    &.technology-container__header-mobile {
        //padding-left: 0 !important;
        //padding-right: 0 !important;
        padding-inline: 0 !important;
    }

    .main-content {
        position: unset;
    }
}
</style>
