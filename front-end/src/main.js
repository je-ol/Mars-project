import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/router.js'
import { MotionPlugin } from '@vueuse/motion'


const app = createApp(App)
app.use(router)
app.use(MotionPlugin)
app.mount('#app')
