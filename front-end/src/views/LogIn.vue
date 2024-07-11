<template>
    <div class="flex w-full h-[77vh] bg-white/30">
        <div class="w-[26%] h-[72%] lg:h-[60%] bg-black/50 m-auto py-[2%] px-[3%] rounded-md text-white">
            <div class="flex justify-between h-[12%] max-h-[48px] font-bold">
                <button class="py-1 px-[1.25rem] bg-white/20">LOGIN</button>
                <router-link to="/register" class="py-1 px-[1.25rem] bg-white/20 flex items-center justify-center">
                    NEW MEMBER
                </router-link>
            </div>

            <form action="" class="flex flex-col h-[90%] py-4">
                <input type="email" placeholder="Email" required
                class="h-[12%] min-h-[30px] pl-2 my-[6%]">
                <input type="password" placeholder="Password" required class="h-[12%] min-h-[30px] pl-2 my-[2%]">
                <label class="flex">
                    <input type="checkbox" required> 
                    <p class="ml-2">Keep me logged in</p>
                </label>
                <div class="h-[22%] w-full my-auto">
                    <button class="h-[80%] w-full font-bold bg-white/20 mb-[0.25rem]">LOGIN</button>
                    <p class="">Forgot your password?</p>
                </div>

            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "LogIn",
    }
</script>