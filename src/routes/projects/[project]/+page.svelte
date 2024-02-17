<script lang='ts'>
	import type { PageMeta } from '$lib/server/PageGeneration';

	export let data: PageMeta
	let blog = data
	console.log(data.body)
</script>
<div class="w-full ">
	<div id="blogCard" class="bg-gray-50 dark:bg-gray-700 rounded-xl p-8 w-full">
		<div class="font-bold text-3xl pb-4 dark:text-gray-100">
			{blog.title}
		</div>
		<div class="font-medium text-lg pb-4 dark:text-gray-100">
			{blog.date}
		</div>
		<div class="font-medium text-base pb-4 text-gray-600 dark:text-gray-200">
			{blog.description}
		</div>
		<div class="prose lg:prose-xl sm:prose-sm dark:text-gray-100 dark:prose-dark">
			{@html blog.body}
		</div>

	</div>
</div>