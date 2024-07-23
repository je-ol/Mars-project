<template>
    <nav class="flex h-[4rem] justify-around items-center text-white py-2">
        <router-link to="/" >
            <div class="text-2xl font-bold">
                {{ logo }}
            </div>
        </router-link>

        <div>
        <ul class="flex gap-10 py-2 px-16 rounded-md">
            <li class="pr-20 mr-10 border-r border-white/60">
            <router-link to="/">Home</router-link>
            </li>
            <li class="pr-20 mr-10 border-r border-white/60">About</li>
            <li>Contact</li>
        </ul>
        </div>

        <div class="flex gap-8 items-center">
            <router-link to="/login">
                <button class="h-[100%] py-1 px-4 rounded-sm border-white border-2 hover:bg-white hover:text-[#040056] hover:font-bold">LOGIN</button>
            </router-link>
            <router-link to="/register">
                <button class="h-[100%] py-1 px-4 rounded-sm border-white border-2 hover:bg-white hover:text-[#040056] hover:font-bold">REGISTER</button>
            </router-link>
            <router-link to="/profile">
                <img src="../assets/avatar.svg" alt="" class="h-[48px] w-[48px] rounded-full bg-white/50 border-2 border-white">
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