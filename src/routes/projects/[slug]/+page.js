/** @type {import('./$types').PageLoad} */
export function load({ params }) {
    return {
        project: {
            title: `Title for ${params.slug} goes here`,
            content: `Content for ${params.slug} goes here`
        }
    };
}
