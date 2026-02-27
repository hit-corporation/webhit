<script lang="ts">
    const { className = "", burgerClass = "", toggleNav } = $props();

    
</script>

<label class={[className, "md:hidden flex flex-col gap-y-1 p-2 rounded justify-center items-center relative z-40"]} for="nav-burger">
    <input type="checkbox" class="hidden" id="nav-burger" onclick={toggleNav}  />
    <span class={'burger-1 ' + burgerClass}></span>
    <span class={'burger-2 ' + burgerClass}></span>
    <span class={'burger-3 ' + burgerClass}></span>
</label>
<style>
    label[for="nav-burger"] span {
        @apply block w-6;
        height: 2px;
    }

    label[for="nav-burger"] span {
        @apply transition-all duration-300;
    }

    #nav-burger:checked ~ .burger-1 {
        @apply rotate-45 translate-y-2;
    }
    #nav-burger:checked ~ .burger-2 {
        @apply opacity-0 -translate-x-2;
    }
    #nav-burger:checked ~ .burger-3 {
        @apply -rotate-45 -translate-y-1;
    }
</style>