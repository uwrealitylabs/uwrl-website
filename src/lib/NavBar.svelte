<script>
  	import { base } from '$app/paths';

	import DarkModeToggleSwitch from "$lib/DarkModeToggleSwitch.svelte";
</script>


<div class="dark:bg-gray-800">
    <div class="flex flex-row items-center justify-center m-8 lg:text-xl">

        <div class="flex flex-row w-full">
            <a href="{base}/" class="font-extrabold hover:underline flex items-center">
                uwrl
            </a>

            <div class="flex justify-center space-x-3 items-center flex-grow font-normal">
                <a href="{ base }/projects" class="px-3 py-2 transition hover:-translate-y-1">
                    Projects
                </a>
                <a href="{ base }/about" class="px-3 py-2 transition hover:-translate-y-1">
                    About
                </a>
				<a href="{ base }/blogs" class="px-3 py-2 transition hover:-translate-y-1">
					Blog
				</a>
                <a href="{ base }/contact" class="px-3 py-2 transition hover:-translate-y-1">
                    Contact
                </a>
            </div>

            <div class="flex flex-row py-2 px-6 right-0 items-center">
                <DarkModeToggleSwitch></DarkModeToggleSwitch>
            </div>
        </div>

    </div>

</div>

