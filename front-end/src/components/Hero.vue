<template>
    <div class="carousel relative w-full h-[30rem] my-[4rem] overflow-hidden">
      <div
        class="carousel-item absolute w-full h-full transition-opacity duration-500"
        v-for="(slide, index) in slides"
        :key="index"
        :class="getClass(index, slide.bg)">
        
        <div class="flex items-center">
          <!-- Text content -->
          <div class="w-[50%] mt-[4rem] ml-[10rem] text-white">
            <h1 class="text-[4rem]">{{ slide.title }}</h1>
            <p class="my-2"> {{ slide.description }}</p>
            <button class="py-1 px-4 my-[1rem] rounded-sm border-white border-2 hover:bg-white hover:text-[#040056] hover:font-bold">LEARN MORE</button>
          </div>
          <!-- Image content -->
          <div class="h-full w-[40%] absolute left-[68%] top-0">
            <img :src="slide.image" alt="" class="w-full max-h-full mb-6 object-cover" :style="{ opacity: slide.opacity }">
          </div>
        </div>
      </div>
      <!-- Slide controls -->
      <button class="carousel-control-prev absolute top-[50%] left-4 transform -translate-y-[50%] bg-black/20 text-white px-4 py-[3%] text-3xl rounded-full" @click="prevSlide">‹</button>
      <button class="carousel-control-next absolute top-[50%] right-4 transform -translate-y-[50%] bg-black/20 text-white px-4 py-[3%] text-3xl rounded-full" @click="nextSlide">›</button>
    </div>
  </template>
  
  

  <script>
  import pathfinder from '../assets/pathfinder.png'
  import current from '../assets/current.png'
  import future from '../assets/future.png'

export default {
  name: 'Hero',
  data() {
    return {
      currentSlide: 0,
      slides: [
        {
          bg: 'bg-white/0',
          title: 'PATHFINDER',
          description: 'NASA’s Mars Pathfinder successfully demonstrated a new way to safely land on the Red Planet and deliver the first-ever robotic rover, Sojourner, to the Martian surface. At a time when the Internet was still in its infancy, the mission\'s activities captured millions of eyes as people remained glued to their computers to watch anxious and excited engineers and scientists in Mission Control, and to view Mars images transmitted down to Earth.',
          image: pathfinder,
          opacity: 0.7
        },
        {
          bg: 'bg-white/0',
          title: 'CURRENTLY',
          description: 'Mars exploration is advancing rapidly, highlighted by NASA\'s Perseverance rover, which landed in 2021 to search for ancient life and collect samples. The mission includes the Ingenuity helicopter, demonstrating powered flight on Mars. ESA\'s ExoMars Orbiter studies atmospheric gases, and China\'s Tianwen-1 mission, with an orbiter, lander, and rover, contributes to the international effort to explore the Red Planet.',
          image: current,
          opacity: 0.8
        },
        {
          bg: 'bg-white/0',
          title: 'THE FUTURE',
          description: 'The future of Mars exploration is promising, with upcoming missions like NASA’s Mars Sample Return campaign aiming to bring Martian samples back to Earth by the 2030s. Ambitious plans from SpaceX envision human colonization, while international collaborations, such as ESA\'s ExoMars rover, are set to advance our understanding of Mars\' potential to support life. These efforts aim to pave the way for sustained human presence on Mars and further unravel the mysteries of the Red Planet.',
          image: future,
          opacity: 0.6
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
    this.autoPlay = setInterval(this.nextSlide, 8000);
  },
  beforeDestroy() {
    clearInterval(this.autoPlay);
  },
};
</script>
