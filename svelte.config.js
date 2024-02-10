import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		prerender: {
			handleHttpError: ({ path, referrer, message }) => {
				// ignore deliberate link to shiny 404 page
				// if (path === '/not-found' && referrer === '/blog/how-we-built-our-404-page') {
				// 	return;
				// }
				console.table([path, referrer, message]);
				// otherwise fail the build
			}
		},
		// hydrate the <div id="svelte"> element in src/app.html
		adapter: adapter({
			// default options are shown
			pages: 'build',
			assets: 'build',
		}),
		appDir: 'internal',
	},
};

export default config;
