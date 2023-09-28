<script lang="ts">
    export let browserPath: string = "";
    let isMenuOpen: boolean = false;

    import { onMount } from "svelte";

    const routes = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
    ];

    onMount(() => {
        const burger = document.querySelector(".navbar-burger");
        const menu = document.querySelector(".navbar-menu");
        const navbar = document.querySelector(".navbar");

        document.addEventListener("click", (event) => {
            if (isMenuOpen && !navbar.contains(event.target as Node)) {
                burger.classList.remove("is-active");
                menu.classList.remove("is-active");

                isMenuOpen = false;
            }
        });

        burger.addEventListener("click", () => {
            burger.classList.toggle("is-active");
            menu.classList.toggle("is-active");

            isMenuOpen = !isMenuOpen;
        });

        return () => {
            document.removeEventListener("click", () => {});
            burger.removeEventListener("click", () => {});
        };
    });
</script>

<!-- svelte-ignore a11y-no-redundant-roles -->
<!-- svelte-ignore a11y-missing-attribute -->
<nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
            <img src="" width="112" height="28" />
        </a>

        <a
            role="button"
            class="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbar"
        >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
        </a>
    </div>

    <div id="navbar" class="navbar-menu">
        <div class="navbar-start">
            {#each routes as route}
                <a
                    class="navbar-item {browserPath === route.path &&
                        'is-active'}"
                    href="#{route.path}"
                >
                    {route.name}
                </a>
            {/each}
        </div>
    </div>
</nav>

<style>
</style>
