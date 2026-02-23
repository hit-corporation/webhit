<script>
    // @ts-ignore
    import FullscreenPage from "@/components/FullscreenPage.svelte";
    let src = "/videos/bumper_new.mp4"
</script>

<FullscreenPage className="bg-slate-800/20">
    <video autoplay muted class="h-full w-full object-cover absolute -z-10">
        <source {src} type="video/mp4"/>
    </video>
</FullscreenPage>
<div class="grid grid-cols-2 py-8">
    <div class="px-6 flex flex-col gap-y-2">
        <p class="text-xl text-slate-600">Discover Your</p>
        <h4 class="text-4xl mb-3">One-Stop Education AI Solution</h4>
        <h6 class="text-justify">Complete AI-driven SaaS solutions for every school need, from administration and curriculum management to student engagement and performance analytics</h6>
    </div>

    <div class="px-6">
        <img src="/images/hero-img.png" alt="JUMBOTRON" class="h-full w-full">
    </div>
</div>
<div class="w-full py-6 bg-gray-200">
    <div class=" w-8/12"></div>
</div>