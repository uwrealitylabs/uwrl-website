<script lang="ts">
	import { base } from '$app/paths';

		export let title: string
	export let isOpen: boolean
</script>


<a href="{ base }/" class="flex flex-col border-b" on:click={(event) => {event.preventDefault(); isOpen = !isOpen;}}>
  	<div class="flex flex-row py-5">
		<div class="text-3xl font-normal">
			{title}
		</div>
		<svg class="w-8 h-8 stroke-black stroke-1 ml-auto {isOpen? 'hidden' : 'block'}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
			<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
		</svg>
		<svg class="w-8 h-8 stroke-black stroke-1 ml-auto {isOpen? 'block' : 'hidden'}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
			<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
		</svg>
	</div>



  	<div class="py-5 {isOpen? 'block' : 'hidden'} " >
		<div class="font-light text-2xl">
			<slot>

			</slot>
		</div>

	</div>
</a>