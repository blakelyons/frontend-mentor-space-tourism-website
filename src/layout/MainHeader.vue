<template>
    <header :class="`main-header ${props.route == `home` ? `main-header--home` : ``}`" data-header>
        <v-container :fluid="smAndUp ? true : false" class="main-header__container">
            <v-row justify="space-between" align="center" :no-gutters="mobile ? false : true">
                <v-col :cols="smAndUp ? `1` : `6`" class="logo">
                    <RouterLink to="/">
                        <LogoIcon />
                    </RouterLink>
                </v-col>
                <v-col class="nav-line" v-if="smAndUp">
                    <div></div>
                </v-col>
                <Transition name="slide-fade">
                    <v-col cols="7" v-if="smAndUp" class="main-nav-container">
                        <nav class="main-nav" id="main-nav">
                            <ul class="menu" data-nav>
                                <template v-for="(item, index) in menuItems" :key="item.name">
                                    <li
                                        :class="`menu__item ${index == 0 && !lgAndUp ? `is-overflown` : ``} ${
                                            index == 1 && !mdAndUp ? `is-overflown` : ``
                                        }`"
                                    >
                                        <RouterLink :to="item.path" :aria-label="item.name">
                                            <span>{{ item.id }}</span> {{ item.name }}
                                        </RouterLink>
                                    </li>
                                </template>
                                <Transition name="slide-fade">
                                    <li v-if="!lgAndUp">
                                        <button class="mobile-nav-trigger__btn" @click.stop="openMobielNavDrawer = !openMobielNavDrawer">
                                            <v-icon :icon="mdiMenu" size="3rem" />
                                        </button>
                                    </li>
                                </Transition>
                            </ul>
                        </nav>
                    </v-col>
                </Transition>
                <v-col cols="6" v-if="!smAndUp" class="mobile-nav-trigger text-right">
                    <button class="mobile-nav-trigger__btn" v-if="!smAndUp" @click.stop="openMobielNavDrawer = !openMobielNavDrawer">
                        <v-icon :icon="mdiMenu" size="3rem" />
                    </button>
                </v-col>
            </v-row>
        </v-container>

        <v-navigation-drawer class="mobile-nav" v-model="openMobielNavDrawer" temporary :border="false" location="right">
            <v-list-item>
                <v-list-item-title class="mobile-nav-drawer-header">
                    <button
                        class="mobile-nav-close-trigger"
                        @click.stop="openMobielNavDrawer = !openMobielNavDrawer"
                        aria-label="Mobile Nav Button Trigger"
                    >
                        <v-icon :icon="mdiClose" size="3rem" />
                    </button>
                </v-list-item-title>
            </v-list-item>

            <template v-for="item in menuItems" :key="item.name">
                <v-list-item class="mobile-nav__item" :to="item.path" active-class="mobile-nav-item--active" :ripple="false">
                    <v-list-item-title>
                        <span>{{ item.id }}</span> {{ item.name }}
                    </v-list-item-title>
                </v-list-item>
            </template>
        </v-navigation-drawer>
    </header>
</template>

<script setup>
import {ref} from "vue";
import {RouterLink} from "vue-router";
import LogoIcon from "@/components/icons/LogoIcon.vue";
import {mdiMenu, mdiClose} from "@mdi/js";
import {useDisplay} from "vuetify";

// Breakpoints
const {mobile, smAndUp, mdAndUp, lgAndUp} = useDisplay();

const props = defineProps({
    route: {
        type: String,
    },
});

// Main Navigation
const menuItems = ref([
    {
        id: "00",
        name: "Home",
        path: "/",
        icon: "mdiHome",
        active: true,
    },
    {
        id: "01",
        name: "Destination",
        path: "/pick-your-destination",
        icon: "mdiMapMarker",
        active: false,
    },
    {
        id: "02",
        name: "Crew",
        path: "/meet-your-crew",
        icon: "mdiAccountGroup",
        active: false,
    },
    {
        id: "03",
        name: "Technology",
        path: "/space-launch-101",
        icon: "mdiRobot",
        active: false,
    },
]);

// Mobile Navigation
const openMobielNavDrawer = ref(true);

// Methods
</script>
