import "@mdi/font/css/materialdesignicons.css";
import "@/assets/main.scss";

import {createApp} from "vue";
import {createPinia} from "pinia";
import Lenis from "@studio-freight/lenis";

import App from "./App.vue";
import router from "./router";

const lenis = new Lenis();

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

const app = createApp(App);

// Vuetify
//import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";
import {createVuetify} from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import {aliases, mdi} from "vuetify/iconsets/mdi-svg";

const vuetify = createVuetify({
    components,
    directives,
    theme: false,
    display: {
        mobileBreakpoint: "sm",
        thresholds: {
            xs: 0,
            sm: 760,
            md: 1024,
            lg: 1250,
            xl: 1440,
        },
    },
    icons: {
        defaultSet: "mdi",
        aliases,
        sets: {
            mdi,
        },
    },
});

app.use(vuetify);
app.use(createPinia());
app.use(router);

app.mount("#space-tourism");
