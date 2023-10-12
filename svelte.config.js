import adapter from '@sveltejs/adapter-static';

export default {
    kit: {
        adapter: adapter({
            // default options are shown. On some platforms
            // these options are set automatically — see below
            pages: 'build',
            assets: 'build',
            fallback: '400.html',
            precompress: false,
            strict: true
        }),
        prerender: {
            handleHttpError: ({ path, referrer, message }) => {
                // ignore deliberate link to shiny 404 page
                if (path === '/not-found' && referrer === '400.html') {
                    return;
                }
                // otherwise fail the build
                throw new Error(message);
            }
        }
    }
};
