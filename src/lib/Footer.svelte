<script lang="ts">

import LightButton from '$lib/LightButton.svelte';
import HoverableExternalLink from '$lib/HoverableExternalLink.svelte';
</script>


<div class="bg-neutral-800 text-white p-8">

	<div class="flex flex-col space-y-10 lg:space-y-0 lg:flex-row ">


		<div class="flex flex-col mx-5 basis-1/2">
			<div class="pb-8 font-light">
				Contact
			</div>
			<div class="text-white text-6xl lg:text-7xl pb-8">
				Let's build the future, one reality at a time.
			</div>
			<div class="flex flex-row">
				<LightButton >
					JOIN US
				</LightButton>
			</div>
		</div>


		<div class="flex flex-row basis-1/2">


			<div class="flex flex-col space-y-5 font-normal text-lg basis-1/2">
				<a href="/" class="">
					Home
				</a>
				<a href="/" class="">
					Projects
				</a>
				<a href="/" class="">
					About
				</a>
				<a href="/" class="">
					Contact
				</a>
			</div>


			<div class="flex flex-col mx-10 space-y-5 min-w-50 basis-1/2">
				<HoverableExternalLink url="https://discord.com/invite/kwU8yMYDqJ">
					Discord
				</HoverableExternalLink>
				<HoverableExternalLink url="https://github.com/kennynahh/uw-reality-labs">
					Github
				</HoverableExternalLink>
				<HoverableExternalLink url="https://www.linkedin.com/company/uw-reality-labs">
					Linkedin
				</HoverableExternalLink>
				<HoverableExternalLink url="https://www.instagram.com/uwrealitylabs/">
					Instagram
				</HoverableExternalLink>
			</div>


		</div>
	</div>


	<div class="text-gray-400 pt-20">
		© 2024 UW Reality Labs
	</div>


</div>
