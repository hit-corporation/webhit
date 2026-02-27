<script lang="ts">
    import type { HTMLAttributes } from "svelte/elements";
    type Props = {
        className?: string
    } & HTMLAttributes<HTMLDivElement>
    let { className, ...restProps }: Props = $props();

   
</script>



<div {...restProps} class={["w-full pb-5 pt-16", className]}>
    {@render restProps.children?.()}
</div>