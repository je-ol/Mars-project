<template>
    <nav class="flex justify-around items-center text-white bg-slate-500/50 py-2">
        <div class="">
            {{ logo }}
        </div>

        <div>
            <ul class="flex gap-40 border-2 border-grey py-4 px-16 rounded-md">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
        <div class="flex gap-4 items-center">
            <button class="bg-white/50 h-[100%] py-1 px-4 rounded-sm">LOGIN</button>
            <button class="bg-white/50 h-[100%] py-1 px-4 rounded-sm">REGISTER</button>
            <img src="" alt="" class="h-[48px] w-[48px] rounded-full bg-white/50 border-2 border-white">
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'Navbar',
        data() {
            return {
                logo: 'Mars'
            }
        }
    }
</script>