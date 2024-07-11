<template>
    <div class="flex w-full h-[77vh] bg-white/30">
        <div class="w-[26%] h-[80%] lg:h-[68%] bg-black/50 m-auto py-[2%] px-[3%] rounded-md text-white">
            <div class="flex justify-between h-[12%] font-bold">
                <button class="py-1 px-[1.25rem] bg-white/20">LOGIN</button>
                <button class="py-1 px-[1.25rem] bg-white/20">NEW MEMBER</button>
            </div>
            <form action="" class="flex flex-col h-[90%] py-4">
                <input type="text" placeholder="Username" required
                class="h-[12%] min-h-[28px] pl-2 my-[2%] rounded-sm">
                <input type="email" placeholder="Email" required class="h-[12%] min-h-[28px] pl-2 my-[2%] rounded-sm">
                <input type="password" placeholder="Password" required class="h-[12%] min-h-[28px] pl-2 my-[2%] rounded-sm">
                <input type="password" placeholder="Confirm password" required class="h-[12%] min-h-[28px] pl-2 my-[2%] rounded-sm">

                <label class="flex">
                    <input type="checkbox" required> 
                    <p class="ml-2">I accept the <span class="underline">terms and conditions</span> </p>
                </label>
                <div class="h-[14%] w-full my-auto">
                    <button class="h-full w-full font-bold bg-white/20 mb-[0.25rem]">REGISTER</button>
                </div>

            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Register",
    }
</script>