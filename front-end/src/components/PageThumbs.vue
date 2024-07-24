<template>
    <div class="flex justify-evenly items-center w-[100%] h-[22rem] my-[4rem] ">
        <router-link
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :enter="{ opacity: 1, y: 0 }"
            class="h-[80%] w-[20rem] flex flex-col p-4 bg-white/10"
            to="/today"
        >
            <div class="p-2 mb-2 text-center text-white font-bold bg-[#bb345c]">
                See photos of the day
            </div>
            <div class="w-full h-[80%]">
                <img src="../assets/1.png" alt="" class="h-full w-full object-contain">
            </div>
        </router-link>
        <router-link
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :enter="{ opacity: 1, y: 0 }"
            class="h-[80%] w-[20rem] flex flex-col p-4 bg-white/10"
            to="/today"
        >
            <div class="p-2 mb-2 text-center text-white font-bold bg-[#bb345c]">
                Open by calendar
            </div>
            <div class="w-full h-[80%]">
                <img src="../assets/2.png" alt="" class="h-full w-full object-contain">
            </div>
        </router-link>
        <router-link
            v-motion
            :initial="{ opacity: 0, y: 100 }"
            :enter="{ opacity: 1, y: 0 }"
            class="h-[80%] w-[20rem] flex flex-col p-4 bg-white/10"
            to="/gallery"
        >
            <div class="p-2 mb-2 text-center text-white font-bold bg-[#bb345c]">
                Curated gallery
            </div>
            <div class="w-full h-[80%]">
                <img src="../assets/3.png" alt="" class="h-full w-full object-contain">
            </div>
        </router-link>
    </div>
</template>

<script setup>
import { useMotion } from '@vueuse/motion';

useMotion();
</script>

<script>
export default {
    name: 'PageThumbs',
};
</script>

<style scoped>
/* Optionally, add some additional styles if needed */
</style>
