<template>
    <div class="flex justify-evenly items-center w-[100%] h-[22rem] my-[4rem] ">
        <router-link to="/today" class="h-[80%] w-[20rem] flex flex-col p-4 bg-white/10">
            <div class="p-2 mb-2 text-center text-white font-bold bg-[#bb345c]">See photos of the day</div>
            <div class="w-full h-full bg-blue-400/40"></div>
        </router-link>
        <router-link to="/today" class="h-[80%] w-[20rem] flex flex-col p-4 bg-white/10">
            <div class="p-2 mb-2 text-center text-white font-bold bg-[#bb345c]">Open by calendar</div>
            <div class="w-full h-full bg-blue-400/40"></div>
        </router-link>
        <router-link to="/gallery" class="h-[80%] w-[20rem] flex flex-col p-4 bg-white/10">
            <div class="p-2 mb-2 text-center text-white font-bold bg-[#bb345c]">Curated gallery</div>
            <div class="w-full h-full bg-blue-400/40"></div>
        </router-link>


    </div>
</template>

<script>
    export default {
        name: 'PageThumbs',

    }
</script>