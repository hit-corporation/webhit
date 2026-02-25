<script lang="ts">
    import { onMount } from "svelte";

    let counter = $state(0);
    let { number, unit, text } = $props();
    onMount(() => {
        const interval = setInterval(() => {
            counter++;
            if (counter === number) {
                clearInterval(interval);
            }
        }, 100);
    });
</script>

<div>
<h3 class="text-4xl font-semibold">{counter}{unit}+</h3>    
<p class="text-slate-600">{text}</p>
</div>