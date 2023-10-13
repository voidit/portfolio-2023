<script>
    export let title;
    export let vid;
    const slug = `${title}`.trim().replace(' ', '+');
</script>

<div class="project {slug}">
    <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v={vid}"> {title} </a>
</div>

<style>
</style>
