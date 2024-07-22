<template>
    <div class="carousel relative w-full h-[30rem] overflow-hidden">
      <div
        class="carousel-item absolute w-full h-full transition-opacity duration-500"
        v-for="(slide, index) in slides"
        :key="index"
        :class="getClass(index, slide.bg)"
      >
        <div class="carousel-caption absolute bottom-5 left-5 bg-black bg-opacity-50 text-white p-4">
          <h3>{{ slide.title }}</h3>
          <p>{{ slide.description }}</p>
        </div>
      </div>
  
      <button class="carousel-control-prev absolute top-[50%] left-4 transform -translate-y-[50%] bg-black/20 text-white px-4 py-[3%] text-3xl rounded-full" @click="prevSlide">‹</button>
      <button class="carousel-control-next absolute top-[50%] right-4 transform -translate-y-[50%] bg-black/20 text-white px-4 py-[3%] text-3xl rounded-full" @click="nextSlide">›</button>
    </div>
  </template>
  
  

  <script>
export default {
  name: 'Hero',
  data() {
    return {
      currentSlide: 0,
      slides: [
        {
          bg: 'bg-white/10',
          title: 'Slide 1',
          description: 'Description for Slide 1',
        },
        {
          bg: 'bg-white/20',
          title: 'Slide 2',
          description: 'Description for Slide 2',
        },
        {
          bg: 'bg-white/30',
          title: 'Slide 3',
          description: 'Description for Slide 3',
        },
        // Can add more slides here
      ],
    };
  },
  methods: {
    nextSlide() {
      this.currentSlide =
        (this.currentSlide + 1) % this.slides.length;
    },
    prevSlide() {
      this.currentSlide =
        (this.currentSlide - 1 + this.slides.length) %
        this.slides.length;
    },
    getClass(index, bgClass) {
      return {
        'opacity-0': index !== this.currentSlide,
        'opacity-100': index === this.currentSlide,
        [bgClass]: true,
      };
    },
  },
  mounted() {
    // Optional: Auto-play functionality
    this.autoPlay = setInterval(this.nextSlide, 10000);
  },
  beforeDestroy() {
    clearInterval(this.autoPlay);
  },
};
</script>
