import * as db from '$lib/server/database';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    return {
        project: await db.getProject(params.slug)
    };
}
