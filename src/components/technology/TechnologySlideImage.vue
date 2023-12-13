<template>
    <template v-for="slideImage in props.slides" :key="slideImage.index">
        <div
            class="technology-slideshow__slide-image technology-slideshow__slide-image--mobile"
            v-if="slideIndex === slideImage.index && props.position === 'top'"
            :data-position="props.position"
        >
            <img :src="getImageUrl(slideImage.image_landscape)" :alt="slideImage.title" v-if="slideIndex === slideImage.index" />
        </div>
        <div
            class="technology-slideshow__slide-image technology-slideshow__slide-image--desktop"
            v-if="slideIndex === slideImage.index && props.position === 'bottom'"
        >
            <img :src="getImageUrl(slideImage.image_portrait)" :alt="slideImage.title" />
        </div>
    </template>
</template>

<script setup>
//import { ref, onMounted } from "vue";

const props = defineProps({
    slideIndex: {
        type: Number,
        required: true,
    },
    slides: {
        type: Array,
        required: true,
    },
    position: {
        type: String,
        required: true,
    },
});

function getImageUrl(name) {
    return new URL(`../../assets/images/${name}.jpg`, import.meta.url).href;
}
</script>

<style scoped lang="scss">
.technology-container {
    .technology-slideshow__slide-image {
        position: relative;

        &.technology-slideshow__slide-image--mobile {
            margin-bottom: 0;

            @media screen and (min-width: 0) and (max-width: 80em) {
                width: calc(100% + 2rem);
            }

            @media screen and (max-width: 40em) {
                height: 200px;
            }

            @media screen and (min-width: 40em) and (max-width: 80em) {
                height: 310px;
            }

            @media screen and (min-width: 80em) {
                margin-bottom: 2rem;
            }

            img {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        &.technology-slideshow__slide-image--desktop {
            position: absolute;
            right: 0;
            margin-top: -3rem;
        }
    }
}
</style>
