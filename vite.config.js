import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
// import { sass } from 'svelte-preprocess-sass';

export default defineConfig({
	plugins: [sveltekit()],
	assetsInclude: ['**/*.ttf','**/*.otf'],
});
