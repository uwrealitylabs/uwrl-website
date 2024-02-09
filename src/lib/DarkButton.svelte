<script lang="ts">
	export let url: string

</script>


<a href="{ url }" class="w-auto rounded-full bg-black px-6 py-4 flex flex-row space-x-3 group hover:bg-white hover:ring-2 ring-black ring-0">
	<div class="text-white group-hover:text-black">
		<slot></slot>
	</div>
	<div>
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="group-hover:stroke-black stroke-white w-6 h-6">
			<path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
		</svg>
	</div>
</a>