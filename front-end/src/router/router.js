import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../views/MainPage.vue'
import PhotosToday from '../views/PhotosToday.vue'

const routes = [
    { path: '/', component: MainPage },
    { path: '/today', component: PhotosToday }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;