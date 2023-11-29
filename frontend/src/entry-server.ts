import createServer from "@inertiajs/svelte/server";
import { createInertiaApp } from "@inertiajs/svelte";

export const startServer = (port: number) => {
  createServer(
    (page) =>
      createInertiaApp({
        page,
        resolve: (name) => {
          const pages = import.meta.glob("./pages/**/*.svelte");
          return pages[`./pages/${name}.svelte`]();
        },
      }),
    port
  );
}
