<script lang="ts">
    import { base } from '$app/paths';

	export let img, title: boolean


</script>

<div class="flex flex-col group relative space pb-5">
    <div class="aspect-h-8 aspect-w-16 relative">
        <img src="{ base }{ img? '/' : img }" alt="" class="w-full object-cover rounded-3xl group-hover:scale-[0.99] duration-500	">

        <div class="transition rounded-full w-16 h-6 absolute left-8 bottom-10 top-auto bg-gray-300 justify-center items-center flex p-5 -rotate-45 group-hover:rotate-0 group-hover:h-16 group-hover:-translate-y-2 duration-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="w-6 h-6 stroke-white">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
        </div>
    </div>
    <div class="pt-5">
        <div class="text-2xl font-normal">
            { title }
        </div>
    </div>
    <div>
        <div class="text-lg text-gray-700">
			<slot></slot>
        </div>
    </div>
</div>