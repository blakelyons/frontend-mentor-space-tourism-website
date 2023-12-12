<template>
    <div class="technology-slideshow__nav-and-text">
        <nav class="technology-slideshow__nav">
            <ul>
                <li v-for="navItem in props.slides" :key="navItem.index">
                    <button @click="emit(`updateSlideIndex`, navItem.index)" :class="slideIndex === navItem.index ? `button--active` : ``">
                        {{ navItem.index }}
                    </button>
                </li>
            </ul>
        </nav>
        <div class="technology-slideshow__text">
            <div class="eyebrow">The Terminology ...</div>
            <template v-for="slideText in props.slides" :key="slideText.index">
                <template v-if="slideIndex === slideText.index">
                    <h2 v-text="slideText.title" />
                    <p v-text="slideText.text" />
                </template>
            </template>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    slideIndex: {
        type: Number,
        required: true,
    },
    slides: {
        type: Array,
        required: true,
    },
});

const emit = defineEmits(["updateSlideIndex"]);
</script>

<style lang="scss" scoped>
.technology-container {
    .technology-slideshow__nav-and-text {
        width: 100%;
        display: grid;
        gap: 1rem;
        margin-bottom: 4rem;

        @media screen and (min-width: 80em) {
            grid-template-columns: 20% 80%;
        }

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
    }
    .technology-slideshow__nav {
        @media screen and (max-width: 80em) {
            display: flex;
            flex-flow: row nowrap;
            justify-content: center;
            align-items: center;
            margin: 2rem auto;
        }

        ul {
            display: grid;
            grid-template-columns: 1fr;
            grid-gap: 1.5rem;
            margin: 0;
            padding: 0;
            height: 100%;

            @media screen and (max-width: 80em) {
                grid-template-columns: 1fr 1fr 1fr;
            }

            li {
                display: flex;
                flex-flow: row nowrap;
                justify-content: flex-start;
                align-items: center;

                button {
                    display: flex;
                    flex-flow: row nowrap;
                    justify-content: center;
                    align-items: center;
                    --_size: 5rem;
                    width: var(--_size);
                    height: var(--_size);
                    border: 1px solid hsl(0, 0%, 25%);
                    border-radius: 50%;
                    color: var(--clr-white);
                    transition: var(--default-transition);
                    cursor: pointer;

                    @media screen and (max-width: 80em) {
                        --_size: 3.75rem;
                    }

                    &:hover,
                    &.button--active {
                        background: hsl(0, 0%, 100%);
                        border: 1px solid hsl(0, 0%, 100%);
                        color: var(--clr-black);
                    }
                }
            }
        }
    }

    .technology-slideshow__text {
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: flex-start;

        @media screen and (max-width: 80em) {
            max-width: 28.625rem;
            margin: 0 auto;

            .eyebrow,
            h2,
            p {
                text-align: center;
            }
        }
    }
}
</style>
