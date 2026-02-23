<script>
    let scrollY = 0;
    $: isSCrolled = scrollY > 610 ? true : false;

</script>

<svelte:window bind:scrollY={scrollY}></svelte:window>

<header class="flex flex-wrap py-2 px-5 items-center fixed top-0 left-0 w-full z-20" class:scrolled={isSCrolled}>
    <img src="/images/logo_nav_hit.png" alt="LOGO" class="h-auto w-56 transition-[width] duration-500">
    <nav class="ml-auto w-5/12">
        <ul class="flex flex-wrap w-full justify-evenly items-center text-white">
            <li><a>Home</a></li>
            <li><a>About</a></li>
            <li><a>Products</a></li>
            <li><a>Our Solution</a></li>
            <li><a>News</a></li>
        </ul>
    </nav>
</header>

<style>
    .scrolled {
        @apply bg-white shadow-md;
    }
    .scrolled img {
        @apply w-44 transition-[width] duration-500;
    }

    .scrolled ul li  {
        @apply text-slate-900;
    }
</style>