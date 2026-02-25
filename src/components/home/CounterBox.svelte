<script lang="ts">
    import { onMount } from "svelte";

    let counter = $state(0);
    let { number, unit, text, duration = 100 } = $props();
    onMount(() => {
        const interval = setInterval(() => {
            counter++;
            if (counter === number) {
                clearInterval(interval);
            }
        }, duration);
    });
</script>

<div class="flex flex-col items-center py-3">
    <h3 class="text-8xl font-semibold text-orange-400">{counter}{unit}+</h3>    
    <p class="text-orange-400">{text}</p>
</div>