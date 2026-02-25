<script lang="ts">
    let { className = "" } = $props();
</script>
<span class={[
            "h-40 w-40 rounded-full bg-orange-500/50", 
            "blur-[60px]", 
            className
        ]}></span>