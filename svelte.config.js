import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),
	// Comment the paths if wants to run in dev mode.
	paths: {
		base: '/pureflow',
		assets: '/pureflow'
	},
	kit: {
		adapter: adapter(),
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};

export default config;
