<script>
// @ts-nocheck

    import NavBurger from "../NavBurger.svelte";
    import Navbar from "../Navbar.svelte";
    
    let scrollY = 0;
    $: isSCrolled = scrollY > 550 ? true : false;

    let isNavOpen = false;
    function toggleNav() {
        isNavOpen = !isNavOpen;
    }
</script>

<svelte:window bind:scrollY={scrollY}></svelte:window>

<header class="flex flex-wrap py-2 px-5 items-center fixed top-0 left-0 w-full z-20 text-slate-800" class:scrolled={isSCrolled}>
    <img src="/images/logo_nav_hit.png" alt="LOGO" class="h-auto w-56 transition-[width] duration-500">
    <NavBurger  className={`ms-auto`} 
                burgerClass={isSCrolled || isNavOpen ? "bg-slate-800" : "bg-slate-300"}
                toggleNav={toggleNav}
    />
    <Navbar navOpen={isNavOpen} />
</header>

<style>
    .scrolled {
        @apply bg-white shadow-md;
    }
    .scrolled img {
        @apply w-44 transition-[width] duration-500;
    }
</style>