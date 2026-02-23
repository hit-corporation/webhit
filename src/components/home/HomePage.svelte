<script lang="ts">
    import type { SvelteHTMLElements } from 'svelte/elements';
    let {children, ...props}: SvelteHTMLElements['div'] = $props();

    console.log(props);
</script>



<div  {...props} class="w-full pb-10 pt-20">
    {@render children?.()}
</div>