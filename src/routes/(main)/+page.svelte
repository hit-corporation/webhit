<script lang="ts">
    // @ts-ignore
    import FullscreenPage from "@/components/FullscreenPage.svelte";
    import HomePage from "@/components/home/HomePage.svelte";
    import BlurCircle from "@/components/home/BlurCircle.svelte";
    import CounterBox from "@/components/home/CounterBox.svelte";
    import Button from "@/components/ui/button/button.svelte";
    import * as Card from "@/components/ui/card/index.ts";
    import * as Tabs from "@/components/ui/tabs/index.ts";
    import { onMount } from "svelte";

    let src = "/videos/bumper_new.mp4";

    onMount(() => {
        fetcher();
    })
    const fetcher = async () => {
        const res = await fetch("/api/folders");
        const data = await res.json();
        console.log(data);
    }
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
<HomePage className="grid grid-rows-[auto_auto]">
    <div class="relative py-5">
        <BlurCircle className="absolute top-1/2 -right-40 -translate-x-1/2 -translate-y-1/2 z-0"/>
        <span class="relative z-10 overflow-hidden block px-5">
            <h4 class="text-xl mb-3 text-justify font-semibold">HIT serves as school’s partner in leveraging technology to enhance the learning experience for a smarter society.</h4>
            <h6 class="text-justify">We aim to be a one-stop solution for schools, offering comprehensive technological advancements across all systems and functions. Our services encompass everything from hardware and SaaS to AI solutions, addressing every aspect of the school environment-from the entrance to the classroom.</h6>
        </span>
    </div>
    <div class="relative py-5">
        <BlurCircle className="absolute top-1/2 -left-10 -translate-x-1/2 -translate-y-1/2 z-0"/>
        <span class="relative z-10 text-center overflow-hidden block px-5">
            <CounterBox number={20.0} unit={"K"} text={"Schools"} step={1.0} percision={0}/>
            <CounterBox number={2.3} unit={"M"} text={"Students"} step={0.1} duration={50} percision={1}/>
        </span>
    </div>
    
</HomePage>
<HomePage className="bg-[url(/images/home/Bg-Blur.webp)] bg-cover bg-center min-h-16 text-white px-2 pb-16">
    <h6 class="text-center font-semibold">AI For Education</h6>
    <h2 class="text-center font-semibold text-xl mb-2">WOOWSPEECH</h2>
    <h4 class="text-center text-xl font-semibold mb-3">Your Language Teacher Anytime & Anywhere</h4>
    <p class="text-center">Complete AI-driven SaaS solutions for every school need, from administration and curriculum management to student engagement and performance analytics</p>
    <div class="flex justify-center gap-2 mt-4">
        <Button variant="default" class="rounded-full bg-orange-400 text-white">Learn More</Button>
        <Button variant="default" class="rounded-full bg-slate-200 text-orange-400 border-orange-400">Try Demo</Button>
    </div>
    <div class="mt-8">
        <img src="/images/home/woowspeech.webp" alt="WOOWSPEECH">
    </div>
</HomePage>
<HomePage className="grid grid-rows-[auto_auto] w-full justify-center">
    <div class="w-full relative">
        <img src="/images/home/bg-acosystem.webp" alt="ACOSYSTEM" class="h-full mx-auto">
        <h4 class={[
            "text-xl font-semibold text-white text-center z-10",
            "block absolute top-20 left-1/2 -translate-x-1/2",
        ]}>RENEWABLE ENERGY SOLUTIONS</h4>
    </div>
    <div class="w-full -mt-24 z-10 px-7">
        <Card.Root class="w-full">
            <Card.Header>
                <Card.Title class="block">
                    <img src="/images/home/Solar-Panel-1.webp" alt="WOOW SOLAR PANEL" 
                         class="h-auto w-36 mx-auto -mt-16">
                    <span class="text-xl font-[700] ">WooW</span><br />
                    <span class="text-xl font-[700] text-orange-400">Solar Panel</span>
                </Card.Title>
            </Card.Header>
            <Card.Content>
                <Card.Description class="overflow-hidden">Public street lighting luminaires with solar power. Equipped with TCS technology Li-Ion battery power for the light to work well at high and low temperatures of 0°~45°.</Card.Description>
            </Card.Content>
        </Card.Root>
        <Card.Root class="w-full mt-10">
            <Card.Header>
                <Card.Title class="block">
                    <img src="/images/home/Solar-Panel-1.webp" alt="WOOW SOLAR PANEL" 
                         class="h-auto w-36 mx-auto -mt-16">
                    <span class="text-xl font-[700] ">WooW</span><br />
                    <span class="text-xl font-[700] text-orange-400">Solar Panel</span>
                </Card.Title>
            </Card.Header>
            <Card.Content>
                <Card.Description class="overflow-hidden">Public street lighting luminaires with solar power. Equipped with TCS technology Li-Ion battery power for the light to work well at high and low temperatures of 0°~45°.</Card.Description>
            </Card.Content>
        </Card.Root>
    </div>
</HomePage>
<HomePage>
    <h3 class="text-center text-xl font-semibold mb-3">SOFTWARE AS A SERVICE</h3>
    <Tabs.Root class="w-auto">
        <Tabs.List>
            <Tabs.Trigger value="woowedu"><img src="/images/home/Logo-WoowEdu.webp" alt="WOOW EDU"></Tabs.Trigger>
            <Tabs.Trigger value="woowtime"><img src="/images/home/Logo-WooWTime.webp" alt="WOOW TIME"></Tabs.Trigger>
            <Tabs.Trigger value="woowspeech"><img src="/images/home/Logo-WooWLibrary.webp" alt="WOOW SPEECH"></Tabs.Trigger>
            <Tabs.Trigger value="woowmobile"><img src="/images/home/Logo-WooWMobile.webp" alt="WOOWTIME MOBILE"></Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="woowedu">Account content</Tabs.Content>
        <Tabs.Content value="woowtime">Password content</Tabs.Content>
        <Tabs.Content value="woowspeech">Password content</Tabs.Content>
    </Tabs.Root>
</HomePage>

