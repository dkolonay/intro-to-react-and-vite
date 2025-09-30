import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig(({mode}) => {
    if (mode === "development") {
        return { plugins: [react()], };
    } else {
        return {
            base: "/intro-to-react-and-vite",
            plugins: [react()],
        };
    }
});
