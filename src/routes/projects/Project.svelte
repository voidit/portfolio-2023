<script>
    // `current` is updated whenever the prop value changes...
    export let title;
    export let id;

    // ...but `initial` is fixed upon initialisation
    const name = title;
</script>

<a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v={id}"> {name} </a>

<style>
</style>
