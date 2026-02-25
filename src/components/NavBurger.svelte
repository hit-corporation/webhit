<script lang="ts">
    let { className = "", burgerClass = "" } = $props();
</script>

<label class={[className, "md:hidden flex flex-col gap-y-1 p-2 rounded mr-16 justify-center items-center relative z-40"]} for="nav-burger">
    <input type="checkbox" class="hidden" id="nav-burger"/>
    <span class={burgerClass}></span>
    <span class={burgerClass}></span>
    <span class={burgerClass}></span>
</label>
<style>
    label[for="nav-burger"] span {
        @apply block w-6;
        height: 2px;
    }
</style>