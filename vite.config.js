import {fileURLToPath, URL} from "node:url";

import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";
import vuetify from "vite-plugin-vuetify";
import ViteAssetsPlugin from "vite-plugin-assets";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        vuetify({styles: {configFile: "src/assets/sass/_settings.scss"}}),
        ViteAssetsPlugin({
            // Specify the asset directory
            include: ["assets/**"],
        }),
        npm,
    ],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
    // css: {
    //     preprocessorOptions: {
    //         scss: {
    //             additionalData: `@import "@/assets/scss/global.scss";`,
    //         },
    //     },
    // },
    build: {
        assetsDir: "assets",
    },
    base: "./", // Set Base URL Path
});
