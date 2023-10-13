<script>
    import Project from './Project.svelte';
    let cats = [
        { id: 'J---aiyznGQ', name: 'Keyboard Cat' },
        { id: 'z_AbfPXTKms', name: 'Maru' },
        { id: 'OUtn3pvWmpg', name: 'Henri The Existential Cat' }
    ];
</script>

<ul>
    {#each cats as { id, name }, i}
        <li><Project title={name} vid="{id}" /></li>
    {/each}
</ul>

<style>
</style>

