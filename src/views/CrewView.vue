<template>
    <v-container class="meet-your-crew-container">
        <v-row :align-content="mdAndUp ? `end` : `center`" justify="space-between" class="meet-your-crew main-content" no-gutters>
            <CrewSlider />
        </v-row>
    </v-container>
</template>
<script setup>
import {ref, onMounted} from "vue";
import {useDisplay} from "vuetify";
import CrewSlider from "@/components/crew/CrewSlider.vue";

const {mdAndUp} = useDisplay();

const spaceBackground = ref("crew");

const emit = defineEmits(["updateBackground"]);

onMounted(() => {
    emit("updateBackground", spaceBackground.value);
});
</script>
