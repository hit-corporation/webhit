 <script lang="ts">
    let { className = "" } = $props();
 </script>
 
 <nav class={[
        "fixed -top-[1080px] left-0 h-full w-full bg-white text-slate-600", 
        "md:ml-auto",
        className
    ]}>
        <ul class="flex flex-col flex-wrap">
            <!-- svelte-ignore a11y_invalid_attribute -->
            <li class="w-full px-6 py-2 text-3xl font-semibold"><a href="#">Home</a></li>
            <!-- svelte-ignore a11y_invalid_attribute -->
            <li class="w-full px-6 py-2 text-3xl font-semibold"><a href="#">About</a></li>
            <!-- svelte-ignore a11y_invalid_attribute -->
            <li class="w-full px-6 py-2 text-3xl font-semibold"><a href="#">Products</a></li>
            <!-- svelte-ignore a11y_invalid_attribute -->
            <li class="w-full px-6 py-2 text-3xl font-semibold"><a href="#">Our Solution</a></li>
            <!-- svelte-ignore a11y_invalid_attribute -->
            <li class="w-full px-6 py-2 text-3xl font-semibold"><a href="#">News</a></li>
        </ul>
    </nav>

    <style>
        nav.open {
            @apply top-0;
        }
    </style>