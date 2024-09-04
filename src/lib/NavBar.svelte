<script>
	import { base } from '$app/paths';
	import DarkModeToggleSwitch from "$lib/DarkModeToggleSwitch.svelte";
	import { onMount } from 'svelte';

	let isMenuOpen = false;
	let isMobile = false;

	onMount(() => {
		const mediaQuery = window.matchMedia('(max-width: 768px)');
		isMobile = mediaQuery.matches;

		mediaQuery.addListener((e) => {
			isMobile = e.matches;
			if (!isMobile) isMenuOpen = false;
		});
	});

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}
</script>

<div class="dark:bg-gray-800">
	<div class="flex flex-col md:flex-row items-center justify-between m-4 md:m-8 lg:text-xl">
		<div class="flex justify-between w-full md:w-auto items-center">
			<a href="{base}/" class="font-extrabold hover:underline flex items-center">
				uwrl
			</a>
			{#if isMobile}
				<button on:click={toggleMenu} class="md:hidden">
					<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
					</svg>
				</button>
			{/if}
		</div>

		<div class="{isMobile && !isMenuOpen ? 'hidden' : 'flex'} flex-col md:flex-row w-full md:w-auto mt-4 md:mt-0">
			<div class="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-3 items-center flex-grow font-normal">
				<a href="{ base }/projects" class="px-3 py-2 transition hover:-translate-y-1">
					Projects
				</a>
				<a href="{ base }/about" class="px-3 py-2 transition hover:-translate-y-1">
					About
				</a>
				<a href="{ base }/blogs" class="px-3 py-2 transition hover:-translate-y-1">
					Blog
				</a>
				<a href="{ base }/contact" class="px-3 py-2 transition hover:-translate-y-1">
					Contact
				</a>
			</div>

			<div class="flex justify-center md:justify-end py-2 px-6 items-center mt-4 md:mt-0">
				<DarkModeToggleSwitch />
			</div>
		</div>
	</div>
</div>