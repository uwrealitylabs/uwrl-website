import { readPage } from '$lib/server/PageGeneration';
import { processMarkdown } from '$lib/server/PageGeneration';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {

	console.log(params.project);

	let rawJSON = await readPage(params.project, 'projects');
	rawJSON = await processMarkdown(rawJSON);

	return rawJSON
};