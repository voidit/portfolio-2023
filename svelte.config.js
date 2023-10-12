import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			fallback: '400.html' // may differ from host to host
		}),
		paths: {
			// base: process.env.NODE_ENV === 'github-pages' ? '/portfolio-2023/' : '',
		},
		prerender: {
			handleHttpError: ({ path, referrer, message }) => {
				// ignore deliberate link to shiny 404 page
				if (path === '/not-found' && referrer === '/400.html') {
					return;
				}

				// otherwise fail the build
				throw new Error(message);
			}
		}
	}
};

export default config;
