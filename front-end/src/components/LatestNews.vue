<template>
    <div class="flex w-[100%] h-[26rem] ml-[4rem] my-[12rem]">
        <div class="h-[14%] w-[10rem] items-start">
            <h2 class="text-white text-[2rem]">Latest News</h2>
        </div>

        <div class="w-[2px] h-full bg-white/80 mx-4 "></div>

        <div class="flex justify-evenly items-end h-[100%] w-[100%]">
            <div class="h-[86%] w-[20%] bg-white/75 shadow-lg rounded-sm"
            v-for="(article, index) in news">
            <img :src="article.image_url" alt="" class="h-[60%] w-full object-cover opacity-80">
            <div class="h-[40%] w-full p-[0.5rem] shadow-inner">
                <h3 class="font-semibold">{{ article.title }}</h3>
                <h4 class="text-[0.75rem] my-[0.5rem]">{{ article.description }}</h4>
            </div>

        </div>

        </div>

    </div>
</template>

<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';

    const news = ref([])
    const fetchNews = async () => {
        try {
            const response = await axios.get('https://api.thenewsapi.com/v1/news/all?api_token=MGTSjDihlOWBvp7A1krx0W4rj5QHKtod20ZG2fku&search=mars+nasa&language=en&exclude_domains=app.buzzsumo.com,ecns.cn', {

            })
            news.value = response.data.data
        } catch (e) {
            console.log('Error fetching news', e)
        }
    }
    onMounted( async () => {
        await fetchNews()
        console.log(news.value)
    })
    
</script>

<script>
export default {
  name: 'LatestNews'
};
</script>