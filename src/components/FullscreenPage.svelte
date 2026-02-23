<script>
    let props = $props();
</script>

<div class={[ "h-screen w-screen relative", props.className ]}>
    {@render props.children?.()}
</div>