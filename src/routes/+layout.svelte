<style global lang="postcss">

    @tailwind base;
    @tailwind components;
    @tailwind utilities;

</style>

<script lang="ts">
    import NavBar from "$lib/NavBar.svelte";
	import Footer from '$lib/Footer.svelte';
	import {DarkMode} from "$lib/States";
	import { base } from '$app/paths';
</script>


<div class:dark={$DarkMode}>
    <NavBar></NavBar>
	<div class="bg-repeat" style="background-image: url({base}/sketchTile.svg);">
		<slot></slot>
	</div>
	<Footer></Footer>
</div>
