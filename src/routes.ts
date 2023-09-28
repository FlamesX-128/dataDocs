import { wrap } from "svelte-spa-router/wrap";

import { SvelteComponent } from "svelte";

import Loading from "./routes/Loading.svelte";

export default {
    '/': wrap({
        asyncComponent: () =>
            import("./routes/Home.svelte") as Promise<{
                default: typeof SvelteComponent;
            }>,
        loadingComponent: Loading as typeof SvelteComponent,
        loadingParams: {
            message: "Loading..."
        },
    }),
    '/loading': Loading,
    "*": wrap({
        asyncComponent: () =>
            import("./routes/NotFound.svelte") as Promise<{
                default: typeof SvelteComponent;
            }>,
        loadingComponent: Loading as typeof SvelteComponent,
        loadingParams: {
            message: "Loading..."
        },
    }),
};
