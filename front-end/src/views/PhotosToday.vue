<template>
    <div class="min-h-[76vh] py-[2rem]  px-[12vw] bg-white/10">
        <div class="flex justify-between  text-white">
            <div class="flex w-[30%] justify-evenly py-[0.75rem] rounded-md bg-white/10">
                <p>Earth date</p>
                <p>Sol date</p>
                <p>Number of photos</p>
            </div>
            <div class="flex w-[20%] justify-evenly py-[0.75rem] rounded-md bg-white/10">
                <p>Camera</p>
                <p>Arrangement</p>
            </div>
        </div>
        <div class="flex flex-wrap justify-between gap-[2rem] mt-[2rem]">
            <PhotoThumb class="w-[48%]"></PhotoThumb>
            <PhotoThumb class="w-[48%]"></PhotoThumb>
            <PhotoThumb class="w-[48%]"></PhotoThumb>
            <PhotoThumb class="w-[48%]"></PhotoThumb>
        </div>
    </div>
</template>

<script>
    import PhotoThumb from '../components/PhotoThumb.vue'
    export default {
        name: 'PhotosToday',
        components: {
            PhotoThumb
        }
    }
</script>