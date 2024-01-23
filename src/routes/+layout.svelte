<style global lang="postcss">

    @tailwind base;
    @tailwind components;
    @tailwind utilities;

</style>

<script lang="ts">
    import NavBar from "$lib/NavBar.svelte";
    import {DarkMode} from "$lib/States";
</script>

<NavBar></NavBar>

<div class="bg-red-400 h-10 w-full p-2 font-bold"
     class:dark={DarkMode}
>
    test test test
</div>

<slot></slot>