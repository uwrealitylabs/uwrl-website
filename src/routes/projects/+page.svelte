<script>
import ProjectCard from '$lib/ProjectCard.svelte';
import LightButton from '$lib/LightButton.svelte';
</script>



<div class="p-4 sm:p-10 lg:p-20 flex flex-col space-y-4 sm:space-y-8 lg:space-y-32">

	<div class="flex flex-col space-y-10 pb-10">

		<div class="ml-2">
			<h1 class="font-normal text-5xl md:text-6xl lg:text-7xl">
				The Project Collective
			</h1>
		</div>
		<div class="font-normal text-2xl md:text-3xl lg:text-4xl">
			See how we've turned ideas into <span class="line-through">virtual</span> reality.
			<span class="text-gray-500">Dive into our teams' current research.</span>
		</div>
	</div>


	<div class="flex flex-col lg:flex-none space-y-6 sm:space-y-0 sm:gap-4 sm:grid sm:grid-cols-2 sm:grid-flow-row ">
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


	<div class="flex flex-col">
		<div class="">
			<span class="font-normal text-5xl lg:text-6xl">Interested in starting your own project?</span>
			<span class="font-normal text-5xl lg:text-6xl text-gray-500">Join us in crafting impactful virtual experiences.</span>
		</div>
		<div class="flex flex-row pt-10">
			<LightButton url="/projects" >
				CONTACT US
			</LightButton>
		</div>

	</div>



</div>
