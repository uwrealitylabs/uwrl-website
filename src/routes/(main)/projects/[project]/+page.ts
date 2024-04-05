import type { PageLoad } from './$types';
import type { PageMeta } from '$lib/server/PageGeneration';

export const load: PageLoad = async ({ data, params }) => {
	return data as PageMeta
};