<script lang="ts">
	export let url: string;
</script>

<a href={url} class="font-normal text-lg flex flex-row group">
	<div class="text-white group-hover:text-gray-300">
		<slot></slot>
	</div>
	<svg class="w-8 h-8 stroke-white stroke-1 block group-hover:hidden ml-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" >
		<path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
	</svg>
	<svg class="w-8 h-8 stroke-white stroke-1 hidden group-hover:block ml-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" >
		<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
	</svg>
</a>