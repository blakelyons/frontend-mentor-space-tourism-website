<template>
    <v-container class="interior-header" v-if="route !== 'home'">
        <v-row align-content="center" justify="space-between">
            <v-col cols="12">
                <div :class="`eyebrow eyebrow--white page-title ${!mdAndUp ? `text-center` : ``}`" v-html="props.pageTitle" />
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
//import {ref} from "vue";
import {useRoute} from "vue-router";
import {useDisplay} from "vuetify";

const route = useRoute();

// Breakpoints
const {mdAndUp} = useDisplay();

const props = defineProps({
    pageTitle: {
        type: String,
    },
});
</script>

<style scoped lang="scss">
.page-title {
    transition: var(--default-transition);
}
</style>
