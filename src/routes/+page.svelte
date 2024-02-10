<script>
    import ProjectCard from "$lib/ProjectCard.svelte";
    import LightButton from '$lib/LightButton.svelte';
	import FlatDropDown from '$lib/FlatDropDown.svelte';
	import { base } from '$app/paths';
</script>

<div class="p-8 flex flex-col space-y-10">


    <div class="flex flex-col space-y-20 pb-20 lg:px-10">
        <div class="font-light lg:text-2xl">
            VR/AR/XR · Spatial Computing
        </div>
        <div class="ml-2">
            <h1 class="font-normal text-4xl md:text-6xl lg:text-7xl">
                <span >The University of Waterloo's </span>
                <br >
                <span class="text-gray-500">XR &amp; spatial computing</span>
                <br >
                <span class="text-gray-500">design team.</span>
            </h1>
        </div>
        <div >
            <div class="flex flex-row">
                <a href="{ base }/projects" class="w-auto rounded-full bg-black px-6 py-4 flex flex-row space-x-3 group hover:bg-white hover:ring-2 ring-black ring-0">
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


    <div class="flex flex-col space-y-2 lg:px-10">
		<ProjectCard img="/RealityFromScratchHeadset.jpg" title="Reality From Scratch">
			The modular, open-source VR headset for research and experimentation.
		</ProjectCard>
		<ProjectCard img="/NorthStarHeadset.jpg" title="Project Northstar-DIY" >
			A fully self-contained AR device based on Ultraleap's Project North Star.
		</ProjectCard>
        <ProjectCard img="/DeepFocus.webp" title="DeepFocus (Redux)" >
			Generating training data for ML-based real-time defocus blur.
		</ProjectCard>
        <ProjectCard img="/EyeTrackVR.webp" title="Eye Tracking"  >
			Pupil tracking based on EyeTrackVR with ML & computer vision.
		</ProjectCard>
    </div>


    <div class="flex flex-row lg:px-10">
        <div class="basis-1/6 font-light lg:text-2xl">
            About
        </div>
        <div class="flex flex-col basis-5/6 ">
            <div class="">
                <span class="font-normal text-5xl lg:text-6xl">Researching, experimenting, and building.</span>
                <span class="font-normal text-5xl lg:text-6xl text-gray-500">We create real-life interfaces for the virtual world.</span>
            </div>
            <div class="flex flex-row pt-10">
                <LightButton url="/projects" >
					PROJECTS
				</LightButton>
            </div>

        </div>
    </div>



    <div class="flex flex-col lg:px-10 textgray-900">
		<div class="py-8 font-light lg:text-2xl">
			Project Topics
		</div>
		<FlatDropDown title="VR Hardware" isOpen=false>
			Rotational Tracking: IMU-based, built with Arduino, centralized PCB design
			<br><br>
			Positional Tracking: Roomscale tracking with LEDs (PSMoveServiceEx), inside-out tracking with computer vision (VIO)
			<br><br>
			Display Systems Research: Lens technologies, varifocal optics with eye-tracking and natural defocus blur in real-time game engines
		</FlatDropDown>
		<FlatDropDown title="AR Hardware" isOpen=false>
			Inspired by Project North Star: Side-projected display, optical combiners
			<br><br>
			zig on the RP2040, Intel RealSense T265, custom MCP4021 libraries
			<br><br>
			Ultraleap-based hand trackingg
		</FlatDropDown>
		<FlatDropDown title="XR Software & Games" isOpen=false>
			Varifocal: A story-based VR game set in a post-apocalyptic city where the player navigates through different emotional segments using visors with unique shades.
			<br><br>
			The objective is to explore, solve puzzles, and free fragmented individuals stuck in time, gaining emotional fragments.
		</FlatDropDown>
    </div>

	<div class="flex flex-row lg:px-10">
		<div class="basis-1/6  font-light lg:text-2xl">
			About
		</div>
		<div class="flex flex-col basis-5/6 ">
			<div class="">
				<span class="font-normal text-5xl lg:text-6xl">We foster a community for tinkerers and enthusiasts.</span>
				<span class="font-normal text-5xl lg:text-6xl text-gray-500">And we build and research together.</span>
			</div>
			<div class="flex flex-row pt-10">
				<LightButton url="/about">
					JOIN US
				</LightButton>
			</div>
		</div>
	</div>


</div>
