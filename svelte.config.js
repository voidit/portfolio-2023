import adapter from 'svelte-adapter-github';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
export default {
    preprocess: [vitePreprocess()],
    kit: {
        adapter: adapter({
            // // default options are shown. On some platforms
            // // these options are set automatically — see below
            // pages: 'docs',
            // assets: 'docs',
            fallback: '404.html',
            // precompress: false,
            // domain: 'bloknot',
            // jekyll: false,
            // // If you are not using a .nojekyll file, change your appDir to something not starting with an underscore.
            // // For example, instead of '_app', use 'app_', 'internal', etc.
            // appDir: 'public',
        }),
        paths: {
            base: '/portfolio-2023',
        },
    }
};
// // This can be false if you're using a fallback (i.e. SPA mode)
// export const prerender = false;
