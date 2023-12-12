<template>
    <v-row align-content="start" justify="space-between">
        <v-col>
            <DestinationsSlider @updateBackground="updateBackground" />
        </v-col>
    </v-row>
</template>

<script setup>
import {ref, onMounted} from "vue";

// Components
import DestinationsSlider from "@/components/destinations/DestinationsSlider.vue";

const emit = defineEmits(["updateBackground"]);

const updateBackground = (bg) => {
    emit("updateBackground", bg);
};

const mounted = ref(false);

onMounted(() => {
    mounted.value = true;
});
</script>

<style scoped lang="scss"></style>
