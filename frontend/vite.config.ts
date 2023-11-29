import { resolve } from "path";
import { defineConfig } from "vite";
import { svelte, vitePreprocess } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte({
      compilerOptions: {
        hydratable: true,
      },
      preprocess: [vitePreprocess()],
    }),
  ],
  base: "/static/",
  server: {
    open: false,
  },
  build: {
    manifest: true,
    rollupOptions: {
      input: resolve("./src/entry-client.ts"),
    },
  },
});
