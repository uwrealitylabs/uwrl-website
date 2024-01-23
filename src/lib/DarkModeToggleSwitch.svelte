<script>
    import { DarkMode } from "$lib/States";
    DarkMode.set(false)
    $: console.info("DarkMode: " + $DarkMode)

    let changeMode = () => {
        DarkMode.set(!$DarkMode)
    }
</script>

<div  >
    <button type="button"
            class="bg-gray-300 dark:bg-gray-600 w-14 h-8 rounded-full center flex items-center "
            on:click="{changeMode}">
        <div class=" m-1 bg-white w-6 h-6 rounded-full transition"
             class:translate-x-full="{$DarkMode}"
             >
        </div>
    </button>



</div>