<script>
    import ProjectCard from "$lib/ProjectCard.svelte";
    import LightButton from '$lib/LightButton.svelte';
</script>

<div class="m-8 flex flex-col ">

    <div class="flex flex-col space-y-20 pb-20">
        <div class="text-sm lg:text-lg">
            VR/AR/XR · Spatial Computing
        </div>
        <div class="ml-2">
            <h1 class="font-normal text-5xl lg:text-7xl">
                <span >The University of Waterloo's </span>
                <br >
                <span class="text-gray-500">XR &amp; spatial computing</span>
                <br >
                <span class="text-gray-500">design team.</span>
            </h1>
        </div>
        <div >
            <div class="flex flex-row">
                <a href="/projects" class="w-auto rounded-full bg-black px-6 py-4 flex flex-row space-x-3 group hover:bg-white hover:ring-2 ring-black ring-0">
                    <div class="text-white group-hover:text-black">
                        Dive deeper
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="group-hover:stroke-black stroke-white w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                    </div>
                </a>
            </div>
        </div>
    </div>

    <div class="flex flex-col space-y-2">
        <ProjectCard class="" img="/RealityFromScratchHeadset.jpg" title="Reality From Scratch" desc="The modular, open-source VR headset for research and experimentation." />
        <ProjectCard class="" img="/NorthStarHeadset.jpg" title="Project Northstar-DIY" desc="A fully self-contained AR device based on Ultraleap's Project North Star." />
        <ProjectCard class="" img="/DeepFocus.webp" title="DeepFocus (Redux)" desc="Generating training data for ML-based real-time defocus blur." />
        <ProjectCard class="" img="/EyeTrackVR.webp" title="Eye Tracking" desc="Pupil tracking based on EyeTrackVR with ML & computer vision." />
    </div>
    <div class="flex flex-row">
        <div class="basis-1/6">
            About
        </div>
        <div class="flex flex-col basis-5/6">
            <div class="">
                <span class="font-normal text-5xl">Researching, experimenting, and building.</span>
                <span class="font-normal text-5xl text-gray-500">We create real-life interfaces for the virtual world.</span>
            </div>
            <div class="flex flex-row">
                <LightButton url="/projects" text="PROJECTS"></LightButton>
            </div>

        </div>
    </div>
</div>
