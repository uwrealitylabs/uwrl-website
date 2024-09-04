<script lang="ts">
	interface Link {
		title: string;
		url: string;
		description?: string;
		category: 'main' | 'project' | 'social' | 'apply';
	}

	const links: Link[] = [
		{ title: "Apply to Our Team", url: "/apply", category: "apply" },
		{ title: "Projects", url: "/projects", category: "main" },
		{ title: "About Us", url: "/about", category: "main" },
		{ title: "Join Discord", url: "https://discord.gg/your-discord-invite", category: "social" },
		{ title: "Reality From Scratch", url: "/projects/reality-from-scratch", description: "Modular, open-source VR headset", category: "project" },
		{ title: "Project Northstar-DIY", url: "/projects/project-north-star", description: "PC-powered AR device", category: "project" },
		{ title: "DeepFocus (Redux)", url: "/projects/deep-focus", description: "ML-based real-time defocus blur", category: "project" },
		{ title: "Eye Tracking", url: "/projects/eye-track-vr", description: "Pupil tracking with ML & computer vision", category: "project" }
	];
</script>

<div class="min-h-screen bg-white text-gray-900 p-4 sm:p-6 md:p-8">
	<h1 class="font-normal text-3xl sm:text-4xl md:text-5xl mb-6 sm:mb-8">
		<span class="text-gray-900">UWRL</span>
		<span class="text-gray-500 block sm:inline">Quick Links</span>
	</h1>

	<div class="space-y-6 sm:space-y-8">
		<section>
			<h2 class="font-normal text-xl sm:text-2xl mb-3 sm:mb-4">Main Links</h2>
			<div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
				{#each links.filter(link => link.category === 'main' || link.category === 'social' || link.category === 'apply') as link}
					{#if link.category === 'apply'}
						<a href={link.url} class="bg-[#E2B029] text-white py-3 px-4 rounded-lg text-center hover:bg-[#F69B7C] transition-colors font-semibold shadow-md">
							{link.title}
						</a>
					{:else}
						<a href={link.url} class="bg-gray-900 text-white py-3 px-4 rounded-lg text-center hover:bg-gray-800 transition-colors">
							{link.title}
						</a>
					{/if}
				{/each}
			</div>
		</section>

		<section>
			<h2 class="font-normal text-xl sm:text-2xl mb-3 sm:mb-4">Featured Projects</h2>
			<div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
				{#each links.filter(link => link.category === 'project') as link}
					<a href={link.url} class="bg-white border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow">
						<h3 class="font-medium text-lg">{link.title}</h3>
						{#if link.description}
							<p class="text-sm text-gray-600 mt-2">{link.description}</p>
						{/if}
					</a>
				{/each}
			</div>
		</section>
	</div>
</div>