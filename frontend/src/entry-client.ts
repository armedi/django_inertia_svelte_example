import { createInertiaApp } from "@inertiajs/svelte";
import { InertiaProgress } from "@inertiajs/progress";

InertiaProgress.init();

createInertiaApp({
  resolve: (name) => {
    const pages = import.meta.glob("./pages/**/*.svelte");
    return pages[`./pages/${name}.svelte`]();
  },
  setup({ el, App }) {
    new App({ target: el, hydrate: true });
  },
});
