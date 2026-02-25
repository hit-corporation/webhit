<script>
    const { children, className = "" } = $props();
</script>

<div class={[ "h-screen w-screen relative", className ]}>
    {@render children?.()}
</div>