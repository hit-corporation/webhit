<script lang="ts">
    // @ts-ignore
    import FullscreenPage from "@/components/FullscreenPage.svelte";
    import HomePage from "@/components/home/HomePage.svelte";
    import BlurCircle from "@/components/home/BlurCircle.svelte";
    import CounterBox from "@/components/home/CounterBox.svelte";

    let src = "/videos/bumper_new.mp4"
</script>

<FullscreenPage className="bg-slate-800/30">
    <video autoplay muted class="h-full w-full object-cover absolute -z-10">
        <source {src} type="video/mp4"/>
    </video>
</FullscreenPage>
<HomePage className="grid mx-auto md:grid-cols-2 pb-10 pt-20 px-6">
    <div class="flex flex-col gap-y-2 pe-6">
        <p class="text-xl text-slate-600">Discover Your</p>
        <h4 class="text-4xl mb-3">One-Stop Education AI Solution</h4>
        <h6 class="text-justify">Complete AI-driven SaaS solutions for every school need, from administration and curriculum management to student engagement and performance analytics</h6>
    </div>

    <div class="mt-5 md:ps-6">
        <img src="/images/hero-img.png" alt="JUMBOTRON" class="h-full w-full">
    </div>
</HomePage>
<HomePage className="block relative mx-auto">
    <div></div>
</HomePage>
<HomePage className="grid grid-rows-2">
    <div class="relative py-3">
        <BlurCircle className="absolute top-1/2 -right-40 -translate-x-1/2 -translate-y-1/2 z-0"/>
        <span class="relative z-10 overflow-hidden block px-14">
            <h4 class="text-xl mb-3 text-justify font-semibold">HIT serves as school’s partner in leveraging technology to enhance the learning experience for a smarter society.</h4>
            <h6 class="text-justify">We aim to be a one-stop solution for schools, offering comprehensive technological advancements across all systems and functions. Our services encompass everything from hardware and SaaS to AI solutions, addressing every aspect of the school environment-from the entrance to the classroom.</h6>
        </span>
    </div>
    <div class="relative py-3">
        <BlurCircle className="absolute top-1/2 -left-40 -translate-x-1/2 -translate-y-1/2 z-0"/>
        <span class="relative z-10 text-center overflow-hidden block px-14">
            <CounterBox number={20} unit={"K"} text={"Schools"}/>
            <CounterBox number={20} unit={"K"} text={"Schools"}/>
        </span>
    </div>
    
</HomePage>

