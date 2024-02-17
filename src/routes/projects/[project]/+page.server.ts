import { readPage } from '$lib/server/PageGeneration';
import { processMarkdown } from '$lib/server/PageGeneration';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const slug = params.project
	console.log(slug);
	let rawJSON = await readPage(slug, 'project');
	rawJSON = await processMarkdown(rawJSON);

	return { rawJSON };
};