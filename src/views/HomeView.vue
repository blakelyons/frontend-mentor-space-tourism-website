<template>
    <v-container>
        <v-row class="gap" align-content="start" :justify="smAndUp ? `space-between` : `center`" no-gutters>
            <v-col :cols="`${mdAndUp ? `6` : `12`}`" :class="!mdAndUp ? `text-center` : ``">
                <div :class="`eyebrow ${mounted ? `loaded` : ``}`">So, you want to travel to</div>
                <h1 :class="`clr--primary ${!mdAndUp ? `text-center` : ``} ${mounted ? `loaded` : ``}`">SPACE</h1>
                <div :class="`home-copy ${mounted ? `loaded` : ``}`">
                    <p>
                        Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of
                        it. Well sit back, and relax because we'll give you a truly out of this world experience!
                    </p>
                </div>
            </v-col>
            <v-col class="explore-btn-container">
                <button class="explore-btn" @click="navigateToRoute('/pick-your-destination')">Explore</button>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import {ref, onMounted} from "vue";
import {useDisplay} from "vuetify";
import {useRouter} from "vue-router";

const {smAndUp, mdAndUp} = useDisplay();

const router = useRouter();

const navigateToRoute = (path) => {
    router.push(path);
};

const mounted = ref(false);

onMounted(() => {
    setTimeout(() => {
        mounted.value = true;
    }, 200);
});
</script>

<style scoped lang="scss">
[data-view="home"] {
    &.loaded {
        .eyebrow {
            transition-delay: 0;
        }

        h1 {
            transition-delay: 150ms;
        }
        .home-copy {
            transition-delay: 200ms;
        }
    }
}
.home-copy {
    width: 100%;
    max-width: 27.75rem;
    transition: var(--default-transition);

    // For animating load
    opacity: 0;
    translate: 0 2rem;

    &.loaded {
        opacity: 1;
        translate: 0 0;
    }

    @media screen and (max-width: 70em) {
        margin: 0 auto;
    }
}

.explore-btn-container {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;

    // For animating load
    transition: var(--default-transition);
}
</style>
