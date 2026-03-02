<script lang="ts">
    import { onMount } from "svelte";
    import IconGrid from "./IconGrid.svelte";
    let { tabValue, title, description = "", ...restProps } = $props();

    let url = $derived("/api/folders?app=" + tabValue);
    let folderData = $state(null);
    let items: Array<{icon: string, caption: string}> = $state([]);

    $effect(() => {
        const fetcher = async () => {
            const res = await fetch(url);
            folderData = await res.json();
            return folderData;
        }
        fetcher()
            .then((res: any) => {
                items = res?.data.dir?.map((item: string) => {
                    const splitString: string[] = item.split("-")

                    return {
                        icon: item,
                        caption: splitString[1].split(".")[0]
                    }
                });
            })
            .catch(err => {
                console.error(err);
            });
    });
</script>

{#snippet featuresIcon(items)}
    {#each items as item}
        <IconGrid icon={`/images/home/Saas/${tabValue}/${item.icon}`} caption={item.caption} />
    {/each}
{/snippet}

<div class="w-full px-6" {...restProps}>
    <figure class="w-full flex flex-col gap-y-3">
        <img src={`/images/home/${tabValue}-Layout.webp`} alt="banner-saas">
        <figcaption class="flex flex-col gap-y-3">
            <h2 class="text-lg font-bold text-sky-500 capitalize">{title}</h2>
            <p class="text-sm mb-3">{description}</p>
            <div class="flex flex-wrap gap-2">
                {@render featuresIcon(items)}
            </div>
        </figcaption>
    </figure>
</div>