import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "path";
import tailwindcss from "tailwindcss";

export default defineConfig({
    plugins: [
        react(),
        svgr({
            svgrOptions: {
                icon: true,
            },
        }),
    ],
    css: {
        postcss: {
            plugins: [tailwindcss()],
        },
    },
    server: {
        port: 3000,
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    publicDir: path.resolve(__dirname, "public"),
    base: "./",
});
