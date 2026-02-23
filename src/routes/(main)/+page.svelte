<script lang="ts">
    // @ts-ignore
    import FullscreenPage from "@/components/FullscreenPage.svelte";
    import HomePage from "@/components/home/HomePage.svelte";
    let src = "/videos/bumper_new.mp4"
</script>

<FullscreenPage className="bg-slate-800/20">
    <video autoplay muted class="h-full w-full object-cover absolute -z-10">
        <source {src} type="video/mp4"/>
    </video>
</FullscreenPage>
<HomePage class="grid grid-cols-2 pb-10 pt-20 px-6">
    <div class="flex flex-col gap-y-2 pe-6">
        <p class="text-xl text-slate-600">Discover Your</p>
        <h4 class="text-4xl mb-3">One-Stop Education AI Solution</h4>
        <h6 class="text-justify">Complete AI-driven SaaS solutions for every school need, from administration and curriculum management to student engagement and performance analytics</h6>
    </div>

    <div class="ps-6">
        <img src="/images/hero-img.png" alt="JUMBOTRON" class="h-full w-full">
    </div>
</HomePage>
<div class="w-full py-6 bg-gray-200">
    <div class=" w-8/12"></div>
</div>


