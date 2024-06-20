<template>
    <div class="flex justify-evenly items-center w-[100%] h-[42vh] ">
        <router-link to="/today" class="h-[80%] w-[20%] bg-white">
            <div>today</div>
        </router-link>
        <router-link to="/today" class="h-[80%] w-[20%] bg-white">
            <div>calendar</div>
        </router-link>
        <router-link to="/gallery" class="h-[80%] w-[20%] bg-white">
            <div>gallery</div>
        </router-link>


    </div>
</template>

<script>
    export default {
        name: 'PageThumbs',

    }
</script>