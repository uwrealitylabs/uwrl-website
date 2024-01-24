<style global lang="postcss">

    @tailwind base;
    @tailwind components;
    @tailwind utilities;

</style>

<script lang="ts">
    import NavBar from "$lib/NavBar.svelte";
    import {DarkMode} from "$lib/States";
</script>


<div class:dark={$DarkMode}>
    <NavBar></NavBar>
<div class="bg-repeat" style="background-image: url(/sketchTile.svg);">
    <slot></slot>
</div>

</div>
