 <script lang="ts">
    let { className = "", navOpen = false } = $props();
 </script>
 
 <nav class={[
        "fixed left-0 h-full w-full bg-white text-slate-600", 
        "md:ml-auto md:relative",
        navOpen ? "top-0" : "-top-[1080px]",
        "transition-[top] duration-500",
        className
    ]}>
        <ul class="flex flex-col flex-wrap mt-16">
            <!-- svelte-ignore a11y_invalid_attribute -->
            <li class="w-full px-6 py-2 text-3xl font-semibold"><a href="#" class:open={navOpen}>Beranda</a></li>
            <!-- svelte-ignore a11y_invalid_attribute -->
            <li class="w-full px-6 py-2 text-3xl font-semibold"><a href="#" class:open={navOpen}>Tentang Kami</a></li>
            <!-- svelte-ignore a11y_invalid_attribute -->
            <li class="w-full px-6 py-2 text-3xl font-semibold"><a href="#" class:open={navOpen}>Produk</a></li>
            <!-- svelte-ignore a11y_invalid_attribute -->
            <li class="w-full px-6 py-2 text-3xl font-semibold"><a href="#" class:open={navOpen}>Tata Kelola</a></li>
            <!-- svelte-ignore a11y_invalid_attribute -->
            <li class="w-full px-6 py-2 text-3xl font-semibold"><a href="#" class:open={navOpen}>Solusi Kami</a></li>
            <!-- svelte-ignore a11y_invalid_attribute -->
            <li class="w-full px-6 py-2 text-3xl font-semibold"><a href="#" class:open={navOpen}>Berita</a></li>
        </ul>
    </nav>

    <style>
        nav ul li a {
            @apply opacity-0 -ml-11 transition-[opacity_margin] duration-300;
        } 
        nav ul li a.open:nth-child(1) {
            @apply opacity-100 ml-0 delay-[450ms];
        }
        nav ul li a.open:nth-child(2) {
            @apply opacity-100 ml-0 delay-[750ms];
        }
        nav ul li a.open:nth-child(3) {
            @apply opacity-100 ml-0 delay-[3s];
        }
        nav ul li a.open:nth-child(4) {
            @apply opacity-100 ml-0 delay-[4s];
        }
        nav ul li a.open:nth-child(5) {
            @apply opacity-100 ml-0 delay-[5s];
        }
    </style>