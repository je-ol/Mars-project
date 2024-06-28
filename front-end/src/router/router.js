import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../views/MainPage.vue'
import PhotosToday from '../views/PhotosToday.vue'
import Gallery from '../views/Gallery.vue'
import Profile from '../views/Profile.vue'
import LogIn from '../views/LogIn.vue'
import Register from '../views/Register.vue'

const routes = [
    { path: '/', component: MainPage },
    { path: '/profile', component: Profile},
    { path: '/today', component: PhotosToday },
    { path: '/gallery', component: Gallery },
    { path: '/login', component: LogIn },
    { path: '/register', component: Register },
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;