<script lang="ts">
    let { icon, caption, ...restProps } = $props();
</script>

<figure class=" w-28 h-24 bg-light-blue-500 flex flex-col justify-center items-center rounded-lg mb-5" {...restProps}>
    <img src={icon} alt="icon" class="object-cover h-10 w-10" />
    <figcaption class="text-center">
        {caption.split("_").join(" ")}
    </figcaption>
</figure>