<script>
    import DarkModeToggleSwitch from "$lib/DarkModeToggleSwitch.svelte";
</script>



<div class="flex flex-row bg-gray-800 items-center justify-center w-full m-12">

    <div class="flex flex-row w-full">
            <a href="/" class="font-extrabold underline flex items-center">
                uwrl
            </a>
        <div class="items-center">
            <a href="/" class="px-3 py-2 bg-gray-900 font-bold text-gray-100 rounded-md">
                Projects
            </a>
            <a href="/blog" class="px-3 py-2 bg-gray-800 hover:bg-gray-700 font-bold text-gray-100 rounded-md">
                About
            </a>
            <a href="/" class="px-3 py-2 bg-gray-800 hover:bg-gray-700 font-bold text-gray-100 rounded-md">
                Contact
            </a>
        </div>

        <div class="flex flex-row py-2 px-6 right-0 items-center">
            <DarkModeToggleSwitch></DarkModeToggleSwitch>
        </div>
    </div>

</div>

