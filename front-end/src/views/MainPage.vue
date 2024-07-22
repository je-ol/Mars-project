<template>
    <Hero />
    <PageThumbs />
    <LatestNews />
    <Message />
</template>

<script>
import Hero from '../components/Hero.vue';
import PageThumbs from '../components/PageThumbs.vue';
import LatestNews from '../components/LatestNews.vue';
import Message from '../components/Message.vue';

  export default {
    name: 'MainPage',
    components: {
      Hero,
      PageThumbs,
      LatestNews,
      Message
    },
    data() {
      return {
        
      }
    }
  }
</script>