<template>
    <div class="flex w-full h-[77vh] bg-white/30">
        <div class="w-[30%] h-[80%] bg-black/50 m-auto py-6 px-10 rounded-md text-white">
            <div class="flex justify-between bg-white/20">
                <button class="py-1 px-4">LOGIN</button>
                <button class="py-1 px-4">NEW MEMBER</button>
            </div>
            <form action="" class="flex flex-col justify-around h-[90%] py-4">
                <input type="email" placeholder="Email" required>
                <input type="password" placeholder="Password" required>
                <label class="flex">
                    <input type="checkbox" required> 
                    <p class="ml-2">Keep me logged in</p>
                </label>
                <button class="bg-white/20">LOGIN</button>
                <p class="">Forgot your password?</p>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "LogIn",
    }
</script>