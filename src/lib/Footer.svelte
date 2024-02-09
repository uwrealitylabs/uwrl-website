<script>

import LightButton from '$lib/LightButton.svelte';
</script>

<div class="flex flex-row bg-gray-800 text-white p-8">
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
		<div class="text-gray-400 pt-20">
			© 2024 UW Reality Labs
		</div>
	</div>
	<div class="flex flex-col space-y-5 font-normal text-lg basis-1/4">
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
	<div class="flex flex-col mx-20 space-y-5 min-w-50 basis-1/4">

		<a href="/" class="font-normal text-lg flex flex-row group">
			<div>
				Discord
			</div>
			<svg class="w-8 h-8 stroke-white stroke-1 block group-hover:hidden ml-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" >
				<path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
			</svg>
			<svg class="w-8 h-8 stroke-white stroke-1 hidden group-hover:block ml-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" >
				<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
			</svg>
		</a>

	</div>
</div>