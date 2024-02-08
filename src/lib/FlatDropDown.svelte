<script lang="ts">
	export let title: string
	export let isOpen: boolean
</script>


<a href="/" class="flex flex-col border-b" on:click={(event) => {event.preventDefault(); isOpen = !isOpen;}}>
	<div class="text-3xl font-normal">
	  {title}
	</div>

  	<div class={isOpen? "block" : "hidden"} >
	  <slot>

	  </slot>
	</div>
</a>