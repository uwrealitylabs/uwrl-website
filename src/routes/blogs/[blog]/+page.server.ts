import { readPage } from '$lib/server/PageGeneration';
import { processMarkdown } from '$lib/server/PageGeneration';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {

	console.log(params.blog);

	let rawJSON = await readPage(params.blog, 'blogs');
	rawJSON = await processMarkdown(rawJSON);

	return rawJSON
};