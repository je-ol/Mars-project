<template>
    <div class="flex w-[100%] h-[26rem] ml-[4rem] my-[12rem]">
        <div class="h-[14%] w-[10rem] items-start">
            <h2 class="text-white text-[2rem]">Latest News</h2>
        </div>
        <div class="w-[2px] h-full bg-white/80 mx-4"></div>
        <div class="flex justify-evenly items-end h-[100%] w-[100%]">
            <div class="h-[86%] w-[20%] bg-white/30"></div>
            <div class="h-[86%] w-[20%] bg-white/30"></div>
            <div class="h-[86%] w-[20%] bg-white/30"></div>
        </div>

    </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';

    const news = ref([])
    const fetchNews = async () => {
        try {
            const response = await axios.get('https://api.thenewsapi.com/v1/news/all?api_token=FxWVDl0pL3HYyTv3uTavGSv08uYKG5OU07zRJwZZ&search=mars', {

            })
        } catch (e) {
            console.log('Error fetching news', e)
        }

    }
    
</script>

<script>
export default {
  name: 'LatestNews'
};
</script>