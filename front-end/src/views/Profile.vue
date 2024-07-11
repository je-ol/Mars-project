<template>
    <div class="flex w-full h-[77vh] justify-center items-center bg-white/40">
        <div class="flex flex-col items-center h-[90%] w-[20%] p-4 bg-black/20">
            <img src="../assets/avatar.svg" alt="" class="w-[140px]">
            <p class="font-bold text-white p-2 my-1 bg-indigo-400 rounded-3xl border-2 border-white/50">Username</p>
            <div class="flex flex-col justify-around w-[70%] h-[50%]">
                <h3 class="underline cursor-pointer">User information</h3>
                <ul class="ml-4">
                    <li>Joined</li>
                    <li>Location</li>
                    <li>About</li>
                </ul>
                <h3 class="underline cursor-pointer">Settings</h3>
                <h3 class="underline cursor-pointer">Log out</h3>
            </div>
        </div>
        <div class="flex flex-col h-[90%] w-[50%] justify-around items-center text-center  py-4 bg-white/30">
            <div class="w-[90%] h-[30%] bg-indigo-500/20">
                <h2>Own Collections</h2>
                <div class="h-[80%] w-full flex gap-2 bg-white/60">
                    <img src="https://getuikit.com/v2/docs/images/placeholder_600x400.svg" alt="" class="w-[30%] h-full">
                    <img src="https://getuikit.com/v2/docs/images/placeholder_600x400.svg" alt="" class="w-[30%] h-full">
                    <img src="https://getuikit.com/v2/docs/images/placeholder_600x400.svg" alt="" class="w-[30%] h-full">
                    <img src="https://getuikit.com/v2/docs/images/placeholder_600x400.svg" alt="" class="w-[30%] h-full">
                </div>
            </div>
            <div class="w-[90%] h-[60%] bg-pink-300/40">
                <h2>Favorite Collections</h2>
                <div class="h-[40%] w-full flex bg-white/60">
                    <img src="https://getuikit.com/v2/docs/images/placeholder_600x400.svg" alt="" class="w-[30%] h-full">
                    <img src="https://getuikit.com/v2/docs/images/placeholder_600x400.svg" alt="" class="w-[30%] h-full">
                    <img src="https://getuikit.com/v2/docs/images/placeholder_600x400.svg" alt="" class="w-[30%] h-full">
                    <img src="https://getuikit.com/v2/docs/images/placeholder_600x400.svg" alt="" class="w-[30%] h-full">
                </div>
                <h2>Favorite articles</h2>
                <div class="h-[40%] w-full flex bg-white/60">
                    <img src="https://getuikit.com/v2/docs/images/placeholder_600x400.svg" alt="" class="w-[30%] h-full">
                    <img src="https://getuikit.com/v2/docs/images/placeholder_600x400.svg" alt="" class="w-[30%] h-full">
                    <img src="https://getuikit.com/v2/docs/images/placeholder_600x400.svg" alt="" class="w-[30%] h-full">
                    <img src="https://getuikit.com/v2/docs/images/placeholder_600x400.svg" alt="" class="w-[30%] h-full">
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'Profile',
    }
</script>