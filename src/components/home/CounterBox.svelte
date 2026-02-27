<script lang="ts">
    import { onMount } from "svelte";

    let counter: number = $state(0.0);
    let { 
        number, 
        unit, 
        text, 
        duration = 100, 
        step = 1.0, 
        percision = 1 
    } = $props();

    onMount(() => {
        const interval = setInterval(() => {
            counter += step;
            if (counter >= number) {
                clearInterval(interval);
            }
        }, duration);
    });
</script>

<div class="flex flex-col items-center overflow-hidden py-3">
    <h3 class="text-8xl font-bold text-orange-400">{counter.toFixed(percision)}{unit}+</h3>    
    <p class="text-orange-400 text-4xl">{text}</p>
    <span class="py-3">Bringing advanced learning tools to institutions across Indonesia</span>
</div>