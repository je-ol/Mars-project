<template>
    <nav class="flex h-[8vh] justify-around items-center text-white bg-slate-500/50 py-2">
        <router-link to="/" >
            <div class="text-2xl font-bold">
                {{ logo }}
            </div>
        </router-link>

        <div>
            <ul class="flex gap-40 border-2 border-grey py-2 px-16 rounded-md">
                <li>
                    <router-link to="/">Home</router-link>
                </li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
        <div class="flex gap-4 items-center">
            <router-link to="/login">
                <button class="bg-white/50 h-[100%] py-1 px-4 rounded-sm">LOGIN</button>
            </router-link>
            <router-link to="/register">
                <button class="bg-white/50 h-[100%] py-1 px-4 rounded-sm">REGISTER</button>
            </router-link>
            <router-link to="/profile">
                <img src="" alt="" class="h-[48px] w-[48px] rounded-full bg-white/50 border-2 border-white">
            </router-link>
        </div>
    </nav>
</template>

<script>
import router from '../router/router';

    export default {
        name: 'Navbar',
        data() {
            return {
                logo: 'Mars'
            }
        }
    }
</script>