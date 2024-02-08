<script lang="ts">
	export let title, content: string
	export let initialState: boolean
</script>


<div class="flex flex-col border-b">
	<div>
	  {title}
	</div>

  	<div class={initialState}>
	  {content}
	</div>
</div>